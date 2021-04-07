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
import {
    createRef,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    RefObject
} from 'react'

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
export const IntervalInner = (
    props:Props, reference?:RefObject<Adapter>
):ReactElement => {
    return <WrapConfigurations
        strict={Interval.strict}
        themeConfiguration={properties.themeConfiguration}
    ><div className={'interval' || styles.interval}>

        TODO Interval

    </div></WrapConfigurations>
} as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
GenericInputInner.displayName = 'Interval'
/**
 * Wrapping web component compatible react component.
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
Interval.propTypes = propertyTypes
Interval.strict = false
// endregion
export default Interval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
