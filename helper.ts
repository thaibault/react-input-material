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

import {DefaultProperties, Model, ModelState, Properties, Props} from './type'
// endregion
/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @returns Determined value.
 */
export const determineInitialValue = <Type = any>(
    properties:Props<Type>, alternateValue?:Type
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
 * @param configuration - Input configuration.
 * @param value - Value to validate against given configuration.
 * @param validators - Mapping from validation state key to corresponding
 * validator function.
 * @returns A boolean indicating if validation state has changed.
 */
export const determineValidationState = <Type = any>(
    configuration:Properties<Type>,
    value:null|Type,
    validators:Mapping<() => boolean> = {}
):boolean => {
    let changed:boolean = false

    validators = {
        invalidRequired: ():boolean => (
            configuration.model.nullable === false &&
            (
                value === null ||
                typeof configuration.indeterminate !== 'boolean' &&
                !value
            )
        ),
        ...validators
    }
    for (const [name, validator] of Object.entries(validators)) {
        const oldValue:boolean =
            configuration.model.state[name as keyof ModelState]
        configuration.model.state[name as keyof ModelState] = validator()
        changed =
            changed ||
            oldValue !== configuration.model.state[name as keyof ModelState]
    }

    if (changed) {
        configuration.model.state.invalid = Object.keys(validators).some((
            name:string
        ):boolean => configuration.model.state[name as keyof ModelState])
        configuration.model.state.valid = !configuration.model.state.invalid
    }

    return changed
}
/**
 * Synchronizes property, state and model configuration:
 * Properties overwrites default properties which overwrites default model
 * properties.
 * @param properties - Properties to merge.
 * @param defaultModel - Default model to merge.
 * @param value - Current value to merge.
 * @param model - Current model state.
 * @param initialProperties - Initial unmodified properties to take into
 * account.
 * @returns Merged properties.
*/
export const mapPropertiesAndStateToModel = <P extends Props, M extends Model, MS extends ModelState, Type = any>(
    properties:P,
    defaultModel:M,
    value:null|Type,
    model:MS,
    initialProperties?:P
):P & {model:M} => {
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
        delete result.disabled
        result.model.mutable = false
    }
    if (result.pattern) {
        result.model.regularExpressionPattern = result.pattern
        delete result.pattern
    }
    if (result.required) {
        delete result.required
        result.model.nullable = false
    }
    if (result.type === 'text')
        result.type = 'string'
    // endregion
    // region handle model configuration
    for (const [name, value] of Object.entries(result.model))
        if (Object.prototype.hasOwnProperty.call(result, name))
            (result.model[name as keyof M] as ValueOf<M>) =
                result[name as keyof P] as unknown as ValueOf<M>
    for (const [name, value] of Object.entries(result.model.state))
        if (Object.prototype.hasOwnProperty.call(result, name))
            result.model.state[name as keyof ModelState] =
                result[name as keyof P] as unknown as ValueOf<ModelState>
    for (const key of Object.keys(result.model.state))
        if (!Object.prototype.hasOwnProperty.call(
            initialProperties || properties, key
        )) {
            result.model.state = model
            break
        }

    if (result.model.value === undefined)
        result.model.value = (value === undefined) ?
            result.model.default :
            value
    else if (value !== undefined)
        result.model.value = value
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

    return result
}
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
