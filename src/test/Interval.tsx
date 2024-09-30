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

import Interval from '../components/Interval'
// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

describe('Interval', (): void => {
    test('render', (): void => {
        expect(render(<Interval/>)).toBeDefined()

        const inputElements = render(<Interval/>)?.querySelectorAll('input')
        if (inputElements)
            expect(Array.from(inputElements)).toHaveLength(2)

        expect(render(<Interval/>)?.getAttribute('class'))
            .toStrictEqual('interval')

        expect(render(<Interval/>)?.querySelectorAll('.interval__end')
        ).toBeDefined()
        expect(render(<Interval/>)?.querySelectorAll('.interval__icon')
        ).toBeDefined()
        expect(
            render(<Interval/>)?.querySelectorAll('.interval__start')
        ).toBeDefined()

        expect(
            render(<Interval name="test"/>)?.getAttribute('data-name')
        ).toStrictEqual('test')
    })
})
