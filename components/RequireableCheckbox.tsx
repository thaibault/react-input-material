// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module requireable-checkbox */
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
import {Checkbox} from '@rmwc/checkbox'
import '@rmwc/checkbox/styles'
import React, {
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    memo as memorize,
    ReactElement,
    RefObject
} from 'react'
import {WebComponentAdapter} from 'web-component-wrapper/type'

import {
    CheckboxProperties as Properties,
    CheckboxProps as Props,
    CheckboxState as State,
    defaultModelState,
    defaultProperties,
    propertyTypes,
    StaticFunctionComponent as StaticComponent
} from '../type'
// endregion
/**
 * Validateable checkbox wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const RequireableCheckboxInner = function(
    properties:Props,
    reference?:RefObject<WebComponentAdapter<Properties, State>>
):ReactElement {
    const materialProperties = {}
    return <Checkbox {...materialProperties} />
} as ForwardRefRenderFunction<WebComponentAdapter<Properties, State>, Props>
// NOTE: This is useful in react dev tools.
RequireableCheckboxInner.displayName = 'RequireableCheckbox'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const RequireableCheckbox:StaticComponent =
    memorize(forwardRef(RequireableCheckboxInner)) as
        unknown as
        StaticComponent
// region static properties
// / region web-component hints
RequireableCheckbox.wrapped = RequireableCheckboxInner
RequireableCheckbox.webComponentAdapterWrapped = true
// / endregion
RequireableCheckbox.defaultModelState = defaultModelState
RequireableCheckbox.defaultProps = defaultProperties
RequireableCheckbox.propTypes = propertyTypes
RequireableCheckbox.strict = false
// endregion
export default RequireableCheckbox
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
