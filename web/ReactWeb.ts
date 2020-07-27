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
     * Will be called on every attribute change. Calls render method after
     * current properties have been determined by inherited generic
     * web-component adapter.
     *
     * @param name - Changed attribute name.
     * @param oldValue - Previous value of changed attribute.
     * @param newValue - Recently set value of changed attribute.
     * @returns Nothing.
     */
    attributeChangedCallback(
        name:string, oldValue:string, newValue:string
    ):void {
        super.attributeChangedCallback(name, oldValue, newValue)
        this.render()
    }
    /**
     * Reflects reacts component state back to web-component's attributes and
     * properties.
     * @returns Nothing.
     */
    reflectProperties():void {
        console.log('Reflect', this.instance)
    }
    /**
     * Method which does the rendering job. Should be called when ever state
     * changes should be projected to the hosts dom content.
     * @returns Nothing.
     */
    render():void {
        const properties:object = {}
        for (const [name, value] of Object.entries(this.properties))
            properties[Tools.stringDelimitedToCamelCase(name)] = value
        this.instance = ReactDOM.render(
            React.createElement(this._content, properties),
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
