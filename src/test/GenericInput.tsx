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

import GenericInput from '../components/GenericInput'
import {suggestionMatches} from '../components/GenericInput/helper'

// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

GenericInput.locales = ['en-US']

describe('GenericInput', ():void => {
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
        GenericInput.transformer.boolean.parse!,

        [false, false],
        [true, true],
        [false, 'false'],
        [true, 'true'],
        [false, 0],
        [true, 1],
        [true, 'a'],
        [true, null]
    )

    testEach<AnyFunction>(
        'transformer.currency.format.final.transform',
        GenericInput.transformer.currency.format!.final.transform!,

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
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )
    testEach<AnyFunction>(
        'transformer.currency.parse',
        GenericInput.transformer.currency.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1'],
            [0, '0'],
            [1, '1 €'],
            [1.1, '1.1 $'],
            [1.1, '1.1']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.date.format.final.transform',
        GenericInput.transformer.date.format!.final.transform!,

        ['1970-01-01', 0],
        ['1970-01-01', 10],
        ['1970-01-02', 60 ** 2 * 24],
        ['Infinitely far in the future', Infinity],
        ['Infinitely early in the past', -Infinity],
        ['', NaN]
    )
    testEach<AnyFunction>(
        'transformer.date.parse',
        GenericInput.transformer.date.parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f'],
            [0, '0 f'],
            [1, '1 f'],
            [1.1, '1.1 f'],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.datetime-local.format.final.transform',
        GenericInput.transformer['datetime-local'].format!.final.transform!,

        ['1970-01-01T00:00:00.000', 0],
        ['1970-01-01T00:00:10.000', 10],
        ['1970-01-02T00:00:00.000', 60 ** 2 * 24],
        ['Infinitely far in the future', Infinity],
        ['Infinitely early in the past', -Infinity],
        ['', NaN]
    )
    testEach<AnyFunction>(
        'transformer.datetime-local.parse',
        GenericInput.transformer['datetime-local'].parse!,

        ...([
            [1, 1],
            [0, 0],
            [1, '1 f', {}, GenericInput.transformer],
            [0, '0 f', {}, GenericInput.transformer],
            [1, '1 f', {}, GenericInput.transformer],
            [1.1, '1.1 f', {}, GenericInput.transformer],
            [8 * 60 ** 2, '1970-01-01T08:00:00.000Z']
        ].map((item:Array<unknown>):Array<unknown> =>
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    testEach<AnyFunction>(
        'transformer.time.format.final.transform',
        GenericInput.transformer.time.format!.final.transform!,

        ['00:00:00.000', 0, {}],
        ['00:00', 0, {step: 60}],
        ['00:00:10.000', 10, {}],
        ['00:00', 10, {step: 120}],
        ['00:00:00.000', 60 ** 2 * 24, {}],
        ['00:00:00.000', 60 ** 2 * 24, {step: 61}],
        ['00:00', 60 ** 2 * 24, {step: 60}],
        ['00:00:20.000', 60 ** 2 * 24 + 20, {}],
        ['00:10:00.000', 10 * 60, {}],
        ['10:10:00.000', 10 * 60 ** 2 + 10 * 60, {}],
        ['10:10:00.100', 10 * 60 ** 2 + 10 * 60 + 0.1, {}],
        ['10:10', 10 * 60 ** 2 + 10 * 60 + 0.1, {step: 60}],
        ['08:00', Date.parse('1970-01-01T08:00:00.000Z') / 1000, {step: 60}],
        ['Infinitely far in the future', Infinity, {}],
        ['Infinitely early in the past', -Infinity, {}],
        ['', NaN, {}]
    )
    testEach<AnyFunction>(
        'transformer.time.parse',
        GenericInput.transformer.time.parse!,

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
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    /*
        NOTE: Daylight saving time should not make a difference since times
        will always be saved on zero unix timestamp where no daylight saving
        time rules existing.
    */
    testEach<AnyFunction>(
        'transformer.time-local.format.final.transform',
        GenericInput.transformer['time-local'].format!.final.transform!,

        [
            // E.g. will result in 9 o'clock in germany.
            `0${new Date('1970-01-01T08:00:00.000Z').getHours()}:00`,
            Date.parse('1970-01-01T08:00:00.000Z') / 1000,
            {step: 60}
        ]
    )
    testEach<AnyFunction>(
        'transformer.time-local.parse',
        GenericInput.transformer['time-local'].parse!,

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
            item.concat({}, GenericInput.transformer)
        ) as Array<[ReturnType<AnyFunction>, ...Parameters<AnyFunction>]>)
    )

    // TODO
    test('render', ():void => {
        expect(render(<GenericInput/>)).toBeDefined()

        expect(render(<GenericInput/>)!.querySelector('input')).toBeDefined()

        expect(render(<GenericInput/>)!.getAttribute('class'))
            .toStrictEqual('generic-input')

        expect(
            render(<GenericInput name="test"/>)!.querySelector('[name="test"]')
        ).not.toStrictEqual(null)
    })
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
