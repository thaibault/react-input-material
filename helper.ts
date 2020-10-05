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
import {Mapping} from 'clientnode/type'

import {Properties, Props} from './type'
// endregion
/**
 * Determines initial value depending on given properties.
 * @param properties - Components properties.
 * @returns Determined value.
 */
export function determineInitialValue<Type = any>(
    properties:Props<Type>
):null|Type {
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
 * @returns A boolean indicating if validation state has changed.
 */
export function determineValidationState<Type = any>(
    configuration:Properties<Type>,
    value:null|Type,
    validator:Mapping<() => boolean> = {}
):boolean {
    let changed:boolean = false

    validator = {
        invalidRequired: ():boolean => (
            configuration.model.nullable === false && value === null
        ),
        ...validator
    }
    for (const [name, validator] of Object.entries(validator)) {
        const oldValue:boolean = configuration.model.state[name]
        configuration.model.state[name] = validator(value)
        changed = changed || oldValue !== configuration.model.state[name]
    }

    if (changed) {
        configuration.model.state.invalid = Object.keys(validator)
            .some((name:string):boolean => configuration.model.state[name])
        configuration.model.state.valid = !configuration.model.state.invalid
    }

    return changed
}
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
