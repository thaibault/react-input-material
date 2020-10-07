// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-theme-provider */
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
import React, {FunctionComponent, ReactElement} from 'react'
import {ThemeProvider, ThemeProviderProps} from '@rmwc/theme'
// endregion
/**
 * Wraps a theme provider to given element if a configuration is provided.
 * @param children - Component or string to wrap.
 * @param configuration - Potential theme provider configuration.
 * @returns Wrapped content.
 */
export const WrapThemeProvider:FunctionComponent<{
    children:ReactElement
    configuration?:ThemeProviderProps['options']
}> = ({children, configuration}):ReactElement => configuration ?
    <ThemeProvider options={configuration} wrap>{children}</ThemeProvider> :
    children
export default WrapThemeProvider
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
