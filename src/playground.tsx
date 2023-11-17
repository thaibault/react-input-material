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
import {ReactNode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {useMemorizedValue} from 'react-generic-tools'

import {preserveStaticFileBaseNameInputGenerator} from './components/FileInput'
import {
    FileInput, GenericInput as Input, Inputs, Interval, RequireableCheckbox
} from './index'
import {
    CheckboxProps, FileInputChildrenOptions, FileInputProperties,
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

const SECTIONS = [
    'file-input',
    'simple-input',
    'number-input',
    'text-input',
    'time-input',
    'selection-input',
    'inputs',
    'interval',
    'requireable-checkbox'
] as const

const Application = () => {
    const [selectedState, setSelectedState] = useState<unknown>()
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const activeSection = SECTIONS[activeTabIndex]

    const onChange:((properties:{model:unknown}) => void) =
        useMemorizedValue<(properties:{model:unknown}) => void>(
            ({model}) => {
                setSelectedState(model)
            }
        )
    // region controlled state
    const [fileInputValue, setFileInputValue] =
        useState<FileValue|null|undefined>({
            blob: new Blob(['test'], {type: 'text/plain'}),
            name: 'test.txt'
        })
    const onChangeValue1 =
        useMemorizedValue<(value?:FileValue|null) => void>(setFileInputValue)

    const [inputValue1, setInputValue1] = useState<null|string>('')
    const onChangeInputValue1 =
        useMemorizedValue<(value:null|string) => void>(setInputValue1)

    type FloatValueState = {
        representation:ReactNode|string
        value?:null|number
    }
    const [numberValue, setNumberValue] = useState<FloatValueState>({
        value: 1234.34, representation: '1.234,34'
    })
    const onChangeNumberValue =
        useMemorizedValue<(value:FloatValueState) => void>(setNumberValue)

    type SelectionValueType = {
        representation:ReactNode|string
        value?:null|string
    }
    const [selectionInput, setSelectionInput] =
        useState<SelectionValueType>({representation: 'klaus', value: 'b'})
    const onChangeInputValue3 =
        useMemorizedValue<(value:SelectionValueType) => void>(setSelectionInput)

    const [inputValue4, setInputValue4] =
        useState<IntervalValue|null>({end: 120, start: 60})
    const onChangeInputValue4 =
        useMemorizedValue<(value:IntervalValue|null) => void>(setInputValue4)

    const [inputValue5, setInputValue5] = useState<boolean>(false)
    const onChangeInputValue5 =
        useMemorizedValue<(value:boolean) => void>(setInputValue5)

    const [inputValue6, setInputValue6] =
        useState<Array<null|string>|null>(['first item'])
    const onChangeInputValue6 =
        useMemorizedValue<(values:Array<null|string>|null) => void>(
            setInputValue6
        )
    // endregion

    return (<>
        {/* region navigation */}
        <div className="tab-bar">
            <TabBar
                activeTabIndex={activeTabIndex}
                onActivate={(event:TabBarOnActivateEventT) => {
                    if (event.detail.index !== activeTabIndex)
                        setActiveTabIndex(event.detail.index)
                }}
            >
                {SECTIONS.map((name) =>
                    <Tab key={name}>{name}</Tab>)
                }
            </TabBar>
        </div>
        {/* endregion */}
        <div className="playground">
            <div className="playground__inputs">
                {/* region file-input */}
                <div
                    className="playground__inputs__file-input"
                    style={{
                        display: activeSection === 'file-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <FileInput onChange={onChange} />
                    <FileInput
                        default={useMemorizedValue({
                            blob: {type: 'image/png'},
                            url: 'https://via.placeholder.com/150'
                        })}
                        encoding="latin1"
                        generateFileNameInputProperties={
                            preserveStaticFileBaseNameInputGenerator
                        }
                        name="UnControlled"
                        onChange={onChange}
                    >
                        {useMemorizedValue(({value}:FileInputChildrenOptions<
                            FileInputProperties
                        >):ReactNode =>
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
                                            Mime-Typ:
                                            {(value.blob as Blob).type}
                                        </li> :
                                        ''
                                    }
                                    {value.blob instanceof Blob ?
                                        <li>Size: {value.blob.size}</li> :
                                        ''
                                    }
                                </ul> :
                                ''
                        )}
                    </FileInput>
                    <FileInput
                        name="Controlled"
                        onChange={onChange}
                        onChangeValue={onChangeValue1}
                        triggerInitialPropertiesConsolidation={true}
                        value={fileInputValue}
                    />
                </div>
                {/* endregion */}
                {/* region simple-input */}
                <div
                    className="playground__inputs__simple-input"
                    style={{
                        display: activeSection === 'simple-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <Input<string>
                        inputProperties={useMemorizedValue({outlined: true})}
                        onChange={onChange}
                    />
                    <Input<null|string>
                        name="UnControlled"
                        onChange={onChange}
                        onChangeValue={onChangeInputValue1}
                        enforceUncontrolled={true}
                        value={inputValue1}
                    />
                    <Input<null|string>
                        name="controlled"
                        onChange={onChange}
                        onChangeValue={onChangeInputValue1}
                        triggerInitialPropertiesConsolidation={true}
                        value={inputValue1}
                    />

                    <hr/>

                    <Input<string>
                        declaration="This text can be seen initially."
                        inputProps={{
                            ariaChecked: false,
                            ariaDescription: 'test'
                        }}
                        name="simpleInput1"
                        onChange={onChange}
                        showDeclaration={true}
                    />
                    <Input<string>
                        model={useMemorizedValue({name: 'simpleInput1Model'})}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="Disabled"
                        disabled
                        initialValue="value4"
                        name="simpleInput2"
                        onChange={onChange}
                    />
                    <Input<string>
                        model={useMemorizedValue({
                            declaration: 'Disabled',
                            default: 'value2Model',
                            mutable: false,
                            name: 'simpleInput2Model'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="placeholder"
                        name="simpleInput3"
                        onChange={onChange}
                        placeholder="100.000,00"
                        required
                        showValidationState={false}
                        trailingIcon="clear_preset"
                    />
                    <Input<string>
                        default="simpleValue3Model"
                        icon="backup"
                        model={useMemorizedValue({
                            declaration: 'placeholder',
                            name: 'simpleInput3Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        placeholder="simpleInput3Model"
                        trailingIcon="clear_preset"
                    />

                    <hr/>

                    <Input<string>
                        declaration="pattern"
                        description="simpleInput4Description"
                        icon="search"
                        initialValue="only a`s allowed"
                        name="input6"
                        onChange={onChange}
                        pattern="^a+$"
                        placeholder="simpleInput4Placeholder"
                    />
                    <Input<string>
                        initialValue="has a`s and b`s"
                        model={useMemorizedValue({
                            declaration: 'pattern',
                            description: 'simpleInput4ModelDescription',
                            regularExpressionPattern: ['.*a+.*', /.*b+(.*)/]
                        })}
                        name="simpleInput4Model"
                        onChange={onChange}
                        placeholder="simpleInput4ModelPlaceholder"
                        trailingIcon="search"
                    />

                    <hr/>

                    <Input<string>
                        declaration="password"
                        description="simpleInput5Description"
                        icon="search"
                        initialValue="hans"
                        name="simpleInput5"
                        onChange={onChange}
                        pattern="a+"
                        placeholder="simpleInput5Placeholder"
                        tooltip="Please type in your password."
                        trailingIcon="password_preset"
                    />
                    <Input<string>
                        initialValue="hans"
                        model={useMemorizedValue({
                            declaration: 'password',
                            description: 'simpleInput5ModelDescription',
                            regularExpressionPattern: 'a+'
                        })}
                        name="simpleInput5Model"
                        onChange={onChange}
                        placeholder="simpleInput5ModelPlaceholder"
                        trailingIcon="password_preset"
                    />
                </div>
                {/* endregion */}
                {/* region number-input */}
                <div
                    className="playground__inputs__number-input"
                    style={{
                        display: activeSection === 'number-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <Input<null|number>
                        name="controlled"
                        onChange={useMemorizedValue((
                            properties:InputProperties<null|number>
                        ) => {
                            onChange(properties)
                            onChangeNumberValue({
                                representation: properties.representation,
                                value: properties.value
                            })
                        })}
                        representation={numberValue.representation}
                        type="float"
                        value={numberValue.value}
                    />

                    <hr/>

                    <Input<number>
                        declaration="Number"
                        description="numberInput1Description"
                        maximum={200000}
                        minimum={10}
                        name="numberInput1"
                        onChange={onChange}
                        placeholder="100000"
                        required
                        type="number"
                    />
                    <Input<number>
                        initialValue={100000}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'numberInput1ModelDescription',
                            maximum: 200000,
                            minimum: 10,
                            name: 'numberInput1Model',
                            nullable: false,
                            type: 'number'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        declaration="Number"
                        description="numberInput2Description"
                        maximum={200000}
                        minimum={10}
                        name="numberInput2"
                        onChange={onChange}
                        placeholder="100.000"
                        required
                        type="integer"
                    />
                    <Input<number>
                        initialValue={100000.01}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'numberInput2ModelDescription',
                            maximum: 200000,
                            name: 'numberInput2Model',
                            nullable: false,
                            type: 'float'
                        })}
                        onChange={onChange}
                        transformer={useMemorizedValue({
                            format: {final: {options: {
                                maximumFractionDigits: 20,
                                minimumFractionDigits: 2
                            }}}}
                        )}
                    />

                    <hr/>

                    <Input<number>
                        declaration="Number"
                        description="numberInput3Description"
                        maximum={200000}
                        minimum={10}
                        minimumText="Please at least ${formatValue(minimum)}."
                        name="numberInput3"
                        onChange={onChange}
                        placeholder="100.000"
                        required
                        type="currency"
                    />
                    <Input<number>
                        initialValue={100000.01}
                        model={useMemorizedValue({
                            declaration: 'Number',
                            description: 'numberInput3ModelDescription',
                            maximum: 200000,
                            minimum: 10,
                            name: 'numberInput3Model',
                            nullable: false,
                            type: 'currency'
                        })}
                        onChange={onChange}
                    />
                </div>
                {/* endregion */}
                {/* region text-input */}
                <div
                    className="playground__inputs__text-input"
                    style={{
                        display: activeSection === 'text-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <Input<string>
                        declaration="text"
                        description="textInput1Description"
                        editor="text"
                        initialValue="a"
                        name="textInput1"
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
                            description: 'textInput1ModelDescription',
                            name: 'textInput1Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={2}
                    />

                    <hr/>

                    <Input<string>
                        declaration="code"
                        description="textInput2Description"
                        disabled
                        editor="code"
                        initialValue="const value = 2"
                        name="textInput2"
                        onChange={onChange}
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="code"
                        initialValue="const value = 2"
                        model={useMemorizedValue({
                            declaration: 'code',
                            description: 'textInput2ModelDescription',
                            name: 'textInput2Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={6}
                        selectableEditor
                    />

                    <hr/>

                    <Input<string>
                        declaration="code"
                        description="textInput3Description"
                        editor="code"
                        maximumLength={10}
                        name="textInput3"
                        onChange={onChange}
                        required
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="code"
                        model={useMemorizedValue({
                            declaration: 'code',
                            description: 'textInput3ModelDescription',
                            name: 'textInput3Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={6}
                        selectableEditor
                    />

                    <hr/>

                    <Input<string>
                        declaration="richtext(raw)"
                        description="textInput4Description"
                        editor="richtext(raw)"
                        name="textInput4"
                        onChange={onChange}
                        placeholder={
                            'Hello Mr. Smith,<br><br>this is a Placeholder.'
                        }
                        required
                        rows={2}
                        selectableEditor
                    />
                    <Input<string>
                        editor="richtext(simple)"
                        initialValue="Hello Mr. Smith,<br><br>how are you?"
                        model={useMemorizedValue({
                            declaration: 'richtext(simple)',
                            description: 'textInput4ModelDescription',
                            mutable: false,
                            name: 'textInput4Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        rows={6}
                        selectableEditor
                    />
                </div>
                {/* endregion */}
                {/* region time-input */}
                <div
                    className="playground__inputs__time-input"
                    style={{
                        display: activeSection === 'time-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <Input<number>
                        default={
                            new Date('2025-01-01T00:00:00.000Z')
                                .getTime() / 1000
                        }
                        name="timeInput1"
                        onChange={onChange}
                        type="date"
                    />
                    <Input<string>
                        initialValue="2025-01-01T00:00:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput1Model', type: 'date'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={
                            new Date('2025-01-01T00:00:00.000Z')
                                .getTime() / 1000
                        }
                        name="timeInput2"
                        onChange={onChange}
                        type="date-local"
                    />
                    <Input<string>
                        initialValue="2025-01-01T00:00:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput2Model', type: 'date-local'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={120}
                        name="timeInput3"
                        onChange={onChange}
                        type="datetime"
                    />
                    <Input<Date>
                        model={useMemorizedValue({
                            default: new Date(120 * 1000),
                            maximum: 3600,
                            minimum: 60,
                            name: 'timeInput3Model',
                            type: 'datetime'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={120}
                        name="timeInput4"
                        onChange={onChange}
                        type="datetime-local"
                    />
                    <Input<Date|number>
                        model={useMemorizedValue({
                            default: new Date(120 * 1000),
                            maximum: 3600,
                            minimum: 60,
                            name: 'timeInput4Model',
                            type: 'datetime-local'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={120}
                        name="timeInput5"
                        onChange={onChange}
                        type="time"
                    />
                    <Input<Date|number>
                        model={useMemorizedValue({
                            default: new Date(60 * 1000),
                            maximum: 3600,
                            minimum: 60,
                            name: 'timeInput5Model',
                            type: 'time'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        default={120}
                        name="timeInput6"
                        onChange={onChange}
                        type="time-local"
                    />
                    <Input<Date|number>
                        model={useMemorizedValue({
                            default: new Date(60 * 1000),
                            maximum: 3600,
                            minimum: 60,
                            name: 'timeInput6Model',
                            type: 'time-local'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        initialValue="1970-01-01T00:20:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput7Model', type: 'time-local'
                        })}
                        onChange={onChange}
                    />
                    <Input<string>
                        default="00:20:00"
                        name="timeInput7"
                        onChange={onChange}
                        type="time-local"
                    />
                </div>
                {/* endregion */}
                {/* region selection-input */}
                <div
                    className="playground__inputs__selection-input"
                    style={{
                        display: activeSection === 'selection-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <Input<string>
                        declaration="selection"
                        description="selectionInput1Description"
                        labels={useMemorizedValue(
                            [['C', 'LC'], ['D', 'LD'], ['A', 'LA'], ['B', 'LB']]
                        )}
                        name="selectionInput1"
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
                            description: 'selectionInput1ModelDescription',
                            name: 'selectionInput1Model',
                            mutable: false,
                            nullable: false,
                            selection: ['A', 'B', 'C']
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<boolean>
                        declaration="selection"
                        description="selectionInput2Description"
                        initialValue={true}
                        name="selectionInput2"
                        onChange={onChange}
                        placeholder="selectionInput2Placeholder"
                        type="boolean"
                        required
                    />
                    <Input<boolean>
                        disabled
                        initialValue={false}
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput2ModelDescription',
                            name: 'input9Model',
                            nullable: false,
                            type: 'boolean'
                        })}
                        onChange={onChange}
                        placeholder="selectionInput2ModelPlaceholder"
                    />

                    <hr/>

                    <Input<string>
                        declaration="selection"
                        description="selectionInput3Description"
                        initialValue="true"
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        name="selectionInput3"
                        onChange={onChange}
                        required
                    />
                    <Input<boolean>
                        initialValue={false}
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput3ModelDescription',
                            name: 'selectionInput3Model',
                            nullable: false,
                            type: 'boolean'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<number>
                        declaration="numberSelection"
                        description="selectionInput4Description"
                        initialValue={2}
                        selection={useMemorizedValue([1, 2, 3])}
                        name="selectionInput4"
                        onChange={onChange}
                        required
                    />
                    <Input<number>
                        model={useMemorizedValue({
                            declaration: 'numberSelection',
                            description: 'selectionInput4ModelDescription',
                            name: 'selectionInput4Model',
                            selection: [1, 2, 3],
                            type: 'number'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        declaration="selection"
                        description="selectionInput5Description"
                        initialValue="b"
                        name="selectionInput5"
                        onChange={onChange}
                        selection={useMemorizedValue({a: 'A', b: 'B', c: 'C'})}
                        required
                    />
                    <Input<string>
                        initialValue="b"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput5ModelDescription',
                            name: 'selectionInput5Model',
                            nullable: false,
                            selection: {a: 'A', b: 'B', c: 'C'}
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Input<string>
                        description="selectionInput6Description"
                        name="selectionInput6"
                        onChange={onChange}
                        placeholder="selectionInput6Placeholder"
                        selection={useMemorizedValue(
                            ['hans hans', 'peter peter', 'klaus']
                        )}
                        suggestSelection
                    />
                    <Input<string>
                        initialValue="peter"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput6ModelDescription',
                            name: 'selectionInput6Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        placeholder="selectionInput6ModelPlaceholder"
                        searchSelection
                        suggestionCreator={useMemorizedValue(
                            Tools.debounce<Array<string>>(
                                (({query}:SuggestionCreatorOptions<
                                    InputProperties<string>
                                >):Array<string>|Promise<Array<string>> => {
                                    if (!query || query.length < 3)
                                        return []

                                    return Tools.timeout(2000)
                                        .then(():Array<string> =>
                                            [
                                                'hans with veeeeeeeeeeeeeeee' +
                                                'ry loooooooooooooooong ' +
                                                'second name',
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
                        description="selectionInput7Description"
                        default={'a'}
                        name="selectionInput7"
                        onChange={onChange}
                        placeholder="selectionInput7Placeholder"
                        searchSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'hans', c: 'klaus'}
                        )}
                    />
                    <Input<string>
                        initialValue="peter"
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput7ModelDescription',
                            name: 'selectionInput7Model',
                            nullable: false
                        })}
                        onChange={onChange}
                        placeholder="selectionInput7ModelPlaceholder"
                        suggestionCreator={useMemorizedValue(
                            async ({query}:SuggestionCreatorOptions<
                                InputProperties<string>
                            >):Promise<Mapping> => {
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
                    <Input<null|string>
                        name="controlled"
                        onChange={useMemorizedValue(
                            (properties:InputProperties<null|string>) => {
                                onChangeInputValue3({
                                    representation: properties.representation,
                                    value: properties.value
                                })
                                onChange(properties)
                            }
                        )}
                        representation={selectionInput.representation}
                        searchSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'peter', c: 'klaus'}
                        )}
                        value={selectionInput.value}
                    />
                    <Input<null|string>
                        name="controlled"
                        onChange={useMemorizedValue(
                            (properties:InputProperties<null|string>) => {
                                onChangeInputValue3({
                                    representation: properties.representation,
                                    value: properties.value
                                })
                                onChange(properties)
                            }
                        )}
                        representation={selectionInput.representation}
                        suggestSelection
                        selection={useMemorizedValue(
                            {a: 'hans', b: 'peter', c: 'klaus'}
                        )}
                        value={selectionInput.value}
                    />
                </div>
                {/* endregion */}
                {/* region inputs */}
                <div
                    className="playground__inputs__inputs"
                    style={{
                        display: activeSection === 'inputs' ?
                            'block' :
                            'none'
                    }}
                >
                    <Inputs<FileValue|null, FileInputProps>
                        createItem={useMemorizedValue(
                            ({
                                index,
                                item,
                                properties: {name}
                            }):FileInputProps =>
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
                    <Inputs<
                        IntervalConfiguration|IntervalValue|null, IntervalProps
                    >
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
                        onChangeValue={onChangeInputValue6}
                        triggerInitialPropertiesConsolidation={true}
                        value={inputValue6}
                    />
                </div>
                {/* endregion */}
                {/* region interval */}
                <div
                    className="playground__inputs__interval"
                    style={{
                        display: activeSection === 'interval' ?
                            'block' : 'none'
                    }}
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
                        onChangeValue={onChangeInputValue4}
                        step={60}
                        triggerInitialPropertiesConsolidation={true}
                        value={inputValue4}
                    />
                </div>
                {/* endregion */}
                {/* region requireable-checkbox */}
                <div
                    className="playground__inputs__requireable-checkbox"
                    style={{
                        display: activeSection === 'requireable-checkbox' ?
                            'block' :
                            'none'
                    }}
                >
                    <RequireableCheckbox onChange={onChange} />
                    <RequireableCheckbox
                        name="controlled"
                        onChange={onChange}
                        onChangeValue={onChangeInputValue5}
                        triggerInitialPropertiesConsolidation={true}
                        value={inputValue5}
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
                            name: 'checkbox2Model',
                            mutable: false,
                            nullable: false
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
                    {/*
                        Add on version as a hidden spacer and one fixed version
                        visible independently from current scroll position.
                     */}
                    <pre className="playground__outputs__bar">
                        {Tools.represent(selectedState)}
                    </pre>
                    <pre className="playground__outputs__content">
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
