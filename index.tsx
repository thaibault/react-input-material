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
const addProperties = (
    component:typeof Component, dynamic:boolean = false
):Array<string> => {
    if (
        component.___types &&
        component.___types.value &&
        component.___types.value.members
    )
        return component.___types.value.members
            .filter((property):boolean =>
                property.kind === 'property' &&
                dynamic ?
                    property.value.kind !== 'string' :
                    property.value.kind === 'string'
            )
            .map((property):string => property.key.name)
    return []
}
export const components:Mapping<{
    component:ReactWeb;
    register:(tagName:string) => void;
}> = {}
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
    if (!component.properties.static)
        component.properties.static = addProperties(component)
    if (!component.properties.dynamic)
        component.properties.dynamic = addProperties(component, true)
    components[name] = {
        component: class extends ReactWeb {
            static readonly observedAttributes:Array<string> =
                Tools.arrayUnique(
                    ([] as Array<string>)
                        .concat(component.properties.static)
                        .concat(component.properties.dynamic)
                )

            component:typeof Component = modules(key).default
            dynamicAttributeNames:Array<string> =
                ([] as Array<string>).concat(component.properties.dynamic)
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
