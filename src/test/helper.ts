// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 4.0 international license.
    See https://creativecommons.org/licenses/by/4.0/deed.de
    endregion
*/
// region imports
import type {AnyFunction, Mapping} from 'clientnode'
import type {TestHookResult} from 'react-generic-tools/type'

import {NOOP} from 'clientnode'
import {NullSymbol, UndefinedSymbol} from 'clientnode/property-types'
import {testEach} from 'clientnode/test-helper'
import {useMemorizedValue} from 'react-generic-tools'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import {
    afterEach, beforeEach, describe, expect, jest, test
} from '@jest/globals'

import TextInput from '../components/TextInput/index'
import {
    createDummyStateSetter,
    deriveMissingPropertiesFromState,
    determineInitialRepresentation,
    determineInitialValue,
    determineValidationState,
    formatDateTimeAsConfigured,
    formatValue,
    getConsolidatedProperties,
    getLabelAndValues,
    getRepresentationFromValueSelection,
    getValueFromSelection,
    hashRegularExpression,
    log,
    mapPropertiesIntoModel,
    normalizeSelection,
    parseValue,
    renderMessage,
    slicePropertiesForState,
    slicePropertiesForStateRecursively,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../helper'
import type {DefaultProperties, ModelState} from '../type'
// endregion
const {runHook} = prepareTestEnvironment(beforeEach, afterEach)

TextInput.locales = ['en-US']

const TRANSFORMER = TextInput.transformer

describe('helper', (): void => {
    // region state
    test('slicePropertiesForState', () => {
        const properties: Mapping<unknown> = {
            name: 'name',
            onChange: NOOP,
            ref: {current: null},
            representation: 'representation'
        }

        slicePropertiesForState(properties as Mapping)

        expect(properties).toStrictEqual({name: 'name'})
    })
    testEach<typeof slicePropertiesForStateRecursively>(
        'slicePropertiesForStateRecursively',
        slicePropertiesForStateRecursively,

        [undefined, null],
        [undefined, 1],
        [
            {a: 1, list: [{c: 3}, 4], nested: {b: 2}},
            {
                a: 1,
                list: [{c: 3, representation: 'c'}, 4],
                nested: {b: 2, onClick: NOOP},
                ref: {current: null}
            }
        ]
    )
    test('createDummyStateSetter', () => {
        const setter = createDummyStateSetter(2)
        const callback = jest.fn()

        setter(callback)
        expect(callback).toHaveBeenCalledWith(2)

        expect(() => {
            setter(3)
        }).not.toThrow()
    })
    testEach<AnyFunction>(
        'deriveMissingPropertiesFromState',
        deriveMissingPropertiesFromState,

        [{value: 3}, {}, {modelState: {}, value: 3}],
        [
            {model: {state: {dirty: true}, value: 2}, value: 2},
            {model: {value: 2}},
            {modelState: {dirty: true}, value: 3}
        ],
        [
            {model: {state: {dirty: false, touched: true}}, value: 1},
            {model: {state: {dirty: false}}},
            {modelState: {dirty: true, touched: true}, value: 1}
        ]
    )
    test('wrapStateSetter', () => {
        const currentValueState = {modelState: {dirty: false}, value: 1}
        const setValueState = jest.fn()
        const setter = wrapStateSetter(setValueState, currentValueState)

        // Value changes alone will not be forwarded.
        setter({modelState: {dirty: false}, value: 2})
        expect(setValueState).not.toHaveBeenCalled()

        setter((oldValueState: typeof currentValueState) => ({
            ...oldValueState, modelState: {dirty: true}
        }))
        expect(setValueState).toHaveBeenCalledWith(
            {modelState: {dirty: true}, value: 1}
        )
    })
    // endregion
    testEach<typeof renderMessage>(
        'renderMessage',
        renderMessage,

        ['', null, {}],
        ['', 1, {}],
        ['Hello World', 'Hello ${name}', {name: 'World'}]
    )
    test('renderMessage warns about invalid templates', () => {
        const warn = jest.spyOn(log, 'warn').mockImplementation(() =>
            Promise.resolve()
        )

        expect(renderMessage('Hello ${', {})).toStrictEqual('')
        expect(warn).toHaveBeenCalledTimes(1)
        expect(warn).toHaveBeenCalledWith(
            'Given message template could not be proceed:',
            expect.any(String)
        )

        warn.mockRestore()
    })
    test('triggerCallbackIfExists', async () => {
        const onChange = jest.fn()
        const properties = {model: {}, onChange} as unknown as
            Parameters<typeof triggerCallbackIfExists>[0]

        triggerCallbackIfExists(properties, 'change', true, 1, 2)
        expect(onChange).toHaveBeenCalledWith(1, 2)

        triggerCallbackIfExists(properties, 'blur')

        triggerCallbackIfExists(properties, 'change', false, 3)
        expect(onChange).toHaveBeenCalledTimes(1)
        await new Promise((resolve) => {
            setTimeout(resolve, 10)
        })
        expect(onChange).toHaveBeenLastCalledWith(3)
    })
    // region consolidate state
    test('translateKnownSymbols', () => {
        const value = {c: 1}
        const result = translateKnownSymbols(
            {a: UndefinedSymbol, b: NullSymbol, c: value}
        )

        expect(result).toStrictEqual({a: undefined, b: null, c: {c: 1}})
        expect(result.c).not.toBe(value)
    })
    testEach<AnyFunction>(
        'determineInitialRepresentation',
        determineInitialRepresentation,

        [
            'given',
            {representation: 'given'},
            {model: {type: 'string'}},
            1,
            TRANSFORMER
        ],
        ['', {}, {model: {type: 'string'}}, null, TRANSFORMER],
        [
            'one',
            {},
            {model: {type: 'integer'}},
            1,
            TRANSFORMER,
            [{label: 'one', value: 1}]
        ],
        [
            '$1.00',
            {type: 'currency'},
            {model: {type: 'string'}},
            1,
            TRANSFORMER
        ],
        [
            '$1.00',
            {model: {type: 'currency'}},
            {model: {type: 'string'}},
            1,
            TRANSFORMER
        ],
        ['$1.00', {}, {model: {type: 'currency'}}, 1, TRANSFORMER]
    )
    testEach<typeof determineInitialValue>(
        'determineInitialValue',
        determineInitialValue,

        [true, {model: {default: true}}, false],
        [null, {model: {default: true, value: null}}, false],
        [3, {value: 1}, 2, 3],
        [1, {model: {value: 2}, value: 1}, 3],
        [2, {initialValue: 2, model: {default: 3}}, 4],
        [2, {default: 2, model: {default: 3}}, 4],
        [4, {}, 4],
        [null, {}]
    )
    test('determineValidationState', () => {
        const state: Partial<ModelState> = {}
        const properties = {model: {
            nullable: false, state, type: 'string', value: ''
        }} as unknown as DefaultProperties

        expect(determineValidationState(properties, state))
            .toStrictEqual(true)
        expect(state).toStrictEqual(
            {invalid: true, invalidRequired: true, valid: false}
        )
        // Nothing has changed.
        expect(determineValidationState(properties, state))
            .toStrictEqual(false)

        properties.model.value = 'a'
        expect(determineValidationState(
            properties, state, {invalidCustom: () => true}
        )).toStrictEqual(true)
        expect(state).toStrictEqual({
            invalid: true,
            invalidCustom: true,
            invalidRequired: false,
            valid: false
        })

        const booleanProperties = {model: {
            type: 'boolean', value: 'unknown'
        }} as unknown as DefaultProperties

        determineValidationState(booleanProperties, {})
        expect(booleanProperties.model.state).toStrictEqual(
            {invalidRequired: true}
        )

        booleanProperties.model.value = 'true'
        determineValidationState(booleanProperties, {})
        expect(booleanProperties.model.state).toStrictEqual(
            {invalidRequired: false}
        )
    })
    testEach<AnyFunction>(
        'mapPropertiesIntoModel',
        mapPropertiesIntoModel,

        [
            {model: {default: 2, state: {}, value: 2}},
            {},
            {default: 2, state: {}}
        ],
        [
            {
                invalid: true,
                model: {
                    default: 0,
                    invertedPattern: 'b',
                    mutable: false,
                    name: 'name',
                    nullable: false,
                    pattern: 'a',
                    state: {invalid: true},
                    type: 'string',
                    value: 1
                },
                name: 'name',
                type: 'string',
                value: 1
            },
            {
                disabled: true,
                invalid: true,
                invertedPattern: 'b',
                name: 'name',
                pattern: 'a',
                required: true,
                type: 'text',
                value: 1
            },
            {
                default: 0,
                mutable: true,
                name: '',
                nullable: true,
                state: {invalid: false},
                type: 'string'
            }
        ]
    )
    testEach<AnyFunction>(
        'getConsolidatedProperties',
        getConsolidatedProperties,

        [
            {
                dirty: true,
                disabled: true,
                model: {
                    mutable: true,
                    nullable: true,
                    state: {dirty: true},
                    value: 1,
                    writable: false
                },
                name: 'name',
                required: false,
                value: 1
            },
            {
                model: {
                    mutable: true,
                    nullable: true,
                    state: {dirty: true},
                    value: 1,
                    writable: false
                },
                name: 'name'
            }
        ],
        [{disabled: true, required: true}, {}]
    )
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
        ],
        [null, null, null],
        [[{label: 'a', value: 'a'}], undefined, ['a']],
        [[{label: 'X', value: 'a'}], [{label: 'a', value: 'a'}], ['X']],
        // Mappings will be sorted alphabetically by their labels.
        [
            [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}],
            {b: 'B', a: 'A'},
            undefined
        ],
        [
            [{label: 'A', value: 'a'}, {label: 'X', value: 'b'}],
            {b: 'B', a: 'A'},
            {b: 'X'}
        ],
        // Labels given as pairs determine labels and ordering.
        [
            [{label: 'B', value: 'b'}, {label: 'A', value: 'a'}],
            ['a', 'b'],
            [['b', 'B'], ['a', 'A']] as Array<[string, string]>
        ]
    )
    testEach<AnyFunction>(
        'parseValue',
        parseValue,

        [
            null,
            {model: {emptyEqualsNull: true, type: 'string'}},
            '',
            TRANSFORMER
        ],
        ['', {model: {type: 'string'}}, '', TRANSFORMER],
        ['a', {model: {type: 'string'}}, ' a ', TRANSFORMER, true],
        [' a ', {model: {type: 'string'}}, ' a ', TRANSFORMER],
        [3, {model: {type: 'integer'}}, '3', TRANSFORMER],
        [null, {model: {type: 'integer'}}, 'a', TRANSFORMER],
        [null, {model: {type: 'integer'}}, null, TRANSFORMER],
        [undefined, {model: {type: 'integer'}}, undefined, TRANSFORMER]
    )
    testEach<AnyFunction>(
        'formatValue',
        formatValue,

        ['', {model: {type: 'string'}}, null, TRANSFORMER],
        ['', {model: {type: 'string'}}, undefined, TRANSFORMER],
        ['', {model: {type: 'integer'}}, NaN, TRANSFORMER],
        ['a', {model: {type: 'string'}}, 'a', TRANSFORMER],
        ['3', {model: {type: 'integer'}}, 3, TRANSFORMER],
        ['$1.00', {model: {type: 'string'}, type: 'currency'}, 1, TRANSFORMER],
        // Falls back to final formatting.
        ['$1.00', {model: {type: 'currency'}}, 1, TRANSFORMER, false]
    )
    test('formatDateTimeAsConfigured', () => {
        expect(formatDateTimeAsConfigured(10))
            .toStrictEqual('1970-01-01T00:00:10.000Z')
        expect(formatDateTimeAsConfigured(new Date(10 * 1000)))
            .toStrictEqual('1970-01-01T00:00:10.000Z')
        expect(formatDateTimeAsConfigured(Infinity)).toStrictEqual(Infinity)
        expect(formatDateTimeAsConfigured('a')).toStrictEqual('a')
        expect(formatDateTimeAsConfigured(null)).toStrictEqual(null)

        const useISOString = TRANSFORMER.date.useISOString
        TRANSFORMER.date.useISOString = false

        try {
            expect(formatDateTimeAsConfigured(10)).toStrictEqual(10)
            expect(formatDateTimeAsConfigured(new Date(10 * 1000)))
                .toStrictEqual(10)
            expect(formatDateTimeAsConfigured('1970-01-01T00:00:10.000Z'))
                .toStrictEqual(10)
            expect(formatDateTimeAsConfigured(null)).toStrictEqual(null)
        } finally {
            TRANSFORMER.date.useISOString = useISOString
        }
    })
    // endregion
    testEach<typeof hashRegularExpression>(
        'hashRegularExpression',
        hashRegularExpression,

        ['a||', /a/],
        ['a||gi', /a/gi],
        ['a||gi', /a/ig]
    )
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
