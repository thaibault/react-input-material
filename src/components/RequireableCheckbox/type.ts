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
import {boolean, string} from 'clientnode/property-types'
import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'

import {
    BaseModel,
    defaultModel as baseDefaultModel,
    defaultProperties as baseDefaultProperties,
    Component as BaseComponent,
    ModelState as BaseModelState,
    modelStatePropertyTypes as baseModelStatePropertyTypes,
    Properties as BaseProperties,
    propertyTypes as basePropertyTypes,
    State as BaseState,
    ValueState as BaseValueState
} from '../../type'
// endregion
export interface Properties extends BaseProperties<boolean | null> {
    checked: boolean
    id: string
}
export type Model = BaseModel<boolean | null>
export type ModelState = BaseModelState
export type ValueState = BaseValueState<boolean>
export type Props =
    Partial<Omit<Properties, 'model'>> &
    {
        model?: (
            Partial<Omit<Model, 'state'>> &
            {state?: Partial<ModelState>}
        )
    }
export type DefaultProperties = Omit<Props, 'model'> & {model: Model}
export type State = BaseState<boolean>
export type Adapter = ComponentAdapter<Properties, Omit<State, 'value'>>

export type Component<ComponentType> = BaseComponent<
    boolean,
    ComponentType,
    Props,
    ModelState,
    DefaultProperties,
    Adapter
>
// region constants
export const propertyTypes: ValidationMapping = {
    ...basePropertyTypes,
    ...baseModelStatePropertyTypes,
    checked: boolean,
    id: string
} as const
export const defaultModel: Model = {
    ...baseDefaultModel as unknown as Model,
    default: false,
    type: 'boolean',
    value: false
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultProperties: DefaultProperties = {
    ...baseDefaultProperties as Props,
    default: false,
    model: {...defaultModel},
    requiredText: 'Please check this field.'
} as const
// endregion
