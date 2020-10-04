// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module generic-input */
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
    ForwardRefRenderFunction,
    FunctionComponent,
    ReactElement,
    RefObject
} from 'react'
import {WebComponentAdapter} from 'web-component-wrapper/type'

import {
    CheckboxProperties as Properties,
    CheckboxProps as Props,
    ModelState
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
export const RequireableCheckboxInner:FunctionComponent<Props> = (
    properties:Props,
    reference?:RefObject<WebComponentAdapter<Properties<Type>, State<Type>>>
):ReactElement => {
    const materialProperties = {...properties}
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
export const RequireabkeCheckbox =
    memorize(forwardRef(RequireableCheckboxInner))
// region static properties
// / region web-component hints
RequireableCheckbox.wrapped = GenericInputInner
RequireableCheckbox.webComponentAdapterWrapped = true
// / endregion
RequireableCheckbox.defaultModelState = {
    dirty: false,
    focused: false,
    invalid: false,
    invalidRequired: false,
    pristine: true,
    touched: false,
    untouched: true,
    valid: true,
    visited: false
} as ModelState
RequireableCheckbox.defaultProps = {
    model: {
        declaration: '',
        default: null,
        description: '',
        editor: 'plain',
        emptyEqualsNull: true,
        maximum: Infinity,
        maximumLength: Infinity,
        minimum: 0,
        minimumLength: 0,
        mutable: true,
        name: 'NO_NAME_DEFINED',
        nullable: true,
        regularExpressionPattern: '.*',
        state: GenericInput.defaultModelState,
        trim: true,
        type: 'boolean',
        writable: true
    },
    requiredText: 'Please check this field.',
    showInitialValidationState: false
} as Props & Pick<Properties, 'model'>
// TODO what about model?
RequireableCheckbox.propTypes = {
    checked: boolean,
    disabled: boolean,
    id: string,
    indeterminate: boolean,
    label: string,
    name: string,
    onChange: func,
    required: boolean
} as Mapping<ValueOf<typeof PropertyTypes>>
RequireableCheckbox.strict = false
export default RequireableCheckbox
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
