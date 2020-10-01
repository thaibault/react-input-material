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
import React, {
    forwardRef, ForwardRefRenderFunction, FunctionComponent, ReactElement
} from 'react'
import {CSSTransition} from 'react-transition-group'
import {TransitionProps} from 'react-transition-group/Transition'
import {WebComponentAdapter} from 'web-component-wrapper/type'

import styles from './GenericAnimate.module'
// endregion
/**
 * Generic animation wrapper component.
 */
export const GenericAnimateInner = function<Type extends HTMLElement|undefined = undefined>(
    properties:Partial<TransitionProps<Type>>
):ReactElement {
    return <CSSTransition
        appear
        classNames={styles['generic-animate']}
        in
        timeout={200}
        unmountOnExit
        {...properties}
    >{
        typeof properties.children === 'string' ?
            <span>{properties.children}</span> :
            Array.isArray(properties.children) ?
                <div className={styles['generic-animate__list-wrapper']}>
                    {properties.children}
                </div> :
                properties.children
    }</CSSTransition>
} as ForwardRefRenderFunction<WebComponentAdapter<Partial<TransitionProps<HTMLElement|undefined>>>, Partial<TransitionProps<HTMLElement|undefined>>>
GenericAnimateInner.displayName = 'GenericAnimate'
export const GenericAnimate = forwardRef(GenericAnimateInner)
export default GenericAnimate
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
