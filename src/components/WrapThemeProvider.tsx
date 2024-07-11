// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapThemeProvider */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {FunctionComponent, ReactElement} from 'react'
import {ThemeProvider, ThemeProviderProps} from '@rmwc/theme'
// endregion
/**
 * Wraps a theme provider to given element if a configuration is provided.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.configuration - Potential theme provider configuration.
 * @param properties.wrap - Instead of injecting a div tag, wrap a child
 * component by merging the theme styles directly onto it. Useful when you
 * don't want to mess with layout.
 *
 * @returns Wrapped content.
 */
export const WrapThemeProvider:FunctionComponent<{
    children:ReactElement
    configuration?:ThemeProviderProps['options']
    wrap?:boolean
}> = ({children, configuration, wrap}):ReactElement => configuration ?
    <ThemeProvider options={configuration} wrap={wrap !== false}>
        {children}
    </ThemeProvider> :
    children

export default WrapThemeProvider
