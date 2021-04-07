// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module generic-interval */
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
    ComponentType,
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
export const GenericIntervalInner = (
    props:Props, reference?:RefObject<Adapter>
):ReactElement => {
} as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
GenericInputInner.displayName = 'GenericInterval'
/**
 * Wrapping web component compatible react component.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const GenericInterval:StaticComponent =
    memorize(forwardRef(GenericIntervalInner)) as unknown as StaticComponent
// region static properties
// / region web-component hints
GenericInterval.wrapped = GenericIntervalInner
GenericInterval.webComponentAdapterWrapped = 'react'
// / endregion
GenericInterval.propTypes = propertyTypes
// endregion
export default GenericInterval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
