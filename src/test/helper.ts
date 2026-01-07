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
import {Mapping} from 'clientnode'
import {testEach} from 'clientnode/test-helper'
import {useMemorizedValue} from 'react-generic-tools'
import prepareTestEnvironment from 'react-generic-tools/testHelper'
import {TestHookResult} from 'react-generic-tools/type'

import {afterEach, beforeEach, describe, expect, test} from '@jest/globals'

import {
    determineInitialValue,
    getLabelAndValues,
    getRepresentationFromValueSelection,
    getValueFromSelection,
    normalizeSelection
} from '../helper'
// endregion
const {runHook} = prepareTestEnvironment(beforeEach, afterEach)

describe('helper', (): void => {
    // region consolidate state
    test('determineInitialValue', () => {
        expect(
            determineInitialValue({model: {default: true}}, false)
        ).toStrictEqual(true)
        expect(
            determineInitialValue({model: {default: true, value: null}}, false)
        ).toStrictEqual(null)
    })
    // endregion
    // region value transformer
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
    // endregion
    // region hooks
    test('useMemorizedValue', (): void => {
        // Simple forward primitive value.
        expect(
            runHook<string, [string]>(
                useMemorizedValue, {parameters: ['value']}
            ).result.value
        ).toStrictEqual('value')

        /*
            Prepare hook with mutable object as parameter and boolean change
            trigger.
        */
        const testObject: Mapping<number> = {content: 1}
        const hookResult: TestHookResult<
            Mapping<number>, [Mapping<number>, boolean]
        > = runHook<Mapping<number>, [Mapping<number>, boolean]>(
            useMemorizedValue, {parameters: [testObject, true]}
        )

        // Simple forward object reference.
        expect(hookResult.result.value).toStrictEqual(testObject)

        /*
            Do not update object since dependencies / change trigger is still
            "true".
        */
        hookResult.render({content: 2}, true)
        expect(hookResult.result.value).toStrictEqual(testObject)

        /*
            Do update object since dependencies / change trigger is still
            "false" now.
        */
        hookResult.render({content: 2}, false)
        expect(hookResult.result.value).not.toStrictEqual(testObject)
        expect(hookResult.result.value).toStrictEqual({content: 2})
    })
    // endregion
})
