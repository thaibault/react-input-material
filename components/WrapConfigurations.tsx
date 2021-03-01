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
import {FirstParameter, GenericFunction} from 'clientnode/type'
import {
    ComponentType,
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    ReactElement,
    RefObject
} from 'react'
import {Theme, ThemeProviderProps} from '@rmwc/theme'
import {ThemePropT} from '@rmwc/types'

import {WrapStrict} from './WrapStrict'
import {WrapThemeProvider} from './WrapThemeProvider'
import {WrapTooltip} from './WrapTooltip'
import {ConfigurationProperties, Properties} from '../type'
// endregion
/**
 * Wraps a theme provider, strict wrapper and tooltip to given element if
 * corresponding configurations are provided.
 * @param children - Component or string to wrap.
 * @param strict - Indicates whether to render in strict mode.
 * @param theme - Optional theme configurations.
 * @param tooltip - Optional tooltip to show on hover.
 * @param wrap - Instead of injecting a div tag, wrap a child component by
 * merging the theme styles directly onto it. Useful when you don't want to
 * mess with layout.
 * @returns Wrapped content.
 */
export const WrapConfigurations:FunctionComponent<
    ConfigurationProperties & {children:ReactElement}
> = ({children, strict, theme, tooltip, wrap}):ReactElement =>
    <WrapStrict strict={Boolean(strict)}>
        <WrapTooltip options={tooltip}>
            <WrapThemeProvider configuration={theme} wrap={wrap}>
                {children}
            </WrapThemeProvider>
        </WrapTooltip>
    </WrapStrict>

export function createWrapConfigurationsComponent<
    Type extends GenericFunction = GenericFunction, Reference = unknown
>(
    WrappedComponent:Type, withReference:boolean = false
):FunctionComponent<
    FirstParameter<Type> & ConfigurationProperties & {themeUsage?:ThemePropT}
> {
    const component:FunctionComponent<
        FirstParameter<Type> &
        ConfigurationProperties &
        {themeUsage?:ThemePropT}
    > = (
        {strict, theme, themeUsage, tooltip, wrap, ...properties},
        reference?:RefObject<Reference>
    ):ReactElement => {
        const wrapped = <WrappedComponent {...{
            ...(properties as FirstParameter<Type>),
            ...(withReference ? {ref: reference} : {})
        }} />

        return <WrapConfigurations {...{strict, theme, tooltip, wrap}}>
            {themeUsage ?
                <Theme use={themeUsage} wrap={wrap}>{wrapped}</Theme> :
                wrapped
            }
        </WrapConfigurations>
    }
    return withReference ?
        forwardRef(component as ForwardRefRenderFunction<typeof component>) :
        component
}

export default WrapConfigurations
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
