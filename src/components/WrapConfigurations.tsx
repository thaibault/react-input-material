// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapConfigurations */
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
import {AnyFunction, FirstParameter} from 'clientnode'
import {
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent, PropsWithoutRef,
    ReactElement,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject
} from 'react'
import {Theme} from '@rmwc/theme'
import {ThemePropT} from '@rmwc/types'

import {WrapStrict} from './WrapStrict'
import {WrapThemeProvider} from './WrapThemeProvider'
import {WrapTooltip} from './WrapTooltip'
import {ConfigurationProperties} from '../type'
//  endregion
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
export const WrapConfigurations: FunctionComponent<
    ConfigurationProperties & {children: ReactElement}
> = ({children, strict, themeConfiguration, tooltip, wrap}): ReactElement =>
    <WrapStrict strict={Boolean(strict)}>
        <WrapTooltip value={tooltip}>
            <WrapThemeProvider configuration={themeConfiguration} wrap={wrap}>
                {children}
            </WrapThemeProvider>
        </WrapTooltip>
    </WrapStrict>
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
export function createWrapConfigurationsComponent<
    Type extends AnyFunction = AnyFunction, Reference = unknown
>(
    WrappedComponent: Type,
    options: {withReference?: boolean | null, withThemeWrapper?: boolean} = {}
): FunctionComponent<
    FirstParameter<Type> & ConfigurationProperties & {theme?: ThemePropT}
> {
    const component: FunctionComponent<
        FirstParameter<Type> &
        ConfigurationProperties &
        {theme: ThemePropT}
    > = (
        {strict, theme, themeConfiguration, tooltip, wrap, ...properties},
        reference?: RefObject<Reference>
    ): ReactElement => {
        const wrapped: ReactElement = <WrappedComponent {...{
            ...(properties as FirstParameter<Type>),
            ...(options.withReference === false ?
                {} :
                reference ? {ref: reference} : {}
            ),
            ...(options.withThemeWrapper && theme ?
                {theme: theme as ThemePropT} :
                {}
            )
        }} />

        return <WrapConfigurations
            {...{
                strict: strict as boolean,
                themeConfiguration: themeConfiguration as
                    ConfigurationProperties['themeConfiguration'],
                tooltip: tooltip as ConfigurationProperties['tooltip'],
                wrap: wrap as ConfigurationProperties['wrap']
            }}
        >
            {options.withThemeWrapper && theme ?
                <Theme
                    use={theme as ThemePropT}
                    wrap={wrap as ConfigurationProperties['wrap']}
                >{wrapped}</Theme> :
                wrapped
            }
        </WrapConfigurations>
    }

    return options.withReference ?
        forwardRef(
            component as
                ForwardRefRenderFunction<
                    typeof component, PropsWithoutRef<FirstParameter<Type>>
                >
        ) :
        component
}

export default WrapConfigurations
