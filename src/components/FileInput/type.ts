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

import {ComponentAdapter, ValidationMapping} from 'web-component-wrapper/type'
import {ComponentProps as RMWCComponentProps} from '@rmwc/types'
import {CardMediaProps} from '@rmwc/card'

import {
    defaultInputModel,
    defaultInputProperties,
    InputAdapter as BaseInputAdapter,
    InputModel as BaseInputModel,
    inputPropertyTypes,
    InputProps as BaseInputProps,
    PartialInputModel
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
// endregion
export type RepresentationType =
    'binary' | 'image' | 'embedableText' | 'text' | 'video'
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
    BaseModel<null | Type>
{
    contentTypePattern?: Pattern
    invertedContentTypePattern?: Pattern

    maximumSize: number
    minimumSize: number

    fileName: BaseInputModel<string>

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
    children?: (options: ChildrenOptions<
        Properties<Type, MediaTag>, Type
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
        prototype: BaseInputProps<string>,
        properties: Properties<Type, MediaTag>
    ) => BaseInputProps<string> | null

    media: RMWCComponentProps<CardMediaProps, HTMLProps<HTMLElement>, MediaTag>

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
                fileName?: PartialInputModel<string>
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
export interface AdapterWithReferences extends Adapter {
    references: {
        deleteButtonReference: MutableRefObject<HTMLButtonElement | null>
        downloadLinkReference: MutableRefObject<HTMLAnchorElement | null>
        fileInputReference: MutableRefObject<HTMLInputElement | null>
        nameInputReference: MutableRefObject<BaseInputAdapter<string> | null>
        uploadButtonReference: MutableRefObject<HTMLButtonElement | null>
    }
}

export interface InputComponent<Type> extends
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
        inputPropertyTypes
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
        ...defaultInputModel,
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
export const defaultFileNameInputProperties: BaseInputProps<string> = {
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
delete (defaultFileNameInputProperties as {model?: BaseInputModel}).model
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

    media: {
        sixteenByNine: true
    },

    model: {...defaultModel},

    sourceToBlobOptions: {endings: 'transparent', type: 'text/plain'},

    hashingConfiguration: {
        binaryString: false,
        prefix: '',
        readChunkSizeInByte: 2097152 // 2 MiB
    }
} as const
/// endregion
