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
import {
    capitalize,
    copy,
    equals,
    evaluate,
    EvaluationResult,
    extend,
    FirstParameter,
    isFunction,
    isObject,
    Mapping,
    PositiveEvaluationResult,
    timeout,
    ValueOf
} from 'clientnode'
import {NullSymbol, UndefinedSymbol} from 'clientnode/dist/property-types'

import {ReactNode, useState} from 'react'

import {
    BaseModel,
    BaseProperties,
    BaseProps,
    DefaultBaseProperties,
    DefaultProperties,
    ModelState,
    TypeSpecification,
    ValueState
} from './type'
import {DateTimeRepresentation} from './components/Interval/type'
import TextInput from './components/TextInput'
import {
    DataTransformSpecification as TextInputDataTransformSpecification,
    DefaultProperties as TextInputDefaultProperties,
    FormatSpecifications as TextInputFormatSpecifications,
    DataTransformation as TextInputDataTransformation,
    Props as TextInputProps,
    Selection as TextInputSelection,
    NormalizedSelection as TextInputNormalizedSelection,
    Transformer as TextInputTransformer
} from './components/TextInput/type'
// endregion
// region state
/**
 * Removes all none serializable values from given data structure.
 * @param object - Mapping of values to slice.
 */
export const slicePropertiesForState = (object: Mapping) => {
    /*
       NOTE: Nested "representations" shouldn't be controlled usually since
       complex inter input dependencies won't be resolved from the outside.
    */
    for (const name of ['ref', 'representation'])
        delete object[name]
    for (const [name, value] of Object.entries(object))
        if (isFunction(value))
            delete object[name]
}
/**
 * Removes all none serializable values from given data structure recursively.
 * @param properties - Mapping of values to slice.
 * @returns Nothing.
 */
export const slicePropertiesForStateRecursively = (properties: unknown) => {
    if (properties === null || typeof properties !== 'object')
        return

    slicePropertiesForState(properties as Mapping)

    for (const value of Object.values(properties))
        if (isObject(value))
            if (Array.isArray(value))
                for (const subValue of value as Array<unknown>)
                    slicePropertiesForStateRecursively(subValue)
            else
                slicePropertiesForStateRecursively(value)

    return copy(properties)
}
/**
 * Creates a mocked a state setter. Useful to dynamically convert a component
 * from uncontrolled to controlled one.
 * @param value - Parameter for state setter.
 * @returns Resulting value of the "useState" hook.
 */
export const createDummyStateSetter =
    <Type = unknown>(value: Type): ReturnType<typeof useState>[1] =>
        (
            callbackOrData: FirstParameter<ReturnType<typeof useState>[1]>
        ) => {
            if (typeof callbackOrData === 'function')
                (callbackOrData as (value: unknown) => void)(value)
        }
/**
 * Consolidates properties not found in properties but in state into
 * properties.
 * @param properties - To consolidate.
 * @param state - To search values in.
 * @returns Consolidated properties.
 */
export const deriveMissingPropertiesFromState = <
    Properties extends BaseProps = BaseProps,
    State extends ValueState = ValueState
>(properties: Properties, state: State): Properties => {
    /*
        NOTE: Avoid writing into mutable model object properties. So project
        value to properties directly.
    */
    if (
        properties.model &&
        properties.model.value !== undefined &&
        properties.value === undefined
    )
        properties.value = properties.model.value
    if (properties.value === undefined)
        properties.value = state.value

    if (properties.model)
        if (properties.model.state)
            properties.model.state = {...properties.model.state}
        else
            properties.model.state = {} as ModelState

    for (const [key, value] of Object.entries(state.modelState))
        if (
            properties.model?.state &&
            properties.model.state[key as keyof ModelState] === undefined
        )
            properties.model.state[key as keyof ModelState] =
                value as ValueOf<ModelState>

    return properties
}
/**
 * Creates a hybrid a state setter which only triggers when model state changes
 * occur. Useful to dynamically convert a component from uncontrolled to
 * controlled while model state should be uncontrolled either.
 * @param setValueState - Value setter to wrap.
 * @param currentValueState - Last known value state to provide to setter when
 * called.
 * @returns Wrapped given method.
 */
export const wrapStateSetter = <Type = unknown>(
    setValueState: (value: Type | ((value: Type) => Type)) => void,
    currentValueState: Type
): ReturnType<typeof useState>[1] =>
        (callbackOrData: FirstParameter<ReturnType<typeof useState>[1]>) => {
            const result: Type = (typeof callbackOrData === 'function' ?
                (
                    callbackOrData as (value: unknown) => Type
                )(currentValueState) :
                callbackOrData
            ) as Type

            if (!equals(
                (
                    result as unknown as {modelState: unknown} | undefined
                )?.modelState,
                (
                    currentValueState as
                        unknown as
                        {modelState: unknown} | undefined
                )?.modelState
            ))
                setValueState(result)
        }
// endregion
/**
 * Renders given template string against all properties in current
 * instance.
 * @param template - Template to render.
 * @param scope - Scope to render given template again.
 * @returns Evaluated template or an empty string if something goes wrong.
 */
export const renderMessage = <Scope extends object = object>(
    template: unknown, scope: Scope
): string => {
    if (typeof template !== 'string')
        return ''

    const evaluated: EvaluationResult = evaluate<string, Scope>(
        `\`${template}\``, scope
    )

    if (evaluated.error) {
        console.warn(
            'Given message template could not be proceed:',
            evaluated.error
        )

        return ''
    }

    return (evaluated as PositiveEvaluationResult).result
}
/**
 * Triggered when a value state changes like validation or focusing.
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param synchronous - Indicates whether to trigger callback immediately or
 * later. Controlled components should call synchronously and uncontrolled
 * otherwise as long as callbacks are called in a state setter context.
 * @param parameters - Additional arguments to forward to callback.
 */
export const triggerCallbackIfExists =
    <P extends Omit<BaseProperties, 'model'> & {model: unknown}>(
        properties: P,
        name: string,
        synchronous = true,
        ...parameters: Array<unknown>
    ): void => {
        name = `on${capitalize(name)}`

        if (properties[name as keyof P])
            if (synchronous)
                (properties[name as keyof P] as
                    unknown as
                    (...parameters: Array<unknown>) => void
                )(...parameters)
            else
                void timeout(() => {
                    (properties[name as keyof P] as
                        unknown as
                        (...parameters: Array<unknown>) => void
                    )(...parameters)
                })
    }
// region consolidation state
/**
 * Translate known symbols in a copied and return properties object.
 * @param properties - Object to translate.
 * @returns Transformed properties.
 */
export const translateKnownSymbols = <Type = unknown>(
    properties: Mapping<typeof NullSymbol | Type | typeof UndefinedSymbol>
): Mapping<Type> => {
    const result: Mapping<Type> = {}
    for (const [name, value] of Object.entries(properties))
        if (value === UndefinedSymbol)
            (result[name] as unknown as undefined) = undefined
        else if (value === NullSymbol)
            (result[name] as unknown as null) = null
        else
            result[name] = copy(properties[name] as Type)

    return result
}
/**
 * Determines initial value representation as string.
 * @param properties - Components properties.
 * @param defaultProperties - Components default properties.
 * @param value - Current value to represent.
 * @param transformer - To apply to given value.
 * @param selection - Data mapping of allowed values.
 * @returns Determined initial representation.
 */
export function determineInitialRepresentation<
    T = unknown,
    P extends TextInputProps<T> = TextInputProps<T>,
    DP extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>
>(
    properties: P,
    defaultProperties: DP,
    value: null | T,
    transformer: TextInputDataTransformation,
    selection?: TextInputNormalizedSelection | null
): string {
    if (typeof properties.representation === 'string')
        return properties.representation

    if (value !== null) {
        const candidate: null | string =
            getRepresentationFromValueSelection(value, selection)

        if (typeof candidate === 'string')
            return candidate

        return formatValue<T, DP & {type: TypeSpecification}>(
            {
                ...properties,
                type: (
                    properties.type ||
                    properties.model?.type ||
                    defaultProperties.model.type
                )
            } as unknown as DP & {type: TypeSpecification},
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
 * @returns Determined value.
 */
export const determineInitialValue = <Type = unknown>(
    properties: BaseProps,
    defaultValue?: Type,
    alternateValue?: Type
): null | Type => {
    if (alternateValue !== undefined)
        return alternateValue

    if (properties.value !== undefined)
        return properties.value as Type

    if (properties.model?.value !== undefined)
        return properties.model.value as Type

    if (properties.initialValue !== undefined)
        return copy(properties.initialValue as Type)

    if (properties.default !== undefined)
        return copy(properties.default as Type)

    if (properties.model?.default !== undefined)
        return copy(properties.model.default as Type)

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
 * @returns A boolean indicating if validation state has changed.
 */
export const determineValidationState =
    <
        Type = unknown,
        P extends DefaultProperties<Type> = DefaultProperties<Type>,
        MS extends Partial<ModelState> = Partial<ModelState>
    >(
        properties: P, currentState: MS, validators: Mapping<() => boolean> = {}
    ): boolean => {
        let changed = false

        validators = {
            invalidRequired: (): boolean => (
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

        if (!properties.model.state)
            properties.model.state = {} as ModelState

        for (const [name, validator] of Object.entries(validators)) {
            const oldValue: boolean | undefined =
                currentState[name as keyof ModelState]

            properties.model.state[name as keyof ModelState] = validator()

            changed =
                changed || oldValue !== currentState[name as keyof ModelState]
        }

        if (changed) {
            properties.model.state.invalid =
                Object.keys(validators).some((name: string): boolean =>
                    Boolean(
                        properties.model.state &&
                        properties.model.state[name as keyof ModelState]
                    )
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
 * @returns Merged properties.
 */
export const mapPropertiesIntoModel = <
    P extends BaseProps = BaseProps,
    DP extends DefaultBaseProperties = DefaultBaseProperties
>(properties: P, defaultModel: DP['model']): DP => {
    /*
        NOTE: Default props seems not to respect nested layers to merge, so we
        have to manage this for nested model structure.
    */
    const result: DP = extend<DP>(
        true,
        {model: copy<DP['model']>(defaultModel)} as DP,
        properties as unknown as DP
    )
    // region handle aliases
    if (result.disabled) {
        result.model.mutable = false
        delete result.disabled
    }
    if ((result as unknown as TextInputDefaultProperties).invertedPattern) {
        result.model.invertedPattern =
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            (result as unknown as TextInputDefaultProperties).invertedPattern!
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
        delete (result as unknown as TextInputDefaultProperties).invertedPattern
    }
    if ((result as unknown as TextInputDefaultProperties).pattern) {
        result.model.pattern =
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            (result as unknown as TextInputDefaultProperties).pattern!
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
        delete (result as unknown as TextInputDefaultProperties).pattern
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
        result.model.value = copy(result.model.default)
    // else -> Controlled component via model's "value" property.
    // endregion
    return result
}
/**
 * Calculate external properties (a set of all configurable properties).
 * @param properties - Properties to merge.
 * @returns External properties object.
 */
export const getConsolidatedProperties = <
    P extends BaseProps, R extends BaseProperties
>(properties: P): R => {
    const result: R & Partial<R['model']> = ({
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
 * @returns Normalized sorted listed of labels and values.
 */
export function getLabelAndValues(
    selection?: TextInputNormalizedSelection | null
): [Array<ReactNode | string>, Array<unknown>] {
    if (Array.isArray(selection)) {
        const labels: Array<string> = []
        const values: Array<unknown> = []

        for (const value of selection)
            if (
                typeof (value as {label?: string} | undefined)?.label ===
                    'string'
            ) {
                labels.push((value as {label: string}).label)
                values.push((value as {value: unknown}).value)
            }

        return [labels, values]
    }

    return [[], []]
}
/**
 * Determine representation for given value while respecting existing labels.
 * @param value - To represent.
 * @param selection - Selection component property configuration.
 * @returns Determined representation.
 */
export function getRepresentationFromValueSelection(
    value: unknown, selection?: TextInputNormalizedSelection | null
): null | string {
    if (selection)
        for (const option of selection)
            if (equals((option as {value: unknown} | undefined)?.value, value))
                return (
                    (option as {label: string}).label || String(value)
                )

    return null
}
/**
 * Determine value from provided representation (for example user inputs).
 * @param label - To search a value for.
 * @param selection - Selection component property configuration.
 * @returns Determined value.
 */
export function getValueFromSelection<T>(
    label: ReactNode | string,
    selection: TextInputNormalizedSelection | null | undefined
): T {
    if (Array.isArray(selection))
        for (const value of selection) {
            if (
                typeof (value as {label?: null | string} | undefined)?.label ===
                    'string' &&
                (value as {label: string}).label === label
            )
                return (value as unknown as {value: T}).value

            if (
                ['number', 'string'].includes(
                    typeof (value as {value: string} | null)?.value
                ) &&
                String((value as {value: unknown}).value) === label
            )
                return (value as unknown as {value: T}).value
        }

    return null as T
}
/**
 * Normalize given selection. NOTE: It is important to have an ordered list
 * to map values to labels and the other way around in a deterministic way.
 * @param selection - Selection component property configuration.
 * @param labels - Additional labels to take into account (for example provided
 * via a content management system).
 * @returns Determined normalized sorted selection configuration.
 */
export function normalizeSelection(
    selection?: TextInputSelection | null,
    labels?: Array<[string, string]> | Array<string> | Mapping | null
): TextInputNormalizedSelection | null | undefined {
    if (!selection) {
        selection = labels
        labels = undefined
    }

    if (!selection)
        return selection

    const hasLabels: boolean = isObject(labels)

    const getLabel = <T = unknown>(value: T, index?: number): null | string => {
        if (hasLabels)
            if (Array.isArray(labels)) {
                if (labels.length)
                    if (Array.isArray(labels[0])) {
                        for (const [labelValue, label] of labels)
                            if ((labelValue as unknown as T) === value)
                                return label
                    } else if (
                        typeof index === 'number' && index < labels.length
                    )
                        return (labels as Array<string>)[index]
            // Map boolean values to their string representation.
            } else if (
                (value as unknown) === true && (labels as {true: string}).true
            )
                return (labels as {true: string}).true
            else if (
                (value as unknown) === false &&
                (labels as {false: string}).false
            )
                return (labels as {false: string}).false
            else if (
                typeof value === 'string' &&
                Object.prototype.hasOwnProperty.call(labels, value)
            )
                return (labels as Mapping)[value]

        return null
    }


    let selectionIsOrdered = false
    // region normalize options configuration
    if (Array.isArray(selection)) {
        selectionIsOrdered = true

        if (selection.length) {
            const result: TextInputNormalizedSelection = []
            let index = 0
            if (Array.isArray(selection[0]))
                for (
                    const [value, label] of selection as
                        Array<[string, string]>
                ) {
                    result.push({
                        label: getLabel(value, index) ?? label, value
                    })

                    index += 1
                }
            else if (isObject(selection[0]))
                for (
                    const option of selection as TextInputNormalizedSelection
                ) {
                    result.push({
                        ...option,
                        label: getLabel(option.value, index) ?? option.label
                    })

                    index += 1
                }
            else
                for (const value of selection as Array<string>) {
                    result.push({
                        label: getLabel(value, index) ?? value, value
                    })

                    index += 1
                }

            selection = result
        }
    } else {
        const result: TextInputNormalizedSelection = []
        for (const value of Object.keys(selection as Mapping<unknown>))
            result.push({
                label: getLabel(value) ?? (selection as Mapping)[value], value
            })

        selection = result
    }
    // endregion
    // region arrange with given ordering
    if (Array.isArray(labels) && labels.length && Array.isArray(labels[0])) {
        // Respect ordering given by labels.
        const labelMapping: Map<string, number> = new Map<string, number>()
        let index = 0
        for (const [value] of labels) {
            labelMapping.set(value, index)

            index += 1
        }

        selection = (selection as TextInputNormalizedSelection).sort(
            ({value: first}, {value: second}): number =>
                (labelMapping.get(first as string) ?? 0) -
                (labelMapping.get(second as string) ?? 0)
        )
    } else if (!selectionIsOrdered)
        // Sort alphabetically by labels.
        selection = (selection as TextInputNormalizedSelection).sort(
            ({label: first}, {label: second}): number =>
                (first as string).localeCompare(second as string)
        )
    // endregion

    return selection as TextInputNormalizedSelection | undefined
}
/// endregion
/**
 * Applies configured value transformations.
 * @param configuration - Input configuration.
 * @param value - Value to transform.
 * @param transformer - To apply to given value.
 * @param trim - Indicates whether to trim strings or not.
 * @returns Transformed value.
 */
export const parseValue =
    <
        T = unknown,
        P extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>,
        InputType = T
    >(
        configuration: P,
        value: InputType | undefined,
        transformer: TextInputDataTransformation,
        trim = false
    ): T => {
        if (trim && typeof value === 'string')
            value = value.trim().replace(/ +\n/g, '\\n') as InputType

        if (
            configuration.model.emptyEqualsNull &&
            value as unknown as string === ''
        )
            return null as T

        let result = value as unknown as T
        if (
            ![null, undefined].includes(value as null) &&
            transformer[
                configuration.model.type as keyof TextInputDataTransformation
            ]?.parse
        ) {
            const parser = (
                transformer[
                    configuration.model.type as
                        keyof TextInputDataTransformation
                ]?.parse as
                    unknown as
                    TextInputDataTransformSpecification<T, InputType>['parse']
            )
            result =
                parser && value ?
                    parser(value, transformer, configuration):
                    value as T
        }

        if (typeof result === 'number' && isNaN(result))
            return null as T

        return result
    }
/**
 * Represents configured value as string.
 * @param configuration - Input configuration.
 * @param value - To represent.
 * @param transformerMapping - To apply to given value.
 * @param final - Specifies whether it is a final representation.
 * @returns Transformed value.
 */
export function formatValue<
    T = unknown,
    P extends TextInputDefaultProperties<T> = TextInputDefaultProperties<T>
>(
    configuration: P,
    value: null | T,
    transformerMapping: TextInputDataTransformation,
    final = true
): string {
    const methodName = final ? 'final' : 'intermediate'

    if (
        [null, undefined].includes(value as null) ||
        typeof value === 'number' && isNaN(value)
    )
        return ''

    const format = transformerMapping[
        (configuration.type || configuration.model.type) as
            keyof TextInputDataTransformation
    ]?.format as TextInputFormatSpecifications<T> | undefined
    if (format) {
        const transformer: TextInputTransformer<T> | undefined =
            format[methodName]?.transform || format.final.transform

        if (transformer)
            return transformer(value as T, transformerMapping, configuration)
    }

    return String(value)
}
export const formatDateTimeAsConfigured = (
    value?: DateTimeRepresentation | Date | null
): DateTimeRepresentation | null | undefined => {
    if (TextInput.transformer.date.useISOString) {
        if (typeof value === 'number' && !isNaN(value) && isFinite(value))
            return new Date(value * 1000).toISOString()

        if (value instanceof Date)
            return value.toISOString()

        return value
    }

    if (typeof value === 'number')
        return value

    if (value instanceof Date)
        return value.getTime() / 1000

    if (typeof value === 'string')
        return new Date(value).getTime() / 1000

    return value
}
// endregion
