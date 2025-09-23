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
import {Mapping} from 'clientnode'
import {
    FocusEvent as ReactFocusEvent,
    KeyboardEvent as ReactKeyboardEvent,
    MouseEvent as ReactMouseEvent,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactNode,
    SyntheticEvent
} from 'react'
import {NativeType, NormalizedSelection} from '../components/TextInput/type'
import {GenericEvent} from 'react-generic-tools/type'
// endregion
// region exports
export type IconStrategy =
    'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom'
export type Size =
    'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export interface BaseProperties {
    componentProperties?: Mapping<unknown>
    domNodeProperties?: Mapping<unknown>
}

export interface TooltipProperties extends BaseProperties {
    children: ReactNode
    value: string
}

export interface HelpTextProperties extends BaseProperties {
    persistent?: boolean
    validationMsg?: boolean
    children: ReactNode
}
export type HelpText = ReactNode | HelpTextProperties

export interface LowLevelBaseComponentProperties extends BaseProperties {
    id?: string
    classNames?: Array<string>
    styles?: object

    onClick?: (event: ReactMouseEvent) => void

    onFocus?: (event: ReactFocusEvent) => void
    onBlur?: (event: SyntheticEvent) => void

    onKeyUp?: (event: ReactKeyboardEvent) => void
    onKeyDown?: (event: ReactKeyboardEvent) => void
}

export interface CircularProgressProperties extends BaseProperties {
    size?: Size
}

export interface ErrorProperties extends BaseProperties {
    children: string
}

export interface IconProperties extends LowLevelBaseComponentProperties {
    size?: Size

    icon: ReactNode

    strategy?: IconStrategy
}
export interface IconButtonProperties extends IconProperties {
    onIcon?: string

    value?: boolean
    disabled?: boolean

    onChange?: (event: SyntheticEvent) => void
}

export type InputDomNodes =
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
export interface InputReference {
    input: RefObject<InputDomNodes | null>
}

export interface InputProperties<Type>
    extends
LowLevelBaseComponentProperties {
    ref?: RefObject<InputReference | null>

    disabled?: boolean

    name?: string
    label?: ReactNode

    domNodeProperties?: Mapping<unknown>

    helpText?: ReactNode | HelpText

    onChange?: (eventOrValue: GenericEvent<Type> | Type) => void
}

export enum MediaCardRepresentationType {
    IMAGE = 'image',
    IFRAME = 'iframe',
    TEXT = 'text',
    VIDEO = 'video',
    PENDING = 'pending'
}
export interface MediaCardReference {
    card?: RefObject<HTMLDivElement | null>
    fileInput?: RefObject<HTMLInputElement | null>
    iFrame?: RefObject<HTMLIFrameElement | null>
}

export interface MediaCardProperties extends LowLevelBaseComponentProperties {
    ref?: RefObject<MediaCardReference | null>

    iframeWrapperClassNames?: Array<string>
    textRepresentationClassNames?: Array<string>
    infoClassNames?: Array<string>
    infoBodyClassNames?: Array<string>
    fileInputClassNames?: Array<string>

    name: string
    description?: string
    declaration?: string

    children?: ReactNode

    type?: MediaCardRepresentationType
    url?: string
    content?: ReactNode
    contentType?: string

    disabled?: boolean
    invalid?: boolean
    errorMessage?: string

    onChange?: (event: SyntheticEvent) => void
}

export interface CheckboxProperties extends InputProperties<boolean> {
    indeterminate?: boolean

    children?: ReactNode

    value: boolean
    onChange?: (eventOrValue: GenericEvent<boolean> | boolean) => void
}

export type TextInputProperties<Type> = InputProperties<Type>

export interface SelectProperties<Type>
    extends
TextInputProperties<Type> {
    options: NormalizedSelection

    value: Type
}

export interface MenuReference {
    focusItem: (index: number) => void
}

export interface MenuProperties extends LowLevelBaseComponentProperties {
    ref?: RefObject<MenuReference | null>

    options: Array<ReactNode>

    itemClassNames?: Array<string>
    pendingClassNames?: Array<string>

    open?: boolean
    pending?: boolean

    onSelect?: (event: SyntheticEvent) => void
}

export interface TypeTextInputProperties<Type>
    extends
TextInputProperties<Type> {
    value?: Type

    characterCount?: boolean

    invalid?: boolean

    required?: boolean
    maximumLength?: number
    minimumLength?: number

    placeholder?: string

    onLabelClick?: (event: ReactMouseEvent) => void
}

export interface TextFieldProperties extends TypeTextInputProperties<string> {
    type?: NativeType

    maximum?: number
    minimum?: number

    step?: number

    leadingIcon?: IconProperties | string
    trailingIcon?: IconProperties | string
}

export interface InputEventWrapper {
    blur: (event: object) => void
    focus: (event: object) => void
    input: (value: number | string, event: object) => void
}
export interface EventMapperWrapperReference<Type = unknown> {
    input: RefObject<Type | null> | null
    eventMapper: InputEventWrapper
}

export interface TextAreaReference extends InputReference {
    input: RefObject<HTMLTextAreaElement | null>
    label: RefObject<HTMLLabelElement | null>
}

export interface TextAreaProperties extends TypeTextInputProperties<string> {
    ref?: RefObject<TextAreaReference | null>

    classNamePrefix?: string

    resizeable?: boolean
    rows?: number

    // If provided the default textarea becomes readonly and hidden.
    children?: ReactNode
    barContentSlot?: ReactNode
}
// endregion
