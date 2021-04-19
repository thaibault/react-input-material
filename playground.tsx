// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module react-input-material */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import Tools from 'clientnode'
import {FunctionComponent, useEffect, useState} from 'react'
import {ReactElement} from 'react'
import {render} from 'react-dom'

import {
    GenericAnimate, GenericInput, Inputs, Interval, RequireableCheckbox
} from './index'
import {useMemorizedValue} from './helper'
import {InputProperties, IntervalValue, Properties, Model} from './type'
// endregion 
Tools.locales.push('de-DE')
GenericInput.transformer.currency.format.final.options = {currency: 'EUR'}

const Application:FunctionComponent<{}> = ():ReactElement => {
    const [selectedState, setSelectedState] = useState<unknown>()
    const onChange:((properties:{model:unknown}) => void) = useMemorizedValue<
        (properties:{model:unknown}) => void
    >(({model}):void => setSelectedState(model))

    const [fadeState, setFadeState] = useState<boolean>(false)
    useEffect(():(() => void) => Tools.timeout(
        ():void => setFadeState((value:boolean):boolean => !value), 2 * 1000
    ).clear)
    // region controlled state
    const [value1, setValue1] = useState<string>('')
    const onChangeValue1 = useMemorizedValue<(value:string) => void>(setValue1)

    type FloatValueState = {
        value?:null|number
        representation:string
    }
    const [value2, setValue2] = useState<FloatValueState>({
        value: 1234.34, representation: '1.234,34'
    })
    const onChangeValue2 =
        useMemorizedValue<(value:FloatValueState) => void>(setValue2)

    const [value3, setValue3] =
        useState<IntervalValue|null>({end: 120, start: 60})
    const onChangeValue3 =
        useMemorizedValue<(value:IntervalValue|null) => void>(setValue3)

    const [value4, setValue4] = useState<boolean|null>(false)
    const onChangeValue4 =
        useMemorizedValue<(value:boolean|null) => void>(setValue4)

    const [value5, setValue5] = useState<Array<null|string>>(['first item'])
    const onChangeValue5 =
        useMemorizedValue<(value:Array<null|string>) => void>(setValue5)
    // endregion
    return (<>
        <div className="playground__inputs">

            <GenericInput onChange={onChange} />
            <GenericInput
                name="controlled"
                onChange={onChange}
                onChangeValue={onChangeValue1}
                value={value1}
            />
            <GenericInput
                name="controlled"
                onChange={useMemorizedValue((
                    properties:InputProperties<number>
                ) => {
                    onChange(properties)
                    onChangeValue2({
                        representation: properties.representation,
                        value: properties.value
                    })
                })}
                representation={value2.representation}
                type="float"
                value={value2.value}
            />

            <hr/>

            <GenericInput
                declaration="This text can be seen initially."
                name="input1"
                onChange={onChange}
                showDeclaration={true}
            />
            <GenericInput
                model={useMemorizedValue({name: 'input1Model'})}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                default={1526165029}
                name="input2"
                onChange={onChange}
                type="date"
            />
            <GenericInput
                initialValue="value2Model"
                model={useMemorizedValue({name: 'input2Model', type: 'time'})}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                default={120}
                name="input3"
                onChange={onChange}
                type="datetime-local"
            />
            <GenericInput
                model={useMemorizedValue({
                    default: 60,
                    maximum: 3600,
                    minimum: 1,
                    name: 'input3Model',
                    step: 1,
                    type: 'time'
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="Disabled"
                disabled
                initialValue="value4"
                name="input4"
                onChange={onChange}
            />
            <GenericInput
                model={useMemorizedValue({
                    declaration: 'Disabled',
                    default: 'value4Model',
                    mutable: false,
                    name: 'input4Model'
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="placeholder"
                name="input5"
                onChange={onChange}
                placeholder="100.000,00"
                required
                trailingIcon="clear_preset"
            />
            <GenericInput
                default="value5Model"
                icon="backup"
                model={useMemorizedValue({
                    declaration: 'placeholder',
                    name: 'input5Model',
                    nullable: false
                })}
                onChange={onChange}
                placeholder="input5Model"
                trailingIcon="clear_preset"
            />

            <hr/>

            <GenericInput
                declaration="pattern"
                description="input6Description"
                icon="search"
                initialValue="only a`s allowed"
                name="input6"
                onChange={onChange}
                pattern="a+"
                placeholder="input6Placeholder"
            />
            <GenericInput
                initialValue="only a`s allowed"
                model={useMemorizedValue({
                    declaration: 'pattern',
                    description: 'input6ModelDescription',
                    regularExpressionPattern: 'a+'
                })}
                name="input6Model"
                onChange={onChange}
                placeholder="input6ModelPlaceholder"
                trailingIcon="search"
            />

            <hr/>

            <GenericInput
                declaration="password"
                description="input7Description"
                icon="search"
                initialValue="hans"
                name="passwordInput7"
                onChange={onChange}
                pattern="a+"
                placeholder="input7Placeholder"
                tooltip="Please type in your password."
                trailingIcon="password_preset"
            />
            <GenericInput
                initialValue="hans"
                model={useMemorizedValue({
                    declaration: 'password',
                    description: 'input7ModelDescription',
                    regularExpressionPattern: 'a+',
                })}
                name="passwordInput7Model"
                onChange={onChange}
                placeholder="input7ModelPlaceholder"
                trailingIcon="password_preset"
            />

            <hr/>

            <GenericInput
                declaration="selection"
                description="input8Description"
                initialValue="A"
                name="input8"
                onChange={onChange}
                placeholder="input8Placeholder"
                selection={useMemorizedValue(['A', 'B', 'C'])}
                required
            />
            <GenericInput
                initialValue="A"
                labels={useMemorizedValue(['Label A', 'Label B', 'Label C'])}
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input8ModelDescription',
                    name: 'input8Model',
                    mutable: false,
                    nullable: false,
                    selection: ['A', 'B', 'C'],
                })}
                onChange={onChange}
                placeholder="input8ModelPlaceholder"
            />

            <hr/>

            <GenericInput
                declaration="selection"
                description="input9Description"
                initialValue="true"
                name="input9"
                onChange={onChange}
                placeholder="input9Placeholder"
                type="boolean"
                required
            />
            <GenericInput
                initialValue="false"
                labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input9ModelDescription',
                    name: 'input9Model',
                    nullable: false,
                    type: 'boolean'
                })}
                onChange={onChange}
                placeholder="input9ModelPlaceholder"
            />

            <hr/>

            <GenericInput
                declaration="selection"
                description="input10Description"
                initialValue="true"
                labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                name="input10"
                onChange={onChange}
                required
            />
            <GenericInput
                initialValue="false"
                labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input10ModelDescription',
                    name: 'input10Model',
                    nullable: false,
                    type: 'string'
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="selection"
                description="input11Description"
                initialValue="b"
                name="input11"
                onChange={onChange}
                selection={useMemorizedValue({a: 'A', b: 'B', c: 'C'})}
                required
            />
            <GenericInput
                initialValue="b"
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input11ModelDescription',
                    name: 'input11Model',
                    nullable: false,
                    selection: {a: 'A', b: 'B', c: 'C'},
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="text"
                description="input12Description"
                editor="text"
                initialValue="a"
                name="input12"
                onChange={onChange}
                required
                rows={3}
                themeConfiguration={useMemorizedValue({
                    primary: 'yellow',
                    secondary: 'blue'
                })}
            />
            <GenericInput
                editor="text"
                initialValue="a"
                model={useMemorizedValue({
                    declaration: 'text',
                    description: 'input12ModelDescription',
                    name: 'input12Model',
                    nullable: false,
                })}
                onChange={onChange}
                rows={2}
            />

            <hr/>

            <GenericInput
                declaration="code"
                description="input13Description"
                disabled
                editor="code"
                initialValue="const value = 2"
                name="input13"
                onChange={onChange}
                rows={2}
                selectableEditor
            />
            <GenericInput
                editor="code"
                initialValue="const value = 2"
                model={useMemorizedValue({
                    declaration: 'code',
                    description: 'input13ModelDescription',
                    name: 'input12Model',
                    nullable: false,
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput
                declaration="code"
                description="input14Description"
                editor="code"
                maximumLength={10}
                name="input14"
                onChange={onChange}
                required
                rows={2}
                selectableEditor
            />
            <GenericInput
                editor="code"
                model={useMemorizedValue({
                    declaration: 'code',
                    description: 'input14ModelDescription',
                    name: 'input14Model',
                    nullable: false
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput
                declaration="richtext(raw)"
                description="input15Description"
                editor="richtext(raw)"
                name="input15"
                onChange={onChange}
                placeholder="Hello Mr. Smith,<br><br>this is a Placeholder."
                required
                rows={2}
                selectableEditor
            />
            <GenericInput
                editor="richtext(simple)"
                initialValue="Hello Mr. Smith,<br><br>how are you?"
                model={useMemorizedValue({
                    declaration: 'richtext(simple)',
                    description: 'input15ModelDescription',
                    mutable: false,
                    name: 'input15Model',
                    nullable: false
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput
                declaration="Number"
                description="input16Description"
                maximum={200000}
                minimum={10}
                name="input16"
                onChange={onChange}
                placeholder="100000"
                required
                type="number"
            />
            <GenericInput
                initialValue={100000}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input16ModelDescription',
                    maximum: 200000,
                    minimum: 10,
                    name: 'input16Model',
                    nullable: false,
                    type: 'number'
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="Number"
                description="input17Description"
                maximum={200000}
                minimum={10}
                name="input17"
                onChange={onChange}
                placeholder="100.000"
                required
                type="integer"
            />
            <GenericInput
                initialValue={100000.01}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input17ModelDescription',
                    maximum: 200000,
                    name: 'input17Model',
                    nullable: false,
                    type: 'float'
                })}
                onChange={onChange}
                transformer={{format: {final: {options: {
                    maximumFractionDigits: 20,
                    minimumFractionDigits: 2
                }}}}}
            />

            <hr/>

            <GenericInput
                declaration="Number"
                description="input18Description"
                maximum={200000}
                minimum={10}
                minimumText="Please at least ${formatValue(minimum)}."
                name="input18"
                onChange={onChange}
                placeholder="100.000"
                required
                type="currency"
            />
            <GenericInput
                initialValue={100000.01}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input18ModelDescription',
                    maximum: 200000,
                    minimum: 10,
                    name: 'input18Model',
                    nullable: false,
                    type: 'currency'
                })}
                onChange={onChange}
            />

            <hr/>

            <Interval
                end={useMemorizedValue({
                    default: 240,
                    minimum: 120
                })}
                onChange={onChange}
                required
                start={useMemorizedValue({
                    default: 120,
                    maximum: 3600
                })}
                step={60}
            />
            <Interval
                name="controlled"
                default={120}
                onChange={onChange}
                onChangeValue={onChangeValue3}
                step={60}
                value={value3}
            />

            <hr/>

            <div
                className="playground__inputs__generic-animate"
                style={{height: '50px'}}
            >
                <GenericAnimate in={fadeState} timeout={2000}>
                    Fade it!
                </GenericAnimate>
                <br/>
                <GenericAnimate
                    children="Fade it!" in={!fadeState} timeout={2000}
                />
            </div>

            <hr/>

            <RequireableCheckbox onChange={onChange} />
            <RequireableCheckbox
                name="controlled"
                onChange={onChange}
                onChangeValue={onChangeValue4}
                value={value4}
            />

            <hr/>

            <RequireableCheckbox name="checkbox1" onChange={onChange} />
            <RequireableCheckbox
                model={useMemorizedValue({name: 'checkbox1Model'})}
                onChange={onChange}
                themeConfiguration={useMemorizedValue({
                    primary: 'yellow',
                    secondary: 'blue'
                })}
            />

            <hr/>

            <RequireableCheckbox
                default disabled name="checkbox2" onChange={onChange} required
            />
            <RequireableCheckbox
                model={useMemorizedValue(
                    {name: 'checkbox2Model', mutable:false, nullable: false}
                )}
                onChange={onChange}
            />

            <hr/>

            <RequireableCheckbox
                description="checkbox3Description"
                name="checkbox3"
                onChange={onChange}
                required
                showInitialValidationState
            />
            <RequireableCheckbox
                model={useMemorizedValue({
                    default: true,
                    description: 'checkbox3ModelDescription',
                    name: 'checkbox3Model',
                    nullable: false
                })}
                onChange={onChange}
                showInitialValidationState
                tooltip="Check this one!"
            />

            <hr/>

            <Inputs
                createPrototype={useMemorizedValue(() => ({
                    type: 'boolean', value: false
                }))}
                model={useMemorizedValue({
                    default: [false],
                    name: 'inputs1',
                })}
                onChange={onChange}
                showInitialValidationState
            >
                {useMemorizedValue((
                    properties:Properties<boolean>, index:number
                ):ReactElement =>
                    <RequireableCheckbox
                        {...properties} name={`inputs1-${index}`}
                    />
                )}
            </Inputs>
            <Inputs
                name="inputs2"
                onChange={onChange}
                onChangeValue={onChangeValue5}
                showInitialValidationState
                value={value5}
            />

        </div>

        {selectedState ?
            <pre className="playground__outputs">
                {Tools.represent(selectedState)}
            </pre> :
            ''
        }

    </>)
}
window.onload = ():void =>
    render(<Application />, document.querySelector('application'))
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
