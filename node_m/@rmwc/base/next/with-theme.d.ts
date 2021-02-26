import * as RMWC from '@rmwc/types';
import React from 'react';
export interface WithThemeProps {
    theme?: RMWC.ThemePropT;
    className?: string;
}
/**
 * Actually parses the theme options
 */
export declare const parseThemeOptions: (theme: undefined | string | Array<string | undefined>) => string[];
/**
 * HOC that adds themeability to any component
 */
export declare const withTheme: <P extends unknown>(Component: React.ComponentType<any>) => React.ComponentType<any>;
