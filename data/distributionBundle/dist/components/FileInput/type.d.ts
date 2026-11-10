import type { Mapping, ValueOf } from 'clientnode';
import type BasePropertyTypes from 'clientnode/property-types';
import type { Requireable } from 'clientnode/property-types';
import type { ElementType, ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes } from 'react';
import type { ComponentAdapter, ValidationMapping } from 'web-component-wrapper/type';
import type { MediaCardReference } from '../../implementations/type';
import type { BaseModel, ModelState as BaseModelState, Pattern, Properties as BaseProperties, State as BaseState, StaticWebComponent, ValueState as BaseValueState } from '../../type';
import type { Adapter as TextInputAdapter, Model as TextInputModel, Props as TextInputProps, PartialModel as PartialTextInputModel } from '../TextInput/type';
export declare enum RepresentationType {
    BINARY = "binary",
    IMAGE = "image",
    EMBEDABLE_TEXT = "embedableText",
    TEXT = "text",
    VIDEO = "video"
}
export type BlobType = Blob | Buffer | string;
export interface Value {
    blob?: Partial<BlobType>;
    hash?: string;
    name?: string;
    source?: string;
    url?: string;
}
export interface ValueState<Type extends Value = Value> extends BaseValueState<Type, ModelState> {
    attachBlobProperty: boolean;
}
export interface ModelState extends BaseModelState {
    invalidMaximumSize: boolean;
    invalidMinimumSize: boolean;
    invalidContentTypePattern: boolean;
    invalidInvertedContentTypePattern: boolean;
    invalidName: boolean;
}
export interface Model<Type extends Value = Value> extends Omit<BaseModel<null | Type>, 'default'> {
    default?: Mapping<Type>;
    contentTypePattern?: Pattern;
    invertedContentTypePattern?: Pattern;
    maximumSize: number;
    minimumSize: number;
    fileName: TextInputModel<string>;
    state?: ModelState;
}
export interface ChildrenOptions<P, Type extends Value = Value> {
    declaration: string;
    invalid: boolean;
    properties: P;
    value?: null | Type;
}
export interface Properties<Type extends Value = Value, MediaTag extends ElementType = 'div'> extends BaseProperties<null | Type>, ModelState {
    default?: Mapping<Type>;
    children?: (options: ChildrenOptions<Properties<Type, MediaTag>, Type>) => ReactNode;
    fileInputClassNames?: Array<string>;
    imageClassNames?: Array<string>;
    acceptedContentTypes?: Array<string> | string;
    contentTypePattern: Array<RegExp | string> | null | RegExp | string;
    invertedContentTypePattern: Array<RegExp | string> | null | RegExp | string;
    contentTypePatternText: string;
    invertedContentTypePatternText: string;
    maximumSizeText: string;
    minimumSizeText: string;
    deleteButton: ReactNode;
    downloadButton: ReactNode;
    editButton: ReactNode;
    newButton: ReactNode;
    encoding: string;
    generateFileNameInputProperties: (prototype: TextInputProps<string>, properties: Properties<Type, MediaTag>) => TextInputProps<string> | null;
    model: Model<Type>;
    outlined: boolean;
    sourceToBlobOptions?: {
        endings?: 'native' | 'transparent';
        type?: string;
    };
    hashingConfiguration: {
        binaryString: boolean;
        prefix: string;
        readChunkSizeInByte: number;
    };
}
export type Props<Type extends Value = Value> = Partial<Omit<Properties<Type>, 'model'>> & {
    model?: (Partial<Omit<Model<Type>, 'fileName' | 'state'>> & {
        fileName?: PartialTextInputModel<string>;
        state?: Partial<ModelState>;
    });
};
export type DefaultProperties<Type extends Value = Value> = Omit<Props<Type>, 'model'> & {
    model: Model<Type>;
};
export type PropertyTypes = {
    [key in keyof Properties]: ValueOf<typeof BasePropertyTypes>;
};
export declare const renderProperties: Array<string>;
export interface State<Type extends Value = Value> extends BaseState<Type> {
    modelState: ModelState;
}
export type Adapter<Type extends Value = Value> = ComponentAdapter<Properties<Type>, Omit<State<Type>, 'value'> & {
    value?: null | Type;
}>;
export interface AdapterWithReferences<Type extends Value = Value> extends Adapter<Type> {
    references: {
        fileInput: HTMLInputElement | null;
        mediaCard: MediaCardReference | null;
        nameInput: TextInputAdapter<string> | null;
    };
}
export interface Component<Type> extends Omit<ForwardRefExoticComponent<Props>, 'propTypes'>, StaticWebComponent<Type, ModelState, DefaultProperties> {
    <T extends Value = Value>(props: Props<T> & RefAttributes<Adapter<T>>): ReactElement;
}
export declare const dedicatedPropertyTypes: ValidationMapping;
export declare const modelPropertyTypes: ValidationMapping;
export declare const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>;
};
export declare const propertyTypes: ValidationMapping;
export declare const defaultModelState: ModelState;
export declare const defaultModel: Model;
export declare const defaultFileNameInputProperties: TextInputProps<string>;
export declare const defaultProperties: DefaultProperties;
