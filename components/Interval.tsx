// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module interval */
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
import Tools from 'clientnode'
import {Icon} from '@rmwc/icon'
import {
    createRef,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    RefObject
} from 'react'

import GenericInput from './GenericInput'
import WrapConfigurations from './WrapConfigurations'
import {
    IntervalAdapter as Adapter,
    IntervalProperties as Properties,
    intervalPropertyTypes as propertyTypes,
    IntervalProps as Props
} from '../type'
// endregion
/**
 * Generic interval start, end input wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const IntervalInner = ((
    props:Props, reference?:RefObject<Adapter>
):ReactElement => {
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:Props<Type> = Tools.extend(
        true, Tools.copy(Interval.defaultProperties), props
    )

    const endProperties = properties.end || {}
    const startProperties = properties.start || {}

    delete properties.end
    delete properties.start

    Tools.extend(true, endProperties, properties)
    Tools.extend(true, startProperties, properties)

    startProperties.maximum = Math.min(
        startProperties.maximum || Infinity,
        endProperties.value || Infinity,
        endProperties.maximum || Infinity
    )
    startProperties.minimum = startProperties.minimum || Infinity

    endProperties.maximum = endProperties.maximum || Infinity
    endProperties.minimum = Math.max(
        endProperties.minimum || -Infinity,
        startProperties.value || -Infinity,
        startProperties.minimum || -Infinity
    )

    return <WrapConfigurations
        strict={Interval.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div className="interval">
            <GenericInput {...startProperties} />
            <Icon icon="timelapse" />
            <GenericInput {...endProperties} />
        </div>
    </WrapConfigurations>
}) as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
IntervalInner.displayName = 'Interval'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultProperties - Initial property configuration.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const Interval:StaticComponent =
    memorize(forwardRef(IntervalInner)) as unknown as StaticComponent
// region static properties
// / region web-component hints
Interval.wrapped = IntervalInner
Interval.webComponentAdapterWrapped = 'react'
// / endregion
Interval.defaultProperties = {}
Interval.propTypes = propertyTypes
Interval.strict = false
// endregion
export default Interval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
