// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-configurations */
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
import {ThemeProviderProps} from '@rmwc/theme'

import {WrapStrict} from './WrapStrict'
import {WrapThemeProvider} from './WrapThemeProvider'
import {WrapTooltip} from './WrapTooltip'
import {Properties} from '../type'
// endregion
/**
 * Wraps a theme provider, strict wrapper and tooltip to given element if
 * corresponding configurations are provided.
 * @param children - Component or string to wrap.
 * @param configuration - Potential provider configurations.
 * @returns Wrapped content.
 */
export const WrapConfigurations:FunctionComponent<{
    children:ReactElement
    strict?:boolean
    theme?:ThemeProviderProps['options']
    tooltip?:Properties['tooltip']
}> = ({children, strict, theme, tooltip}):ReactElement =>
    <WrapThemeProvider configuration={theme}>
        <WrapStrict strict={Boolean(strict)}>
            <WrapTooltip options={tooltip}>{children}</WrapTooltip>
        </WrapStrict>
    </WrapThemeProvider>
export default WrapConfigurations
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
