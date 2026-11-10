import type { Mapping } from 'clientnode';
import type { ForwardedRef, ReactElement } from 'react';
import type { Props as TextInputProps } from '../TextInput/type';
import type { Adapter, Component, PropertiesItem, Props } from './type';
export declare function InputsInner<T = unknown, P extends PropertiesItem<T> = TextInputProps<T>, State = Mapping<unknown>>(props: Props<T, P>, reference?: ForwardedRef<Adapter<T, P>>): ReactElement;
export declare namespace InputsInner {
    var displayName: string;
}
/**
 * Wrapping web component compatible react component.
 * @property defaultProperties - Initial property configuration.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in reacts
 * strict component.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export declare const Inputs: Component<typeof InputsInner>;
export default Inputs;
