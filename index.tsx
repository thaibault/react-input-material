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
import {Component} from 'react'

import ReactWeb from './web/ReactWeb'
// endregion
export const components:Mapping<{
    component:ReactWeb;
    register:(tagName:string) => void;
}> = {}
const modules = require.context('./components/', true, /[a-zA-Z0-9]\.tsx$/)
for (const key of modules.keys()) {
    const name = key.replace(/^(.*\/+)?([^\/]+)\.tsx$/, '$2')
    components[name] = {
        component: class extends ReactWeb {
            static readonly observedAttributes:Array<string> = ['name', 'value']

            component:typeof Component = modules(key).default
            dynamicAttributeNames:Array<string> = ['model']
            readonly self:typeof ReactWeb = components[name].component
        },
        register: (
            tagName:string = Tools.stringCamelCaseToDelimited(name)
        ):void => customElements.define(tagName, components[name].component)
    }
}
export default components
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
