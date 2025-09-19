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
import BasePropertyTypes, {
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
} from 'clientnode/property-types'
import {
    FocusEvent as ReactFocusEvent,
    ForwardRefExoticComponent,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    ReactNode,
    RefAttributes,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject
} from 'react'
import {GenericEvent} from 'react-generic-tools/type'

import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'

import {MDCMenuFoundation} from '@material/menu'

import {MenuApi} from '@rmwc/menu'
import {
    FormattedOption as FormattedSelectionOption, SelectProps
} from '@rmwc/select'

import {ChainedCommands, type EditorOptions, Extensions} from '@tiptap/core'
import {EditorEvents} from '@tiptap/react'
import {StarterKitOptions} from '@tiptap/starter-kit'

import {
    IconProperties,
    InputReference, SelectProperties,
    TextAreaProperties, TextFieldProperties
} from '../../implementations/type'
import {
    BaseModel,
    CursorState,
    defaultModel as baseDefaultModel,
    defaultModelState as baseDefaultModelState,
    defaultProperties as baseDefaultProperties,
    ModelState as BaseModelState,
    modelStatePropertyTypes as baseModelStatePropertyTypes,
    Properties as BaseProperties,
    propertyTypes as basePropertyTypes,
    State as BaseState,
    StaticWebComponent,
    ValueState as BaseValueState
} from '../../type'
import {
    Reference as InputEventMapperReference
} from './InputEventMapperWrapper'
// endregion
// region data transformation
export type Transformer<T = unknown> = (
    value: T,
    transformer: DataTransformation,
    configuration: DefaultProperties<T>
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
        transformer: DataTransformation,
        configuration: DefaultProperties<T>
    ) => T
    type?: NativeType,
}
export interface DateTransformSpecification
    extends
DataTransformSpecification<number | string, Date | number | string> {
    useISOString: boolean
}
export type DataTransformation =
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
            NativeType,
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
export interface EditorReference {
    input: RefObject<InputEventMapperReference | null>
}

export interface EditorProperties
    extends
Omit<NonNullable<TextAreaProperties>, 'onChange' | 'textarea' | 'value'> {
    id: string
    value: number | string

    minimumLength: number
    maximumLength: number
    rows: number

    onChange: (value: string, contentTree?: JSONContent) => void
}

export interface RichTextEditorButtonProps {
    action: (command: ChainedCommands) => ChainedCommands,

    activeIndicator?: string,
    enabledIndicator?: null | ((command: ChainedCommands) => ChainedCommands),

    checkedIconName?: string,
    iconName: string,

    label?: string
}
export interface TiptapProperties extends
    Omit<EditorProperties, 'onBlur' | 'onFocus'>
{
    onBlur: (event: EditorEvents['focus']) => void
    onFocus: (event: EditorEvents['focus']) => void

    editor: {
        options?: Partial<EditorOptions>
        extensions?: Extensions
        starterKitOptions?: Partial<StarterKitOptions>
    }
}
export type TiptapProps = Partial<TiptapProperties>

export interface CodeMirrorProperties extends
    Omit<EditorProperties, 'onBlur' | 'onFocus'>
{
    onBlur: (event: ReactFocusEvent<HTMLDivElement>) => void
    onFocus: (event: ReactFocusEvent<HTMLDivElement>) => void

    editor: {
        mode?: LanguageSupport
    }
}
export type CodeMirrorProps = Partial<CodeMirrorProperties>

export type Selection =
    Array<boolean | number | null> |
    Array<[boolean | number | string | null, string]> |
    NormalizedSelection |
    SelectProps['options']
export type NormalizedSelection =
    Array<Omit<FormattedSelectionOption, 'value'> & {value: unknown}>

export interface ModelState extends BaseModelState {
    invalidMaximum: boolean
    invalidMinimum: boolean

    invalidMaximumLength: boolean
    invalidMinimumLength: boolean

    invalidInvertedPattern: boolean
    invalidPattern: boolean
}
export interface Model<T = unknown> extends BaseModel<T> {
    default?: T
    state?: ModelState
}
export type PartialModel<T = unknown> =
    Partial<Omit<Model<T>, 'state'>> &
    {state?: Partial<ModelState>}
export interface ValueState<T = unknown, MS = BaseModelState> extends
    BaseValueState<T, MS>
{
    representation?: ReactNode
}
export type NativeType = (
    'date' |
    'datetime-local' |
    'time' |
    'week' |
    'month' |
    'number' |
    'range' |
    'text'
)
export type Type = (
    'date-local' |
    'datetime' |
    'time-local' |
    'boolean' |
    'currency' |
    'float' |
    'integer' |
    'string' |
    NativeType
)
export interface ChildrenOptions<P, T> {
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
export type EditorType = (
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
export interface Properties<Type = unknown> extends
    ModelState, BaseProperties<Type>
{
    default?: Type

    align: 'end' | 'start'
    children: (options: ChildrenOptions<this, Type>) => null | ReactElement
    cursor: Partial<CursorState> | null

    editor: EditorType
    editorIsActive: boolean
    editorIsInitiallyActive: boolean

    hidden?: boolean

    leadingIcon: string | (IconProperties & {tooltip?: string})
    trailingIcon: string | (IconProperties & {tooltip?: string})

    domNodeProperties: Partial<
        CodeMirrorProps |
        SelectProperties<Type> |
        TiptapProps |
        TextAreaProperties |
        TextFieldProperties |
        Mapping<unknown>
    >
    attributes?: Mapping<boolean | number | string>

    invertedPattern: Array<RegExp | string> | null | RegExp | string
    invertedPatternText: string

    labels: Array<[string, string]> | Array<string> | Mapping

    maximumLengthText: string
    minimumLengthText: string

    maximumText: string
    minimumText: string

    model: Model<Type>

    onChangeEditorIsActive: (
        isActive: boolean, event: MouseEvent | undefined, properties: this
    ) => void
    onKeyDown: (event: KeyboardEvent, properties: this) => void
    onKeyUp: (event: KeyboardEvent, properties: this) => void
    onSelect: (event: GenericEvent, properties: this) => void
    onSelectionChange: (event: GenericEvent, properties: this) => void

    pattern: Array<RegExp | string> | null | RegExp | string
    patternText: string

    placeholder: string
    representation: ReactNode | string

    rows: number

    searchSelection: boolean
    selectableEditor: boolean

    step: number

    suggestionCreator?: (options: SuggestionCreatorOptions<this>) =>
        Properties['selection'] | Promise<Properties['selection']>
    suggestSelection: boolean

    transformer: RecursivePartial<DataTransformSpecification<
        Type, Date | number | string
    >>
}
export type Props<T = unknown> =
    Partial<Omit<Properties<T>, 'model'>> &
    {model?: PartialModel<T>}

export type DefaultProperties<T = string> =
    Omit<Props<T>, 'model'> & {model: Model<T>}

export type PropertyTypes<T = unknown> = {
    [key in keyof Properties<T>]: ValueOf<typeof BasePropertyTypes>
}

export interface State<T = unknown> extends BaseState<T> {
    cursor: CursorState
    editorIsActive: boolean
    hidden?: boolean
    modelState: ModelState
    representation?: ReactNode | string
    selectionIsUnstable: boolean
    showDeclaration: boolean
}

// NOTE: We hold "selectionIsUnstable" state value as internal private one.
export type Adapter<T = unknown> = ComponentAdapter<
    Properties<T>,
    Omit<State<T>, 'representation' | 'selectionIsUnstable' | 'value'> &
    {
        representation?: ReactNode | string
        value?: null | T
    }
>
export interface AdapterWithReferences<T = unknown> extends Adapter<T> {
    references: {
        inputReference: RefObject<
            InputReference | InputEventMapperReference | null
        >
        suggestionMenuAPIReference: RefObject<MenuApi | null>
        suggestionMenuFoundationReference: RefObject<
            MDCMenuFoundation | null
        >
        wrapperReference: RefObject<HTMLDivElement | null>
    }
}

export interface Component<Type> extends
    Omit<ForwardRefExoticComponent<Props>, 'propTypes'>,
    StaticWebComponent<Type, ModelState, DefaultProperties>
{
    <T = unknown>(props: Props<T> & RefAttributes<Adapter<T>>): ReactElement

    locales: Array<string>
    transformer: DataTransformation
}
// region constants
export const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>
} = {
    ...baseModelStatePropertyTypes,

    invalidMaximum: oneOfType([boolean, symbol]),
    invalidMinimum: oneOfType([boolean, symbol]),

    invalidMaximumLength: oneOfType([boolean, symbol]),
    invalidMinimumLength: oneOfType([boolean, symbol]),

    invalidInvertedPattern: oneOfType([boolean, symbol]),
    invalidPattern: oneOfType([boolean, symbol])
} as const
export const propertyTypes: ValidationMapping = {
    ...basePropertyTypes,
    ...modelStatePropertyTypes,
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
            'code(cascadingstylesheet)',
            'code(cascadingstylesheets)',
            'code(style)',
            'code(styles)',

            'code(script)',
            'code(js)',
            'code(jsx)',
            'code(javascript)',

            'code(ts)',
            'code(tsx)',
            'code(typescript)',

            'plain',
            'text',
            'richtext'
        ]),
    */
    editor: string,
    editorIsActive: oneOfType([boolean, symbol]),
    editorIsInitiallyActive: boolean,

    hidden: oneOfType([boolean, symbol]),

    icon: oneOfType([string, object]),
    trailingIcon: oneOfType([string, object]),

    attributes: object,

    invertedPattern: oneOfType(
        [arrayOf(oneOfType([object, string])), object, string]
    ),
    invertedPatternText: string,

    labels: oneOfType([arrayOf(arrayOf(string)), arrayOf(string), object]),

    maximum: oneOfType([number, string]),
    maximumLength: number,

    minimum: oneOfType([number, string]),
    minimumLength: number,

    maximumLengthText: string,
    minimumLengthText: string,

    maximumText: string,
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

    transformer: object
} as const
export const renderProperties: Array<string> =
    ['children', 'suggestionCreator']
export const defaultModelState: ModelState = {
    ...baseDefaultModelState,

    invalidMaximum: false,
    invalidMinimum: false,

    invalidMaximumLength: false,
    invalidMinimumLength: false,

    invalidInvertedPattern: false,
    invalidPattern: false
} as const
export const defaultInputModel: Model<string> = {
    ...baseDefaultModel as Model<string>,
    state: defaultModelState
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultProperties: DefaultProperties = {
    ...baseDefaultProperties as DefaultProperties,

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
