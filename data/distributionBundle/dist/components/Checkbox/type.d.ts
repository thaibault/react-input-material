import type { ComponentAdapter, ValidationMapping } from 'web-component-wrapper/type';
import type { BaseModel, Component as BaseComponent, ModelState as BaseModelState, Properties as BaseProperties, State as BaseState, ValueState as BaseValueState } from '../../type';
export interface Properties extends BaseProperties<boolean | null> {
    default?: boolean;
    checked: boolean;
    id: string;
}
export interface Model extends BaseModel<boolean | null> {
    default?: boolean;
}
export type ModelState = BaseModelState;
export type ValueState = BaseValueState<boolean>;
export type Props = Partial<Omit<Properties, 'model'>> & {
    model?: (Partial<Omit<Model, 'state'>> & {
        state?: Partial<ModelState>;
    });
};
export type DefaultProperties = Omit<Props, 'model'> & {
    model: Model;
};
export type State = BaseState<boolean>;
export type Adapter = ComponentAdapter<Properties, Omit<State, 'value'>>;
export type Component<ComponentType> = BaseComponent<boolean, ComponentType, Props, ModelState, DefaultProperties, Adapter>;
export declare const propertyTypes: ValidationMapping;
export declare const defaultModel: Model;
export declare const defaultProperties: DefaultProperties;
