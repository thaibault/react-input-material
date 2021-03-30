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
import {Mapping, RecursivePartial, ValueOf} from 'clientnode/type'
import {ReactElement, useMemo} from 'react'
import {render as renderReact, unmountComponentAtNode} from 'react-dom'

import {
    DataTransformSpecification,
    DefaultProperties,
    FormatSpecification,
    InputDataTransformation,
    InputProperties,
    Model,
    ModelState,
    Properties,
    Props,
    TestEnvironment
} from './type'
// endregion
/**
 * Triggered when a value state changes like validation or focusing.
 *
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param synchronous - Indicates whether to trigger callback immediately or
 * later. Controlled components should call synchronously and uncontrolled
 * otherwise as long as callbacks are called in a state setter context.
 * @param parameters - Additional arguments to forward to callback.
 *
 * @returns Nothing.
 */
export const triggerCallbackIfExists = <Type = any>(
    properties:Properties<Type>,
    name:string,
    synchronous:boolean = true,
    ...parameters:Array<any>
):void => {
    name = `on${Tools.stringCapitalize(name)}`
    if (properties[name as keyof Properties<Type>])
        if (synchronous)
            (properties[name as keyof Properties<Type>] as Function)(
                ...parameters
            )
        else
            Tools.timeout(() =>
                (properties[name as keyof Properties<Type>] as Function)(
                    ...parameters
                )
            )
}
// region consolidation state
/**
 * Translate known symbols in a copied and return properties object.
 * @param properties - Object to translate.
 * @returns Transformed properties.
 */
export const translateKnownSymbols = <Type = any>(
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
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @param defaultValue - Internal fallback value.
 * @param alternateValue - Alternate value to respect.
 * @returns Determined value.
 */
export const determineInitialValue = <Type = any>(
    properties:Props<Type>, defaultValue?:null|Type, alternateValue?:null|Type
):null|Type => {
    if (alternateValue !== undefined)
        return alternateValue as null|Type
    if (properties.value !== undefined)
        return properties.value as null|Type
    if (properties.model?.value !== undefined)
        return properties.model!.value as null|Type
    if (properties.initialValue !== undefined)
        return properties.initialValue as null|Type
    if (properties.default !== undefined)
        return properties.default as null|Type
    if (properties.model?.default !== undefined)
        return properties.model!.default as null|Type
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
export const determineValidationState = <P extends Properties<any>>(
    properties:P,
    currentState:P['model']['state'],
    validators:Mapping<() => boolean> = {}
):boolean => {
    let changed:boolean = false

    validators = {
        invalidRequired: ():boolean => (
            properties.model.nullable === false &&
            (
                properties.model.type !== 'boolean' &&
                !properties.model.value
            ) ||
            (
                properties.model.type === 'boolean' &&
                !(
                    typeof properties.model.value === 'boolean' ||
                    ['false', 'true'].includes(properties.model.value)
                )
            )
        ),
        ...validators
    }
    for (const [name, validator] of Object.entries(validators)) {
        const oldValue:boolean = currentState[name as keyof ModelState]
        properties.model.state[name as keyof ModelState] = validator()
        changed =
            changed ||
            oldValue !== currentState[name as keyof ModelState]
    }

    if (changed) {
        properties.model.state.invalid = Object.keys(validators).some((
            name:string
        ):boolean => properties.model.state[name as keyof ModelState])
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
export const mapPropertiesIntoModel = <P extends Props, M extends Model>(
    properties:P, defaultModel:M
):P => {
    /*
        NOTE: Default props seems not to respect nested layers to merge so
        we have to manage this for nested model structure.
    */
    const result:P & {
        model:M
        pattern?:string
    } = Tools.extend(
        true,
        {model: {...defaultModel, state: {...defaultModel.state}}},
        properties
    )
    // region handle aliases
    if (result.disabled) {
        result.model.mutable = false
        delete result.disabled
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
    for (const [name, value] of Object.entries(result.model))
        if (
            Object.prototype.hasOwnProperty.call(result, name) &&
            result[name as keyof P] !== undefined
        )
            (result.model[name as keyof M] as ValueOf<M>) =
                result[name as keyof P] as unknown as ValueOf<M>
    // Map property state into model state
    for (const [name, value] of Object.entries(result.model.state))
        if (
            Object.prototype.hasOwnProperty.call(result, name) &&
            result[name as keyof ModelState] !== undefined
        )
            result.model.state[name as keyof ModelState] =
                result[name as keyof P] as unknown as ValueOf<ModelState>

    if (result.model.value === undefined)
        result.model.value = result.model.default
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
    P extends Props, R extends Properties
>(properties:P):R => {
    type Result = R & {
        mutable?:boolean
        pattern?:RegExp|string
        nullable?:boolean
        regularExpressionPattern?:null|RegExp|string
        state?:null
        writable?:boolean
    }
    const result:Result = ({
        ...properties,
        ...(properties.model || {}),
        ...((properties.model || {}).state || {})
    }) as unknown as Result
    // region handle aliases
    result.disabled = !(result.mutable && result.writable)
    delete result.mutable
    delete result.writable

    delete result.state

    result.required = !result.nullable
    delete result.nullable

    if (result.regularExpressionPattern)
        result.pattern = result.regularExpressionPattern
    // NOTE: Workaround since options configuration above is ignored.
    delete (result as {regularExpressionPattern?:RegExp|string})
        .regularExpressionPattern
    // endregion
    return result as R
}
// endregion
// region value transformer
/**
 * Applies configured value transformations.
 *
 * @param configuration - Input configuration.
 * @param value - Value to transform.
 * @param transformer - To apply to given value.
 *
 * @returns Transformed value.
 */
export const parseValue = <
    P extends {
        emptyEqualsNull:boolean
        transformer?:RecursivePartial<DataTransformSpecification<Type>>
        type:string
    },
    Type = any
>(
    configuration:P, value:any, transformer:InputDataTransformation<Type>
):null|Type => {
    if (configuration.emptyEqualsNull && value === '')
        return null

    if (
        ![null, undefined].includes(value) &&
        transformer[configuration.type]?.parse
    )
        value = (
            transformer[configuration.type]!.parse as
                DataTransformSpecification<Type>['parse']
        )(
            value,
            configuration as unknown as InputProperties<Type>,
            transformer
        )

    if (typeof value === 'number' && isNaN(value))
        return null

    return value
}
/**
 * Applies configured value transformation when editing the input has been
 * ended (element is not focused anymore).
 *
 * @param configuration - Current configuration.
 * @param value - Current value to transform.
 * @param transformer - To apply to given value.
 *
 * @returns Transformed value.
 */
export const transformValue = <
    P extends {
        emptyEqualsNull:boolean
        model:{trim:boolean}
        transformer?:RecursivePartial<DataTransformSpecification<Type>>
        type:string
    },
    Type = any
>(
    configuration:P, value:any, transformer:InputDataTransformation<Type>
):null|Type => {
    if (configuration.model.trim && typeof value === 'string')
        value = value.trim().replace(/ +\n/g, '\\n')

    return parseValue<P, Type>(configuration, value, transformer)
}
/**
 * Represents configured value as string.
 *
 * @param configuration - Input configuration.
 * @param value - To represent.
 * @param transformer - To apply to given value.
 * @param final - Specifies whether it is a final representation.
 *
 * @returns Transformed value.
 */
export function formatValue<
    P extends {
        transformer?:RecursivePartial<DataTransformSpecification<Type>>
        type:string
    },
    Type = any
>(
    configuration:P,
    value:null|Type,
    transformer:InputDataTransformation<Type>,
    final:boolean = true
):string {
    const methodName:'final'|'intermediate' = final ? 'final' : 'intermediate'

    if (
        [null, undefined].includes(value as null) ||
        typeof value === 'number' && isNaN(value)
    )
        return ''

    if (
        transformer[configuration.type]?.format &&
        transformer[configuration.type]!.format![methodName]?.transform
    )
        return (
            transformer[configuration.type]!.format![methodName]!.transform as
                FormatSpecification<Type>['transform']
        )(
            value,
            configuration as unknown as InputProperties<Type>,
            transformer
        )

    return String(value)
}
/**
 * Determines initial value representation as string.
 *
 * @param properties - Components properties.
 * @param value - Current value to represent.
 * @param transformer - To apply to given value.
 *
 * @returns Determined initial representation.
 */
export function determineInitialRepresentation<
    P extends {
        model?:{type?:string}
        representation?:string
        transformer?:RecursivePartial<DataTransformSpecification<Type>>
        type?:string
    },
    Type = any
>(
    properties:P,
    defaultProperties:Partial<P>,
    value:null|Type,
    transformer:InputDataTransformation<Type>
):string {
    if (typeof properties.representation === 'string')
        return properties.representation

    if (value !== null)
        return formatValue<P & {type:string}, Type>(
            {
                ...properties,
                type: (
                    properties.type ||
                    properties.model?.type ||
                    defaultProperties.model!.type as string
                )
            },
            value,
            transformer
        )

    return ''
}
// endregion
// region hooks
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */
export const useMemorizedValue = <Type = any>(
    value:Type, ...dependencies:Array<any>
):Type => useMemo(():any => value, dependencies)
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
