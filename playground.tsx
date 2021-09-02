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
import {Mapping} from 'clientnode/type'
import {FunctionComponent, useEffect, useState} from 'react'
import {ReactElement} from 'react'
import {render} from 'react-dom'

import {
    FileInput,
    GenericAnimate,
    GenericInput,
    Inputs,
    Interval,
    RequireableCheckbox
} from './index'
import {useMemorizedValue} from './helper'
import {
    CheckboxProps,
    FileInputProps,
    FileValue,
    InputProperties,
    IntervalConfiguration,
    IntervalProps,
    IntervalValue,
    Model,
    SuggestionCreatorOptions
} from './type'
// endregion
Tools.locales.push('de-DE')
GenericInput.transformer.currency.format!.final.options = {currency: 'EUR'}

import {NullSymbol, UndefinedSymbol} from 'clientnode/property-types'
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
    const [value1, setValue1] = useState<FileValue|null>({
        blob: new Blob(['test'], {type: 'text/plain'}),
        name: 'test.txt'
    })
    const onChangeValue1 = useMemorizedValue<(value:FileValue|null) =>
        void>(setValue1)

    const [value2, setValue2] = useState<null|string>('')
    const onChangeValue2 =
        useMemorizedValue<(value:null|string) => void>(setValue2)

    type FloatValueState = {
        representation:string
        value?:null|number
    }
    const [value3, setValue3] = useState<FloatValueState>({
        value: 1234.34, representation: '1.234,34'
    })
    const onChangeValue3 =
        useMemorizedValue<(value:FloatValueState) => void>(setValue3)

    type SelectionValueType = {
        representation:string
        value?:null|string
    }
    const [value4, setValue4] =
        useState<SelectionValueType>({representation: 'klaus', value: 'b'})
    const onChangeValue4 =
        useMemorizedValue<(value:SelectionValueType) => void>(setValue4)

    const [value5, setValue5] =
        useState<IntervalValue|null>({end: 120, start: 60})
    const onChangeValue5 =
        useMemorizedValue<(value:IntervalValue|null) => void>(setValue5)

    const [value6, setValue6] = useState<boolean|null>(false)
    const onChangeValue6 =
        useMemorizedValue<(value:boolean|null) => void>(setValue6)

    const [value7, setValue7] =
        useState<Array<null|string>|null>(['first item'])
    const onChangeValue7 =
        useMemorizedValue<(values:Array<null|string>|null) => void>(setValue7)
    // endregion

    return (<>
        <div className="playground__inputs">
            <FileInput onChange={onChange} />
            <FileInput
                default={useMemorizedValue(
                    {
                        blob: {type: 'image/png'},
                        url: 'https://via.placeholder.com/150'
                    }
                )}
                name="UnControlled"
                onChange={onChange}
            >
                {useMemorizedValue(({value}):null|ReactElement =>
                    value?.blob ?
                        <ul>
                            {(value.blob as File).lastModified ?
                                <li>
                                    Last modified date time:
                                    {Tools.dateTimeFormat(
                                        '${mediumDay}.${mediumMonth}.${fullYear}',
                                        new Date(
                                            (value.blob as File).lastModified
                                        )
                                    )}
                                </li> :
                                ''
                            }
                            {(value.blob as File).type ?
                                <li>Mime-Typ: {value.blob.type}</li> :
                                ''
                            }
                            {typeof (value.blob as File).size === 'number' ?
                                <li>Size: {value.blob.size}</li> :
                                ''
                            }
                        </ul> :
                        null
                )}
            </FileInput>
            <FileInput
                name="Controlled"
                onChange={onChange}
                onChangeValue={onChangeValue1}
                value={value1}
            />

            <GenericInput onChange={onChange} />
            <GenericInput
                name="UnControlled"
                onChange={onChange}
                onChangeValue={onChangeValue2}
                enforceUncontrolled={true}
                value={value2}
            />
            <GenericInput
                name="controlled"
                onChange={onChange}
                onChangeValue={onChangeValue2}
                value={value2}
            />
            <GenericInput<number>
                name="controlled"
                onChange={useMemorizedValue((
                    properties:InputProperties<number>
                ) => {
                    onChange(properties)
                    onChangeValue3({
                        representation: properties.representation,
                        value: properties.value
                    })
                })}
                representation={value3.representation}
                type="float"
                value={value3.value}
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

            <GenericInput<number>
                default={1526165029}
                name="input2"
                onChange={onChange}
                type="date"
            />
            <GenericInput<number>
                initialValue={1}
                model={useMemorizedValue({name: 'input2Model', type: 'time'})}
                onChange={onChange}
            />

            <hr/>

            <GenericInput<number>
                default={120}
                name="input3"
                onChange={onChange}
                type="datetime-local"
            />
            <GenericInput<number>
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
                initialValue="has a`s and b`s"
                model={useMemorizedValue({
                    declaration: 'pattern',
                    description: 'input6ModelDescription',
                    regularExpressionPattern: ['.*a+.*', /.*b+.*/]
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

            <GenericInput<boolean>
                declaration="selection"
                description="input9Description"
                initialValue={true}
                name="input9"
                onChange={onChange}
                placeholder="input9Placeholder"
                type="boolean"
                required
            />
            <GenericInput<boolean>
                initialValue={false}
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
                description="input12Description"
                name="input12"
                onChange={onChange}
                placeholder="input12Placeholder"
                selection={useMemorizedValue(['hans', 'peter', 'klaus'])}
                suggestSelection
            />
            <GenericInput
                initialValue="peter"
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input12ModelDescription',
                    name: 'input12Model',
                    nullable: false
                })}
                onChange={onChange}
                placeholder="input12ModelPlaceholder"
                searchSelection
                suggestionCreator={useMemorizedValue(Tools.debounce<Array<string>>(
                    ({query}:SuggestionCreatorOptions<InputProperties<
                        string
                    >>):Array<string>|Promise<Array<string>> => {
                        if (!query || query.length < 3)
                            return []

                        return Tools.timeout(2000).then(():Array<string> =>
                            [
                                'hans with veeeeeeeeeeeeeeeery ' +
                                'loooooooooooooooong second name',
                                'peter',
                                'klaus'
                            ].filter((name:string):boolean =>
                                !query || name.includes(query)
                            )
                        )
                    },
                    1000
                ))}
            />

            <hr/>

            <GenericInput
                description="input13Description"
                default={'a'}
                name="input13"
                onChange={onChange}
                placeholder="input13Placeholder"
                searchSelection
                selection={useMemorizedValue(
                    {a: 'hans', b: 'hans', c: 'klaus'}
                )}
            />
            <GenericInput
                initialValue="peter"
                model={useMemorizedValue({
                    declaration: 'selection',
                    description: 'input13ModelDescription',
                    name: 'input13Model',
                    nullable: false
                })}
                onChange={onChange}
                placeholder="input13ModelPlaceholder"
                suggestionCreator={useMemorizedValue(
                    async ({query}:SuggestionCreatorOptions<InputProperties<
                        string
                    >>):Promise<Mapping> => {
                        await Tools.timeout(500)

                        const selection:Mapping = {
                            a: 'hans with veeeeeeeeeeeeeeeery ' +
                               'loooooooooooooooong second name',
                            b: 'peter',
                            c: 'klaus'
                        }

                        const result:Mapping = {}
                        for (const [key, value] of Object.entries(selection))
                            if (!query || value.includes(query))
                                result[key] = value
                        return result
                    }
                )}
            />
            <GenericInput
                name="controlled"
                onChange={useMemorizedValue((properties:InputProperties<string>):void => {
                    onChangeValue4({
                        representation: properties.representation,
                        value: properties.value
                    })
                    onChange(properties)
                })}
                representation={value4.representation}
                searchSelection
                selection={useMemorizedValue(
                    {a: 'hans', b: 'peter', c: 'klaus'}
                )}
                value={value4.value}
            />
            <GenericInput
                name="controlled"
                onChange={useMemorizedValue((properties:InputProperties<string>):void => {
                    onChangeValue4({
                        representation: properties.representation,
                        value: properties.value
                    })
                    onChange(properties)
                })}
                representation={value4.representation}
                suggestSelection
                selection={useMemorizedValue(
                    {a: 'hans', b: 'peter', c: 'klaus'}
                )}
                value={value4.value}
            />

            <hr/>

            <GenericInput
                declaration="text"
                description="input14Description"
                editor="text"
                initialValue="a"
                name="input14"
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
                    description: 'input14ModelDescription',
                    name: 'input14Model',
                    nullable: false,
                })}
                onChange={onChange}
                rows={2}
            />

            <hr/>

            <GenericInput
                declaration="code"
                description="input15Description"
                disabled
                editor="code"
                initialValue="const value = 2"
                name="input15"
                onChange={onChange}
                rows={2}
                selectableEditor
            />
            <GenericInput
                editor="code"
                initialValue="const value = 2"
                model={useMemorizedValue({
                    declaration: 'code',
                    description: 'input15ModelDescription',
                    name: 'input15Model',
                    nullable: false,
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput
                declaration="code"
                description="input16Description"
                editor="code"
                maximumLength={10}
                name="input16"
                onChange={onChange}
                required
                rows={2}
                selectableEditor
            />
            <GenericInput
                editor="code"
                model={useMemorizedValue({
                    declaration: 'code',
                    description: 'input16ModelDescription',
                    name: 'input16Model',
                    nullable: false
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput
                declaration="richtext(raw)"
                description="input17Description"
                editor="richtext(raw)"
                name="input17"
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
                    description: 'input17ModelDescription',
                    mutable: false,
                    name: 'input17Model',
                    nullable: false
                })}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <hr/>

            <GenericInput<number>
                declaration="Number"
                description="input18Description"
                maximum={200000}
                minimum={10}
                name="input18"
                onChange={onChange}
                placeholder="100000"
                required
                type="number"
            />
            <GenericInput<number>
                initialValue={100000}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input18ModelDescription',
                    maximum: 200000,
                    minimum: 10,
                    name: 'input18Model',
                    nullable: false,
                    type: 'number'
                })}
                onChange={onChange}
            />

            <hr/>

            <GenericInput<number>
                declaration="Number"
                description="input19Description"
                maximum={200000}
                minimum={10}
                name="input19"
                onChange={onChange}
                placeholder="100.000"
                required
                type="integer"
            />
            <GenericInput<number>
                initialValue={100000.01}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input19ModelDescription',
                    maximum: 200000,
                    name: 'input19Model',
                    nullable: false,
                    type: 'float'
                })}
                onChange={onChange}
                transformer={useMemorizedValue({format: {final: {options: {
                    maximumFractionDigits: 20,
                    minimumFractionDigits: 2
                }}}})}
            />

            <hr/>

            <GenericInput<number>
                declaration="Number"
                description="input20Description"
                maximum={200000}
                minimum={10}
                minimumText="Please at least ${formatValue(minimum)}."
                name="input20"
                onChange={onChange}
                placeholder="100.000"
                required
                type="currency"
            />
            <GenericInput<number>
                initialValue={100000.01}
                model={useMemorizedValue({
                    declaration: 'Number',
                    description: 'input20ModelDescription',
                    maximum: 200000,
                    minimum: 10,
                    name: 'input20Model',
                    nullable: false,
                    type: 'currency'
                })}
                onChange={onChange}
            />

            <hr/>

            <Interval
                onChange={onChange}
                required
                step={60}
                value={useMemorizedValue({
                    end: {
                        default: 240,
                        minimum: 120
                    },
                    start: {
                        default: 120,
                        maximum: 3600
                    }
                })}
            />
            <Interval
                name="controlled"
                default={120}
                onChange={onChange}
                onChangeValue={onChangeValue5}
                step={60}
                value={value5}
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
                onChangeValue={onChangeValue6}
                value={value6}
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

            <Inputs<FileValue, FileInputProps>
                createPrototype={useMemorizedValue(
                    ({index, properties: {name}, prototype}):FileInputProps =>
                        ({...prototype, name: `${name}-${index + 1}`})
                )}
                model={useMemorizedValue({
                    default: [{name: 'inputs1-1'}], name: 'inputs1'
                })}
                onChange={onChange}
                showInitialValidationState
            >
                {useMemorizedValue(({properties}):ReactElement =>
                    <FileInput {...properties as FileInputProps} />
                )}
            </Inputs>
            <Inputs<boolean, CheckboxProps>
                createPrototype={useMemorizedValue(
                    ({index, properties: {name}, prototype}):CheckboxProps =>
                        ({...prototype, name: `${name}-${index + 1}`})
                )}
                maximumNumber={2}
                minimumNumber={2}
                model={useMemorizedValue({
                    default: [{
                        name: 'inputs2-1',
                        type: 'boolean',
                        value: false
                    }],
                    name: 'inputs2'
                })}
                onChange={onChange}
                showInitialValidationState
            >
                {useMemorizedValue(({properties}):ReactElement =>
                    <RequireableCheckbox {...properties} />
                )}
            </Inputs>
            <Inputs<IntervalConfiguration|IntervalValue, IntervalProps>
                createPrototype={useMemorizedValue(
                    ({index, properties: {name}, prototype}):IntervalProps =>
                        ({...prototype, name: `${name}-${index + 1}`})
                )}
                model={useMemorizedValue({
                    default: [{
                        name: 'inputs3-1',
                        type: 'date'
                    }],
                    name: 'inputs3'
                })}
                onChange={onChange}
                showInitialValidationState
            >
                {useMemorizedValue(({properties}):ReactElement =>
                    <Interval {...properties as IntervalProps} />
                )}
            </Inputs>
            <Inputs
                name="controlled"
                onChange={onChange}
                onChangeValue={onChangeValue7}
                value={value7}
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
