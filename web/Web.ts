// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module web */
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
import Tools, {globalContext, PlainObject} from 'clientnode'
// endregion
// region polyfills
// Polyfill for template strings in dynamic function constructs in simple cases
const Function:typeof Function = (
    Tools.maximalSupportedInternetExplorerVersion === 0
) ?
    globalContext.Function :
    function(...parameter:Array<any>):Function {
        let code:string = parameter[parameter.length - 1]
        if (code.startsWith('return `') && code.endsWith('`')) {
            // Handle avoidable template expression:
            // Use raw code.
            code = code.replace(/^(return )`\$\{(.+)\}`$/, '$1$2')
            // Use plain string with single quotes.
            code = code.replace(/^(return )`([^']+)`$/, "$1'$2'")
            // Use plain string with double quotes.
            code = code.replace(/^(return )`([^"]+)`$/, '$1"$2"')

            // TODO replace new lines in replaced content: ".replace(/\\n+/g, ' ')"
        }
        parameter[parameter.length - 1] = code
        return new globalContext.Function(...parameter)
    }
// endregion
/**
 * Generic web component to render a content against instance specific values.
 * @property static:content - Content template to render on property changes.
 * @property static:observedAttributes - Attribute names to observe for
 * changes.
 *
 * @property root - Hosting dom node.
 */
export class Web<TElement = HTMLElement> extends HTMLElement {
    static content:string = ''
    static readonly observedAttributes:Array<string> = []
    dynamicAttributeNames:Array<string> = []
    properties:PlainObject = {}
    root:TElement
    readonly self:typeof Web = Web
    // region live cycle hooks
    /**
     * Initializes host dom content by attaching a shadow dom to it. Triggers
     * initial attribute changed reaction callback.
     * @returns Nothing.
     */
    constructor() {
        super()
        this.root = (
            (!('attachShadow' in this) && 'ShadyDOM' in window) ?
                window.ShadyDOM.wrap(this) :
                this
        ).attachShadow({mode: 'open'})
    }
    /**
     * Triggered when ever a given attribute has changed and triggers to update
     * configured host dom content.
     * @returns Nothing.
     */
    attributeChangedCallback(
        name:string,
        oldValue:string,
        newValue:string,
        attributeNames:Array<string> = Web.observedAttributes,
        dynamicAttributeNames?:Array<string>
    ):void {
        for (const name of attributeNames)
            if (this.getAttribute(name))
                this.properties[name] = this.getAttribute(name)
            else
                this.properties[name] = null
        if (!dynamicAttributeNames)
            dynamicAttributeNames = this.dynamicAttributeNames
        for (const name of dynamicAttributeNames)
            if (this.getAttribute(name)) {
                let get:Function
                try {
                    get = new Function(`return ${this.getAttribute(name)}`)
                } catch (error) {
                    console.warn(
                        `Error occured during compiling given "${name}" ` +
                        `attribute configuration "` +
                        `${this.getAttribute(name)}": "` +
                        `${Tools.represent(error)}".`
                    )
                    break
                }
                let value:any
                try {
                    value = get()
                } catch (error) {
                    console.warn(
                        `Error occured durring interpreting given "${name}" ` +
                        `attribute object "${this.getAttribute(name)}": "` +
                        `${Tools.represent(error)}".`
                    )
                    break
                }
                this.properties[name] = value
            }
    }
    /**
     * Method which does the rendering job. Should be called when ever state
     * changes should be projected to the hosts dom content.
     * @returns Nothing.
     */
    render():void {
        this.root.innerHTML = (new Function(
            ...Object.keys(this), `return \`${this.self.content}\``
        ))(...Object.values(this))
    }
    // endregion
}
export default Web
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
