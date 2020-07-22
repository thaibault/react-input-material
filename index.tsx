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
import SimpleInput from './components/SimpleInput'
import ReactWeb from './components/ReactWeb'
// endregion
export class SimpleInputWeb extends ReactWeb {
    static readonly observedAttributes:Array<string> = ['name', 'value']
    component:typeof SimpleInput = SimpleInput
    dynamicAttributeNames:Array<string> = ['model']
    readonly self:typeof SimpleInputWeb = SimpleInputWeb
}
export const register:Mapping<(name:string) => Function> = {
    simpleInput: (name:string = 'simple-input'):void =>
        customElements.define(name, SimpleInputWeb)
}
export default register
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
