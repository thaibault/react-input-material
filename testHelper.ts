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
import {createRoot, Root as ReactRoot} from 'react-dom/client'
import {act} from 'react-dom/test-utils'

import {TestEnvironment} from './type'
// endregion
globalThis.IS_REACT_ACT_ENVIRONMENT = true

export const prepareTestEnvironment = (
    beforeEach:jest.Lifecycle, afterEach:jest.Lifecycle
):TestEnvironment => {
    let root:null|ReactRoot = null

    const result:TestEnvironment = {
        container: null,
        render: (component:ReactElement):ChildNode|null => {

            act(():void => {
                root = createRoot(result.container!)
                root!.render(component)
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
        root && root.unmount()
        ;(result.container as HTMLDivElement).remove()
        result.container = null
    })

    return result
}

export default prepareTestEnvironment
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
