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

import Inputs from '../components/Inputs'
// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

describe('Inputs', (): void => {
    test('render', (): void => {
        expect(render(<Inputs/>)).toBeDefined()

        let domNode = render(<Inputs/>) as HTMLElement
        expect(domNode.querySelector('input')).toHaveProperty('disabled', true)
        expect(domNode.querySelector('.inputs__add__button'))
            .not.toStrictEqual(null)
        expect(domNode.querySelector('.inputs__item__remove'))
            .toStrictEqual(null)

        domNode = render(<Inputs value={['a']}/>) as HTMLElement
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)

        expect(Array.from(
            domNode.querySelectorAll('button.inputs__item__remove')
        )).toHaveLength(1)

        domNode = render(<Inputs value={[{value: 'a'}, 'b']}/>) as
            HTMLElement
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(2)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)
        expect(Array.from(
            domNode.querySelectorAll('button.inputs__item__remove')
        )).toHaveLength(2)

        expect(
            (render(<Inputs value={['a']}/>) as HTMLElement)
                .querySelector('input')
        ).toHaveProperty('value', 'a')
    })
})
