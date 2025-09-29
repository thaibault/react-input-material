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
import {identity, Mapping, ValueOf} from 'clientnode'
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
    symbol,
    ValidationMap
} from 'clientnode/property-types'
import {
    ElementType,
    ForwardRefExoticComponent,
    ReactElement,
    ReactNode,
    RefAttributes,
    RefObject
} from 'react'

import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'

import {
    defaultInputModel as defaultTextInputModel,
    defaultProperties as defaultTextInputProperties,
    Adapter as TextInputAdapter,
    Model as TextInputModel,
    propertyTypes as textInputPropertyTypes,
    Props as TextInputProps,
    PartialModel as PartialTextInputModel
} from '../TextInput/type'
import {
    BaseModel,
    defaultModel as baseDefaultModel,
    defaultModelState as baseDefaultModelState,
    defaultProperties as baseDefaultProperties,
    modelPropertyTypes as baseModelPropertyTypes,
    ModelState as BaseModelState,
    modelStatePropertyTypes as baseModelStatePropertyTypes,
    Pattern,
    Properties as BaseProperties,
    propertyTypes as basePropertyTypes,
    State as BaseState,
    StaticWebComponent,
    ValueState as BaseValueState
} from '../../type'
import {MediaCardReference} from '../../implementations/type'
// endregion
export enum RepresentationType {
    BINARY = 'binary',
    IMAGE = 'image',
    EMBEDABLE_TEXT = 'embedableText',
    TEXT = 'text',
    VIDEO = 'video'
}
export type BlobType = Blob | Buffer | string
export interface Value {
    blob?: Partial<BlobType>
    hash?: string
    name?: string
    source?: string
    url?: string
}
export interface ValueState<Type extends Value = Value> extends
    BaseValueState<Type, ModelState>
{
    attachBlobProperty: boolean
}

export interface ModelState extends BaseModelState {
    invalidMaximumSize: boolean
    invalidMinimumSize: boolean

    invalidContentTypePattern: boolean
    invalidInvertedContentTypePattern: boolean

    invalidName: boolean
}
export interface Model<Type extends Value = Value> extends
    Omit<BaseModel<null | Type>, 'default'>
{
    default?: Mapping<Type>

    contentTypePattern?: Pattern
    invertedContentTypePattern?: Pattern

    maximumSize: number
    minimumSize: number

    fileName: TextInputModel<string>

    state?: ModelState
}

export interface ChildrenOptions<P, Type extends Value = Value> {
    declaration: string
    invalid: boolean
    properties: P
    value?: null | Type
}
export interface Properties<
    Type extends Value = Value, MediaTag extends ElementType = 'div'
> extends BaseProperties<null | Type>, ModelState {
    default?: Mapping<Type>

    children?: (options: ChildrenOptions<
        Properties<Type, MediaTag>, Type
    >) => ReactNode

    fileInputClassNames?: Array<string>
    imageClassNames?: Array<string>

    contentTypePattern: Array<RegExp | string> | null | RegExp | string
    invertedContentTypePattern: Array<RegExp | string> | null | RegExp | string

    contentTypePatternText: string
    invertedContentTypePatternText: string
    maximumSizeText: string
    minimumSizeText: string

    deleteButton: ReactNode
    downloadButton: ReactNode
    editButton: ReactNode
    newButton: ReactNode

    encoding: string

    generateFileNameInputProperties: (
        prototype: TextInputProps<string>,
        properties: Properties<Type, MediaTag>
    ) => TextInputProps<string> | null

    model: Model<Type>

    outlined: boolean

    sourceToBlobOptions?: {
        endings?: 'native' | 'transparent'
        type?: string
    }

    hashingConfiguration: {
        binaryString: boolean
        prefix: string
        readChunkSizeInByte: number
    }
}
export type Props<Type extends Value = Value> =
    Partial<Omit<Properties<Type>, 'model'>> &
    {
        model?: (
            Partial<Omit<Model<Type>, 'fileName' | 'state'>> &
            {
                fileName?: PartialTextInputModel<string>
                state?: Partial<ModelState>
            }
        )
    }

export type DefaultProperties<Type extends Value = Value> =
    Omit<Props<Type>, 'model'> & {model: Model<Type>}

export type PropertyTypes = {
    [key in keyof Properties]: ValueOf<typeof BasePropertyTypes>
}
export const renderProperties: Array<string> =
    ['children', 'generateFileNameInputProperties']

export interface State<Type extends Value = Value> extends BaseState<Type> {
    modelState: ModelState
}

export type Adapter<Type extends Value = Value> =
    ComponentAdapter<
        Properties<Type>, Omit<State<Type>, 'value'> &
        {value?: null | Type}
    >
export interface AdapterWithReferences<
    Type extends Value = Value
> extends Adapter<Type> {
    references: {
        fileInput: RefObject<HTMLInputElement | null>
        mediaCard: RefObject<MediaCardReference | null>
        nameInput: RefObject<TextInputAdapter<string> | null>
    }
}

export interface Component<Type> extends
    Omit<ForwardRefExoticComponent<Props>, 'propTypes'>,
    StaticWebComponent<Type, ModelState, DefaultProperties>
{
    <T extends Value = Value>(
        props: Props<T> & RefAttributes<Adapter<T>>
    ): ReactElement
}
// region constants
export const dedicatedPropertyTypes: ValidationMapping = {
    contentTypePattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    invertedContentTypePattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),

    maximumSize: number,
    minimumSize: number
} as const
export const modelPropertyTypes: ValidationMapping = {
    ...baseModelPropertyTypes,
    ...dedicatedPropertyTypes,

    fileName: shape<ValidationMap<ValueOf<typeof BasePropertyTypes>>>(
        textInputPropertyTypes
    )
} as const
export const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>
} = {
    ...baseModelStatePropertyTypes,

    invalidContentTypePattern: oneOfType([boolean, symbol]),
    invalidInvertedContentTypePattern: oneOfType([boolean, symbol]),

    invalidMaximumSize: oneOfType([boolean, symbol]),
    invalidMinimumSize: oneOfType([boolean, symbol]),

    invalidName: oneOfType([boolean, symbol])
} as const
export const propertyTypes: ValidationMapping = {
    ...basePropertyTypes,
    ...dedicatedPropertyTypes,
    ...modelStatePropertyTypes,

    children: func,

    contentTypePatternText:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    invertedContentTypePatternText:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    maximumSizeText: string,
    minimumSizeText: string,

    model: shape<ValidationMap<ValueOf<typeof BasePropertyTypes>>>(
        modelPropertyTypes
    ),

    deleteButton: oneOfType([object, string]),
    downloadButton: oneOfType([object, string]),
    editButton: oneOfType([object, string]),
    newButton: oneOfType([object, string]),

    encoding: string,

    generateFileNameInputProperties: func,

    onBlur: func,

    outlined: boolean
} as const
export const defaultModelState: ModelState = {
    ...baseDefaultModelState,
    invalidContentTypePattern: false,
    invalidInvertedContentTypePattern: false,

    invalidMaximumSize: false,
    invalidMinimumSize: false,

    invalidName: false
} as const
export const defaultModel: Model = {
    ...baseDefaultModel as BaseModel<Value>,

    contentTypePattern: /^.+\/.+$/,
    invertedContentTypePattern: undefined,

    fileName: {
        ...defaultTextInputModel,
        maximumLength: 1024,
        name: 'Name',
        pattern: /^[^/]+$/
    },

    maximumSize: Infinity,
    minimumSize: 0,

    state: defaultModelState
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultFileNameInputProperties: TextInputProps<string> = {
    ...defaultTextInputProperties,

    emptyEqualsNull: false,

    invertedPatternText:
        'Your file\'s name should not match the regular expression' +
        '${[].concat(invertedPattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(invertedPattern).join("\\", \\"")}".',
    patternText:
        'Your file\'s name has to match the regular expression' +
        '${[].concat(pattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(pattern).join("\\", \\"")}".',

    required: true
} as const
delete (defaultFileNameInputProperties as {model?: TextInputModel}).model
export const defaultProperties: DefaultProperties = {
    ...baseDefaultProperties as unknown as Partial<DefaultProperties>,

    contentTypePatternText:
        'Your file\'s mime-type has to match the regular expression' +
        '${[].concat(contentTypePattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(contentTypePattern).join("\\", \\"")}".',
    invertedContentTypePatternText:
        'Your file\'s mime-type should not match the regular expression' +
        '${[].concat(invertedContentTypePattern).length > 1 ? "s" : ""}: ' +
        '"${[].concat(invertedContentTypePattern).join("\\", \\"")}".',
    maximumSizeText:
        'Please provide a file with less or equal size than ${maximumSize} ' +
        'byte.',
    minimumSizeText:
        'Please provide a file with more or equal size than ${maximumSize} ' +
        'byte.',
    requiredText: 'Please select a file.',

    deleteButton: 'delete',
    downloadButton: 'download',
    editButton: 'edit',
    newButton: 'new',

    encoding: 'utf-8',

    generateFileNameInputProperties: identity,

    model: {...defaultModel},

    sourceToBlobOptions: {endings: 'transparent', type: 'text/plain'},

    hashingConfiguration: {
        binaryString: false,
        prefix: '',
        readChunkSizeInByte: 2097152 // 2 MiB
    }
} as const
/// endregion
