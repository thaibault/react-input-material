import type { Mapping, PlainObject, RecursivePartial, ValueOf } from 'clientnode';
import type BasePropertyTypes from 'clientnode/property-types';
import type { Requireable } from 'clientnode/property-types';
import type { FocusEvent as ReactFocusEvent, ForwardRefExoticComponent, KeyboardEvent, MouseEvent, ReactElement, ReactNode, RefAttributes } from 'react';
import type { GenericEvent } from 'react-generic-tools/type';
import type { ComponentAdapter, ValidationMapping } from 'web-component-wrapper/type';
import type { LanguageSupport } from '@codemirror/language';
import type { JSONContent } from '@tiptap/core';
import type { ChainedCommands, EditorOptions, Extensions } from '@tiptap/core';
import type { EditorEvents } from '@tiptap/react';
import type { StarterKitOptions } from '@tiptap/starter-kit';
import type { IconProperties, InputReference, SelectProperties, TextAreaProperties, TextFieldProperties } from '../../implementations/type';
import type { BaseModel, NormalizedSelection, ModelState as BaseModelState, Properties as BaseProperties, SelectionDefinition, State as BaseState, StaticWebComponent, ValueState as BaseValueState } from '../../type';
import type { Reference as InputEventMapperReference } from './InputEventMapperWrapper/index';
import type { Reference as CodeMirrorReference } from './CodeMirror/index';
import type { Reference as TipTapReference } from './Tiptap/index';
export type Transformer<T = unknown> = (value: T, transformer: DataTransformation, configuration: DefaultProperties<T>) => string;
export interface FormatSpecification<T = unknown> {
    options?: PlainObject;
    transform?: Transformer<T>;
}
export interface FormatSpecifications<T = unknown> {
    final: FormatSpecification<T>;
    intermediate?: FormatSpecification<T>;
}
export interface DataTransformSpecification<T = unknown, InputType = number | string> {
    format?: FormatSpecifications<T>;
    parse?: (value: InputType, transformer: DataTransformation, configuration: DefaultProperties<T>) => T;
    type?: NativeType;
}
export interface DateTransformSpecification extends DataTransformSpecification<number | string, Date | number | string> {
    useISOString: boolean;
}
export type DataTransformation = {
    boolean: DataTransformSpecification<boolean>;
    currency: DataTransformSpecification<number, string>;
    date: DateTransformSpecification;
    'date-local': DataTransformSpecification<number | string, Date | number | string>;
    datetime: DataTransformSpecification<number | string, Date | number | string>;
    'datetime-local': DataTransformSpecification<number | string, Date | number | string>;
    time: DataTransformSpecification<number | string, Date | number | string>;
    'time-local': DataTransformSpecification<number | string, Date | number | string>;
    float: DataTransformSpecification<number, string>;
    integer: DataTransformSpecification<number, string>;
    number: DataTransformSpecification<number, number>;
    string?: DataTransformSpecification;
} & {
    [key in Exclude<NativeType, ('date' | 'date-local' | 'datetime' | 'datetime-local' | 'time' | 'time-local' | 'number')>]?: DataTransformSpecification;
};
export interface EditorReference {
    input: InputEventMapperReference | null;
}
export interface EditorProperties extends Omit<NonNullable<TextAreaProperties>, 'onChange' | 'textarea' | 'value'> {
    id: string;
    value: number | string;
    minimumLength: number;
    maximumLength: number;
    rows: number;
    onChange: (value: string, contentTree?: JSONContent) => void;
}
export interface RichTextEditorButtonProps {
    action: (command: ChainedCommands) => ChainedCommands;
    activeIndicator?: string;
    enabledIndicator?: null | ((command: ChainedCommands) => ChainedCommands);
    checkedIconName?: string;
    iconName: string;
    label?: string;
}
export interface TiptapProperties extends Omit<EditorProperties, 'onBlur' | 'onFocus'> {
    onBlur: (event: EditorEvents['focus']) => void;
    onFocus: (event: EditorEvents['focus']) => void;
    editor: {
        options?: Partial<EditorOptions>;
        extensions?: Extensions;
        starterKitOptions?: Partial<StarterKitOptions>;
    };
}
export type TiptapProps = Partial<TiptapProperties>;
export interface CodeMirrorProperties extends Omit<EditorProperties, 'onBlur' | 'onFocus'> {
    onBlur: (event: ReactFocusEvent<HTMLDivElement>) => void;
    onFocus: (event: ReactFocusEvent<HTMLDivElement>) => void;
    editor: {
        mode?: LanguageSupport;
        modeName?: string;
    };
}
export type CodeMirrorProps = Partial<CodeMirrorProperties>;
export interface ModelState extends BaseModelState {
    invalidMaximum: boolean;
    invalidMinimum: boolean;
    invalidMaximumLength: boolean;
    invalidMinimumLength: boolean;
    invalidInvertedPattern: boolean;
    invalidPattern: boolean;
}
export interface Model<T = unknown> extends BaseModel<T> {
    default?: T;
    state?: ModelState;
}
export type PartialModel<T = unknown> = Partial<Omit<Model<T>, 'state'>> & {
    state?: Partial<ModelState>;
};
export interface ValueState<T = unknown, MS = BaseModelState> extends BaseValueState<T, MS> {
    representation?: ReactNode;
}
export type NativeType = ('date' | 'datetime-local' | 'time' | 'week' | 'month' | 'number' | 'range' | 'text');
export type Type = ('date-local' | 'datetime' | 'time-local' | 'boolean' | 'currency' | 'float' | 'integer' | 'string' | NativeType);
export interface ChildrenOptions<P, T> {
    index: number;
    normalizedSelection?: NormalizedSelection | null;
    properties: P;
    query: string;
    suggestion: ReactNode | string;
    value: T;
}
export interface SuggestionCreatorOptions<P> {
    abortController: AbortController;
    properties: P;
    query: string;
}
export type EditorType = ('code' | 'code(css)' | 'code(cascadingstylesheet)' | 'code(cascadingstylesheets)' | 'code(style)' | 'code(styles)' | 'code(script)' | 'code(js)' | 'code(jsx)' | 'code(javascript)' | 'code(ts)' | 'code(tsx)' | 'code(typescript)' | 'plain' | 'text' | 'richtext');
export interface Properties<Type = unknown> extends ModelState, BaseProperties<Type> {
    default?: Type;
    align: 'end' | 'start';
    children: (options: ChildrenOptions<this, Type>) => null | ReactElement;
    editor: EditorType;
    editorIsActive: boolean;
    editorIsInitiallyActive: boolean;
    hidden?: boolean;
    leadingIcon: string | (IconProperties & {
        tooltip?: string;
    });
    trailingIcon: string | (IconProperties & {
        tooltip?: string;
    });
    domNodeProperties: Partial<CodeMirrorProps | SelectProperties<Type> | TiptapProps | TextAreaProperties | TextFieldProperties | Mapping<unknown>>;
    attributes?: Mapping<boolean | number | string>;
    invertedPattern: Array<RegExp | string> | null | RegExp | string;
    invertedPatternText: string;
    labels: SelectionDefinition;
    maximumLengthText: string;
    minimumLengthText: string;
    maximumText: string;
    minimumText: string;
    model: Model<Type>;
    onChangeEditorIsActive: (isActive: boolean, event: MouseEvent | undefined, properties: this) => void;
    onKeyDown: (event: KeyboardEvent, properties: this) => void;
    onKeyUp: (event: KeyboardEvent, properties: this) => void;
    onSelect: (event: GenericEvent, properties: this) => void;
    onSelectionChange: (event: GenericEvent, properties: this) => void;
    pattern: Array<RegExp | string> | null | RegExp | string;
    patternText: string;
    placeholder: string;
    representation: ReactNode | string;
    rows: number;
    searchSelection: boolean;
    selectableEditor: boolean;
    step: number;
    suggestionCreator?: (options: SuggestionCreatorOptions<this>) => Properties['selection'] | Promise<Properties['selection']>;
    suggestSelection: boolean;
    transformer: RecursivePartial<DataTransformSpecification<Type, Date | number | string>>;
}
export type Props<T = unknown> = Partial<Omit<Properties<T>, 'model'>> & {
    model?: PartialModel<T>;
};
export type DefaultProperties<T = string> = Omit<Props<T>, 'model'> & {
    model: Model<T>;
};
export type PropertyTypes<T = unknown> = {
    [key in keyof Properties<T>]: ValueOf<typeof BasePropertyTypes>;
};
export interface State<T = unknown> extends BaseState<T> {
    editorIsActive: boolean;
    hidden?: boolean;
    modelState: ModelState;
    representation?: ReactNode | string;
    showDeclaration: boolean;
}
export type Adapter<T = unknown> = ComponentAdapter<Properties<T>, Omit<State<T>, 'editorIsActive' | 'representation' | 'value'> & {
    representation?: ReactNode | string;
    value?: null | T;
}>;
export interface AdapterWithReferences<T = unknown> extends Adapter<T> {
    references: {
        input: CodeMirrorReference | InputReference | TipTapReference | null;
        menu: unknown;
        wrapper: HTMLDivElement | null;
    };
}
export interface Component<Type> extends Omit<ForwardRefExoticComponent<Props>, 'propTypes'>, StaticWebComponent<Type, ModelState, DefaultProperties> {
    <T = unknown>(props: Props<T> & RefAttributes<Adapter<T>>): ReactElement;
    locales: Array<string>;
    transformer: DataTransformation;
}
export declare const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>;
};
export declare const propertyTypes: ValidationMapping;
export declare const renderProperties: Array<string>;
export declare const defaultModelState: ModelState;
export declare const defaultInputModel: Model<string>;
export declare const defaultProperties: DefaultProperties;
