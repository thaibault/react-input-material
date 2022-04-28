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
import {globalContext} from 'clientnode'
import {$Global} from 'clientnode/type'
import {ReactElement} from 'react'
import {createRoot, Root as ReactRoot} from 'react-dom/client'
import {act} from 'react-dom/test-utils'

import {TestEnvironment} from './type'
// endregion
;(globalContext as $Global & {IS_REACT_ACT_ENVIRONMENT:boolean})
    .IS_REACT_ACT_ENVIRONMENT = true

export const prepareTestEnvironment = (
    beforeAll:jest.Lifecycle, afterAll:jest.Lifecycle
):TestEnvironment => {
    let root:null|ReactRoot = null

    const result:TestEnvironment = {
        container: null,
        render: <T = HTMLElement>(component:ReactElement):null|T => {
            act(():void => {
                if (root)
                    root.render(component)
                else
                    console.error(
                        'You call "render" outside a testing context.'
                    )
            })

            return (
                result.container?.childNodes?.length ?
                    result.container.childNodes[0] :
                    result.container
            ) as unknown as T
        }
    }

    beforeAll(():void => {
        result.container = document.createElement('div')
        result.container.setAttribute('class', 'test-wrapper')
        document.body.appendChild(result.container)

        if (!root)
            root = createRoot(result.container!)
    })

    afterAll(():void => {
        if (root)
            root.unmount()

        result.container!.remove()
        result.container = null
    })

    return result
}

export default prepareTestEnvironment
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
