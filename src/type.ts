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
import {Mapping, ValueOf} from 'clientnode'
import PropertyTypes, {
    any,
    arrayOf,
    boolean,
    func,
    number,
    object,
    objectOf,
    oneOfType,
    Requireable,
    shape,
    string,
    symbol,
    ValidationMap
} from 'clientnode/dist/property-types'
import {
    ComponentClass,
    FocusEvent,
    ForwardRefExoticComponent,
    FunctionComponent,
    MouseEvent,
    ReactElement,
    RefAttributes
} from 'react'
import {GenericEvent} from 'react-generic-tools/type'
import {
    ComponentAdapter,
    StaticWebComponent as StaticBaseWebComponent,
    ValidationMapping
} from 'web-component-wrapper/type'
import {SelectProps} from '@rmwc/select'
import {ThemeProviderProps} from '@rmwc/theme'
import {TooltipProps} from '@rmwc/tooltip'
import {RipplePropT} from '@rmwc/types'
// endregion
// region exports
/// region generic
export interface CursorState {
    end: number
    start: number
}
export type TypeSpecification = Array<string> | string
//// region model
export interface BaseSelectionMapping {
    label: string
    /*
        NOTE: Databases may support any value here but the current selection
        input does not allow this via typescript but seems to work with any
        value.
     */
    value: unknown
}
export type BaseSelection =
    Array<BaseSelectionMapping> | Array<unknown> | Mapping<unknown>
export interface CommonBaseModel<Type = unknown> {
    declaration: string
    description: string
    name: string

    default?: Type

    emptyEqualsNull: boolean

    maximum: number | string
    minimum: number | string

    maximumLength: number
    minimumLength: number

    selection?: BaseSelection
    type: TypeSpecification

    trim: boolean

    value?: Type
}
export interface ModelState {
    dirty: boolean
    pristine: boolean

    touched: boolean
    untouched: boolean

    focused: boolean
    visited: boolean

    invalid: boolean
    valid: boolean

    invalidRequired: boolean
}
export type Pattern = Array<RegExp | string> | RegExp | string
export interface BaseModel<T = unknown> extends CommonBaseModel<T> {
    pattern?: Pattern
    invertedPattern?: Pattern

    mutable: boolean
    writable: boolean

    nullable: boolean

    state?: ModelState
}
//// endregion
export type Selection = Array<boolean | number> | SelectProps['options']
export interface BaseProperties<T = unknown>
    extends
CommonBaseModel<T>, ModelState {
    className: Array<string> | string
    // NOTE: We want to avoid a collision with html's native "style" property.
    styles: Mapping
    themeConfiguration: ThemeProviderProps['options']

    disabled: boolean

    enforceUncontrolled: boolean

    id: string
    label: string
    name: string

    initialValue: T

    model: BaseModel<T>

    required: boolean
    requiredText: string

    ripple: RipplePropT

    rootProps: Mapping<boolean | number | string>
    /*
        NOTE: selection allows more options than when configuring via "model"
        to be aligned to backend view of selections.
     */
    selection: Selection

    showDeclaration: boolean

    showInitialValidationState: boolean
    showValidationState: boolean

    tooltip: string | TooltipProps

    triggerInitialPropertiesConsolidation: boolean
}
export type BaseProps<T = unknown> =
    Partial<Omit<BaseProperties<T>, 'model'>> &
    {
        model?: (
            Partial<Omit<BaseModel<T>, 'state'>> &
            {state?: Partial<ModelState>}
        )
    }

export type DefaultBaseProperties<T = unknown> =
    Omit<BaseProps<T>, 'model'> & {model: BaseModel<T>}

export interface TypedProperties<T = unknown> extends BaseProperties<T> {
    initialValue: T

    model: BaseModel<T>

    onBlur: (event: GenericEvent | undefined, properties: this) => void

    onChange: (properties: this, event?: GenericEvent) => void
    onChangeShowDeclaration: (
        show: boolean, event: GenericEvent | undefined, properties: this
    ) => void
    onChangeState: (
        state: ModelState, event: GenericEvent | undefined, properties: this
    ) => void
    onChangeValue: (
        value: T, event: GenericEvent | undefined, properties: this
    ) => void

    onClick: (event: MouseEvent, properties: this) => void
    onFocus: (event: FocusEvent, properties: this) => void
    onTouch: (event: GenericEvent, properties: this) => void
}
export type Properties<T = unknown> =
    TypedProperties<T> & CommonBaseModel<T>
export type Props<T = unknown> =
    Partial<Omit<Properties<T>, 'model'>> &
    {
        model?: (
            Partial<Omit<BaseModel<T>, 'state'>> &
            {state?: Partial<ModelState>}
        )
    }

export type DefaultProperties<T = unknown> =
    Omit<Props<T>, 'model'> & {model: BaseModel<T>}
//// region state
export interface State<T = unknown> {
    modelState?: ModelState
    value?: null | T
}
export interface ValueState<T = unknown, MS = ModelState> {
    modelState: MS
    value: null | T
}
export interface EditorState {
    editorIsActive: boolean
    selectionIsUnstable: boolean
}
//// endregion
export interface StaticWebComponent<
    Type, MS = ModelState, DP = DefaultProperties<Type>
> extends StaticBaseWebComponent<Type> {
    defaultModelState: MS
    defaultProperties: DP
    strict: boolean
}

export type StaticComponent<
    Type, P = Props, MS = ModelState, DP = DefaultProperties<Type>
> = Omit<ComponentClass<P>, 'propTypes'> & StaticWebComponent<Type, MS, DP>
export type StaticFunctionComponent<
    Type, P = Props, MS = ModelState, DP = DefaultProperties<Type>
> = Omit<FunctionComponent<P>, 'propTypes'> & StaticComponent<Type, P, MS, DP>

export interface InputComponent<
    ValueType,
    ComponentType,
    P = Props<ValueType>,
    MS = ModelState,
    DP = DefaultProperties<ValueType>,
    A = ComponentAdapter<P>
> extends
    Omit<ForwardRefExoticComponent<P>, 'propTypes'>,
    StaticWebComponent<ComponentType, MS, DP>
{
    (props: P & RefAttributes<A>): ReactElement
}
//// region constants
export const baseModelPropertyTypes: ValidationMapping = {
    name: string,

    declaration: string,
    description: string,

    default: any,

    selection: oneOfType([
        arrayOf(oneOfType([
            arrayOf(oneOfType([number, string])),
            number,
            objectOf(oneOfType([number, string])),
            string
        ])),
        objectOf(oneOfType([number, string]))
    ]),
    /*
        NOTE: Also not yet working:
        type: oneOf([
            'date',
            'date-local',

            'datetime',
            'datetime-local',

            'time',
            'time-local',

            'week',

            'color',
            'email',
            'month',
            'number',
            'password',
            'range',
            'search',
            'text',
            'url'
        ])
    */
    type: string,

    value: any
} as const
export const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>
} = {
    dirty: oneOfType([boolean, symbol]),
    pristine: oneOfType([boolean, symbol]),
    touched: oneOfType([boolean, symbol]),
    untouched: oneOfType([boolean, symbol]),

    focused: oneOfType([boolean, symbol]),
    visited: oneOfType([boolean, symbol]),

    invalid: oneOfType([boolean, symbol]),
    invalidRequired: oneOfType([boolean, symbol]),
    valid: oneOfType([boolean, symbol])
} as const
export const modelPropertyTypes: ValidationMapping = {
    ...baseModelPropertyTypes,

    emptyEqualsNull: boolean,
    trim: boolean,

    invertedPattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    pattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),

    maximum: oneOfType([number, string]),
    minimum: oneOfType([number, string]),

    maximumLength: number,
    minimumLength: number,

    mutable: boolean,
    writable: boolean,

    state: shape(modelStatePropertyTypes)
} as const
export const propertyTypes: ValidationMapping = {
    ...baseModelPropertyTypes,
    ...modelStatePropertyTypes,

    className: oneOfType([arrayOf(string), string]),
    styles: object,
    themeConfiguration: object,

    disabled: boolean,

    enforceUncontrolled: boolean,

    initialValue: any,
    inputProperties: object,
    model: shape<ValidationMap<ValueOf<typeof PropertyTypes>>>(
        modelPropertyTypes
    ),

    onChange: func,
    onChangeValue: func,
    onChangeShowDeclaration: func,
    onChangeState: func,
    onClick: func,
    onFocus: func,
    onTouch: func,

    required: boolean,
    requiredText: string,

    ripple: oneOfType([boolean, object]),

    rootProps: object,

    showDeclaration: oneOfType([boolean, symbol]),

    showInitialValidationState: boolean,
    showValidationState: boolean,

    /*
        NOTE: Not yet working:
        tooltip?: string | TooltipProps
        trailingIcon?:
            string |
             (IconOptions & {tooltip?: string | TooltipProps})
    */
    tooltip: any
}
export const defaultModelState: ModelState = {
    dirty: false,
    pristine: true,

    focused: false,
    visited: false,

    invalid: false,
    invalidRequired: false,
    valid: true,

    touched: false,
    untouched: true
} as const
export const defaultModel: BaseModel<string> = {
    declaration: '',
    description: '',
    name: 'NO_NAME_DEFINED',

    emptyEqualsNull: true,

    pattern: undefined,
    invertedPattern: undefined,

    maximum: Infinity,
    minimum: -Infinity,

    maximumLength: -1,
    minimumLength: 0,

    mutable: true,
    /*
        NOTE: We do not want to shadow "default" here:
        value: null,
    */
    writable: true,

    nullable: true,

    state: {...defaultModelState},

    trim: true,

    type: 'string'
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultProperties: DefaultProperties = {
    className: [],
    styles: {},

    enforceUncontrolled: false,

    model: {...defaultModel},

    triggerInitialPropertiesConsolidation: false,

    showDeclaration: undefined,

    showInitialValidationState: false,
    showValidationState: true,

    requiredText: 'Please fill this field.'
} as const
//// endregion
/// endregion
export interface ConfigurationProperties {
    strict?: boolean
    themeConfiguration?: ThemeProviderProps['options']
    tooltip?: Properties['tooltip']
    wrap?: boolean
}
// endregion
