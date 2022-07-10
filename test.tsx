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
import {testEach} from 'clientnode/testHelper'
import React from 'react'

import GenericAnimate from './components/GenericAnimate'
import FileInput from './components/FileInput'
import GenericInput, {suggestionMatches} from './components/GenericInput'
import Inputs from './components/Inputs'
import Interval from './components/Interval'
import RequireableCheckbox from './components/RequireableCheckbox'
import WrapConfigurations from './components/WrapConfigurations'
import WrapStrict from './components/WrapStrict'
import WrapThemeProvider from './components/WrapThemeProvider'
import WrapTooltip from './components/WrapTooltip'
import {
    determineInitialValue,
    getLabelAndValues,
    getRepresentationFromValueSelection,
    getValueFromSelection,
    normalizeSelection
} from './helper'
import prepareTestEnvironment from './testHelper'
import {TestEnvironment} from './type'
// endregion
const testEnvironment:TestEnvironment =
    prepareTestEnvironment(beforeEach, afterEach)
const {render} = testEnvironment
// region FileInput
describe('FileInput', ():void => {
    test('render', ():void => {
        expect(render(<FileInput/>)).toBeDefined()
        expect(render(<FileInput/>)!.querySelector('input')).toBeDefined()

        expect(render(<FileInput/>)!.getAttribute('class'))
            .toStrictEqual('file-input mdc-card')

        expect(
            render(<FileInput name="test"/>)!.querySelector('[name="test"]')
        ).not.toStrictEqual(null)
    })
})
// endregion
// region Inputs
describe('Inputs', ():void => {
    test('render', ():void => {
        expect(render(<Inputs/>)).toBeDefined()

        let domNode:HTMLElement = render(<Inputs/>)!
        expect(domNode.querySelector('input')).toHaveProperty('disabled', true)
        expect(domNode.querySelector('.inputs__add__button'))
            .not.toStrictEqual(null)
        expect(domNode.querySelector('.inputs__item__remove'))
            .toStrictEqual(null)

        domNode = render(<Inputs value={['a']}/>)!
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__item__remove')))
            .toHaveLength(1)

        domNode = render(<Inputs value={[{value: 'a'}, 'b']}/>) as
            HTMLElement
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(2)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__item__remove')))
            .toHaveLength(2)

        expect(
            render(<Inputs value={['a']}/>)!.querySelector('input')
        ).toHaveProperty('value', 'a')
    })
})
// endregion
// region Interval
describe('Interval', ():void => {
    test('render', ():void => {
        expect(render(<Interval/>)).toBeDefined()

        expect(Array.from(
            render(<Interval/>)!.querySelectorAll('input')
        )).toHaveLength(2)

        expect(render(<Interval/>)!.getAttribute('class'))
            .toStrictEqual('interval')

        expect(render(<Interval/>)!.querySelectorAll('.interval__end')
        ).toBeDefined()
        expect(render(<Interval/>)!.querySelectorAll('.interval__icon')
        ).toBeDefined()
        expect(
            render(<Interval/>)!.querySelectorAll('.interval__start')
        ).toBeDefined()

        expect(
            render(<Interval name="test"/>)!.getAttribute('data-name')
        ).toStrictEqual('test')
    })
})
// endregion
// region helper
describe('helper', ():void => {
    testEach<typeof getLabelAndValues>(
        'getLabelAndValues',
        getLabelAndValues,

        [[[], []], undefined],
        [[[], []], []],
        [
            [['A', 'B'], ['a', 'b']],
            [{label: 'A', value: 'a'}, {label: 'B', value: 'b'}]
        ],
        [[['A', 'B'], ['a', 'b']], {a: 'A', b: 'B'}],
        [[['a', 'B'], ['a', 'b']], [{value: 'a'}, {label: 'B', value: 'b'}]],
        [[['JA', 'NEIN'], ['true', 'false']], {false: 'NEIN', true: 'JA'}]
    )
    testEach<typeof getRepresentationFromValueSelection>(
        'getRepresentationFromValueSelection',
        getRepresentationFromValueSelection,

        ['No', 'false', {false: 'No', true: 'Yes'}],
        ['Yes', 'true', {false: 'No', true: 'Yes'}],
        ['a', 'a', ['a', 'b']],
        ['a', 'a', ['b', 'a']],
        ['a', 1, [{label: 'a', value: 1}, {label: 'b', value: 2}]],
        ['b', 'b', [{label: 'a', value: 1}, {value: 'b'}]],
        ['2', 2, [{label: 'a', value: 1}, {value: 2}]],
        [null, 2, [{label: 'a', value: 1}]]
    )
    testEach<typeof getValueFromSelection>(
        'getValueFromSelection',
        getValueFromSelection,

        ['false', 'No', {false: 'No', true: 'Yes'}],
        ['true', 'Yes', {false: 'No', true: 'Yes'}],
        ['a', 'a', ['a', 'b']],
        ['a', 'a', ['b', 'a']],
        [1, 'a', [{label: 'a', value: 1}, {label: 'b', value: 2}]],
        ['b', 'b', [{label: 'a', value: 1}, {value: 'b'}]],
        [2, '2', [{label: 'a', value: 1}, {value: 2}]],
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
// endregion
// region GenericAnimate
describe('GenericAnimate', ():void => {
    test('render', ():void => {
        expect(GenericAnimate({children: <div/>}))
            .toHaveProperty('props.in', true)
        expect(GenericAnimate({children: <div/>, in: false}))
            .toHaveProperty('props.in', false)
    })
})
// endregion
// region GenericInput
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
    testEach<typeof GenericInput.transformer.boolean.parse>(
        'transformer.boolean.parse',
        GenericInput.transformer.boolean.parse,

        [false, false],
        [true, true],
        [false, 'false'],
        [true, 'true'],
        [false, 0],
        [true, 1],
        [true, 'a'],
        [true, null]
    )

    testEach<typeof GenericInput.transformer.currency.format.final.tranform>(
        'transformer.currency.format.final.transform',
        GenericInput.transformer.currency.format.final.transform,

        ['0,00 $', 0, {}, GenericInput.transformer],
        ['0,10 $', 0.1, {}, GenericInput.transformer],
        ['0,01 $', 0.01, {}, GenericInput.transformer],
        ['0,00 $', 0.001, {}, GenericInput.transformer],
        ['1,00 $', 1, {}, GenericInput.transformer],
        ['Infinity USD', Infinity, {}, GenericInput.transformer],
        ['- Infinity USD', -Infinity, {}, GenericInput.transformer],
        ['unknown', NaN, {}, GenericInput.transformer]
    )
    testEach<typeof GenericInput.transformer.currency.parse>(
        'transformer.currency.parse',
        GenericInput.transformer.currency.parse,

        [1, 1, {}, GenericInput.transformer],
        [0, 0, {}, GenericInput.transformer],
        [1, '1', {}, GenericInput.transformer],
        [0, '0', {}, GenericInput.transformer],
        [1, '1 €', {}, GenericInput.transformer],
        [1.1, '1.1 $', {}, GenericInput.transformer]
    )

    testEach<typeof GenericInput.transformer.date.format.final.tranform>(
        'transformer.date.format.final.transform',
        GenericInput.transformer.date.format.final.transform,

        ['1970-01-01', 0],
        ['Infinitely far in the future', Infinity],
        ['Infinitely early in the past', -Infinity],
        ['', NaN]
    )
    testEach<typeof GenericInput.transformer.date.parse>(
        'transformer.date.parse',
        GenericInput.transformer.date.parse,

        [1, 1, {}, GenericInput.transformer],
        [0, 0, {}, GenericInput.transformer],
        [1, '1', {}, GenericInput.transformer],
        [0, '0', {}, GenericInput.transformer],
        [1, '1', {}, GenericInput.transformer],
        [1.1, '1.1', {}, GenericInput.transformer]
    )
    // TODO

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
// endregion
// region RequireableCheckbox
describe('RequireableCheckbox', ():void => {
    test('render', ():void => {
        expect(render(<RequireableCheckbox/>)).toBeDefined()

        expect(
            render(<RequireableCheckbox/>)!.querySelector('input')
        ).toBeDefined()
        expect(
            render(<RequireableCheckbox/>)!.getAttribute('class')
        ).toStrictEqual('requireable-checkbox')

        expect(
            render(<RequireableCheckbox/>)!
                .querySelector('input')!
                .getAttribute('id')
        ).toStrictEqual('NO_NAME_DEFINED')
    })
    test('render id', ():void => {
        const domNode:HTMLDivElement =
            render(<RequireableCheckbox id="test" name="test"/>)!

        expect(domNode.querySelector('input')!.getAttribute('id'))
            .toStrictEqual('test')
    })
})
// endregion
// region WrapConfigurations
describe('WrapConfigurations', ():void => {
    test('render', ():void => expect(
        render(
            <WrapConfigurations><div className="test"/></WrapConfigurations>
        )!.querySelector('.test')
    ).toBeDefined())
})
// endregion
// region WrapStrict
describe('WrapStrict', ():void => {
    test('render', ():void => {
        expect(
            (render(<WrapStrict strict><div className="test"/></WrapStrict>) as
                HTMLElement
            ).querySelector('.test')
        ).toBeDefined()

        expect(
            render(
                <WrapStrict strict={false}><div className="test"/></WrapStrict>
            )!.querySelector('.test')
        ).toBeDefined()
    })
})
// endregion
// region WrapThemeProvider
describe('WrapThemeProvider', ():void => {
    test('render', ():void => expect(
        render(
            <WrapThemeProvider><div className="test"/></WrapThemeProvider>
        )!.querySelector('.test')
    ).toBeDefined())
})
// endregion
// region WrapTooltip
describe('WrapTooltip', ():void => {
    test('render', ():void => expect(
        render(<WrapTooltip><div className="test"/></WrapTooltip>)!
            .querySelector('.test')
    ).toBeDefined())
})
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
