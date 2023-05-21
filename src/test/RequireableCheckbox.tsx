// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {afterEach, beforeEach, describe, expect, test} from '@jest/globals'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import RequireableCheckbox from '../components/RequireableCheckbox'
// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

describe('RequireableCheckbox', ():void => {
    test('render', ():void => {
        expect(render(<RequireableCheckbox/>)).toBeDefined()

        expect(
            render(<RequireableCheckbox/>)!.querySelector('input')
        ).toBeDefined()
        expect(
            render(<RequireableCheckbox/>)!.getAttribute('class')
        ).toStrictEqual('requireable-checkbox')

        expect(
            render(<RequireableCheckbox/>)!
                .querySelector('input')!
                .getAttribute('id')
        ).toStrictEqual('NO_NAME_DEFINED')
    })
    test('render id', ():void => {
        const domNode:HTMLDivElement =
            render(<RequireableCheckbox id="test" name="test"/>)!

        expect(domNode.querySelector('input')!.getAttribute('id'))
            .toStrictEqual('test')
    })
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
