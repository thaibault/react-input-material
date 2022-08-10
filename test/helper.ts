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
import {describe, expect, test} from '@jest/globals'
import {testEach} from 'clientnode/testHelper'

import {
    determineInitialValue,
    getLabelAndValues,
    getRepresentationFromValueSelection,
    getValueFromSelection,
    normalizeSelection
} from '../helper'
// endregion
describe('helper', ():void => {
    testEach<typeof getLabelAndValues>(
        'getLabelAndValues',
        getLabelAndValues,

        [[[], []], undefined],
        [[[], []], []],
        [
            [['A', 'B'], ['a', 'b']],
            [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]
        ]
    )
    testEach<typeof getRepresentationFromValueSelection>(
        'getRepresentationFromValueSelection',
        getRepresentationFromValueSelection,

        ['a', 1, [{label: 'a', value: 1}, {label: 'b', value: 2}]],
        ['b', 'b', [{label: 'a', value: 1}, {label: 'b', value: 'b'}]],
        ['2', 2, [{label: 'a', value: 1}, {label: '2', value: 2}]],
        [null, 2, [{label: 'a', value: 1}]]
    )
    testEach<typeof getValueFromSelection>(
        'getValueFromSelection',
        getValueFromSelection,

        [1, 'a', [{label: 'a', value: 1}, {label: 'b', value: 2}]],
        ['b', 'b', [{label: 'a', value: 1}, {label: 'b', value: 'b'}]],
        [2, '2', [{label: 'a', value: 1}, {label: '2', value: 2}]],
        [null, '2', [{label: 'a', value: 1}]]
    )
    testEach<typeof normalizeSelection>(
        'normalizeSelection',
        normalizeSelection,

        [[], [], undefined],
        [
            [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}],
            [['a', 'A'], ['b', 'B']] as Array<[string, string]>,
            undefined
        ],
        [
            [{label: 'a', value: 'a'}, {label: 'b', value: 'b'}],
            ['a', 'b'],
            undefined
        ],
        [
            [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}],
            ['a', 'b'],
            ['A', 'B']
        ],
        [
            [{label: 'NEIN', value: false}, {label: 'JA', value: true}],
            [{label: 'No', value: false}, {label: 'Yes', value: true}],
            {false: 'NEIN', true: 'JA'}
        ]
    )
    test('determineInitialValue', ():void => {
        expect(
            determineInitialValue({model: {default: true}}, false)
        ).toStrictEqual(true)
        expect(
            determineInitialValue({model: {default: true, value: null}}, false)
        ).toStrictEqual(null)
    })
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
