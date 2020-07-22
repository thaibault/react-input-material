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
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Web from './Web'
// endregion
export class ReactWeb<TElement = HTMLElement> extends Web<TElement> {
    component:Component = 'div'
    readonly self:typeof ReactWeb = ReactWeb
    attributeChangedCallback(name:string, oldValue:string, newValue:string):void {
        super.attributeChangedCallback(
            name, oldValue, newValue, this.self.observedAttributes
        )
        this.render()
    }
    /**
     * Method which does the rendering job. Should be called when ever state
     * changes should be projected to the hosts dom content.
     * @returns Nothing.
     */
    render():void {
        ReactDOM.render(
            React.createElement(this.component, this.properties), this.root
        )
    }
}
export default ReactWeb
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
