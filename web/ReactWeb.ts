// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module react-input-material */
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
import Tools from 'clientnode'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Web from './Web'
// endregion
/**
 * Adapter for exposing a react component as web-component.
 * @property instance - Holds the current components instance.
 * @property self - Back-reference to this class.
 *
 * @property _content - React component to wrap.
 */
export class ReactWeb<TElement = HTMLElement> extends Web<TElement> {
    instance:Component|null = null
    readonly self:typeof ReactWeb = ReactWeb

    _content:typeof Component = 'div'
    /**
     * Method which does the rendering job. Should be called when ever state
     * changes should be projected to the hosts dom content.
     * @returns Nothing.
     */
    render():void {
        this.instance = ReactDOM.render(
            React.createElement(this._content, this.properties),
            this.root,
            ():void => {
                if (this.instance)
                    this.reflectProperties()
            }
        )
        this.reflectProperties()
    }
}
export default ReactWeb
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
