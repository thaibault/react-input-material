// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Dummy */
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
import {
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    ReactElement,
    MutableRefObject
} from 'react'
// endregion
/**
 * Generic strict wrapper component.
 * @param _properties - Given component properties.
 * @param _reference - Given reference to mutable persistent object.
 *
 * @returns React elements.
 */
export const Dummy:FunctionComponent<unknown> & {isDummy:true} = forwardRef(
    ((
        _properties:Mapping<unknown>, _reference:MutableRefObject<unknown>|null
    ):ReactElement => <div/>) as
        ForwardRefRenderFunction<unknown, Mapping<unknown>>
) as unknown as FunctionComponent<unknown> & {isDummy:true}
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
