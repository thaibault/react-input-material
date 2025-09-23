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
import {AnyFunction} from 'clientnode'
import {testEach} from 'clientnode/test-helper'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import TextInput, {
    CSS_CLASS_NAMES, suggestionMatches
} from '../components/TextInput'

// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

TextInput.locales = ['en-US']

const TRANSFORMER = TextInput.transformer
const TIMESTAMP_TRANSFORMER = {
    ...TextInput.transformer,
    date: {...TextInput.transformer.date, useISOString: false}
}
const TIMEZONE_OFFSET_IN_SECONDS =
    -1 * new Date(1970, 0, 1).getTimezoneOffset() * 60

describe('TextInput', () => {
    testEach<typeof suggestionMatches>(
        'suggestionMatches',
        suggestionMatches,

        [false, 'a', ''],
        [false, 'a', null],
        [false, 'a', undefined],
        [false, 'a', 'b'],
        [false, 'a', 'a b'],
        [false, 'a', 'a  b'],
        [true, 'b', 'b'],
        [true, 'a b', 'b'],
        [true, 'a b', 'a b']
    )
    testEach<AnyFunction>(
        'transformer.boolean.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.boolean.parse!,

        [false, false],
        [true, true],
        [false, 'false'],
        [true, 'true'],
        [false, 0],
        [true, 1],
        [true, 'a'],
        [true, null]
    )

    // TODO add missing transformer
    testEach<AnyFunction>(
        'transformer.currency.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.currency.format!.final.transform!,

        ...([
            ['$0.00', 0],
            ['$0.10', 0.1],
            ['$0.01', 0.01],
            ['$0.00', 0.001],
            ['$1.00', 1],
            ['Infinity USD', Infinity],
            ['- Infinity USD', -Infinity],
            ['unknown', NaN]
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TextInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        'transformer.currency.parse', TRANSFORMER.currency.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1'],
            [0, '0'],
            [1, '1 €'],
            [1.1, '1.1 $'],
            [1.1, '1.1']
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TRANSFORMER, {maximum: Infinity, minimum: -Infinity})
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.date.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.date.format!.final.transform!,

        ...([
            ['1970-01-01', 0],
            ['1970-01-01', 10],
            ['1970-01-02', 60 ** 2 * 24],
            ['Infinitely far in the future', Infinity],
            ['Infinitely early in the past', -Infinity],
            ['', NaN]
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TextInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.date.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TIMESTAMP_TRANSFORMER.date.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.datetime-local.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['datetime-local'].format!.final.transform!,

        ['1970-01-01T00:00:00', -1 * TIMEZONE_OFFSET_IN_SECONDS],
        ['1970-01-01T00:00:10', 10 + -1 * TIMEZONE_OFFSET_IN_SECONDS],
        [
            '1970-01-02T00:00:00',
            60 ** 2 * 24 + -1 * TIMEZONE_OFFSET_IN_SECONDS
        ],
        ['Infinitely far in the future', Infinity],
        ['Infinitely early in the past', -Infinity],
        ['', NaN]
    )
    testEach<AnyFunction>(
        'transformer.datetime-local.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TIMESTAMP_TRANSFORMER['datetime-local'].parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.time.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TextInput.transformer.time.format!.final.transform!,

        ['00:00:00.000', 0, TextInput.transformer, {}],
        ['00:00', 0, TextInput.transformer, {step: 60}],
        ['00:00:10.000', 10, TextInput.transformer, {}],
        ['00:00', 10, TextInput.transformer, {step: 120}],
        ['00:00:00.000', 60 ** 2 * 24, TextInput.transformer, {}],
        ['00:00:00.000', 60 ** 2 * 24, TextInput.transformer, {step: 61}],
        ['00:00', 60 ** 2 * 24, TextInput.transformer, {step: 60}],
        ['00:00:20.000', 60 ** 2 * 24 + 20, TextInput.transformer, {}],
        ['00:10:00.000', 10 * 60, TextInput.transformer, {}],
        ['10:10:00.000', 10 * 60 ** 2 + 10 * 60, TextInput.transformer, {}],
        [
            '10:10:00.100',
            10 * 60 ** 2 + 10 * 60 + 0.1,
            TextInput.transformer,
            {}
        ],
        [
            '10:10',
            10 * 60 ** 2 + 10 * 60 + 0.1,
            TextInput.transformer,
            {step: 60}
        ],
        [
            '08:00',
            Date.parse('1970-01-01T08:00:00.000Z') / 1000,
            TextInput.transformer,
            {step: 60}
        ],
        [
            'Infinitely far in the future', Infinity, TextInput.transformer, {}
        ],
        [
            'Infinitely early in the past',
            -Infinity,
            TextInput.transformer,
            {}
        ],
        ['', NaN, TextInput.transformer, {}]
    )
    testEach<AnyFunction>(
        'transformer.time.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TIMESTAMP_TRANSFORMER.time.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [10 * 60 ** 2 + 10 * 60, '10:10'],
            [10 * 60 ** 2 + 10 * 60 + 10, '10:10:10'],
            [10 * 60 ** 2 + 10 * 60 + 10.1, '10:10:10.10'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    /*
        NOTE: Daylight saving time should not make a difference since times
        will always be saved on zero unix timestamp where no daylight saving
        time rules existing.
    */
    testEach<AnyFunction>(
        'transformer.time-local.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['time-local'].format!.final.transform!,

        [
            // E.g. will result at 9 o'clock in germany.
            '0' +
            `${String(new Date('1970-01-01T08:00:00.000Z').getHours())}:00`,
            Date.parse('1970-01-01T08:00:00.000Z') / 1000,
            TRANSFORMER,
            {step: 60}
        ]
    )
    testEach<AnyFunction>(
        'transformer.time-local.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TIMESTAMP_TRANSFORMER['time-local'].parse!,

        ...([
            [
                // E.g. will result at 8 o'clock in germany.
                ((): number => {
                    const zeroDateTime = new Date(0)
                    zeroDateTime.setHours(9)
                    return zeroDateTime.getTime() / 1000
                })(),
                '09:00'
            ]
        ].map((item: Array<unknown>): Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    test('render', () => {
        expect(render(<TextInput/>)).toBeDefined()

        expect(render(<TextInput/>)?.querySelector('input')).toBeDefined()

        expect(render(<TextInput/>)?.getAttribute('class'))
            .toStrictEqual('text-input')

        expect(
            render(<TextInput name="test"/>)?.querySelector('[name="test"]')
        ).not.toStrictEqual(null)

        const domNode = render(<TextInput<string>
            selection={['hans hans', 'peter peter']}
            suggestSelection
            value="ans"
        />)

        const textResults =
            domNode?.querySelector(
                `.${CSS_CLASS_NAMES.textInputSuggestionsSuggestion}`
            // NOTE We want to filter span wrapping spans.
            )?.querySelectorAll('span:not(span span)')
                .values()
                .toArray()
                .map((domNode) => domNode.textContent)

        expect(textResults).toStrictEqual(['h', 'ans', ' h', 'ans'])
    })
})
