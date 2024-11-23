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
import {LanguageSupport} from '@codemirror/language'
import {JSONContent} from '@tiptap/core'

import {Mapping, PlainObject, RecursivePartial, ValueOf} from 'clientnode'
import PropertyTypes, {
    any,
    arrayOf,
    boolean,
    func,
    number,
    object,
    oneOfType,
    Requireable,
    shape,
    string,
    symbol
} from 'clientnode/dist/property-types'
import {
    FocusEvent as ReactFocusEvent,
    ForwardRefExoticComponent,
    KeyboardEvent,
    MouseEvent,
    MutableRefObject,
    ReactElement,
    ReactNode,
    RefAttributes
} from 'react'
import {GenericEvent} from 'react-generic-tools/type'

import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'

import {MDCMenuFoundation} from '@material/menu'
import {MDCSelectFoundation} from '@material/select'
import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'

import {MenuApi} from '@rmwc/menu'
import {
    FormattedOption as FormattedSelectionOption, SelectProps
} from '@rmwc/select'
import {TextFieldProps} from '@rmwc/textfield'
import {TooltipProps} from '@rmwc/tooltip'
import {IconOptions} from '@rmwc/types'

import {ChainedCommands, type EditorOptions, Extensions} from '@tiptap/core'
import {EditorEvents} from '@tiptap/react'
import {StarterKitOptions} from '@tiptap/starter-kit'

import {
    BaseModel,
    CursorState,
    defaultModel,
    defaultModelState,
    defaultProperties,
    ModelState,
    modelStatePropertyTypes,
    Properties,
    propertyTypes,
    State,
    StaticWebComponent,
    ValueState
} from '../../type'
// endregion
// region data transformation
export type Transformer<T = unknown> = (
    value: T,
    transformer: InputDataTransformation,
    configuration: DefaultInputProperties<T>
) => string
export interface FormatSpecification<T = unknown> {
    options?: PlainObject
    transform?: Transformer<T>
}
export interface FormatSpecifications<T = unknown> {
    final: FormatSpecification<T>
    intermediate?: FormatSpecification<T>
}
export interface DataTransformSpecification<
    T = unknown, InputType = number | string
> {
    format?: FormatSpecifications<T>
    parse?: (
        value: InputType,
        transformer: InputDataTransformation,
        configuration: DefaultInputProperties<T>
    ) => T
    type?: NativeInputType,
}
export interface DateTransformSpecification
    extends
DataTransformSpecification<number | string, Date | number | string> {
    useISOString: boolean
}
export type InputDataTransformation =
    {
        boolean: DataTransformSpecification<boolean>

        currency: DataTransformSpecification<number, string>

        date: DateTransformSpecification
        'date-local': DataTransformSpecification<
            number | string, Date | number | string
        >

        datetime: DataTransformSpecification<
            number | string, Date | number | string
        >
        'datetime-local': DataTransformSpecification<
            number | string, Date | number | string
        >

        time: DataTransformSpecification<
            number | string, Date | number | string
        >
        'time-local': DataTransformSpecification<
            number | string, Date | number | string
        >

        float: DataTransformSpecification<number, string>
        integer: DataTransformSpecification<number, string>
        number: DataTransformSpecification<number, number>

        string?: DataTransformSpecification
    } &
    /* eslint-disable @typescript-eslint/consistent-indexed-object-style */
    {
        [key in Exclude<
            NativeInputType,
            (
                'date' | 'date-local' |
                'datetime' | 'datetime-local' |
                'time' | 'time-local' |
                'number'
            )
        >]?: DataTransformSpecification
    }
    /* eslint-enable @typescript-eslint/consistent-indexed-object-style */
// endregion
export interface EditorProperties
    extends
Omit<NonNullable<TextFieldProps>, 'textarea' | 'value'> {
    id: string
    value: number | string

    minLength: number
    maxLength: number
    rows: number

    onChange: (value: string, contentTree?: JSONContent) => void
}

export interface EditorWrapperEventWrapper {
    blur: (event: object) => void
    focus: (event: object) => void
    input: (value: number | string, event: object) => void
}
export interface EditorWrapperProps extends Partial<EditorProperties> {
    eventMapper: MutableRefObject<EditorWrapperEventWrapper | null>

    materialTextField?: MutableRefObject<MDCTextField | null>
    mdcTextFieldReference?: MutableRefObject<HTMLLabelElement | null>
    textareaReference?: MutableRefObject<HTMLTextAreaElement | null>

    children: ReactNode
    barContentSlot?: ReactNode

    classNamePrefix: string

    onLabelClick?: (event: MouseEvent<HTMLLabelElement>) => void
}

export interface RichTextEditorButtonProps {
    action: (command: ChainedCommands) => ChainedCommands,

    activeIndicator?: string,
    enabledIndicator?: null | ((command: ChainedCommands) => ChainedCommands),

    checkedIconName?: string,
    iconName: string,

    label?: string
}
export interface TiptapProperties extends EditorProperties {
    onBlur: (event: EditorEvents['focus']) => void
    onFocus: (event: EditorEvents['focus']) => void

    editor: {
        options?: Partial<EditorOptions>
        extensions?: Extensions
        starterKitOptions?: Partial<StarterKitOptions>
    }
}
export type TiptapProps = Partial<TiptapProperties>

export interface CodeMirrorProperties extends EditorProperties {
    onBlur: (event: ReactFocusEvent<HTMLDivElement>) => void
    onFocus: (event: ReactFocusEvent<HTMLDivElement>) => void

    editor: {
        mode?: LanguageSupport
    }
}
export type CodeMirrorProps = Partial<CodeMirrorProperties>


export type InputSelection =
    Array<boolean | number | null> |
    Array<[boolean | number | string | null, string]> |
    NormalizedSelection |
    SelectProps['options']
export type NormalizedSelection =
    Array<Omit<FormattedSelectionOption, 'value'> & {value: unknown}>

export interface InputModelState extends ModelState {
    invalidMaximum: boolean
    invalidMinimum: boolean

    invalidMaximumLength: boolean
    invalidMinimumLength: boolean

    invalidInvertedPattern: boolean
    invalidPattern: boolean
}
export interface InputModel<T = unknown> extends BaseModel<T> {
    state?: InputModelState
}
export type PartialInputModel<T = unknown> =
    Partial<Omit<InputModel<T>, 'state'>> &
    {state?: Partial<InputModelState>}
export interface InputValueState<T = unknown, MS = ModelState> extends
    ValueState<T, MS>
{
    representation?: ReactNode
}
export type NativeInputType = (
    'date' |
    'datetime-local' |
    'time' |
    'week' |
    'month' |
    'number' |
    'range' |
    'text'
)
export type TextInputType = (
    'date-local' |
    'datetime' |
    'time-local' |
    'boolean' |
    'currency' |
    'float' |
    'integer' |
    'string' |
    NativeInputType
)
export interface InputChildrenOptions<P, T> {
    index: number
    normalizedSelection?: NormalizedSelection | null
    properties: P
    query: string
    suggestion: ReactNode | string
    value: T
}
export interface SuggestionCreatorOptions<P> {
    abortController: AbortController
    properties: P
    query: string
}
/*
    plain -> input field
    text -> textarea
    richtext(raw) -> texteditor without formatting
    richtext(simple) -> texteditor with semantic text modifications
    richtext(normal) -> texteditor with additional text formatting
    richtext(advanced) -> texteditor with advanced text formatting
*/
export type Editor = (
    'code' |

    'code(css)' |
    'code(cascadingstylesheet)' |
    'code(cascadingstylesheets)' |
    'code(style)' |
    'code(styles)' |

    'code(script)' |
    'code(js)' |
    'code(jsx)' |
    'code(javascript)' |

    'code(ts)' |
    'code(tsx)' |
    'code(typescript)' |

    'plain' |
    'text' |
    'richtext'
)
export interface InputProperties<T = unknown> extends
    InputModelState, Properties<T>
{
    align: 'end' | 'start'
    children: (options: InputChildrenOptions<this, T>) => null | ReactElement
    cursor: Partial<CursorState> | null

    editor: Editor
    editorIsActive: boolean
    editorIsInitiallyActive: boolean

    hidden?: boolean

    icon: string | (IconOptions & {tooltip?: string | TooltipProps})
    trailingIcon: string | (IconOptions & {tooltip?: string | TooltipProps})

    inputProperties: Partial<
        CodeMirrorProps | TiptapProps | SelectProps | TextFieldProps
    >
    inputProps?: Mapping<boolean | number | string>

    invertedPattern: Array<RegExp | string> | null | RegExp | string
    invertedPatternText: string

    labels: Array<[string, string]> | Array<string> | Mapping

    maximumLengthText: string
    minimumLengthText: string

    maximumText: string
    minimumText: string

    model: InputModel<T>

    onChangeEditorIsActive: (
        isActive: boolean, event: MouseEvent | undefined, properties: this
    ) => void
    onKeyDown: (event: KeyboardEvent, properties: this) => void
    onKeyUp: (event: KeyboardEvent, properties: this) => void
    onSelect: (event: GenericEvent, properties: this) => void
    onSelectionChange: (event: GenericEvent, properties: this) => void

    outlined: boolean

    pattern: Array<RegExp | string> | null | RegExp | string
    patternText: string

    placeholder: string
    representation: ReactNode | string

    rows: number

    searchSelection: boolean
    selectableEditor: boolean

    step: number

    suggestionCreator?: (options: SuggestionCreatorOptions<this>) =>
        InputProperties['selection'] | Promise<InputProperties['selection']>
    suggestSelection: boolean

    transformer: RecursivePartial<DataTransformSpecification<
        T, Date | number | string
    >>
}
export type InputProps<T = unknown> =
    Partial<Omit<InputProperties<T>, 'model'>> &
    {model?: PartialInputModel<T>}

export type DefaultInputProperties<T = string> =
    Omit<InputProps<T>, 'model'> & {model: InputModel<T>}

export type InputPropertyTypes<T = unknown> = {
    [key in keyof InputProperties<T>]: ValueOf<typeof PropertyTypes>
}

export interface InputState<T = unknown> extends State<T> {
    cursor: CursorState
    editorIsActive: boolean
    hidden?: boolean
    modelState: InputModelState
    representation?: ReactNode | string
    selectionIsUnstable: boolean
    showDeclaration: boolean
}

// NOTE: We hold "selectionIsUnstable" state value as internal private one.
export type InputAdapter<T = unknown> = ComponentAdapter<
    InputProperties<T>,
    Omit<InputState<T>, 'representation' | 'selectionIsUnstable' | 'value'> &
    {
        representation?: ReactNode | string
        value?: null | T
    }
>
export interface InputAdapterWithReferences<T = unknown> extends
    InputAdapter<T>
{
    references: {
        foundationReference: MutableRefObject<
            MDCSelectFoundation | MDCTextFieldFoundation | null
        >
        inputReference: MutableRefObject<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null
        >
        suggestionMenuAPIReference: MutableRefObject<MenuApi | null>
        suggestionMenuFoundationReference: MutableRefObject<
            MDCMenuFoundation | null
        >
        wrapperReference: MutableRefObject<HTMLDivElement | null>
    }
}

export interface TextInputComponent<Type> extends
    Omit<ForwardRefExoticComponent<InputProps>, 'propTypes'>,
    StaticWebComponent<Type, InputModelState, DefaultInputProperties>
{
    <T = string>(
        props: InputProps<T> & RefAttributes<InputAdapter<T>>
    ): ReactElement

    locales: Array<string>
    transformer: InputDataTransformation
}
// region constants
export const inputModelStatePropertyTypes: {
    [key in keyof InputModelState]: Requireable<boolean | symbol>
} = {
    ...modelStatePropertyTypes,

    invalidMaximum: oneOfType([boolean, symbol]),
    invalidMinimum: oneOfType([boolean, symbol]),

    invalidMaximumLength: oneOfType([boolean, symbol]),
    invalidMinimumLength: oneOfType([boolean, symbol]),

    invalidInvertedPattern: oneOfType([boolean, symbol]),
    invalidPattern: oneOfType([boolean, symbol])
} as const
export const inputPropertyTypes: ValidationMapping = {
    ...propertyTypes,
    ...inputModelStatePropertyTypes,
    /*
        NOTE: Not yet working:
        align: oneOf(['end', 'start']),
    */
    align: string,
    children: func,
    cursor: oneOfType([
        shape({
            end: number.isRequired,
            start: number.isRequired
        }),
        symbol
    ]),
    /*
        NOTE: Not yet working:
        editor: oneOf([
            'code',
            'code(css)',
            'code(script)',
            'plain',
            'text',
            'richtext(raw)',
            'richtext(simple)',
            'richtext(normal)',
            'richtext(advanced)'
        ]),
    */
    editor: string,
    editorIsActive: oneOfType([boolean, symbol]),
    hidden: oneOfType([boolean, symbol]),
    /*
        NOTE: Not yet working:
        icon: string | (IconOptions & {tooltip?: string | TooltipProps})
    */
    icon: oneOfType([string, object]),
    inputProps: object,
    invertedPattern: oneOfType(
        [arrayOf(oneOfType([object, string])), object, string]
    ),
    invertedPatternText: string,
    labels: oneOfType([arrayOf(arrayOf(string)), arrayOf(string), object]),
    maximum: oneOfType([number, string]),
    maximumLengthText: string,
    maximumText: string,
    minimum: oneOfType([number, string]),
    minimumLengthText: string,
    minimumText: string,
    onBlur: func,
    onChangeEditorIsActive: func,
    onKeyDown: func,
    onKeyUp: func,
    onSelect: func,
    onSelectionChange: func,
    outlined: boolean,
    pattern: oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    patternText: string,
    placeholder: string,
    representation: oneOfType([string, symbol]),
    rows: number,
    searchSelection: boolean,
    selectableEditor: boolean,
    step: number,
    suggestionCreator: func,
    suggestSelection: boolean,
    trailingIcon: any,
    transformer: object
} as const
export const textInputRenderProperties: Array<string> =
    ['children', 'suggestionCreator']
export const defaultInputModelState: InputModelState = {
    ...defaultModelState,

    invalidMaximum: false,
    invalidMinimum: false,

    invalidMaximumLength: false,
    invalidMinimumLength: false,

    invalidInvertedPattern: false,
    invalidPattern: false
} as const
export const defaultInputModel: InputModel<string> = {
    ...defaultModel as InputModel<string>,
    state: defaultInputModelState
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultInputProperties: DefaultInputProperties = {
    ...defaultProperties as DefaultInputProperties,

    cursor: {
        end: 0,
        start: 0
    },

    editor: 'plain',
    selectableEditor: false,
    rows: 4,

    invertedPatternText:
        'Your string should not match the regular expression' +
        '${[].concat(invertedPattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(invertedPattern).join("\\", \\"")}".',

    maximumLengthText:
        'Please type less or equal than ${maximumLength} symbols.',
    minimumLengthText:
        'Please type at least or equal ${minimumLength} symbols.',

    maximumText: 'Please type less or equal than ${formatValue(maximum)}.',
    minimumText: 'Please type at least or equal ${formatValue(minimum)}.',

    model: {...defaultInputModel},

    patternText:
        'Your string have to match the regular expression' +
        '${[].concat(pattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(pattern).join("\\", \\"")}".',

    searchSelection: false,
    suggestSelection: false,

    step: 1
} as const
// endregion
