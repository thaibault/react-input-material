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
import {testEach} from 'clientnode/testHelper'
import {Mapping} from 'clientnode/type'
import React from 'react'
import {SelectProps} from '@rmwc/select'

import GenericAnimate from './components/GenericAnimate'
import GenericInput, {normalizeSelection} from './components/GenericInput'
import Inputs from './components/Inputs'
import Interval from './components/Interval'
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
// region Inputs
describe('Inputs', ():void => {
    test('render', ():void => {
        expect(render(<Inputs/>)).toBeDefined()

        let domNode:HTMLElement = render(<Inputs/>) as HTMLElement
        expect(domNode.querySelector('input')).toStrictEqual(null)
        expect(domNode.querySelector('.inputs__add')).not.toStrictEqual(null)
        expect(domNode.querySelector('.inputs__item__remove')).toStrictEqual(null)

        domNode = render(<Inputs value={['a']}/>) as HTMLElement
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__item__remove')))
            .toHaveLength(1)

        domNode = render(<Inputs value={['a', ['b']]}/>) as HTMLElement
        expect(Array.from(domNode.querySelectorAll('input'))).toHaveLength(2)
        expect(Array.from(domNode.querySelectorAll('.inputs__add')))
            .toHaveLength(1)
        expect(Array.from(domNode.querySelectorAll('.inputs__item__remove')))
            .toHaveLength(2)

        expect(
            (render(<Inputs value={['a']}/>) as HTMLElement)
                .querySelector('input')
        ).toHaveProperty('value', 'a')
    })
})
// endregion
// region Interval
describe('Interval', ():void => {
    test('render', ():void => {
        expect(render(<Interval/>)).toBeDefined()

        expect(Array.from(
            (render(<Interval/>) as HTMLElement).querySelectorAll('input')
        )).toHaveLength(2)

        expect((render(<Interval/>) as HTMLElement).getAttribute('class'))
            .toStrictEqual('interval')

        expect((render(<Interval/>) as HTMLElement)
            .querySelectorAll('.interval__end')
        ).toBeDefined()
        expect((render(<Interval/>) as HTMLElement)
            .querySelectorAll('.interval__icon')
        ).toBeDefined()
        expect((render(<Interval/>) as HTMLElement)
            .querySelectorAll('.interval__start')
        ).toBeDefined()

        expect(
            (render(<Interval name="test"/>) as HTMLElement)
                .getAttribute('data-name')
        ).toStrictEqual('test')
    })
})
// endregion
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
