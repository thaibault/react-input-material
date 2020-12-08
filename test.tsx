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
import {Mapping} from 'clientnode/type'
import React from 'react'
import {SelectProps} from '@rmwc/select'

import GenericAnimate from './components/GenericAnimate'
import GenericInput, {normalizeSelection} from './components/GenericInput'
import RequireableCheckbox from './components/RequireableCheckbox'
import WrapConfigurations from './components/WrapConfigurations'
import WrapStrict from './components/WrapStrict'
import WrapThemeProvider from './components/WrapThemeProvider'
import WrapTooltip from './components/WrapTooltip'
import {determineInitialValue} from './helper'
import prepareTestEnvironment from './testHelper'
import {TestEnvironment} from './type'
// endregion
const testEnvironment:TestEnvironment =
    prepareTestEnvironment(beforeEach, afterEach)
const {render} = testEnvironment
// region helper
describe('helper', ():void => {
    test('determineInitialValue', ():void => {
        expect(
            determineInitialValue({model: {default: true}}, false)
        ).toStrictEqual(true)
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
    test.each([
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
    ])(
        '%p === normalizeSelection(%p, %p)',
        (
            expected:SelectProps['options']|Array<{label?:string;value:any}>,
            selection:Array<[string, string]>|SelectProps['options']|Array<{label?:string;value:any}>,
            labels:Array<string>|Mapping|undefined
        ):void =>
            expect(normalizeSelection(selection, labels))
                .toStrictEqual(expected)
    )
    test('render', ():void => {
        expect(render(<GenericInput/>)).toBeDefined()

        expect((render(<GenericInput/>) as HTMLElement).querySelector('input'))
            .toBeDefined()

        expect((render(<GenericInput/>) as HTMLElement).getAttribute('class'))
            .toStrictEqual('generic-input')

        expect(
            (render(<GenericInput name="test"/>) as HTMLElement)
                .querySelector('[name="test"]')
        ).not.toStrictEqual(null)
    })
})
// endregion
// region RequireableCheckbox
describe('RequireableCheckbox', ():void => {
    test('render', ():void => {
        expect(render(<RequireableCheckbox/>)).toBeDefined()

        expect(
            (render(<RequireableCheckbox/>) as HTMLElement)
                .querySelector('input')
        ).toBeDefined()

        expect(
            (render(<RequireableCheckbox/>) as HTMLElement)
                .getAttribute('class')
        ).toStrictEqual('requireable-checkbox')

        expect(
            (render(<RequireableCheckbox/>) as HTMLElement)
                .querySelector('input')!
                .getAttribute('id')
        ).toStrictEqual('NO_NAME_DEFINED')
    })
    test('render id', ():void => expect(
        (render(<RequireableCheckbox name="test"/>) as HTMLElement)
            .querySelector('input')!
            .getAttribute('id')
    ).toStrictEqual('test'))
})
// endregion
// region WrapConfigurations
describe('WrapConfigurations', ():void => {
    test('render', ():void => expect(
        (render(
            <WrapConfigurations><div className="test"/></WrapConfigurations>
        ) as HTMLElement).querySelector('.test')
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
            (render(
                <WrapStrict strict={false}><div className="test"/></WrapStrict>
            ) as HTMLElement).querySelector('.test')
        ).toBeDefined()
    })
})
// endregion
// region WrapThemeProvider
describe('WrapThemeProvider', ():void => {
    test('render', ():void => expect(
        (render(
            <WrapThemeProvider><div className="test"/></WrapThemeProvider>
        ) as HTMLElement).querySelector('.test')
    ).toBeDefined())
})
// endregion
// region WrapTooltip
describe('WrapTooltip', ():void => {
    test('render', ():void => expect(
        (render(
            <WrapTooltip><div className="test"/></WrapTooltip>) as HTMLElement
        ).querySelector('.test')
    ).toBeDefined())
})
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
