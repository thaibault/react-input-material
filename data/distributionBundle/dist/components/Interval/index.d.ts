import type { ForwardedRef, ReactElement } from 'react';
import type { Adapter, Component, Props } from './type';
export declare function IntervalInner(props: Props, reference?: ForwardedRef<Adapter>): ReactElement;
export declare namespace IntervalInner {
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
export declare const Interval: Component<typeof IntervalInner>;
export default Interval;
