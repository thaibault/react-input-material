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
    MutableRefObject as RefObject,
    ReactNode,
    SyntheticEvent
} from 'react'
import {NativeType, NormalizedSelection} from '../components/TextInput/type'
// endregion
// region exports
export type IconStrategy =
    'auto' | 'ligature' | 'className' | 'url' | 'component' | 'custom'
export type Size =
    'extra-small' | 'small' | 'medium' | 'large' | 'extra-large'

export interface TooltipProperties {
    children: ReactNode
    value: string
}

export interface HelpTextProperties {
    persistent?: boolean
    validationMsg?: boolean
    children: ReactNode
}
export type HelpText = ReactNode | HelpTextProperties

export interface LowLevelBaseComponentProperties {
    id?: string
    classNames?: Array<string>
    styles?: object

    elementProperties?: Mapping<unknown>

    helpText?: ReactNode | HelpText

    onClick?: (event: ReactMouseEvent) => void
    onKeyUp?: (event: ReactKeyboardEvent) => void
    onKeyDown?: (event: ReactKeyboardEvent) => void
    onBlur?: (event: SyntheticEvent) => void
    onFocus?: (event: ReactFocusEvent) => void
}

export interface CircularProgressProperties {
    size?: Size
}

export interface ErrorProperties {
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

export interface InputProperties extends LowLevelBaseComponentProperties {
    ref?: RefObject<InputReference | null>

    disabled?: boolean

    name: string

    onChange?: (event: SyntheticEvent) => void
}

export interface CheckboxProperties extends InputProperties {
    indeterminate?: boolean

    children?: ReactNode

    value: boolean
}

export type TextInputProperties = InputProperties

export interface SelectProperties extends TextInputProperties {
    options: NormalizedSelection

    value: unknown
}

export interface TypeTextInputProperties extends TextInputProperties {
    value?: string | number

    characterCount?: boolean

    invalid?: boolean

    required?: boolean
    maximumLength?: number
    minimumLength?: number

    label?: ReactNode
    placeholder?: string

    onLabelClick?: (event: ReactMouseEvent) => void
}

export interface TextFieldProperties extends TypeTextInputProperties {
    type?: NativeType

    maximum?: number
    minimum?: number

    step?: number

    leadingIcon?: IconProperties
    trailingIcon?: IconProperties
}

export interface TextAreaEventWrapper {
    blur: (event: object) => void
    focus: (event: object) => void
    input: (value: number | string, event: object) => void
}

export interface TextAreaReference extends InputReference {
    input: RefObject<HTMLTextAreaElement | null>
    label: RefObject<HTMLLabelElement | null>
    eventMapper: TextAreaEventWrapper
}

export interface TextAreaProperties extends TypeTextInputProperties {
    ref?: RefObject<TextAreaReference | null>

    classNamePrefix?: string

    resizeable?: boolean
    rows?: number

    // If provided the default textarea becomes readonly and hidden.
    children?: ReactNode
    barContentSlot?: ReactNode
}
// endregion
