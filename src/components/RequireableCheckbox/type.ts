// -*- coding: utf-8 -*-
/** @module type */
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
import {boolean, string} from 'clientnode/dist/property-types'
import {
    ComponentAdapter, PropertiesValidationMap
} from 'web-component-wrapper/type'

import {
    BaseModel,
    defaultModel,
    defaultProperties,
    InputComponent,
    ModelState,
    modelStatePropertyTypes,
    Properties,
    propertyTypes,
    State,
    ValueState
} from '../../type'
// endregion
export interface CheckboxProperties extends Properties<boolean | null> {
    checked: boolean
    id: string
}
export type CheckboxModel = BaseModel<boolean | null>
export type CheckboxModelState = ModelState
export type CheckboxValueState = ValueState<boolean>
export type CheckboxProps =
    Partial<Omit<CheckboxProperties, 'model'>> &
    {
        model?: (
            Partial<Omit<CheckboxModel, 'state'>> &
            {state?: Partial<CheckboxModelState>}
        )
    }
export type DefaultCheckboxProperties =
    Omit<CheckboxProps, 'model'> & {model: CheckboxModel}
export type CheckboxState = State<boolean>
export type CheckboxAdapter =
    ComponentAdapter<CheckboxProperties, Omit<CheckboxState, 'value'>>

export type CheckboxComponent<ComponentType> = InputComponent<
    boolean,
    ComponentType,
    CheckboxProps,
    CheckboxModelState,
    DefaultCheckboxProperties,
    CheckboxAdapter
>
// region constants
export const checkboxPropertyTypes: PropertiesValidationMap = {
    ...propertyTypes,
    ...modelStatePropertyTypes,
    checked: boolean,
    id: string
} as const
export const defaultCheckboxModel: CheckboxModel = {
    ...defaultModel as unknown as CheckboxModel,
    default: false,
    type: 'boolean',
    value: false
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultCheckboxProperties: DefaultCheckboxProperties = {
    ...defaultProperties as CheckboxProps,
    default: false,
    model: {...defaultCheckboxModel},
    requiredText: 'Please check this field.'
} as const
// endregion
