import type { AnyFunction, FirstParameter } from 'clientnode';
import type { FunctionComponent, ReactElement } from 'react';
import type { ThemePropT } from '@rmwc/types';
import type { ConfigurationProperties } from '../../type';
/**
 * Wraps a theme provider, strict wrapper and tooltip to given element if
 * corresponding configurations are provided.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.strict - Indicates whether to render in strict mode.
 * @param properties.themeConfiguration - Optional theme configurations.
 * @param properties.tooltip - Optional tooltip to show on hover.
 * @param properties.wrap - Instead of injecting a div tag, wrap a child
 * component by merging the theme styles directly onto it. Useful when you
 * don't want to mess with layout.
 * @returns Wrapped content.
 */
export declare const WrapConfigurations: FunctionComponent<ConfigurationProperties & {
    children: ReactElement;
}>;
/**
 * Component factory to dynamically create a wrapped component.
 * @param WrappedComponent - Component to wrap.
 * @param options - Options configure wrapping.
 * @param options.withReference - Indicates whether to add a mutable reference
 * to wrapping component.
 * @param options.withThemeWrapper - Indicates whether all theme configurations
 * should be provided.
 * @returns Created wrapped component.
 */
export declare function createWrapConfigurationsComponent<Type extends AnyFunction = AnyFunction, Reference = unknown>(WrappedComponent: Type, options?: {
    withReference?: boolean | null;
    withThemeWrapper?: boolean;
}): FunctionComponent<FirstParameter<Type> & ConfigurationProperties & {
    theme?: ThemePropT;
}>;
export default WrapConfigurations;
