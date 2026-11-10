import type { ValueOf } from 'clientnode';
import type BasePropertyTypes from 'clientnode/property-types';
import type { ForwardRefExoticComponent, ReactElement, ReactNode, RefAttributes, MutableRefObject as RefObject } from 'react';
import type { ComponentAdapter, ValidationMapping } from 'web-component-wrapper/type';
import type { BaseModel, ModelState as BaseModelState, Properties as BaseProperties, State as BaseState, StaticWebComponent } from '../../type';
import type { Properties as TextInputProperties, Props as TextInputProps } from '../TextInput/type';
export interface PropertiesItem<T, TS = unknown> {
    model?: {
        state?: TS;
        value?: T;
    };
    value?: T;
}
export interface CreateOptions<T, IP> {
    index: number;
    properties: IP;
    values?: Array<T> | null;
}
export interface CreateItemOptions<T, P extends PropertiesItem<T>, IP> extends CreateOptions<T, IP> {
    item: Partial<P>;
}
export interface CreatePrototypeOptions<T, P extends PropertiesItem<T>, IP> extends CreateItemOptions<T, P, IP> {
    lastValue: null | T | undefined;
}
export interface ModelState extends BaseModelState {
    invalidMaximumNumber: boolean;
    invalidMinimumNumber: boolean;
}
export interface Model<T, P extends PropertiesItem<T> = PropertiesItem<T>> extends BaseModel<Array<P> | null> {
    default?: Array<P> | null;
    maximumNumber: number;
    minimumNumber: number;
    state?: ModelState;
    writable: boolean;
}
export interface ChildrenOptions<T, P extends PropertiesItem<T>, IP> {
    index: number;
    inputsProperties: IP;
    properties: Partial<P>;
}
export interface Properties<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>> extends ModelState, Omit<BaseProperties<Array<P> | null>, 'onChangeValue'> {
    default?: T;
    addIcon: string;
    removeIcon: string;
    children: (options: ChildrenOptions<T, P, this>) => ReactNode;
    createItem: (options: CreateItemOptions<T, P, this>) => P;
    createPrototype: (options: CreatePrototypeOptions<T, P, this>) => P;
    maximumNumber: number;
    minimumNumber: number;
    model: Model<T, P>;
    onChangeValue: (values: Array<T> | null, event: unknown, properties: this) => void;
    value: Array<P> | null;
    writable: boolean;
}
export type PartialModel<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>> = Partial<Omit<Model<T, P>, 'state'> & {
    state?: Partial<ModelState>;
}>;
export type Props<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>> = Partial<Omit<Properties<T, P>, 'model' | 'value'>> & {
    model?: PartialModel<T, P>;
    value?: Array<Partial<P>> | Array<T> | null;
};
export type DefaultProperties<T = string, P extends PropertiesItem<T> = TextInputProps<T>> = Partial<Omit<Properties<T, P>, 'default' | 'model' | 'value'>> & {
    model: Model<T, P>;
};
export type PropertyTypes<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>> = {
    [key in keyof Properties<P>]: ValueOf<typeof BasePropertyTypes>;
};
export type State<T = unknown> = BaseState<Array<null | T | undefined>>;
export type Adapter<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>> = ComponentAdapter<Properties<T, P>, State<T>>;
export type AdapterWithReferences<T = unknown, P extends PropertiesItem<T> = BaseProperties<T>, RefType = unknown> = Adapter<T, P> & {
    references: Array<RefObject<RefType>>;
};
export interface Component<Type> extends Omit<ForwardRefExoticComponent<Props>, 'propTypes'>, StaticWebComponent<Type, ModelState, DefaultProperties> {
    <T = string, P extends PropertiesItem<T> = TextInputProperties<T>>(props: Props<T, P> & RefAttributes<Adapter<T, P>>): ReactElement;
}
export declare const propertyTypes: ValidationMapping;
export declare const renderProperties: Array<string>;
export declare const defaultModel: Model<string, TextInputProperties<string>>;
export declare const defaultProperties: DefaultProperties;
