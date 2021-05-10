// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module RepresentTextFile */
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
import {FunctionComponent, ReactElement} from 'react'
import {CSSTransition} from 'react-transition-group'
import {TransitionProps} from 'react-transition-group/Transition'

import styles from './RepresentTextFile.module'
// endregion
/**
 * Generic animation wrapper component.
 */
export const RepresentTextFile:FunctionComponent<Partial<{
    content:string
    encoding:string
}>> = ({content, encoding}):ReactElement =>
    <div>TODO</div>
// region static properties
RepresentTextFile.propTypes = {
    content:string
    encoding:string
}
// endregion
export default RepresentTextFile
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
