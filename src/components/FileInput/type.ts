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
import {identity, ValueOf} from 'clientnode'
import PropertyTypes, {
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
} from 'clientnode/dist/property-types'
import {
    ElementType,
    ForwardRefExoticComponent,
    HTMLProps,
    MutableRefObject,
    ReactElement,
    ReactNode,
    RefAttributes
} from 'react'

import {
    ComponentAdapter, PropertiesValidationMap, ValidationMapping
} from 'web-component-wrapper/type'
import {ComponentProps as RMWCComponentProps} from '@rmwc/types'
import {CardMediaProps} from '@rmwc/card'

import {
    defaultInputModel,
    defaultInputProperties,
    InputAdapter,
    InputModel,
    inputPropertyTypes,
    InputProps,
    PartialInputModel
} from '../TextInput/type'
import {
    BaseModel,
    defaultModel,
    defaultModelState,
    defaultProperties,
    modelPropertyTypes,
    ModelState,
    modelStatePropertyTypes,
    Pattern,
    Properties,
    propertyTypes,
    State,
    StaticWebComponent,
    ValueState
} from '../../type'
// endregion
export type FileRepresentationType =
    'binary' | 'image' | 'embedableText' | 'text' | 'video'
export type BlobType = Blob | Buffer | string
export interface FileValue {
    blob?: Partial<BlobType>
    hash?: string
    name?: string
    source?: string
    url?: string
}
export interface FileInputValueState<
    Type extends FileValue = FileValue
> extends ValueState<Type, FileInputModelState> {
    attachBlobProperty: boolean
}

export interface FileInputModelState extends ModelState {
    invalidMaximumSize: boolean
    invalidMinimumSize: boolean

    invalidContentTypePattern: boolean
    invalidInvertedContentTypePattern: boolean

    invalidName: boolean
}
export interface FileInputModel<
    Type extends FileValue = FileValue
> extends BaseModel<null | Type> {
    contentTypePattern?: Pattern
    invertedContentTypePattern?: Pattern

    maximumSize: number
    minimumSize: number

    fileName: InputModel<string>

    state?: FileInputModelState
}

export interface FileInputChildrenOptions<
    P, Type extends FileValue = FileValue
> {
    declaration: string
    invalid: boolean
    properties: P
    value?: null | Type
}
export interface FileInputProperties<
    Type extends FileValue = FileValue, MediaTag extends ElementType = 'div'
> extends Properties<null | Type>, FileInputModelState {
    children?: (options: FileInputChildrenOptions<
        FileInputProperties<Type, MediaTag>, Type
    >) => ReactNode

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
        prototype: InputProps<string>,
        properties: FileInputProperties<Type, MediaTag>
    ) => InputProps<string> | null

    media: RMWCComponentProps<CardMediaProps, HTMLProps<HTMLElement>, MediaTag>

    model: FileInputModel<Type>

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
export type FileInputProps<Type extends FileValue = FileValue> =
    Partial<Omit<FileInputProperties<Type>, 'model'>> &
    {
        model?: (
            Partial<Omit<FileInputModel<Type>, 'fileName' | 'state'>> &
            {
                fileName?: PartialInputModel<string>
                state?: Partial<FileInputModelState>
            }
        )
    }

export type DefaultFileInputProperties<Type extends FileValue = FileValue> =
    Omit<FileInputProps<Type>, 'model'> & {model: FileInputModel<Type>}

export type FileInputPropertyTypes = {
    [key in keyof FileInputProperties]: ValueOf<typeof PropertyTypes>
}
export const fileInputRenderProperties: Array<string> =
    ['children', 'generateFileNameInputProperties']

export interface FileInputState<
    Type extends FileValue = FileValue
> extends State<Type> {
    modelState: FileInputModelState
}

export type FileInputAdapter<Type extends FileValue = FileValue> =
    ComponentAdapter<
        FileInputProperties<Type>, Omit<FileInputState<Type>, 'value'> &
        {value?: null | Type}
    >
export interface FileInputAdapterWithReferences extends FileInputAdapter {
    references: {
        deleteButtonReference: MutableRefObject<HTMLButtonElement | null>
        downloadLinkReference: MutableRefObject<HTMLAnchorElement | null>
        fileInputReference: MutableRefObject<HTMLInputElement | null>
        nameInputReference: MutableRefObject<InputAdapter<string> | null>
        uploadButtonReference: MutableRefObject<HTMLButtonElement | null>
    }
}

export interface FileInputComponent<Type> extends
    Omit<ForwardRefExoticComponent<FileInputProps>, 'propTypes'>,
    StaticWebComponent<Type, FileInputModelState, DefaultFileInputProperties>
{
    <T extends FileValue = FileValue>(
        props: FileInputProps<T> & RefAttributes<FileInputAdapter<T>>
    ): ReactElement
}
// region constants
export const dedicatedFileInputPropertyTypes: ValidationMapping = {
    contentTypePattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    invertedContentTypePattern:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),

    maximumSize: number,
    minimumSize: number
} as const
export const fileInputModelPropertyTypes: PropertiesValidationMap = {
    ...modelPropertyTypes,
    ...dedicatedFileInputPropertyTypes,

    fileName: shape<ValidationMap<ValueOf<typeof PropertyTypes>>>(
        inputPropertyTypes
    )
} as const
export const fileInputModelStatePropertyTypes: {
    [key in keyof FileInputModelState]: Requireable<boolean | symbol>
} = {
    ...modelStatePropertyTypes,

    invalidContentTypePattern: oneOfType([boolean, symbol]),
    invalidInvertedContentTypePattern: oneOfType([boolean, symbol]),

    invalidMaximumSize: oneOfType([boolean, symbol]),
    invalidMinimumSize: oneOfType([boolean, symbol]),

    invalidName: oneOfType([boolean, symbol])
} as const
export const fileInputPropertyTypes: PropertiesValidationMap = {
    ...propertyTypes,
    ...dedicatedFileInputPropertyTypes,
    ...fileInputModelStatePropertyTypes,

    children: func,

    contentTypePatternText:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    invertedContentTypePatternText:
        oneOfType([arrayOf(oneOfType([object, string])), object, string]),
    maximumSizeText: string,
    minimumSizeText: string,

    model: shape<ValidationMap<ValueOf<typeof PropertyTypes>>>(
        fileInputModelPropertyTypes
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
export const defaultFileInputModelState: FileInputModelState = {
    ...defaultModelState,
    invalidContentTypePattern: false,
    invalidInvertedContentTypePattern: false,

    invalidMaximumSize: false,
    invalidMinimumSize: false,

    invalidName: false
} as const
export const defaultFileInputModel: FileInputModel = {
    ...defaultModel as BaseModel<FileValue>,

    contentTypePattern: /^.+\/.+$/,
    invertedContentTypePattern: undefined,

    fileName: {
        ...defaultInputModel,
        maximumLength: 1024,
        name: 'Name',
        pattern: /^[^/]+$/
    },

    maximumSize: Infinity,
    minimumSize: 0,

    state: defaultFileInputModelState
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultFileNameInputProperties: InputProps<string> = {
    ...defaultInputProperties,

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
delete (defaultFileNameInputProperties as {model?: InputModel}).model
export const defaultFileInputProperties: DefaultFileInputProperties = {
    ...defaultProperties as unknown as Partial<DefaultFileInputProperties>,

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

    media: {
        sixteenByNine: true
    },

    model: {...defaultFileInputModel},

    sourceToBlobOptions: {endings: 'transparent', type: 'text/plain'},

    hashingConfiguration: {
        binaryString: false,
        prefix: '',
        readChunkSizeInByte: 2097152 // 2 MiB
    }
} as const
/// endregion
