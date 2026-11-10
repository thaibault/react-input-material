import type { Mapping, Primitive } from 'clientnode';
import type { Requireable } from 'clientnode/property-types';
import type { ComponentClass, FocusEvent, ForwardRefExoticComponent, FunctionComponent, MouseEvent, ReactElement, RefAttributes } from 'react';
import type { GenericEvent } from 'react-generic-tools/type';
import type { ComponentAdapter, StaticWebComponent as StaticBaseWebComponent, ValidationMapping } from 'web-component-wrapper/type';
import type { ThemeProviderProps } from '@rmwc/theme';
export declare const PrimitiveTypes: readonly ['boolean', 'DateTime', 'integer', 'number', 'string'];
export type PrimitiveType = typeof PrimitiveTypes[number];
export type Type = boolean | number | string | object;
export type TypeDefinition = Array<TypeDefinition> | Type;
export interface SelectionOption {
    label: string;
    value: Primitive;
}
export type NormalizedSelection = Array<SelectionOption>;
export type BaseSelectionDefinition = Array<Primitive> | Mapping | NormalizedSelection;
export type SelectionDefinition = Array<[Primitive, string]> | BaseSelectionDefinition;
export interface CommonBaseModel<Type = unknown> {
    declaration: string;
    description: string;
    name: string;
    emptyEqualsNull: boolean;
    maximum: number | string;
    minimum: number | string;
    maximumLength: number;
    minimumLength: number;
    type: TypeDefinition;
    trim: boolean;
    value?: Type;
}
export interface ModelState {
    dirty: boolean;
    pristine: boolean;
    touched: boolean;
    untouched: boolean;
    focused: boolean;
    visited: boolean;
    invalid: boolean;
    valid: boolean;
    invalidRequired: boolean;
}
export type Pattern = Array<RegExp | string> | RegExp | string;
export interface BaseModel<T = unknown> extends CommonBaseModel<T> {
    pattern?: Pattern;
    invertedPattern?: Pattern;
    selection?: BaseSelectionDefinition;
    mutable: boolean;
    writable: boolean;
    nullable: boolean;
    state?: ModelState;
}
export interface BaseProperties<T = unknown> extends CommonBaseModel<T>, ModelState {
    className: Array<string> | string;
    styles: Mapping;
    themeConfiguration: ThemeProviderProps['options'];
    disabled: boolean;
    enforceUncontrolled: boolean;
    id?: string;
    label: string;
    name: string;
    initialValue: T;
    model: BaseModel<T>;
    required: boolean;
    requiredText: string;
    componentProperties: Mapping<unknown>;
    domNodeProperties: Mapping<unknown>;
    selection?: SelectionDefinition;
    showDeclaration: boolean;
    showInitialValidationState: boolean;
    showValidationState: boolean;
    tooltip: string;
    triggerInitialPropertiesConsolidation: boolean;
}
export type BaseProps<T = unknown> = Partial<Omit<BaseProperties<T>, 'model'>> & {
    model?: (Partial<Omit<BaseModel<T>, 'state'>> & {
        state?: Partial<ModelState>;
    });
};
export type DefaultBaseProperties<T = unknown> = Omit<BaseProps<T>, 'model'> & {
    model: BaseModel<T>;
};
export interface TypedProperties<T = unknown> extends BaseProperties<T> {
    initialValue: T;
    model: BaseModel<T>;
    onBlur: (event: GenericEvent | undefined, properties: this) => void;
    onChange: (properties: this, event?: GenericEvent) => void;
    onChangeShowDeclaration: (show: boolean, event: GenericEvent | undefined, properties: this) => void;
    onChangeState: (state: ModelState, event: GenericEvent | undefined, properties: this) => void;
    onChangeValue: (value: T, event: GenericEvent | undefined, properties: this) => void;
    onClick: (event: MouseEvent, properties: this) => void;
    onFocus: (event: FocusEvent, properties: this) => void;
    onTouch: (event: GenericEvent, properties: this) => void;
}
export type Properties<T = unknown> = TypedProperties<T> & CommonBaseModel<T>;
export type Props<T = unknown> = Partial<Omit<Properties<T>, 'model'>> & {
    model?: (Partial<Omit<BaseModel<T>, 'state'>> & {
        state?: Partial<ModelState>;
    });
};
export type DefaultProperties<T = unknown> = Omit<Props<T>, 'model'> & {
    model: BaseModel<T>;
};
export interface State<T = unknown> {
    modelState?: ModelState;
    value?: null | T;
}
export interface ValueState<T = unknown, MS = ModelState> {
    modelState: MS;
    value: null | T;
}
export interface StaticWebComponent<Type, MS = ModelState, DP = DefaultProperties<Type>> extends StaticBaseWebComponent<Type> {
    defaultModelState: MS;
    defaultProperties: DP;
    strict: boolean;
}
export type StaticComponent<Type, P = Props, MS = ModelState, DP = DefaultProperties<Type>> = Omit<ComponentClass<P>, 'propTypes'> & StaticWebComponent<Type, MS, DP>;
export type StaticFunctionComponent<Type, P = Props, MS = ModelState, DP = DefaultProperties<Type>> = Omit<FunctionComponent<P>, 'propTypes'> & StaticComponent<Type, P, MS, DP>;
export interface Component<ValueType, ComponentType, P = Props<ValueType>, MS = ModelState, DP = DefaultProperties<ValueType>, A = ComponentAdapter<P>> extends Omit<ForwardRefExoticComponent<P>, 'propTypes'>, StaticWebComponent<ComponentType, MS, DP> {
    (props: P & RefAttributes<A>): ReactElement;
}
export declare const baseModelPropertyTypes: ValidationMapping;
export declare const modelStatePropertyTypes: {
    [key in keyof ModelState]: Requireable<boolean | symbol>;
};
export declare const modelPropertyTypes: ValidationMapping;
export declare const propertyTypes: ValidationMapping;
export declare const defaultModelState: ModelState;
export declare const defaultModel: BaseModel<string>;
export declare const defaultProperties: DefaultProperties;
export interface ConfigurationProperties {
    strict?: boolean;
    themeConfiguration?: ThemeProviderProps['options'];
    tooltip?: Properties['tooltip'];
    wrap?: boolean;
}
