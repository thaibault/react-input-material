// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericAnimate */
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
import {boolean, number, string} from 'clientnode/property-types'
import {Mapping} from 'clientnode/type'
import {FunctionComponent, ReactElement} from 'react'
import {CSSTransition} from 'react-transition-group'
import {TransitionProps} from 'react-transition-group/Transition'

/*
"namedExport" version of css-loader:

import {
    genericAnimateClassName,
    genericAnimateListWrapperClassName,
    genericAnimateWrapperClassName
} from './GenericAnimate.module'
*/
import cssClassNames from './GenericAnimate.module'
// endregion
const CSS_CLASS_NAMES:Mapping = cssClassNames as Mapping
/**
 * Generic animation wrapper component.
 * @param properties - Component given properties object.
 *
 * @returns React elements.
 */
export const GenericAnimate:FunctionComponent<Partial<TransitionProps<
    HTMLElement|undefined
>>> =
    <Type extends HTMLElement|undefined = undefined>(
        properties:Partial<TransitionProps<Type>>
    ):ReactElement =>
        <CSSTransition
            appear
            classNames={CSS_CLASS_NAMES['generic-animate']}
            in
            timeout={200}
            unmountOnExit
            {...properties}
        >
            {
                typeof properties.children === 'string' ?
                    <span className={
                        CSS_CLASS_NAMES['generic-animate__wrapper']
                    }>
                        {properties.children}
                    </span> :
                    Array.isArray(properties.children) ?
                        <div
                            className={CSS_CLASS_NAMES[
                                'generic-animate__list-wrapper'
                            ]}
                        >
                            {properties.children}
                        </div> :
                        properties.children
            }
        </CSSTransition>
// region static properties
GenericAnimate.propTypes = {
    appear: boolean,
    classNames: string,
    in: boolean,
    timeout: number
}
// endregion
export default GenericAnimate
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
