// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module testHelper */
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
import {ReactElement} from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import {act} from 'react-dom/test-utils'

import {TestEnvironment} from './type'
// endregion
export const prepareTestEnvironment = (
    beforeEach:Function, afterEach:Function
):TestEnvironment => {
    const result:TestEnvironment = {
        container: null,
        render: (component:ReactElement):ChildNode|null => {
            act(():void => {
                render(component, result.container)
            })
            return (result.container as HTMLDivElement).childNodes.length ?
                (result.container as HTMLDivElement).childNodes[0] :
                null
        }
    }
    beforeEach(():void => {
        result.container = document.createElement('div')
        result.container.setAttribute('class', 'test-wrapper')
        document.body.appendChild(result.container)
    })
    afterEach(():void => {
        unmountComponentAtNode(result.container as HTMLDivElement);
        (result.container as HTMLDivElement).remove()
        result.container = null
    })
    return result
}
export default prepareTestEnvironment
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
