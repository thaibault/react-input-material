// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module helper */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import {NullSymbol, UndefinedSymbol} from 'clientnode/property-types'
import {FirstParameter, Mapping, ValueOf} from 'clientnode/type'
import {ReactNode, useMemo, useState} from 'react'
import {SelectProps} from '@rmwc/select'

import {
    BaseModel,
    BaseProperties,
    BaseProps,
    DataTransformSpecification,
    DefaultBaseProperties,
    DefaultInputProperties,
    FormatSpecifications,
    InputDataTransformation,
    ModelState,
    NormalizedSelection,
    Transformer,
    ValueState
} from './type'
// endregion
// region state
/**
 * Creates a mocked a state setter. Useful to dynamically convert a component
 * from uncontrolled to controlled.
 * @param value - Parameter for state setter.
 *
 * @returns Nothing.
 */
export const createDummyStateSetter =
    <Type = unknown>(value:Type):ReturnType<typeof useState>[1] =>
        (
            callbackOrData:FirstParameter<ReturnType<typeof useState>[1]>
        ):void => {
            if (typeof callbackOrData === 'function')
                callbackOrData(value)
        }
/**
 * Consolidates properties not found in properties but in state into
 * properties.
 * @param properties - To consolidate.
 * @param state - To search values in.
 *
 * @returns Consolidated properties.
 */
export const deriveMissingPropertiesFromState = <
    Properties extends BaseProps = BaseProps,
    State extends ValueState = ValueState
>(properties:Properties, state:State):Properties => {
    /*
        NOTE: Avoid writing into mutable model object properties. So project
        value to properties directly.
    */
    if (
        properties.model!.value !== undefined && properties.value === undefined
    )
        properties.value = properties.model!.value
    if (properties.value === undefined)
        properties.value = state.value

    if (properties.model!.state)
        properties.model!.state = {...properties.model!.state}
    else
        properties.model!.state = {} as ModelState

    for (const [key, value] of Object.entries(state.modelState))
        if ((
            properties.model!.state as Partial<ModelState>
        )[key as keyof ModelState] === undefined)
            properties.model!.state[key as keyof ModelState] =
                value as ValueOf<ModelState>

    return properties
}
/**
 * Creates a hybrid a state setter wich only triggers when model state changes
 * occur. Useful to dynamically convert a component from uncontrolled to
 * controlled while model state should be uncontrolled either.
 * @param setValueState - Value setter to wrap.
 * @param currentValueState - Last known value state to provide to setter when
 * called.
 *
 * @returns Wrapped given method.
 */
export const wrapStateSetter = <Type = unknown>(
    setValueState:(_value:Type|((_value:Type) => Type)) => void,
    currentValueState:Type
):ReturnType<typeof useState>[1] =>
        (
            callbackOrData:FirstParameter<ReturnType<typeof useState>[1]>
        ):void => {
            const result:Type = (typeof callbackOrData === 'function' ?
                callbackOrData(currentValueState) :
                callbackOrData
            ) as Type

            if (!Tools.equals(
                (result as unknown as {modelState:unknown})?.modelState,
                (
                    currentValueState as unknown as {modelState:unknown}
                )?.modelState
            ))
                setValueState(result)
        }
// endregion
/**
 * Triggered when a value state changes like validation or focusing.
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param synchronous - Indicates whether to trigger callback immediately or
 * later. Controlled components should call synchronously and uncontrolled
 * otherwise as long as callbacks are called in a state setter context.
 * @param parameters - Additional arguments to forward to callback.
 *
 * @returns Nothing.
 */
export const triggerCallbackIfExists =
    <P extends Omit<BaseProperties, 'model'> & {model:unknown}>(
        properties:P,
        name:string,
        synchronous = true,
        ...parameters:Array<unknown>
    ):void => {
        name = `on${Tools.stringCapitalize(name)}`

        if (properties[name as keyof P])
            if (synchronous)
                (properties[name as keyof P] as
                    unknown as
                    (..._parameters:Array<unknown>) => void
                )(...parameters)
            else
                void Tools.timeout(() =>
                    (properties[name as keyof P] as
                        unknown as
                        (..._parameters:Array<unknown>) => void
                    )(...parameters)
                )
    }
// region consolidation state
/**
 * Translate known symbols in a copied and return properties object.
 * @param properties - Object to translate.
 *
 * @returns Transformed properties.
 */
export const translateKnownSymbols = <Type = unknown>(
    properties:Mapping<typeof NullSymbol|Type|typeof UndefinedSymbol>
):Mapping<Type> => {
    const result:Mapping<Type> = {}
    for (const [name, value] of Object.entries(properties))
        if (value === UndefinedSymbol)
            (result[name] as unknown as undefined) = undefined
        else if (value === NullSymbol)
            (result[name] as unknown as null) = null
        else
            result[name] = Tools.copy(properties[name] as Type)

    return result
}
/**
 * Determines initial value representation as string.
 * @param properties - Components properties.
 * @param defaultProperties - Components default properties.
 * @param value - Current value to represent.
 * @param transformer - To apply to given value.
 * @param selection - Data mapping of allowed values.
 *
 * @returns Determined initial representation.
 */
export function determineInitialRepresentation<
    T = unknown,
    P extends DefaultInputProperties<T> = DefaultInputProperties<T>
>(
    properties:P,
    defaultProperties:P,
    value:null|T,
    transformer:InputDataTransformation,
    selection?:NormalizedSelection
):string {
    if (typeof properties.representation === 'string')
        return properties.representation

    if (value !== null) {
        const candidate:null|string =
            getRepresentationFromValueSelection(value, selection)

        if (typeof candidate === 'string')
            return candidate

        return formatValue<T, P & {type:string}>(
            {
                ...properties,
                type: (
                    properties.type ||
                    properties.model?.type ||
                    defaultProperties.model.type
                )
            },
            value,
            transformer
        )
    }

    return ''
}
/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @param defaultValue - Internal fallback value.
 * @param alternateValue - Alternate value to respect.
 *
 * @returns Determined value.
 */
export const determineInitialValue = <Type = unknown>(
    properties:BaseProps,
    defaultValue?:null|Type,
    alternateValue?:null|Type
):null|Type => {
    if (alternateValue !== undefined)
        return alternateValue

    if (properties.value !== undefined)
        return properties.value as null|Type

    if (properties.model?.value !== undefined)
        return properties.model.value as null|Type

    if (properties.initialValue !== undefined)
        return Tools.copy(properties.initialValue as null|Type)

    if (properties.default !== undefined)
        return Tools.copy(properties.default as null|Type)

    if (properties.model?.default !== undefined)
        return Tools.copy(properties.model.default as null|Type)

    if (defaultValue !== undefined)
        return defaultValue

    return null
}
/**
 * Derives current validation state from given value.
 * @param properties - Input configuration.
 * @param currentState - Current validation state.
 * @param validators - Mapping from validation state key to corresponding
 * validator function.
 *
 * @returns A boolean indicating if validation state has changed.
 */
export const determineValidationState =
    <
        P extends DefaultBaseProperties = DefaultBaseProperties,
        MS extends Partial<ModelState> = Partial<ModelState>
    >(
        properties:P, currentState:MS, validators:Mapping<() => boolean> = {}
    ):boolean => {
        let changed = false

        validators = {
            invalidRequired: ():boolean => (
                properties.model.nullable === false &&
                (
                    properties.model.type !== 'boolean' &&
                    !properties.model.value &&
                    properties.model.value !== 0
                ) ||
                (
                    properties.model.type === 'boolean' &&
                    !(
                        typeof properties.model.value === 'boolean' ||
                        ['false', 'true'].includes(
                            properties.model.value as string
                        )
                    )
                )
            ),
            ...validators
        }

        properties.model.state = properties.model.state || {} as MS
        for (const [name, validator] of Object.entries(validators)) {
            const oldValue:boolean|undefined =
                currentState[name as keyof ModelState]

            properties.model.state[name as keyof ModelState] = validator()

            changed =
                changed || oldValue !== currentState[name as keyof ModelState]
        }

        if (changed) {
            properties.model.state.invalid =
                Object.keys(validators).some((name:string):boolean =>
                    properties.model.state[name as keyof ModelState]
                )
            properties.model.state.valid = !properties.model.state.invalid
        }

        return changed
    }
/**
 * Synchronizes property, state and model configuration:
 * Properties overwrites default properties which overwrites default model
 * properties.
 * @param properties - Properties to merge.
 * @param defaultModel - Default model to merge.
 *
 * @returns Merged properties.
*/
export const mapPropertiesIntoModel = <
    P extends BaseProps = BaseProps,
    DP extends DefaultBaseProperties = DefaultBaseProperties
>(properties:P, defaultModel:DP['model']):DP => {
    /*
        NOTE: Default props seems not to respect nested layers to merge so we
        have to manage this for nested model structure.
    */
    const result:DP = Tools.extend<DP>(
        true,
        {model: Tools.copy<DP['model']>(defaultModel)} as DP,
        properties as DP
    )
    // region handle  aliases
    if (result.disabled) {
        result.model.mutable = false
        delete result.disabled
    }
    if (result.invertedPattern) {
        result.model.invertedRegularExpressionPattern = result.invertedPattern
        delete result.invertedPattern
    }
    if (result.pattern) {
        result.model.regularExpressionPattern = result.pattern
        delete result.pattern
    }
    if (result.required) {
        result.model.nullable = false
        delete result.required
    }
    if (result.type === 'text')
        result.type = 'string'
    // endregion
    // region map properties into model
    // Map first level properties
    for (const name of Object.keys(result.model).concat('value'))
        if (
            Object.prototype.hasOwnProperty.call(result, name) &&
            result[name as keyof DP] !== undefined
        )
            (result.model[name as keyof BaseModel] as ValueOf<DP['model']>) =
                result[name as keyof DP] as unknown as ValueOf<DP['model']>

    // Map property state into model state
    for (const name in result.model.state)
        if (
            Object.prototype.hasOwnProperty.call(result, name) &&
            result[name as keyof ModelState] !== undefined
        )
            result.model.state[name as keyof ModelState] =
                result[name as keyof DP] as unknown as ValueOf<ModelState>

    if (result.model.value === undefined)
        result.model.value = Tools.copy(result.model.default)
    // else -> Controlled component via model's "value" property.
    // endregion
    return result
}
/**
 * Calculate external properties (a set of all configurable properties).
 * @param properties - Properties to merge.
 *
 * @returns External properties object.
 */
export const getConsolidatedProperties = <
    P extends BaseProps, R extends BaseProperties
>(properties:P):R => {
    const result:R & Partial<R['model']> = ({
        ...properties,
        ...(properties.model || {}),
        ...((properties.model || {}).state || {})
    }) as unknown as R & Partial<R['model']>
    // region handle aliases
    result.disabled = !(result.mutable && result.writable)
    delete result.mutable
    delete result.writable

    delete result.state

    result.required = !result.nullable
    delete result.nullable

    if (result.invertedRegularExpressionPattern)
        result.invertedPattern = result.invertedRegularExpressionPattern
    // NOTE: Workaround since optional type configuration above is ignored.
    delete (result as {invertedRegularExpressionPattern?:RegExp|string})
        .invertedRegularExpressionPattern
    if (result.regularExpressionPattern)
        result.pattern = result.regularExpressionPattern
    // NOTE: Workaround since optional type configuration above is ignored.
    delete (result as {regularExpressionPattern?:RegExp|string})
        .regularExpressionPattern
    // endregion
    return result
}
// endregion
// region value transformer
/// region selection
/**
 * Determine normalized labels and values for selection and auto-complete
 * components.
 * @param selection - Selection component property configuration.
 *
 * @returns Normalized sorted listed of labels and values.
 */
export function getLabelAndValues(selection?:NormalizedSelection):[
    Array<ReactNode|string>, Array<unknown>
] {
    if (Array.isArray(selection)) {
        const labels:Array<string> = []
        const values:Array<unknown> = []

        for (const value of selection)
            if (typeof (value as {label:string})?.label === 'string') {
                labels.push((value as {label:string}).label)
                values.push((value as {value:unknown}).value)
            }

        return [labels, values]
    }

    return [[], []]
}
/**
 * Determine representation for given value while respecting existing labels.
 * @param value - To represent.
 * @param selection - Selection component property configuration.
 *
 * @returns Determined representation.
 */
export function getRepresentationFromValueSelection(
    value:unknown, selection?:NormalizedSelection
):null|string {
    if (selection)
        for (const option of selection)
            if (Tools.equals((option as {value:unknown})?.value, value))
                return (
                    (option as {label:string}).label || `${value as string}`
                )

    return null
}
/**
 * Determine value from provided representation (for example user inputs).
 * @param label - To search a value for.
 * @param selection - Selection component property configuration.
 *
 * @returns Determined value.
 */
export function getValueFromSelection<T>(
    label:ReactNode|string, selection:NormalizedSelection
):null|T {
    if (Array.isArray(selection))
        for (const value of selection) {
            if (
                typeof (value as {label:string})?.label === 'string' &&
                (value as {label:string}).label === label
            )
                return (value as unknown as {value:T}).value

            if (
                ['number', 'string'].includes(
                    typeof (value as {value:string})?.value
                ) &&
                `${(value as {value:string}).value}` === label
            )
                return (value as unknown as {value:T}).value
        }

    return null
}
/**
 * Normalize given selection. NOTE: It is important to have an ordered list
 * to map values to labels and the other way around in a deterministic way.
 * @param selection - Selection component property configuration.
 * @param labels - Additional labels to take into account (for example provided
 * via a content management system).
 *
 * @returns Determined normalized sorted selection configuration.
 */
export function normalizeSelection(
    selection?:(
        Array<[string, string]>|NormalizedSelection|SelectProps['options']
    ),
    labels?:Array<[string, string]>|Array<string>|Mapping
):NormalizedSelection|undefined {
    if (!selection) {
        selection = labels
        labels = undefined
    }

    const hasLabels:boolean = labels !== null && typeof labels === 'object'

    const getLabel = (value:string, index:number):null|string => {
        if (hasLabels)
            if (Array.isArray(labels)) {
                if (labels.length)
                    if (Array.isArray(labels[0])) {
                        for (const [labelValue, label] of labels)
                            if (labelValue === value)
                                return label
                    } else if (index < labels.length)
                        return labels[index]
            } else if (Object.prototype.hasOwnProperty.call(labels, value))
                return (labels as Mapping)[value]
            // Map boolean values to their string representation.
            else if (value === true && (labels as {true:string}).true)
                return (labels as {true:string}).true
            else if (value === false && (labels as {false:string}).false)
                return (labels as {false:string}).false

        return null
    }

    let selectionIsOrdered = false
    // region normalize options configuration
    if (selection)
        if (Array.isArray(selection)) {
            selectionIsOrdered = true

            if (selection.length) {
                const result:NormalizedSelection = []
                let index = 0
                if (Array.isArray(selection[0]))
                    for (
                        const [value, label] of selection as
                            Array<[string, string]>
                    ) {
                        result.push({
                            label: getLabel(value, index) ?? label,
                            value
                        })

                        index += 1
                    }
                else if (
                    selection[0] !== null && typeof selection[0] === 'object'
                )
                    for (const option of selection as NormalizedSelection) {
                        result.push({
                            ...option,
                            label:
                                getLabel(option.value, index) ?? option.label
                        })

                        index += 1
                    }
                else
                    for (const value of selection as Array<string>) {
                        result.push({
                            label: getLabel(value, index) ?? value,
                            value
                        })

                        index += 1
                    }

                selection = result
            }
        } else {
            const result:NormalizedSelection = []
            for (const value of Object.keys(selection as Mapping<unknown>))
                result.push({
                    label: getLabel(value) ?? (selection as Mapping)[value],
                    value
                })

            selection = result
        }
    // endregion
    // region arrange with given ordering
    if (Array.isArray(labels) && labels.length && Array.isArray(labels[0])) {
        // Respect ordering given by labels.
        const labelMapping:Map<string, number> = new Map<string, number>()
        let index = 0
        for (const [value] of labels) {
            labelMapping.set(value, index)

            index += 1
        }

        selection = selection.sort(
            ({value: first}, {value: second}):number =>
                labelMapping.get(first) - labelMapping.get(second)
        )
    } else (!selectionIsOrdered)
        // Sort alphabetically.
        selection = selection.sort(
            ({value: first}, {value: second}):number =>
                first.localeCompare(second)
        )
    // endregion

    return selection as NormalizedSelection|undefined
}
/// endregion
/**
 * Applies configured value transformations.
 * @param configuration - Input configuration.
 * @param value - Value to transform.
 * @param transformer - To apply to given value.
 *
 * @returns Transformed value.
 */
export const parseValue =
    <
        T = unknown,
        P extends DefaultInputProperties<T> = DefaultInputProperties<T>,
        InputType = T
    >(
        configuration:P,
        value:null|InputType,
        transformer:InputDataTransformation
    ):null|T => {
        if (configuration.model.trim && typeof value === 'string')
            (value as string) = value.trim().replace(/ +\n/g, '\\n')

        if (
            configuration.model.emptyEqualsNull &&
            value as unknown as string === ''
        )
            return null

        let result:null|T = value as unknown as null|T
        if (
            ![null, undefined].includes(value as null) &&
            transformer[
                configuration.model.type as keyof InputDataTransformation
            ]?.parse
        )
            result = (
                transformer[
                    configuration.model.type as keyof InputDataTransformation
                ]!.parse as
                    unknown as
                    DataTransformSpecification<T, InputType>['parse']
            )!(value as InputType, configuration, transformer)

        if (typeof result === 'number' && isNaN(result))
            return null

        return result
    }
/**
 * Represents configured value as string.
 * @param configuration - Input configuration.
 * @param value - To represent.
 * @param transformerMapping - To apply to given value.
 * @param final - Specifies whether it is a final representation.
 *
 * @returns Transformed value.
 */
export function formatValue<
    T = unknown,
    P extends DefaultInputProperties<T> = DefaultInputProperties<T>
>(
    configuration:P,
    value:null|T,
    transformerMapping:InputDataTransformation,
    final = true
):string {
    const methodName:'final'|'intermediate' = final ? 'final' : 'intermediate'

    if (
        [null, undefined].includes(value as null) ||
        typeof value === 'number' && isNaN(value)
    )
        return ''

    const format:FormatSpecifications<T>|undefined = transformerMapping[
        (configuration.type || configuration.model.type) as
            keyof InputDataTransformation
    ]?.format as FormatSpecifications<T>|undefined
    if (format) {
        const transformer:Transformer<T>|undefined =
            format[methodName]?.transform || format.final?.transform

        if (transformer)
            return transformer(value as T, configuration, transformerMapping)
    }

    return String(value)
}
// endregion
// region hooks
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 *
 * @returns Given cached value.
 */
export const useMemorizedValue = <T = unknown>(
    value:T, ...dependencies:Array<unknown>
):T => useMemo(():T => value, dependencies)
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
