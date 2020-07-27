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
import {WebComponentAPI, WebComponentAttributes} from './types'
// endregion
export const determineComponentProperties = (
    component:typeof Component,
    type:'any'|'boolean'|'number'|'string' = 'string'
):Array<string> => {
    if (
        component.___types &&
        component.___types.value &&
        component.___types.value.members
    )
        return component.___types.value.members
            .filter((property):boolean =>
                property.kind === 'property' &&
                (
                    property.value.kind === type ||
                    type === 'any' &&
                    !['boolean', 'number', 'string'].includes(
                        property.value.kind
                    )
                )
            )
            .map((property):string => property.key.name)
    return []
}
export const components:Mapping<WebComponentAPI> = {}
/*
    Import all react components and extract a dynamically created web-component
    class wrapper with corresponding web component register method. A derived
    default web component name is provided.
*/
const modules = require.context('./components/', true, /[a-zA-Z0-9]\.tsx$/)
for (const key of modules.keys()) {
    const component:typeof Component = modules(key).default
    // Determine class / function name.
    const name:string =
        component.___types &&
        component.___types.name &&
        component.___types.name.name ?
            component.___types.name.name :
            key.replace(/^(.*\/+)?([^\/]+)\.tsx$/, '$2')
    if (!component.properties)
        component.properties = {}
    for (const type of ['any', 'boolean', 'number', 'string'])
        if (!component.properties[type])
            component.properties[type] =
                determineComponentProperties(component, type)
    components[name] = {
        component: class extends ReactWeb {
            static readonly observedAttributes:Array<string> =
                Tools.arrayUnique(([] as Array<string>).concat(
                    component.properties.any,
                    component.properties.boolean,
                    component.properties.number,
                    component.properties.string
                ))

            readonly self:typeof ReactWeb = components[name].component

            _attributeNames:WebComponentAttributes = component.properties
            _content:typeof Component = modules(key).default
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
