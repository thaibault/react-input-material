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
import {Mapping, ValueOf} from 'clientnode/type'
import {useMemo} from 'react'

import {DefaultProperties, Model, ModelState, Properties, Props} from './type'
// endregion
/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @returns Determined value.
 */
export const determineInitialValue = <Type = any>(
    properties:Props<Type>, alternateValue?:null|Type
):null|Type => {
    if (alternateValue !== undefined)
        return alternateValue
    if (properties.value !== undefined)
        return properties.value as null|Type
    if (properties.model?.value !== undefined)
        return properties.model.value as null|Type
    if (
        Object.prototype.hasOwnProperty.call(properties, 'initialValue') &&
        typeof properties.initialValue !== 'undefined'
    )
        return properties.initialValue as null|Type
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
                properties.model.value === null ||
                typeof properties.indeterminate !== 'boolean' &&
                !properties.model.value
            )
        ),
        ...validators
    }
    for (const [name, validator] of Object.entries(validators)) {
        const oldValue:boolean = currentState[name as keyof ModelState]
        properties.model.state[name as keyof ModelState] = validator()
        changed =
            changed || oldValue !== currentState[name as keyof ModelState]
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
 * @param initialProperties - Initial unmodified properties to take into
 * account.
 * @returns Merged properties.
*/
export const mapPropertiesIntoModel = <P extends Props, M extends Model>(
    properties:P, defaultModel:M, initialProperties?:P
):P => {
    if (!initialProperties)
        initialProperties = properties
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
        if (Object.prototype.hasOwnProperty.call(result, name))
            (result.model[name as keyof M] as ValueOf<M>) =
                result[name as keyof P] as unknown as ValueOf<M>
    // Map property state into model state
    for (const [name, value] of Object.entries(result.model.state))
        if (Object.prototype.hasOwnProperty.call(result, name))
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
export const getConsolidatedProperties =
    <P extends Props, R extends Properties>(properties:P):R => {
    const result:R & {
        mutable?:boolean
        pattern?:RegExp|string
        nullable?:boolean
        regularExpressionPattern?:null|RegExp|string
        state?:null
        writable?:boolean
    } = Tools.extend(
        {},
        properties,
        properties.model || {},
        (properties.model || {}).state || {}
    )
    // region handle aliases
    result.disabled = !result.mutable
    delete result.mutable

    delete result.state
    delete result.writable

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
/**
 * Triggered when a value state changes like validation or focusing.
 * @param properties - Properties to search in.
 * @param name - Event callback name to search for in given properties.
 * @param parameter - To forward to callback.
 * @returns Nothing.
 */
export const triggerCallbackIfExists = <Type = any>(
    properties:Properties<Type>, name:string, ...parameter:Array<any>
):void => {
    name = `on${Tools.stringCapitalize(name)}`
    if (properties[name as keyof Properties<Type>])
        /*
            NOTE: We call callback on next event loop to first consolidate
            internal state.
        */
        Tools.timeout(() =>
            (properties[name as keyof Properties<Type>] as Function)(
                ...parameter
            )
        )
}
/**
 * Custom hook to memorize any values with a default empty array. Useful if
 * using previous constant complex object within a render function.
 * @param value - Value to memorize.
 * @param dependencies - Optional dependencies when to update given value.
 * @returns Given cached value.
 */
export const useMemorizedValue = <Type = any>(
    value:Type, dependencies:Array<any> = []
):Type => useMemo(():any => value, dependencies)
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
