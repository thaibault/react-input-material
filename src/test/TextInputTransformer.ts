// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import type {AnyFunction} from 'clientnode'

import {describe, expect, test} from '@jest/globals'
import {testEach} from 'clientnode/test-helper'

import TextInput from '../components/TextInput/index'
import type {
    DataTransformation, DefaultProperties
} from '../components/TextInput/type'
// endregion
TextInput.locales = ['en-US']

const TRANSFORMER = TextInput.transformer
const TIMESTAMP_TRANSFORMER = {
    ...TRANSFORMER,
    date: {...TRANSFORMER.date, useISOString: false}
}
/*
    Transformations where a dependent transformation is missing to test error
    handling.
*/
const WITHOUT_DATETIME_PARSE = {
    ...TRANSFORMER, datetime: {...TRANSFORMER.datetime, parse: undefined}
} as unknown as DataTransformation
const WITHOUT_DATETIME_FORMAT = {
    ...TRANSFORMER, datetime: {...TRANSFORMER.datetime, format: undefined}
} as unknown as DataTransformation
const WITHOUT_DATETIME_LOCAL_PARSE = {
    ...TRANSFORMER,
    'datetime-local': {...TRANSFORMER['datetime-local'], parse: undefined}
} as unknown as DataTransformation
const WITHOUT_TIME_LOCAL_PARSE = {
    ...TRANSFORMER,
    'time-local': {...TRANSFORMER['time-local'], parse: undefined}
} as unknown as DataTransformation
const WITHOUT_FORMATS = {
    ...TRANSFORMER,
    float: {...TRANSFORMER.float, format: undefined},
    integer: {...TRANSFORMER.integer, format: undefined}
} as unknown as DataTransformation
const WITHOUT_FLOAT_PARSE = {
    ...TRANSFORMER, float: {...TRANSFORMER.float, parse: undefined}
} as unknown as DataTransformation

const toLocalSeconds = (...parameters: [number, number, ...Array<number>]) =>
    new Date(...parameters).getTime() / 1000
const toLocalTimeSeconds = (
    hours: number, minutes: number, seconds = 0
): number => {
    const zeroDateTime = new Date(0)

    zeroDateTime.setHours(hours)
    zeroDateTime.setMinutes(minutes)
    zeroDateTime.setSeconds(seconds)

    return zeroDateTime.getTime() / 1000
}

describe('TextInput/transformer', () => {
    // region datetime
    testEach<AnyFunction>(
        'transformer.datetime.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.datetime.format!.final.transform!,

        ['1970-01-01T00:00:00', 0, TRANSFORMER, {}],
        ['1970-01-01T00:00:10', 10, TRANSFORMER, {}],
        ['1970-01-01T08:00:00', '1970-01-01T08:00', TRANSFORMER, {}],
        ['1970-01-01T08:00:30', '1970-01-01T08:00:30', TRANSFORMER, {}],
        ['Infinitely far in the future', Infinity, TRANSFORMER, {}],
        ['Infinitely early in the past', -Infinity, TRANSFORMER, {}],
        ['', NaN, TRANSFORMER, {}]
    )
    testEach<AnyFunction>(
        'transformer.datetime.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.datetime.parse!,

        [8 * 60 ** 2, '1970-01-01T08:00', TIMESTAMP_TRANSFORMER],
        [8 * 60 ** 2 + 30, '1970-01-01T08:00:30', TIMESTAMP_TRANSFORMER],
        [8 * 60 ** 2, '1970-01-01T08:00:00.000Z', TIMESTAMP_TRANSFORMER],
        [0, 'a1', TIMESTAMP_TRANSFORMER],
        [10, new Date(10 * 1000), TIMESTAMP_TRANSFORMER],
        [Infinity, Infinity, TIMESTAMP_TRANSFORMER],
        [-Infinity, -Infinity, TIMESTAMP_TRANSFORMER],
        ['1970-01-01T00:00:10.000Z', 10, TRANSFORMER],
        ['1970-01-01T08:00:00.000Z', '1970-01-01T08:00', TRANSFORMER]
    )
    // endregion
    // region datetime-local
    testEach<AnyFunction>(
        'transformer.datetime-local.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['datetime-local'].format!.final.transform!,

        ['1970-01-01T08:00:00', '1970-01-01T08:00', TRANSFORMER, {}],
        [
            '1970-01-02T10:20:30',
            toLocalSeconds(1970, 0, 2, 10, 20, 30),
            TRANSFORMER,
            {}
        ]
    )
    testEach<AnyFunction>(
        'transformer.datetime-local.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['datetime-local'].parse!,

        [
            toLocalSeconds(1970, 0, 1, 8),
            '1970-01-01T08:00',
            TIMESTAMP_TRANSFORMER
        ],
        [
            toLocalSeconds(1970, 0, 1, 8, 0, 30),
            '1970-01-01T08:00:30',
            TIMESTAMP_TRANSFORMER
        ],
        [0, 'a1', TIMESTAMP_TRANSFORMER],
        [10, new Date(10 * 1000), TIMESTAMP_TRANSFORMER],
        [Infinity, Infinity, TIMESTAMP_TRANSFORMER],
        [
            new Date(1970, 0, 1, 8).toISOString(),
            '1970-01-01T08:00',
            TRANSFORMER
        ]
    )
    // endregion
    // region date
    testEach<AnyFunction>(
        'transformer.date.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.date.format!.final.transform!,

        ['1970-01-01', '1970-01-01T08:00', TRANSFORMER, {}]
    )
    testEach<AnyFunction>(
        'transformer.date.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.date.parse!,

        ['1970-01-01T00:00:10.000Z', 10, TRANSFORMER, {}]
    )
    // endregion
    // region date-local
    testEach<AnyFunction>(
        'transformer.date-local.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['date-local'].format!.final.transform!,

        ['1970-01-02', toLocalSeconds(1970, 0, 2), TRANSFORMER, {}],
        ['1970-01-02', toLocalSeconds(1970, 0, 2, 23, 59), TRANSFORMER, {}],
        ['1970-01-02', '1970-01-02T12:00', TRANSFORMER, {}],
        ['Infinitely far in the future', Infinity, TRANSFORMER, {}],
        ['Infinitely early in the past', -Infinity, TRANSFORMER, {}],
        ['', NaN, TRANSFORMER, {}]
    )
    testEach<AnyFunction>(
        'transformer.date-local.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['date-local'].parse!,

        // Values rounded to a day will be shifted to local midnight.
        [toLocalSeconds(1970, 0, 2), 24 * 60 ** 2, TIMESTAMP_TRANSFORMER, {}],
        [24 * 60 ** 2 + 10, 24 * 60 ** 2 + 10, TIMESTAMP_TRANSFORMER, {}],
        [Infinity, Infinity, TIMESTAMP_TRANSFORMER, {}],
        [
            '1970-01-02T00:00:10.000Z', 24 * 60 ** 2 + 10, TRANSFORMER, {}
        ]
    )
    // endregion
    // region time
    testEach<AnyFunction>(
        'transformer.time.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.time.format!.final.transform!,

        ['10:10:00.000', '1970-01-01T10:10:00.000Z', TRANSFORMER, {}],
        ['10:10', '1970-01-01T10:10', TRANSFORMER, {step: 60}]
    )
    testEach<AnyFunction>(
        'transformer.time.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.time.parse!,

        [0, 'not a time', TIMESTAMP_TRANSFORMER],
        [0, NaN, TIMESTAMP_TRANSFORMER],
        [10, new Date(10 * 1000), TIMESTAMP_TRANSFORMER],
        [Infinity, Infinity, TIMESTAMP_TRANSFORMER],
        ['1970-01-01T00:00:10.000Z', '00:00:10', TRANSFORMER]
    )
    // endregion
    // region time-local
    testEach<AnyFunction>(
        'transformer.time-local.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['time-local'].format!.final.transform!,

        ['09:00:05', toLocalTimeSeconds(9, 0, 5), TRANSFORMER, {}],
        ['09:00:05', toLocalTimeSeconds(9, 0, 5), TRANSFORMER, {step: 61}],
        ['09:00', '09:00', TRANSFORMER, {step: 60}],
        ['', NaN, TRANSFORMER, {}]
    )
    test('transformer.time-local.format.final.transform edge values', () => {
        const transform: AnyFunction =
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            TRANSFORMER['time-local'].format!.final.transform!

        expect(transform(Infinity, TRANSFORMER, {}))
            .toStrictEqual(transform(24 * 60 ** 2, TRANSFORMER, {}))
        expect(transform(-Infinity, TRANSFORMER, {}))
            .toStrictEqual(transform(0, TRANSFORMER, {}))
    })
    testEach<AnyFunction>(
        'transformer.time-local.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER['time-local'].parse!,

        [toLocalTimeSeconds(9, 0, 5), '09:00:05', TIMESTAMP_TRANSFORMER],
        [8 * 60 ** 2, '1970-01-01T08:00:00.000Z', TIMESTAMP_TRANSFORMER],
        [0, 'not a time', TIMESTAMP_TRANSFORMER],
        [0, NaN, TIMESTAMP_TRANSFORMER],
        [10, new Date(10 * 1000), TIMESTAMP_TRANSFORMER],
        [Infinity, Infinity, TIMESTAMP_TRANSFORMER],
        [
            new Date(toLocalTimeSeconds(9, 0) * 1000).toISOString(),
            '09:00',
            TRANSFORMER
        ]
    )
    // endregion
    test('missing dependent transformations', () => {
        /* eslint-disable @typescript-eslint/no-non-null-assertion */
        for (const [transform, value, transformation] of [
            [
                TRANSFORMER.datetime.format!.final.transform!,
                '1970-01-01',
                WITHOUT_DATETIME_PARSE
            ],
            [
                TRANSFORMER['datetime-local'].format!.final.transform!,
                '1970-01-01',
                WITHOUT_DATETIME_LOCAL_PARSE
            ],
            [
                TRANSFORMER.date.format!.final.transform!,
                0,
                WITHOUT_DATETIME_FORMAT
            ],
            [TRANSFORMER.date.parse!, 0, WITHOUT_DATETIME_PARSE],
            [
                TRANSFORMER['date-local'].format!.final.transform!,
                '1970-01-02',
                WITHOUT_DATETIME_LOCAL_PARSE
            ],
            [TRANSFORMER['date-local'].parse!, 0, WITHOUT_DATETIME_PARSE],
            [
                TRANSFORMER.time.format!.final.transform!,
                '10:10',
                WITHOUT_DATETIME_PARSE
            ],
            [
                TRANSFORMER['time-local'].format!.final.transform!,
                '09:00',
                WITHOUT_TIME_LOCAL_PARSE
            ]
        ] as Array<[AnyFunction, number | string, DataTransformation]>)
            expect(() => transform(value, transformation, {}))
                .toThrow(/^Missing .+ transformation configured/)
        /* eslint-enable @typescript-eslint/no-non-null-assertion */
    })
    // region number
    testEach<AnyFunction>(
        'transformer.currency.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.currency.parse!,

        [NaN, '1', WITHOUT_FLOAT_PARSE, {}]
    )

    testEach<AnyFunction>(
        'transformer.float.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.float.format!.final.transform!,

        ['1.5', 1.5, WITHOUT_FORMATS],
        ['Infinity', Infinity, WITHOUT_FORMATS]
    )
    testEach<AnyFunction>(
        'transformer.float.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.float.parse!,

        [2.5, 2.5, TRANSFORMER, {}],
        // Fix sign if possible.
        [3.5, '-3.5', TRANSFORMER, {minimum: 0}],
        [-3.5, '3.5', TRANSFORMER, {maximum: 0}],
        [-3.5, '-3.5', TRANSFORMER, {maximum: 0}]
    )

    testEach<AnyFunction>(
        'transformer.integer.format.final.transform',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.integer.format!.final.transform!,

        ['1.5', 1.5, WITHOUT_FORMATS],
        ['Infinity', Infinity, WITHOUT_FORMATS]
    )
    testEach<AnyFunction>(
        'transformer.integer.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.integer.parse!,

        [2, 2, TRANSFORMER, {}],
        // Fix sign if possible.
        [3, '-3', TRANSFORMER, {minimum: 0}],
        [-3, '3', TRANSFORMER, {maximum: 0}],
        [-3, '-3', TRANSFORMER, {maximum: 0}]
    )

    test('transformer.{float,integer}.parse with german locale', () => {
        TextInput.locales = ['de-DE']

        try {
            /* eslint-disable @typescript-eslint/no-non-null-assertion */
            expect(TRANSFORMER.float.parse!(
                '1.234,5', TRANSFORMER, {} as DefaultProperties<number>
            )).toStrictEqual(1234.5)
            expect(TRANSFORMER.integer.parse!(
                '1.234', TRANSFORMER, {} as DefaultProperties<number>
            )).toStrictEqual(1234)
            /* eslint-enable @typescript-eslint/no-non-null-assertion */
        } finally {
            TextInput.locales = ['en-US']
        }
    })

    testEach<AnyFunction>(
        'transformer.number.parse',
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        TRANSFORMER.number.parse!,

        [5, 5],
        [5, '5']
    )
    // endregion
})
