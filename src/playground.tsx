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
import {Tab, TabBar, TabBarOnActivateEventT} from '@rmwc/tabs'
import Tools from 'clientnode'
import {Mapping, UnknownFunction} from 'clientnode/type'
import {ReactElement, ReactNode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {useMemorizedValue} from 'react-generic-tools'

import {preserveStaticFileBaseNameInputGenerator} from './components/FileInput'
import {
    FileInput, GenericInput as Input, Inputs, Interval, RequireableCheckbox
} from './index'
import {
    CheckboxProps,
    FileInputProps,
    FileValue,
    InputProperties,
    IntervalConfiguration,
    IntervalProps,
    IntervalValue,
    SuggestionCreatorOptions
} from './type'
// endregion
Tools.locales.push('de-DE')
Input.transformer.currency.format!.final.options = {currency: 'EUR'}

const Application = () => {
    const [selectedState, setSelectedState] = useState<unknown>()
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)

    const onChange:((properties:{model:unknown}) => void) =
        useMemorizedValue<(properties:{model:unknown}) => void>(
            ({model}) => {
                setSelectedState(model)
            }
        )
    // region controlled state
    const [value1, setValue1] = useState<FileValue|null>({
        blob: new Blob(['test'], {type: 'text/plain'}),
        name: 'test.txt'
    })
    const onChangeValue1 =
        useMemorizedValue<(value:FileValue|null) => void>(setValue1)

    const [value2, setValue2] = useState<null|string>('')
    const onChangeValue2 =
        useMemorizedValue<(value:null|string) => void>(setValue2)

    type FloatValueState = {
        representation:ReactNode|string
        value?:null|number
    }
    const [value3, setValue3] = useState<FloatValueState>({
        value: 1234.34, representation: '1.234,34'
    })
    const onChangeValue3 =
        useMemorizedValue<(value:FloatValueState) => void>(setValue3)

    type SelectionValueType = {
        representation:ReactNode|string
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
        {/* region navigation */}
        <div className="tab-bar">
            <TabBar
                activeTabIndex={activeTabIndex}
                onActivate={(event:TabBarOnActivateEventT):void => {
                    if (event.detail.index !== activeTabIndex)
                        setActiveTabIndex(event.detail.index)
                }}
            >
                <Tab>file-input</Tab>
                <Tab>input</Tab>
                <Tab>inputs</Tab>
                <Tab>interval</Tab>
                <Tab>requireable-checkbox</Tab>
            </TabBar>
        </div>
        {/* endregion */}
        <div className="playground">
            <div className="playground__inputs">
                {/* region file-input */}
                <div
                    className="playground__inputs__file-input"
                    style={{display: activeTabIndex === 0 ? 'block' : 'none'}}
                >
                    <FileInput onChange={onChange} />
                    <FileInput
                        default={useMemorizedValue(
                            {
                                blob: {type: 'image/png'},
                                url: 'https://via.placeholder.com/150'
                            }
                        )}
                        encoding="latin1"
                        generateFileNameInputProperties={
                            preserveStaticFileBaseNameInputGenerator
                        }
                        name="UnControlled"
                        onChange={onChange}
                    >
                        {useMemorizedValue(({value}):null|ReactElement =>
                            value?.blob ?
                                <ul>
                                    <li>
                                        Expected encoding for text based files:
                                        latin1
                                    </li>
                                    {(value.blob as File).lastModified ?
                                        <li>
                                            Last modified date time:
                                            {Tools.dateTimeFormat(
                                                '${mediumDay}.${mediumMonth}.' +
                                                '${fullYear}',
                                                new Date(
                                                    (value.blob as File)
                                                        .lastModified
                                                )
                                            )}
                                        </li> :
                                        ''
                                    }
                                    {(value.blob as File).type ?
                                        <li>
                                            Mime-Typ: {(value.blob as Blob).type}
                                        </li> :
                                        ''
                                    }
                                    {typeof (value.blob as File).size === 'number' ?
                                        <li>
                                            Size: {(value.blob as Blob).size}
                                        </li> :
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
                        triggerInitialPropertiesConsolidation={true}
                        value={value1}
                    />
                </div>
                {/* endregion */}
                {/* region input */}
                <div
                    className="playground__inputs__input"
                    style={{display: activeTabIndex === 1 ? 'block' : 'none'}}
                >
                    <Input<string>
                        inputProperties={useMemorizedValue({outlined: true})}
                        onChange={onChange}
                    />
                    <Input<string>
                        name="UnControlled"
                        onChange={onChange}
                        onChangeValue={onChangeValue2}
                        enforceUncontrolled={true}
                        value={value2}
                    />
                    <Input<string>
                        name="controlled"
                        onChange={onChange}
                        onChangeValue={onChangeValue2}
                        triggerInitialPropertiesConsolidation={true}
                        value={value2}
                    />
                    <Input<number>
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

                    <Input<string>
                        declaration="This text can be seen initially."
                        inputProps={{
                            ariaChecked: false,
                            ariaDescription: 'test'
                        }}
                        name="input1"
                        onChange={onChange}
                        showDeclaration={true}
                    />
                    <Input<string>
                        model={useMemorizedValue({name: 'input1Model'})}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={
                            new Date('2025-01-01T00:00:00.000Z').getTime() / 1000
                        }
                        name="input2"
                        onChange={onChange}
                        type="date"
                    />
                    <Input<string>
                        initialValue="1970-01-01T08:00:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'input2Model', type: 'time'
                        })}
                        onChange={onChange}
                        step={60}
                    />

                    <hr/>

                    <Input<number>
                        default={120}
                        name="input3"
                        onChange={onChange}
                        type="datetime-local"
                    />
                    <Input<Date|number>
                        model={useMemorizedValue({
                            default: new Date(60 * 1000),
                            maximum: 3600,
                            minimum: 60,
                            name: 'input3Model',
                            type: 'time-local'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="Disabled"
                        disabled
                        initialValue="value4"
                        name="input4"
                        onChange={onChange}
                    />
                    <Input<string>
                        model={useMemorizedValue({
                            declaration: 'Disabled',
                            default: 'value4Model',
                            mutable: false,
                            name: 'input4Model'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="placeholder"
                        name="input5"
                        onChange={onChange}
                        placeholder="100.000,00"
                        required
                        showValidationState={false}
                        trailingIcon="clear_preset"
                    />
                    <Input<string>
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

                    <Input<string>
                        declaration="pattern"
                        description="input6Description"
                        icon="search"
                        initialValue="only a`s allowed"
                        name="input6"
                        onChange={onChange}
                        pattern="^a+$"
                        placeholder="input6Placeholder"
                    />
                    <Input<string>
                        initialValue="has a`s and b`s"
                        model={useMemorizedValue({
                            declaration: 'pattern',
                            description: 'input6ModelDescription',
                            regularExpressionPattern: ['.*a+.*', /.*b+(.*)/]
                        })}
                        name="input6Model"
                        onChange={onChange}
                        placeholder="input6ModelPlaceholder"
                        trailingIcon="search"
                    />

                    <hr/>

                    <Input<string>
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
                    <Input<string>
                        initialValue="hans"
                        model={useMemorizedValue({
                            declaration: 'password',
                            description: 'input7ModelDescription',
                            regularExpressionPattern: 'a+'
                        })}
                        name="passwordInput7Model"
                        onChange={onChange}
                        placeholder="input7ModelPlaceholder"
                        trailingIcon="password_preset"
                    />

                    <hr/>

                    <Input<string>
                        declaration="selection"
                        description="input8Description"
                        labels={useMemorizedValue(
                            [['C', 'LC'], ['D', 'LD'], ['A', 'LA'], ['B', 'LB']]
                        )}
                        name="input8"
                        onChange={onChange}
                        required
                        selection={useMemorizedValue(['A', 'B', 'C'])}
                    />
                    <Input<string>
                        initialValue="A"
                        labels={useMemorizedValue([
                            'Label A', 'Label B', 'Label C'
                        ])}
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'input8ModelDescription',
                            name: 'input8Model',
                            mutable: false,
                            nullable: false,
                            selection: ['A', 'B', 'C']
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<boolean>
                        declaration="selection"
                        description="input9Description"
                        initialValue={true}
                        name="input9"
                        onChange={onChange}
                        placeholder="input9Placeholder"
                        type="boolean"
                        required
                    />
                    <Input<boolean>
                        disabled
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

                    <Input<string>
                        declaration="selection"
                        description="input10Description"
                        initialValue="true"
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        name="input10"
                        onChange={onChange}
                        required
                    />
                    <Input<boolean>
                        initialValue={false}
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'input10ModelDescription',
                            name: 'input10Model',
                            nullable: false,
                            type: 'boolean'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        declaration="numberSelection"
                        description="input11Description"
                        initialValue={2}
                        selection={useMemorizedValue([1, 2, 3])}
                        name="input11"
                        onChange={onChange}
                        required
                    />
                    <Input<number>
                        model={useMemorizedValue({
                            declaration: 'numberSelection',
                            description: 'input11ModelDescription',
                            name: 'input11Model',
                            selection: [1, 2, 3],
                            type: 'number'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="selection"
                        description="input12Description"
                        initialValue="b"
                        name="input12"
                        onChange={onChange}
                        selection={useMemorizedValue({a: 'A', b: 'B', c: 'C'})}
                        required
                    />
                    <Input<string>
                        initialValue="b"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'input12ModelDescription',
                            name: 'input12Model',
                            nullable: false,
                            selection: {a: 'A', b: 'B', c: 'C'}
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        description="input13Description"
                        name="input13"
                        onChange={onChange}
                        placeholder="input13Placeholder"
                        selection={useMemorizedValue(
                            ['hans hans', 'peter peter', 'klaus']
                        )}
                        suggestSelection
                    />
                    <Input<string>
                        initialValue="peter"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'input13ModelDescription',
                            name: 'input13Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        placeholder="input13ModelPlaceholder"
                        searchSelection
                        suggestionCreator={useMemorizedValue(
                            Tools.debounce<Array<string>>(
                                (({query}:SuggestionCreatorOptions<InputProperties<
                                    string
                                >>):Array<string>|Promise<Array<string>> => {
                                    if (!query || query.length < 3)
                                        return []

                                    return Tools.timeout(2000)
                                        .then(():Array<string> =>
                                            [
                                                'hans with veeeeeeeeeeeeeeeery ' +
                                                'loooooooooooooooong second name',
                                                'peter',
                                                'klaus'
                                            ].filter((name:string):boolean =>
                                                !query || name.includes(query)
                                            )
                                        )
                                }) as UnknownFunction,
                                1000
                            )
                        )}
                    />

                    <hr/>

                    <Input<string>
                        description="input14Description"
                        default={'a'}
                        name="input14"
                        onChange={onChange}
                        placeholder="input14Placeholder"
                        searchSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'hans', c: 'klaus'}
                        )}
                    />
                    <Input<string>
                        initialValue="peter"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'input14ModelDescription',
                            name: 'input14Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        placeholder="input14ModelPlaceholder"
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
                                for (const [key, value] of Object.entries(
                                    selection
                                ))
                                    if (!query || value.includes(query))
                                        result[key] = value

                                return result
                            }
                        )}
                    />
                    <Input<string>
                        name="controlled"
                        onChange={useMemorizedValue(
                            (properties:InputProperties<string>):void => {
                                onChangeValue4({
                                    representation: properties.representation,
                                    value: properties.value
                                })
                                onChange(properties)
                            }
                        )}
                        representation={value4.representation}
                        searchSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'peter', c: 'klaus'}
                        )}
                        value={value4.value}
                    />
                    <Input<string>
                        name="controlled"
                        onChange={useMemorizedValue(
                            (properties:InputProperties<string>):void => {
                                onChangeValue4({
                                    representation: properties.representation,
                                    value: properties.value
                                })
                                onChange(properties)
                            }
                        )}
                        representation={value4.representation}
                        suggestSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'peter', c: 'klaus'}
                        )}
                        value={value4.value}
                    />

                    <hr/>

                    <Input<string>
                        declaration="text"
                        description="input15Description"
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
                    <Input<string>
                        editor="text"
                        initialValue="a"
                        model={useMemorizedValue({
                            declaration: 'text',
                            description: 'input15ModelDescription',
                            name: 'input15Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={2}
                    />

                    <hr/>

                    <Input<string>
                        declaration="code"
                        description="input16Description"
                        disabled
                        editor="code"
                        initialValue="const value = 2"
                        name="input16"
                        onChange={onChange}
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="code"
                        initialValue="const value = 2"
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

                    <Input<string>
                        declaration="code"
                        description="input17Description"
                        editor="code"
                        maximumLength={10}
                        name="input17"
                        onChange={onChange}
                        required
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="code"
                        model={useMemorizedValue({
                            declaration: 'code',
                            description: 'input17ModelDescription',
                            name: 'input17Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={6}
                        selectableEditor
                    />

                    <hr/>

                    <Input<string>
                        declaration="richtext(raw)"
                        description="input18Description"
                        editor="richtext(raw)"
                        name="input18"
                        onChange={onChange}
                        placeholder="Hello Mr. Smith,<br><br>this is a Placeholder."
                        required
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="richtext(simple)"
                        initialValue="Hello Mr. Smith,<br><br>how are you?"
                        model={useMemorizedValue({
                            declaration: 'richtext(simple)',
                            description: 'input18ModelDescription',
                            mutable: false,
                            name: 'input18Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={6}
                        selectableEditor
                    />

                    <hr/>

                    <Input<number>
                        declaration="Number"
                        description="input19Description"
                        maximum={200000}
                        minimum={10}
                        name="input19"
                        onChange={onChange}
                        placeholder="100000"
                        required
                        type="number"
                    />
                    <Input<number>
                        initialValue={100000}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'input19ModelDescription',
                            maximum: 200000,
                            minimum: 10,
                            name: 'input19Model',
                            nullable: false,
                            type: 'number'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        declaration="Number"
                        description="input20Description"
                        maximum={200000}
                        minimum={10}
                        name="input20"
                        onChange={onChange}
                        placeholder="100.000"
                        required
                        type="integer"
                    />
                    <Input<number>
                        initialValue={100000.01}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'input20ModelDescription',
                            maximum: 200000,
                            name: 'input20Model',
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

                    <Input<number>
                        declaration="Number"
                        description="input21Description"
                        maximum={200000}
                        minimum={10}
                        minimumText="Please at least ${formatValue(minimum)}."
                        name="input21"
                        onChange={onChange}
                        placeholder="100.000"
                        required
                        type="currency"
                    />
                    <Input<number>
                        initialValue={100000.01}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'input21ModelDescription',
                            maximum: 200000,
                            minimum: 10,
                            name: 'input21Model',
                            nullable: false,
                            type: 'currency'
                        })}
                        onChange={onChange}
                    />
                </div>
                {/* endregion */}
                {/* region inputs */}
                <div
                    className="playground__inputs__inputs"
                    style={{display: activeTabIndex === 2 ? 'block' : 'none'}}
                >
                    <Inputs<FileValue, FileInputProps>
                        createItem={useMemorizedValue(
                            ({index, item, properties: {name}}):FileInputProps =>
                                ({...item, name: `${name}-${index + 1}`})
                        )}
                        model={useMemorizedValue({
                            default: [{name: 'inputs1-1'}], name: 'inputs1'
                        })}
                        onChange={onChange}
                        showInitialValidationState
                    >
                        {useMemorizedValue(({properties}) =>
                            <FileInput {...properties as FileInputProps} />
                        )}
                    </Inputs>
                    <Inputs<boolean, CheckboxProps>
                        createItem={useMemorizedValue(
                            ({index, item, properties: {name}}):CheckboxProps =>
                                ({...item, name: `${name}-${index + 1}`})
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
                        {useMemorizedValue(({properties}) =>
                            <RequireableCheckbox {...properties} />
                        )}
                    </Inputs>
                    <Inputs<IntervalConfiguration|IntervalValue, IntervalProps>
                        createItem={useMemorizedValue(
                            ({index, item, properties: {name}}):IntervalProps =>
                                ({...item, name: `${name}-${index + 1}`})
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
                        {useMemorizedValue(({properties}) =>
                            <Interval {...properties as IntervalProps} />
                        )}
                    </Inputs>
                    <Inputs
                        name="controlled"
                        onChange={onChange}
                        onChangeValue={onChangeValue7}
                        triggerInitialPropertiesConsolidation={true}
                        value={value7}
                    />
                </div>
                {/* endregion */}
                {/* region interval */}
                <div
                    className="playground__inputs__interval"
                    style={{display: activeTabIndex === 3 ? 'block' : 'none'}}
                >
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
                        triggerInitialPropertiesConsolidation={true}
                        value={value5}
                    />
                </div>
                {/* endregion */}
                {/* region requireable-checkbox */}
                <div
                    className="playground__inputs__requireable-checkbox"
                    style={{display: activeTabIndex === 5 ? 'block' : 'none'}}
                >
                    <RequireableCheckbox onChange={onChange} />
                    <RequireableCheckbox
                        name="controlled"
                        onChange={onChange}
                        onChangeValue={onChangeValue6}
                        triggerInitialPropertiesConsolidation={true}
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
                        default
                        disabled
                        name="checkbox2"
                        onChange={onChange}
                        required
                    />
                    <RequireableCheckbox
                        model={useMemorizedValue({
                            name: 'checkbox2Model', mutable: false, nullable: false
                        })}
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
                </div>
                {/* endregion */}
            </div>

            {selectedState ?
                <div className="playground__outputs">
                    <pre className="playground__outputs__bar">
                        {Tools.represent(selectedState)}
                    </pre>
                </div> :
                ''
            }
        </div>

    </>)
}
window.onload = ():void =>
    createRoot(document.querySelector('application')!).render(<Application />)
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
