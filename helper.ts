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
    properties:Props<Type>
):null|Type => {
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
            configuration.model.nullable === false && value === null
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
 * @param initialProperties - Initial unmodified properties to take into
 * account.
 * @param defaultModel - Default model to merge.
 * @param value - Current value to merge.
 * @param model - Current model state.
 * @returns Merged properties.
*/
export const mapPropertiesAndStateToModel = <Type = any>(
    properties:Props<Type>,
    initialProperties:Props<Type>,
    defaultModel:Model<Type>,
    value:null|Type,
    model:ModelState
):DefaultProperties<Type> => {
    /*
        NOTE: Default props seems not to respect nested layers to merge so
        we have to manage this for nested model structure.
    */
    const result:DefaultProperties<Type> = Tools.extend(
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
            (result.model[name as keyof Model<Type>] as ValueOf<Model<Type>>) =
                result[name as keyof Props<Type>] as ValueOf<Model<Type>>
    for (const [name, value] of Object.entries(result.model.state))
        if (Object.prototype.hasOwnProperty.call(result, name))
            result.model.state[name as keyof ModelState] =
                result[name as keyof Props<Type>] as ValueOf<ModelState>
    for (const key of Object.keys(result.model.state))
        if (!Object.prototype.hasOwnProperty.call(props, key)) {
            result.model.state = model
            break
        }

    if (result.model.value === undefined)
        result.model.value = (value === undefined) ?
            result.model.default :
            value
    // else -> Controlled component via model's "value" property.
    // endregion
    return result
}
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
