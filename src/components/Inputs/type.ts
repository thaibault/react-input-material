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
import BasePropertyTypes, {func, number} from 'clientnode/property-types'
import {
    ForwardRefExoticComponent,
    ReactElement,
    ReactNode,
    RefAttributes,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject
} from 'react'
import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'
import {IconOptions} from '@rmwc/types'

import {
    modelStatePropertyTypes as textInputModelStatePropertyTypes,
    Properties as TextInputProperties,
    Props as TextInputProps
} from '../TextInput/type'
import {
    BaseModel,
    defaultModel as baseDefaultModel,
    defaultProperties as baseDefaultProperties,
    ModelState as BaseModelState,
    Properties as BaseProperties,
    propertyTypes as basePropertyTypes,
    State as BaseState,
    StaticWebComponent
} from '../../type'
// endregion
export interface PropertiesItem<T, TS = unknown> {
    model?: {
        state?: TS
        value?: T
    }
    value?: T
}
export interface CreateOptions<T, IP> {
    index: number
    properties: IP
    values?: Array<T> | null
}
export interface CreateItemOptions<T, P extends PropertiesItem<T>, IP>
    extends
CreateOptions<T, IP> {
    item: Partial<P>
}
export interface CreatePrototypeOptions<T, P extends PropertiesItem<T>, IP>
    extends
CreateItemOptions<T, P, IP> {
    lastValue: null | T | undefined
}

export interface ModelState extends BaseModelState {
    invalidMaximumNumber: boolean
    invalidMinimumNumber: boolean
}
export interface Model<T, P extends PropertiesItem<T> = PropertiesItem<T>>
    extends
BaseModel<Array<P> | null> {
    default?: Array<P> | null

    maximumNumber: number
    minimumNumber: number

    state?: ModelState

    writable: boolean
}

export interface ChildrenOptions<T, P extends PropertiesItem<T>, IP> {
    index: number
    inputsProperties: IP
    properties: Partial<P>
}
export interface Properties<
    T = unknown, P extends PropertiesItem<T> = BaseProperties<T>
> extends ModelState, Omit<BaseProperties<Array<P> | null>, 'onChangeValue'> {
    default?: T

    addIcon: IconOptions
    removeIcon: IconOptions

    children: (options: ChildrenOptions<T, P, this>) => ReactNode

    createItem: (options: CreateItemOptions<T, P, this>) => P
    createPrototype: (options: CreatePrototypeOptions<T, P, this>) => P

    maximumNumber: number
    minimumNumber: number

    model: Model<T, P>

    onChangeValue: (
        values: Array<T> | null, event: unknown, properties: this
    ) => void

    value: Array<P> | null

    writable: boolean
}
export type PartialModel<
    T = unknown, P extends PropertiesItem<T> = BaseProperties<T>
> = Partial<
    Omit<Model<T, P>, 'state'> & {state?: Partial<ModelState>}
>
export type Props<
    T = unknown, P extends PropertiesItem<T> = BaseProperties<T>
> =
    Partial<Omit<Properties<T, P>, 'model' | 'value'>> &
    {
        model?: PartialModel<T, P>
        value?: Array<Partial<P>> | Array<T> | null
    }

export type DefaultProperties<
    T = string, P extends PropertiesItem<T> = TextInputProps<T>
> =
    Partial<Omit<Properties<T, P>, 'default' | 'model' | 'value'>> &
    {model: Model<T, P>}

export type PropertyTypes<
    T = unknown, P extends PropertiesItem<T> = BaseProperties<T>
> = {
    [key in keyof Properties<P>]: ValueOf<typeof BasePropertyTypes>
}

export type State<T = unknown> = BaseState<Array<null | T | undefined>>

export type Adapter<
    T = unknown, P extends PropertiesItem<T> = BaseProperties<T>
> = ComponentAdapter<Properties<T, P>, State<T>>
export type AdapterWithReferences<
    T = unknown,
    P extends PropertiesItem<T> = BaseProperties<T>,
    RefType = unknown
> = Adapter<T, P> & {references: Array<RefObject<RefType>>}

export interface Component<Type> extends
    Omit<ForwardRefExoticComponent<Props>, 'propTypes'>,
    StaticWebComponent<Type, ModelState, DefaultProperties>
{
    <T = string, P extends PropertiesItem<T> = TextInputProperties<T>>(
        props: Props<T, P> & RefAttributes<Adapter<T, P>>
    ): ReactElement
}
// region constants
export const propertyTypes: ValidationMapping = {
    ...basePropertyTypes,
    ...textInputModelStatePropertyTypes,
    // We use that function (render prop) to produce input component instances.
    children: func,

    createItem: func,
    createPrototype: func,

    maximumNumber: number,
    minimumNumber: number
} as const
export const renderProperties: Array<string> =
    ['children', 'createItem', 'createPrototype']
export const defaultModel: Model<string, TextInputProperties<string>> = {
    ...baseDefaultModel as Model<string, TextInputProperties<string>>,

    state: {
        ...baseDefaultModel.state as ModelState,

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
export const defaultProperties: DefaultProperties = {
    ...baseDefaultProperties as DefaultProperties,

    addIcon: {icon: 'add'},
    removeIcon: {icon: 'clear'},

    createItem: ({item}): TextInputProps<string> => item,
    createPrototype: ({item}): TextInputProps<string> => item,

    model: {...defaultModel}
} as const
// endregion
