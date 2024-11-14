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
import {ValueOf} from 'clientnode'
import PropertyTypes, {func, number} from 'clientnode/dist/property-types'
import {
    ForwardRefExoticComponent,
    MutableRefObject,
    ReactElement,
    ReactNode,
    RefAttributes
} from 'react'
import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'
import {IconOptions} from '@rmwc/types'

import {
    inputModelStatePropertyTypes, InputProperties, InputProps
} from '../TextInput/type'
import {
    BaseModel,
    defaultModel,
    defaultProperties,
    ModelState,
    Properties,
    propertyTypes,
    State,
    StaticWebComponent
} from '../../type'
// endregion
export interface InputsPropertiesItem<T, TS = unknown> {
    model?: {
        state?: TS
        value?: T
    }
    value?: T
}
export interface InputsCreateOptions<T, IP> {
    index: number
    properties: IP
    values?: Array<T> | null
}
export interface InputsCreateItemOptions<
    T, P extends InputsPropertiesItem<T>, IP
> extends InputsCreateOptions<T, IP> {
    item: Partial<P>
}
export interface InputsCreatePrototypeOptions<
    T, P extends InputsPropertiesItem<T>, IP
> extends InputsCreateItemOptions<T, P, IP> {
    lastValue: null | T | undefined
}

export interface InputsModelState extends ModelState {
    invalidMaximumNumber: boolean
    invalidMinimumNumber: boolean
}
export interface InputsModel<
    T, P extends InputsPropertiesItem<T> = InputsPropertiesItem<T>
> extends BaseModel<Array<P> | null> {
    maximumNumber: number
    minimumNumber: number

    state?: InputsModelState

    writable: boolean
}

export interface InputsChildrenOptions<
    T, P extends InputsPropertiesItem<T>, IP
> {
    index: number
    inputsProperties: IP
    properties: Partial<P>
}
export interface InputsProperties<
    T = unknown, P extends InputsPropertiesItem<T> = Properties<T>
> extends InputsModelState, Omit<Properties<Array<P> | null>, 'onChangeValue'> {
    addIcon: IconOptions
    removeIcon: IconOptions

    children: (options: InputsChildrenOptions<T, P, this>) => ReactNode

    createItem: (options: InputsCreateItemOptions<T, P, this>) => P
    createPrototype: (options: InputsCreatePrototypeOptions<T, P, this>) => P

    maximumNumber: number
    minimumNumber: number

    model: InputsModel<T, P>

    onChangeValue: (
        values: Array<T> | null, event: unknown, properties: this
    ) => void

    value: Array<P> | null

    writable: boolean
}
export type PartialInputsModel<
    T = unknown, P extends InputsPropertiesItem<T> = Properties<T>
> = Partial<
    Omit<InputsModel<T, P>, 'state'> & {state?: Partial<InputsModelState>}
>
export type InputsProps<
    T = unknown, P extends InputsPropertiesItem<T> = Properties<T>
> =
    Partial<Omit<InputsProperties<T, P>, 'model' | 'value'>> &
    {
        model?: PartialInputsModel<T, P>
        value?: Array<Partial<P>> | Array<T> | null
    }

export type DefaultInputsProperties<
    T = string, P extends InputsPropertiesItem<T> = InputProps<T>
> =
    Partial<Omit<InputsProperties<T, P>, 'default' | 'model' | 'value'>> &
    {model: InputsModel<T, P>}

export type InputsPropertyTypes<
    T = unknown, P extends InputsPropertiesItem<T> = Properties<T>
> = {
    [key in keyof InputsProperties<P>]: ValueOf<typeof PropertyTypes>
}

export type InputsState<T = unknown> = State<Array<null | T | undefined>>

export type InputsAdapter<
    T = unknown, P extends InputsPropertiesItem<T> = Properties<T>
> = ComponentAdapter<InputsProperties<T, P>, InputsState<T>>
export type InputsAdapterWithReferences<
    T = unknown,
    P extends InputsPropertiesItem<T> = Properties<T>,
    RefType = unknown
> = InputsAdapter<T, P> & {references: Array<MutableRefObject<RefType>>}

export interface InputsComponent<Type> extends
    Omit<ForwardRefExoticComponent<InputsProps>, 'propTypes'>,
    StaticWebComponent<Type, InputsModelState, DefaultInputsProperties>
{
    <T = string, P extends InputsPropertiesItem<T> = InputProperties<T>>(
        props: InputsProps<T, P> & RefAttributes<InputsAdapter<T, P>>
    ): ReactElement
}
// region constants
export const inputsPropertyTypes: ValidationMapping = {
    ...propertyTypes,
    ...inputModelStatePropertyTypes,
    // We use that function (render prop) to produce input component instances.
    children: func,

    createItem: func,
    createPrototype: func,

    maximumNumber: number,
    minimumNumber: number
} as const
export const inputsRenderProperties: Array<string> =
    ['children', 'createItem', 'createPrototype']
export const defaultInputsModel: InputsModel<
    string, InputProperties<string>
> = {
    ...defaultModel as InputsModel<string, InputProperties<string>>,

    state: {
        ...defaultModel.state as InputsModelState,

        invalidMaximumNumber: false,
        invalidMinimumNumber: false
    },

    maximumNumber: Infinity,
    minimumNumber: 0,

    type: 'string[]'
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultInputsProperties: DefaultInputsProperties = {
    ...defaultProperties as DefaultInputsProperties,

    addIcon: {icon: 'add'},
    removeIcon: {icon: 'clear'},

    createItem: ({item}): InputProps<string> => item,
    createPrototype: ({item}): InputProps<string> => item,

    model: {...defaultInputsModel}
} as const
// endregion
