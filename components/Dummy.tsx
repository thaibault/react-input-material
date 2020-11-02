// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-strict */
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
import {Mapping} from 'clientnode/type'
import React, {
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    ReactElement,
    RefObject
} from 'react'

import {Renderable} from '../type'
// endregion
/**
 * Generic strict wrapper component.
 */
export const Dummy:FunctionComponent<any> & {isDummy:true} = forwardRef(
    ((properties:Mapping<any>, reference:null|RefObject<any>):ReactElement =>
        <div/>
    ) as ForwardRefRenderFunction<any, Mapping<any>>
) as unknown as FunctionComponent<any> & {isDummy:true}
Dummy.isDummy = true
export const CodeEditor = Dummy
export const Editor = Dummy
export const RichTextEditor = Dummy
export const TextEditor = Dummy
export default Dummy
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
