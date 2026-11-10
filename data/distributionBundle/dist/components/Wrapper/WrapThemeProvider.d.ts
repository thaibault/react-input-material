import type { FunctionComponent, ReactElement } from 'react';
import type { ThemeProviderProps } from '@rmwc/theme';
/**
 * Wraps a theme provider to given element if a configuration is provided.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.configuration - Potential theme provider configuration.
 * @param properties.wrap - Instead of injecting a div tag, wrap a child
 * component by merging the theme styles directly onto it. Useful when you
 * don't want to mess with layout.
 * @returns Wrapped content.
 */
export declare const WrapThemeProvider: FunctionComponent<{
    children: ReactElement;
    configuration?: ThemeProviderProps['options'];
    wrap?: boolean;
}>;
export default WrapThemeProvider;
