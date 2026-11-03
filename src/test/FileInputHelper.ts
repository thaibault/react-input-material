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

import {
    deriveBase64String,
    determineContentType,
    determineRepresentationType,
    determineValidationState,
    preserveStaticFileBaseNameInputGenerator,
    readBinaryDataIntoText
} from '../components/FileInput/helper'
import type {
    DefaultProperties, ModelState, Value
} from '../components/FileInput/type'
import {RepresentationType} from '../components/FileInput/type'
// endregion
describe('FileInput/helper', () => {
    testEach<AnyFunction>(
        'preserveStaticFileBaseNameInputGenerator',
        preserveStaticFileBaseNameInputGenerator,

        [
            {disabled: true, name: 'prototype', value: 'file.png'},
            {name: 'prototype'},
            {name: 'file', value: {name: 'image.PNG'}}
        ],
        [
            {disabled: true, value: 'file'},
            {},
            {name: 'file', value: {name: 'image'}}
        ],
        [{disabled: true, value: 'file'}, {}, {name: 'file'}]
    )
    testEach<AnyFunction>(
        'determineContentType',
        determineContentType,

        [null, {}],
        [null, {value: {url: 'https://example.com/image.png'}}],
        ['text/plain', {value: {blob: new Blob([], {type: 'text/plain'})}}],
        ['image/png', {value: {url: 'data:image/png;base64,AA=='}}]
    )
    testEach<typeof determineRepresentationType>(
        'determineRepresentationType',
        determineRepresentationType,

        [RepresentationType.TEXT, 'text/plain; charset=utf-8'],
        [RepresentationType.TEXT, 'application/json'],
        [RepresentationType.IMAGE, 'image/png'],
        [RepresentationType.VIDEO, 'video/mp4'],
        [RepresentationType.BINARY, 'application/octet-stream']
    )
    test('determineValidationState', () => {
        const state = {} as ModelState
        const createProperties = (
            model: Partial<DefaultProperties['model']>
        ): DefaultProperties => ({model: {
            state,
            value: {blob: new Blob(['abc'], {type: 'text/plain'})},
            ...model
        }}) as unknown as DefaultProperties

        let properties = createProperties({
            contentTypePattern: ['^image/', /^video\//],
            invertedContentTypePattern: 'text',
            maximumSize: 2,
            minimumSize: 1
        })
        expect(determineValidationState(properties, false, state))
            .toStrictEqual(true)
        expect(state).toStrictEqual({
            invalid: true,
            invalidContentTypePattern: true,
            invalidInvertedContentTypePattern: true,
            invalidMaximumSize: true,
            invalidMinimumSize: false,
            invalidName: false,
            invalidRequired: false,
            valid: false
        })

        properties = createProperties({
            contentTypePattern: /^text\//,
            invertedContentTypePattern: [/^image\//],
            maximumSize: 10,
            minimumSize: 5
        })
        expect(determineValidationState(properties, true, state))
            .toStrictEqual(true)
        expect(state).toStrictEqual({
            invalid: true,
            invalidContentTypePattern: false,
            invalidInvertedContentTypePattern: false,
            invalidMaximumSize: false,
            invalidMinimumSize: true,
            invalidName: true,
            invalidRequired: false,
            valid: false
        })
    })
    test('deriveBase64String', async () => {
        await expect(deriveBase64String({blob: new Blob(['abc'])} as Value))
            .resolves.toStrictEqual('YWJj')
        await expect(deriveBase64String({source: 'abc'} as Value))
            .resolves.toStrictEqual('YWJj')
        await expect(deriveBase64String({} as Value)).rejects.toThrow(
            'Base 64 string could not be determined.'
        )
    })
    test('readBinaryDataIntoText', async () => {
        await expect(readBinaryDataIntoText(new Blob(['a\r\nb'])))
            .resolves.toStrictEqual('a\nb')
        await expect(readBinaryDataIntoText(
            new Blob(['﻿abc']), 'utf-8-sig'
        )).resolves.toStrictEqual('abc')

        let abort: (() => void) | undefined
        const result = readBinaryDataIntoText(
            new Blob(['abc']),
            'utf-8',
            (callback: () => void) => {
                abort = callback
            }
        )
        abort?.()
        await expect(result).rejects.toThrow('abort')
    })
})
