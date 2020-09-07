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
import React, {FunctionComponent} from 'react'
import {CSSTransition, TransitionProps} from 'react-transition-group'

import styles from './Animate.module'
// endregion
/**
 * Generic animation wrapper component.
 */
export const Animate:FunctionComponent<TransitionProps<Type>> = (
    properties:TransitionProps<Type>
) =>
    <CSSTransition
        appear
        in
        timeout={200}
        classNames={styles['generic-animate']}
        unmountOnExit
        {...properties}
    >{
        typeof properties.children === 'string' ?
            <span>{properties.children}</span> :
        Array.isArray(properties.children) ?
            <div className={styles['generic-animate__list-wrapper']}>
                {properties.children}
            </div>
        :
            properties.children
    }</CSSTransition>
export default Animate
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
