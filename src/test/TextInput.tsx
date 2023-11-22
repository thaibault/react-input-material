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
import {AnyFunction} from 'clientnode/type'
import {testEach} from 'clientnode/testHelper'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import TextInput, {suggestionMatches} from '../components/TextInput'

// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

TextInput.locales = ['en-US']

const TRANSFORMER = TextInput.transformer
const TIMESTAMP_TRANSFORMER = {
    ...TextInput.transformer,
    date: {...TextInput.transformer.date, useISOString: false}
}

describe('TextInput', ():void => {
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
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TextInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.currency.parse', TRANSFORMER.currency.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1'],
            [0, '0'],
            [1, '1 €'],
            [1.1, '1.1 $'],
            [1.1, '1.1']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TRANSFORMER, {maximum: Infinity, minimum: -Infinity})
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.date.format.final.transform',
        TRANSFORMER.date.format!.final.transform!,

        ...([
            ['1970-01-01', 0],
            ['1970-01-01', 10],
            ['1970-01-02', 60 ** 2 * 24],
            ['Infinitely far in the future', Infinity],
            ['Infinitely early in the past', -Infinity],
            ['', NaN]
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TextInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.date.parse',
        TIMESTAMP_TRANSFORMER.date.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.datetime-local.format.final.transform',
        TRANSFORMER['datetime-local'].format!.final.transform!,

        ['1969-12-31T23:00:00', 0],
        ['1969-12-31T23:00:10', 10],
        ['1970-01-01T23:00:00', 60 ** 2 * 24],
        ['Infinitely far in the future', Infinity],
        ['Infinitely early in the past', -Infinity],
        ['', NaN]
    )
    testEach<AnyFunction>(
        'transformer.datetime-local.parse',
        TIMESTAMP_TRANSFORMER['datetime-local'].parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.time.format.final.transform',
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
        ].map((item:Array<unknown>):Array<unknown> =>
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
        TRANSFORMER['time-local'].format!.final.transform!,

        [
            // E.g. will result in 9 o'clock in germany.
            `0${new Date('1970-01-01T08:00:00.000Z').getHours()}:00`,
            Date.parse('1970-01-01T08:00:00.000Z') / 1000,
            TRANSFORMER,
            {step: 60}
        ]
    )
    testEach<AnyFunction>(
        'transformer.time-local.parse',
        TIMESTAMP_TRANSFORMER['time-local'].parse!,

        ...([
            [
                // E.g. will result in 8 o'clock in germany.
                (():number => {
                    const zeroDateTime = new Date(0)
                    zeroDateTime.setHours(9)
                    return zeroDateTime.getTime() / 1000
                })(),
                '09:00'
            ]
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat(TIMESTAMP_TRANSFORMER)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    // TODO
    test('render', ():void => {
        expect(render(<TextInput/>)).toBeDefined()

        expect(render(<TextInput/>)!.querySelector('input')).toBeDefined()

        expect(render(<TextInput/>)!.getAttribute('class'))
            .toStrictEqual('text-input')

        expect(
            render(<TextInput name="test"/>)!.querySelector('[name="test"]')
        ).not.toStrictEqual(null)
    })
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
