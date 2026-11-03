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
import {describe, expect, test} from '@jest/globals'

import {
    determineValidationState, preventEnterKeyPropagation
} from '../components/TextInput/helper'
import type {
    DefaultProperties, ModelState
} from '../components/TextInput/type'
// endregion
describe('TextInput/helper', () => {
    test('determineValidationState', () => {
        const state: Partial<ModelState> = {}
        const properties = {model: {
            invertedPattern: ['b'],
            maximum: 10,
            maximumLength: 2,
            minimum: 0,
            minimumLength: 1,
            pattern: 'x',
            state,
            value: 'abc'
        }} as unknown as DefaultProperties<string>

        expect(determineValidationState(properties, state))
            .toStrictEqual(true)
        expect(state).toStrictEqual({
            invalid: true,
            invalidInvertedPattern: true,
            invalidMaximum: false,
            invalidMaximumLength: true,
            invalidMinimum: false,
            invalidMinimumLength: false,
            invalidPattern: true,
            invalidRequired: false,
            valid: false
        })
        // Nothing has changed.
        expect(determineValidationState(properties, state))
            .toStrictEqual(false)

        const numberState: Partial<ModelState> = {}
        const numberProperties = {model: {
            maximum: 10, minimum: 5, state: numberState, value: 11
        }} as unknown as DefaultProperties<number>

        expect(determineValidationState(numberProperties, numberState))
            .toStrictEqual(true)
        expect(numberState).toHaveProperty('invalidMaximum', true)
        expect(numberState).toHaveProperty('invalidMinimum', false)

        numberProperties.model.value = 4
        expect(determineValidationState(numberProperties, numberState))
            .toStrictEqual(true)
        expect(numberState).toHaveProperty('invalidMaximum', false)
        expect(numberState).toHaveProperty('invalidMinimum', true)
    })
    test('preventEnterKeyPropagation', () => {
        let numberOfStopPropagationCalls = 0
        const createEvent = (
            code: string
        ): Parameters<typeof preventEnterKeyPropagation>[0] => ({
            code,
            stopPropagation: () => {
                numberOfStopPropagationCalls += 1
            }
        }) as unknown as Parameters<typeof preventEnterKeyPropagation>[0]

        preventEnterKeyPropagation(createEvent('KeyA'))
        expect(numberOfStopPropagationCalls).toStrictEqual(0)

        preventEnterKeyPropagation(createEvent('Enter'))
        expect(numberOfStopPropagationCalls).toStrictEqual(1)
    })
})
