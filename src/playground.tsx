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
import {EditorView as CodeEditorIndicator} from '@codemirror/view'
import {EditorContent as RichTextEditorIndicator} from '@tiptap/react'
import {Tab, TabBar} from '@rmwc/tabs'

import {
    dateTimeFormat,
    debounce,
    extend,
    LOCALES,
    Mapping,
    represent,
    timeout,
    UnknownFunction
} from 'clientnode'

import {ReactNode, useState} from 'react'
import {createRoot} from 'react-dom/client'
import {useMemorizedValue} from 'react-generic-tools'

import {preserveStaticFileBaseNameInputGenerator} from './components/FileInput'
import {
    FileInputChildrenOptions, FileInputProperties, FileInputProps, FileValue
} from './components/FileInput/type'
import {CheckboxProps} from './components/RequireableCheckbox/type'
import {
    InputProperties, InputProps, SuggestionCreatorOptions
} from './components/TextInput/type'
import {
    InputsCreateItemOptions,
    InputsCreatePrototypeOptions,
    InputsProperties,
    PartialInputsModel
} from './components/Inputs/type'
import {
    IntervalConfiguration,
    IntervalProperties,
    IntervalProps,
    IntervalValue,
    PartialIntervalModel
} from './components/Interval/type'
import {
    FileInput, TextInput, Inputs, Interval, RequireableCheckbox as Checkbox
} from './index'
import {BaseProps} from './type'
import {slicePropertiesForStateRecursively} from './helper'
// endregion
// region configuration
LOCALES.push('de-DE')
if (TextInput.transformer.currency.format)
    TextInput.transformer.currency.format.final.options = {currency: 'EUR'}

const SECTIONS = [
    'simple-input',
    'number-input',
    'text-input',
    'time-input',
    'selection-input',

    'file-input',

    'inputs',
    'interval',

    'requireable-checkbox'
] as const
// endregion
const Application = () => {
    const [selectedState, setSelectedState] =
        useState<BaseProps['model'] | null>(null)
    const [activeTabIndex, setActiveTabIndex] = useState<number>(0)
    const activeSection = SECTIONS[activeTabIndex]

    const onChange: ((properties: BaseProps) => void) =
        useMemorizedValue(({model}) => {
            setSelectedState(model)
        })
    // region controlled state
    /// region text
    const [textInputValue, setTextInputValue] = useState<null | string>('')
    const onChangeTextInputValue =
        useMemorizedValue<(value: null | string) => void>(setTextInputValue)
    /// endregion
    /// region number
    interface FloatValueState {
        representation: ReactNode | string
        value?: null | number
    }
    const [numberValue, setNumberValue] = useState<FloatValueState>({
        value: 1234.34, representation: '1.234,34'
    })
    const onChangeNumberValue =
        useMemorizedValue<(value: FloatValueState) => void>(setNumberValue)
    /// endregion
    /// region file
    const [fileInputValue, setFileInputValue] =
        useState<FileValue | null | undefined>({
            blob: new Blob(['test'], {type: 'text/plain'}),
            name: 'test.txt'
        })
    const onChangeFileInputValue =
        useMemorizedValue<(value?: FileValue | null) => void>(setFileInputValue)
    /// endregion
    /// region selection
    interface SelectionValueType {
        representation: ReactNode | string
        value?: null | string
    }
    const [selectionInput, setSelectionInput] =
        useState<SelectionValueType>({representation: 'klaus', value: 'b'})
    const onChangeSelectionInputValue =
        useMemorizedValue<(value: SelectionValueType) => void>(
            setSelectionInput
        )
    /// endregion
    /// region interval
    const [intervalValue, setIntervalValue] =
        useState<IntervalValue | null>({end: 120, start: 60})
    const onChangeIntervalValue =
        useMemorizedValue<(value: IntervalValue | null) => void>(
            setIntervalValue
        )
    /// endregion
    /// region checkbox
    const [checkboxInputValue, setCheckboxInputValue] =
        useState<boolean | null>(false)
    const onChangeCheckboxInputValue =
        useMemorizedValue<(value: boolean | null) => void>(
            setCheckboxInputValue
        )
    /// endregion
    /// region inputs
    type IntervalInputsType = PartialInputsModel<
        Partial<IntervalConfiguration> | Partial<IntervalValue> | null,
        IntervalProps
    >
    const [intervalInputsModel, setIntervalInputsModel] =
        useState<IntervalInputsType>({default: [
            {model: {value: {
                start: {
                    declaration: 'Please enter start time here.',
                    value: '1970-01-01T06:00:00.000Z'
                },
                end: {
                    declaration: 'Please enter end time here.',
                    value: '1970-01-01T10:30:00.000Z'
                }
            }}},
            {model: {value: {
                start: {
                    declaration: 'Please enter start time here.',
                    value: '1970-01-01T11:00:00.000Z'
                },
                end: {
                    declaration: 'Please enter end time here.',
                    value: '1970-01-01T17:00:00.000Z'
                }
            }}}
        ]})
    const onChangeIntervalInputsModel = useMemorizedValue((
        properties: {model: IntervalInputsType}
    ) => {
        const slicedProperties =
            slicePropertiesForStateRecursively(properties) as
                {model: IntervalInputsType}
        onChange(slicedProperties)

        setIntervalInputsModel(slicedProperties.model)
    })

    const createIntervalInputsPrototype = useMemorizedValue((
        {item, lastValue, properties}: InputsCreatePrototypeOptions<
            Partial<IntervalConfiguration> | Partial<IntervalValue> | null,
            IntervalProps,
            InputsProperties<
                Partial<IntervalConfiguration> | Partial<IntervalValue> | null,
                IntervalProps
            >
        >
    ): IntervalProps => {
        const sixHoursInSeconds =
            new Date(1970, 0, 1, 6).getTime() / 1000
        const length = properties.value?.length
        const nextStart =
            lastValue?.end ??
            (
                (
                    length &&
                    properties.value &&
                    properties.value[length - 1].value
                ) ?
                    properties.value[length - 1].value?.end :
                    sixHoursInSeconds
            )
        const nextStartTime =
            (nextStart as InputProps<number | string>).value ?? nextStart
        const nextStartTimeInSeconds = typeof nextStartTime === 'number' ?
            nextStartTime :
            new Date(nextStartTime as string).getTime() / 1000

        const value = {
            start: {value: nextStartTimeInSeconds},
            end: {value: nextStartTimeInSeconds + 60 ** 2}
        }

        return extend(true, item, {model: {value}, value})
    })

    const [textInputInputsValue, setTextInputInputsValue] =
        useState<Array<null | string> | null>(['first item'])
    const onChangeTextInputInputsValue =
        useMemorizedValue<(values: Array<null | string> | null) => void>(
            setTextInputInputsValue
        )
    /// endregion
    /// region interval
    const [intervalModel, setIntervalModel] = useState<PartialIntervalModel>({
        value: {
            start: {value: '1970-01-01T00:00:00.000Z'},
            end: {value: '1970-01-01T00:02:00.000Z'}
        }
    })
    const onChangeIntervalModel =
        useMemorizedValue<(properties: IntervalProperties) => void>((
            properties
        ) => {
            const slicedProperties =
                slicePropertiesForStateRecursively(properties) as
                    IntervalProperties
            onChange(slicedProperties)
            setIntervalModel(slicedProperties.model as PartialIntervalModel)
        })
    /// endregion
    // endregion
    return (<>
        {/* region navigation */}
        <div className="tab-bar">
            <TabBar
                activeTabIndex={activeTabIndex}
                onActivate={(event: {detail: {index: number}}) => {
                    if (event.detail.index !== activeTabIndex)
                        setActiveTabIndex(event.detail.index)

                    setSelectedState(null)
                }}
            >
                {SECTIONS.map((name) =>
                    <Tab key={name}>
                        {name === 'text-input' ?
                            <>name (with <sup>markup</sup>)</> :
                            name
                        }
                    </Tab>
                )}
            </TabBar>
        </div>
        {/* endregion */}
        <div className="playground">
            <div className="playground__inputs">
                {/* region simple */}
                <div
                    className="playground__inputs__simple-input"
                    style={{
                        display: activeSection === 'simple-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <TextInput<string>
                        name="simpleInput1"
                        inputProperties={useMemorizedValue({outlined: true})}
                        onChange={onChange}
                    />
                    <TextInput<null | string>
                        name="simpleInputUnControlled"

                        onChange={onChange}
                        onChangeValue={onChangeTextInputValue}
                        enforceUncontrolled={true}
                        value={textInputValue}
                    />
                    <TextInput<null | string>
                        name="simpleInputControlled"

                        onChange={onChange}
                        onChangeValue={onChangeTextInputValue}
                        triggerInitialPropertiesConsolidation={true}
                        value={textInputValue}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="This text can be seen initially."
                        inputProps={{
                            ariaChecked: false,
                            ariaDescription: 'test'
                        }}
                        name="simpleInput2"
                        showDeclaration

                        onChange={onChange}
                    />
                    <TextInput<string>
                        model={useMemorizedValue({name: 'simpleInput2Model'})}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="Disabled"
                        name="simpleInput3"

                        disabled
                        initialValue="simpleInputValue3"
                        onChange={onChange}
                    />
                    <TextInput<string>
                        model={useMemorizedValue({
                            declaration: 'Disabled',
                            default: 'simpleInputValue3Model',
                            mutable: false,
                            name: 'simpleInputValue3Model'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration={
                            'Very long declaration which should be dotted ' +
                            'in the end since it should fit into the ' +
                            'available space.'
                        }
                        name="simpleInput4"
                        placeholder="100.000,00"
                        showValidationState={false}
                        trailingIcon="clear_preset"

                        onChange={onChange}
                        required
                    />
                    <TextInput<string>
                        icon="backup"
                        placeholder="simpleInput4Model"
                        trailingIcon="clear_preset"

                        default="simpleValue4Model"
                        initial-value="simpleInputValue4Model"
                        model={useMemorizedValue({
                            declaration: 'placeholder',
                            name: 'simpleInput4Model',
                            nullable: false
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="pattern"
                        description="simpleInput5Description"
                        icon="search"
                        name="simpleInput5"
                        placeholder="simpleInput5Placeholder"

                        initialValue="only a`s allowed"
                        onChange={onChange}
                        pattern="^a+$"
                    />
                    <TextInput<string>
                        name="simpleInput5Model"
                        placeholder="simpleInput5ModelPlaceholder"
                        trailingIcon="search"

                        initialValue="has a`s and b`s"
                        model={useMemorizedValue({
                            declaration: 'pattern',
                            description: 'simpleInput5ModelDescription',
                            pattern: ['.*a+.*', /.*b+(.*)/]
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="password"
                        description="simpleInput6Description"
                        icon="search"
                        name="simpleInput6"
                        placeholder="simpleInput6Placeholder"
                        tooltip="Please type in your password."
                        trailingIcon="password_preset"

                        initialValue="hans"
                        onChange={onChange}
                        pattern="a+"
                    />
                    <TextInput<string>
                        name="simpleInput6Model"
                        placeholder="simpleInput6ModelPlaceholder"
                        trailingIcon="password_preset"

                        initialValue="hans"
                        model={useMemorizedValue({
                            declaration: 'password',
                            description: 'simpleInput6ModelDescription',
                            pattern: 'a+'
                        })}
                        onChange={onChange}
                    />
                </div>
                {/* endregion */}
                {/* region number */}
                <div
                    className="playground__inputs__number-input"
                    style={{
                        display: activeSection === 'number-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <TextInput<null | number>
                        name="numberInputControlled"

                        onChange={useMemorizedValue((
                            properties: InputProperties<null | number>
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

                    <TextInput<number>
                        declaration="Number"
                        description="numberInput1Description"
                        name="numberInput1"
                        placeholder="100000"

                        maximum={200000}
                        minimum={10}
                        onChange={onChange}
                        required
                        type="number"
                    />
                    <TextInput<number>
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

                    <TextInput<number>
                        declaration="Number"
                        description="numberInput2Description"
                        minimumText="Please at least ${formatValue(minimum)}."
                        name="numberInput2"
                        placeholder="100.000"

                        maximum={200000}
                        minimum={10}
                        onChange={onChange}
                        required
                        type="integer"
                    />
                    <TextInput<number>
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

                    <TextInput<number>
                        declaration="Number"
                        description="numberInput3Description"
                        minimumText="Please at least ${formatValue(minimum)}."
                        name="numberInput3"
                        placeholder="100.000"

                        maximum={200000}
                        minimum={10}
                        onChange={onChange}
                        required
                        type="currency"
                    />
                    <TextInput<number>
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
                {/* region text */}
                <div
                    className="playground__inputs__text-input"
                    style={{
                        display: activeSection === 'text-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <TextInput<string>
                        declaration="text"
                        description="textInput1Description"
                        editor="text"
                        name="textInput1"
                        rows={3}
                        themeConfiguration={useMemorizedValue({
                            primary: 'yellow',
                            secondary: 'blue'
                        })}

                        initialValue="a"
                        onChange={onChange}
                        required
                    />
                    <TextInput<string>
                        editor="text"
                        rows={2}

                        initialValue="a"
                        model={useMemorizedValue({
                            declaration: 'text',
                            description: 'textInput1ModelDescription',
                            name: 'textInput1Model',
                            nullable: false
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="code"
                        description="textInput2Description"
                        name="textInput2"

                        editor={
                            CodeEditorIndicator as
                                typeof CodeEditorIndicator | undefined ?
                                'code' :
                                'text'
                        }
                        rows={2}
                        selectableEditor

                        disabled
                        initialValue="const value = 2"
                        onChange={onChange}
                    />
                    <TextInput<string>
                        editor={
                            CodeEditorIndicator as
                                typeof CodeEditorIndicator | undefined ?
                                'code(js)' :
                                'text'
                        }
                        rows={6}
                        selectableEditor

                        initialValue="const value = 2"
                        model={useMemorizedValue({
                            declaration: 'code(js)',
                            description: 'textInput2ModelDescription',
                            name: 'textInput2Model',
                            nullable: false
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="code(css)"
                        description="textInput3Description"
                        name="textInput3"

                        editor={
                            CodeEditorIndicator as
                                typeof CodeEditorIndicator | undefined ?
                                'code(css)' :
                                'text'
                        }
                        rows={2}
                        selectableEditor

                        maximumLength={10}
                        required
                        onChange={onChange}
                    />
                    <TextInput<string>
                        editor={
                            CodeEditorIndicator as
                                typeof CodeEditorIndicator | undefined ?
                                'code(css)' :
                                'text'
                        }
                        editorIsInitiallyActive
                        rows={6}
                        selectableEditor

                        model={useMemorizedValue({
                            declaration: 'code(css)',
                            description: 'textInput3ModelDescription',
                            name: 'textInput3Model',
                            nullable: false
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="richtext"
                        description="textInput4Description"
                        name="textInput4"
                        placeholder={
                            'Hello Mr. Smith,<br><br>this is a Placeholder.'
                        }

                        editor={
                            RichTextEditorIndicator as
                                typeof RichTextEditorIndicator | undefined ?
                                'richtext' :
                                'text'
                        }
                        rows={2}
                        selectableEditor

                        initialValue="Hello Mr. Smith,<br><br>how are you?"
                        minimumLength={10}
                        maximumLength={100}
                        onChange={onChange}
                        required
                    />
                    <TextInput<string>
                        editor={
                            RichTextEditorIndicator as
                                typeof RichTextEditorIndicator | undefined ?
                                'richtext' :
                                'text'
                        }
                        editorIsInitiallyActive
                        rows={6}
                        selectableEditor

                        initialValue="Hello Mr. Smith,<br><br>how are you?"
                        model={useMemorizedValue({
                            declaration: 'richtext',
                            description: 'textInput4ModelDescription',
                            mutable: false,
                            name: 'textInput4Model',
                            nullable: false
                        })}
                        onChange={onChange}
                    />
                </div>
                {/* endregion */}
                {/* region time */}
                <div
                    className="playground__inputs__time-input"
                    style={{
                        display: activeSection === 'time-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <TextInput<number>
                        default={
                            new Date('2025-01-01T00:00:00.000Z')
                                .getTime() / 1000
                        }
                        name="timeInput1"
                        onChange={onChange}
                        type="date"
                    />
                    <TextInput<string>
                        initialValue="2025-01-01T00:00:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput1Model', type: 'date'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<number>
                        default={
                            new Date('2025-01-01T23:00:00.000Z')
                                .getTime() / 1000
                        }
                        name="timeInput2"
                        onChange={onChange}
                        type="date-local"
                    />
                    <TextInput<string>
                        initialValue="2025-01-01T23:00:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput2Model', type: 'date-local'
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <TextInput<number>
                        default={120}
                        name="timeInput3"
                        onChange={onChange}
                        type="datetime"
                    />
                    <TextInput<Date>
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

                    <TextInput<number>
                        default={120}
                        name="timeInput4"
                        onChange={onChange}
                        type="datetime-local"
                    />
                    <TextInput<Date | number>
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

                    <TextInput<number>
                        default={120}
                        name="timeInput5"
                        onChange={onChange}
                        type="time"
                    />
                    <TextInput<Date | number>
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

                    <TextInput<number>
                        default={120}
                        name="timeInput6"
                        onChange={onChange}
                        type="time-local"
                    />
                    <TextInput<Date | number>
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

                    <TextInput<string>
                        default="00:20:00"
                        name="timeInput7"
                        onChange={onChange}
                        type="time-local"
                        step={60}
                    />
                    <TextInput<string>
                        initialValue="1970-01-01T00:20:00.000Z"
                        inputProperties={useMemorizedValue({outlined: true})}
                        model={useMemorizedValue({
                            name: 'timeInput7Model', type: 'time-local'
                        })}
                        onChange={onChange}
                        step={60}
                    />
                </div>
                {/* endregion */}
                {/* region selection */}
                <div
                    className="playground__inputs__selection-input"
                    style={{
                        display: activeSection === 'selection-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <TextInput<string>
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
                    <TextInput<string>
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

                    <TextInput<boolean>
                        declaration="selection"
                        description="selectionInput2Description"
                        initialValue={true}
                        name="selectionInput2"
                        onChange={onChange}
                        placeholder="selectionInput2Placeholder"
                        type="boolean"
                        required
                    />
                    <TextInput<boolean>
                        disabled
                        initialValue={false}
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        model={useMemorizedValue({
                            declaration: 'selection',
                            description: 'selectionInput2ModelDescription',
                            name: 'selectionInput2Model',
                            nullable: false,
                            type: 'boolean'
                        })}
                        onChange={onChange}
                        placeholder="selectionInput2ModelPlaceholder"
                    />

                    <hr/>

                    <TextInput<string>
                        declaration="selection"
                        description="selectionInput3Description"
                        initialValue="true"
                        labels={useMemorizedValue({true: 'JA', false: 'NEIN'})}
                        name="selectionInput3"
                        onChange={onChange}
                        required
                    />
                    <TextInput<boolean>
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

                    <TextInput<number>
                        declaration="numberSelection"
                        description="selectionInput4Description"
                        initialValue={2}
                        selection={useMemorizedValue([1, 2, 3])}
                        name="selectionInput4"
                        onChange={onChange}
                        required
                    />
                    <TextInput<number>
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

                    <TextInput<string>
                        declaration="selection"
                        description="selectionInput5Description"
                        initialValue="b"
                        name="selectionInput5"
                        onChange={onChange}
                        selection={useMemorizedValue({a: 'A', b: 'B', c: 'C'})}
                        required
                    />
                    <TextInput<string>
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

                    <TextInput<string>
                        description="selectionInput6Description"
                        name="selectionInput6"
                        onChange={onChange}
                        placeholder="selectionInput6Placeholder"
                        selection={useMemorizedValue(
                            ['hans hans', 'peter peter', 'klaus']
                        )}
                        suggestSelection
                    />
                    <TextInput<string>
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
                            debounce<Array<string>>(
                                (({query}: SuggestionCreatorOptions<
                                    InputProperties<string>
                                >): Array<string> | Promise<Array<string>> => {
                                    if (!query || query.length < 3)
                                        return []

                                    return timeout(2000)
                                        .then((): Array<string> =>
                                            [
                                                'hans with veeeeeeeeeeeeeeee' +
                                                'ry loooooooooooooooong ' +
                                                'second name',
                                                'peter',
                                                'klaus'
                                            ].filter((name: string): boolean =>
                                                !query || name.includes(query)
                                            )
                                        )
                                }) as UnknownFunction,
                                1000
                            )
                        )}
                    />

                    <hr/>

                    <TextInput<string>
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
                    <TextInput<string>
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
                            async ({query}: SuggestionCreatorOptions<
                                InputProperties<string>
                            >): Promise<Mapping> => {
                                await timeout(500)

                                const selection: Mapping = {
                                    a: 'hans with veeeeeeeeeeeeeeeery ' +
                                        'loooooooooooooooong second name',
                                    b: 'peter',
                                    c: 'klaus'
                                }

                                const result: Mapping = {}
                                for (const [key, value] of Object.entries(
                                    selection
                                ))
                                    if (!query || value.includes(query))
                                        result[key] = value

                                return result
                            }
                        )}
                    />
                    <TextInput<null | string>
                        name="selectionInputControlled1"
                        onChange={useMemorizedValue(
                            (properties: InputProperties<null | string>) => {
                                onChangeSelectionInputValue({
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
                    <TextInput<null | string>
                        name="selectionInputControlled2"
                        onChange={useMemorizedValue(
                            (properties: InputProperties<null | string>) => {
                                onChangeSelectionInputValue({
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

                {/* region file */}
                <div
                    className="playground__inputs__file-input"
                    style={{
                        display: activeSection === 'file-input' ?
                            'block' :
                            'none'
                    }}
                >
                    <FileInput name="fileInput1" onChange={onChange} />

                    <FileInput<FileValue>
                        default={useMemorizedValue({
                            blob: {type: 'image/png'},
                            url: '/placeholder/150'
                        })}

                        contentTypePattern="^text/(?:plain|(?:x-)?csv|xml)$"
                        model={{fileName: {
                            pattern: '^[a-zA-Z0-9]\\.(?:csv|txt|xml)$'
                        }}}

                        encoding="latin1"

                        generateFileNameInputProperties={
                            preserveStaticFileBaseNameInputGenerator
                        }

                        name="fileInputUnControlled"

                        onChange={onChange}
                    >
                        {useMemorizedValue(({value}: FileInputChildrenOptions<
                            FileInputProperties
                        >): ReactNode =>
                            value?.blob ?
                                <ul>
                                    <li>
                                        Expected encoding for text based files:
                                        latin1
                                    </li>
                                    {(value.blob as File).lastModified ?
                                        <li>
                                            Last modified date time:
                                            {dateTimeFormat(
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
                                    {value.hash ?
                                        <li>MD5-Hash: {value.hash}</li> :
                                        ''
                                    }
                                </ul> :
                                ''
                        )}
                    </FileInput>
                    <FileInput
                        name="fileInputControlled"
                        onChange={onChange}
                        onChangeValue={onChangeFileInputValue}
                        triggerInitialPropertiesConsolidation={true}
                        value={fileInputValue}
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
                    {/* region file-input inputs */}
                    <Inputs<FileValue | null, FileInputProps>
                        name="fileInputs"
                        createItem={useMemorizedValue(
                            ({
                                index, item, properties: {name}
                            }): FileInputProps => ({
                                ...item, name: `${name}-${String(index + 1)}`
                            })
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
                    {/* endregion */}
                    {/* region checkbox inputs */}
                    <Inputs<boolean | null, CheckboxProps>
                        createItem={useMemorizedValue(({
                            index, item, properties: {name}
                        }: InputsCreateItemOptions<
                            boolean | null,
                            CheckboxProps,
                            InputsProperties<boolean | null, CheckboxProps>
                        >): CheckboxProps => ({
                            ...item,
                            name: `${name}-${String(index + 1)}`
                        }))}
                        maximumNumber={2}
                        minimumNumber={2}
                        model={useMemorizedValue({
                            default: [{type: 'boolean', value: false}],
                            name: 'checkboxInputs'
                        })}
                        onChange={onChange}
                        showInitialValidationState
                    >
                        {useMemorizedValue(({properties}) =>
                            <Checkbox {...properties} />
                        )}
                    </Inputs>
                    {/* endregion */}
                    {/* region interval inputs */}
                    {/* region uncontrolled */}
                    <Inputs<
                        (
                            Partial<IntervalConfiguration> |
                            Partial<IntervalValue> |
                            null
                        ),
                        IntervalProps
                    >
                        createPrototype={createIntervalInputsPrototype}
                        model={useMemorizedValue({
                            default: [
                                {value: {
                                    start: '1970-01-01T07:00:00.000Z',
                                    end: '1970-01-01T11:30:00.000Z'
                                }},
                                {value: {
                                    start: '1970-01-01T12:00:00.000Z',
                                    end: '1970-01-01T18:00:00.000Z'
                                }}
                            ],
                            name: 'intervalInputsUnControlled'
                        })}
                        onChange={onChange}
                        showInitialValidationState
                    >
                        {useMemorizedValue(({properties}) =>
                            <Interval {...properties} step={60} />
                        )}
                    </Inputs>
                    {/* endregion */}
                    {/* region controlled */}
                    <Inputs<
                        (
                            Partial<IntervalConfiguration> |
                            Partial<IntervalValue> |
                            null
                        ),
                        IntervalProps
                    >
                        createPrototype={createIntervalInputsPrototype}
                        model={intervalInputsModel}
                        name="intervalInputsControlled"
                        onChange={onChangeIntervalInputsModel}
                        showInitialValidationState
                    >
                        {useMemorizedValue(({properties}) =>
                            <Interval {...extend(
                                true,
                                properties,
                                {
                                    value: {
                                        start: {type: 'time-local'},
                                        end: {type: 'time-local'}
                                    },
                                    step: 60
                                }
                            )} />
                        )}
                    </Inputs>
                    {/* endregion */}
                    {/* endregion */}
                    <Inputs
                        name="textInputInputsControlled"
                        onChange={onChange}
                        onChangeValue={onChangeTextInputInputsValue}
                        triggerInitialPropertiesConsolidation={true}
                        value={textInputInputsValue}
                    />
                </div>
                {/* endregion */}
                {/* region interval */}
                <div
                    className="playground__inputs__interval"
                    style={{
                        display: activeSection === 'interval' ?
                            'block' :
                            'none'
                    }}
                >
                    <Interval
                        name="intervalInput1"
                        onChange={onChange}
                        required
                        step={60}
                        value={useMemorizedValue({
                            start: {default: 120, maximum: 3600},
                            end: {default: 240, minimum: 120}
                        })}
                    />
                    <Interval
                        name="intervalInput2"
                        onChange={onChange}
                        required
                        step={60}
                        value={useMemorizedValue({
                            start: {
                                default: '1970-01-01T00:02:00.000Z',
                                maximum: '1970-01-01T01:00:00.000Z',
                                type: 'time-local'
                            },
                            end: {
                                default: '1970-01-01T00:04:00.000Z',
                                minimum: '1970-01-01T00:02:00.000Z',
                                type: 'time-local'
                            }
                        })}
                    />

                    <Interval
                        name="intervalControlled1"
                        default={120}
                        onChange={onChange}
                        onChangeValue={onChangeIntervalValue}
                        step={60}
                        triggerInitialPropertiesConsolidation={true}
                        value={intervalValue}
                    />
                    <Interval
                        name="intervalControlled2"
                        declaration={
                            'Very long declaration which should be dotted in' +
                            'the end since it should fit into the available' +
                            'space.'
                        }
                        default={120}
                        model={intervalModel}
                        onChange={onChangeIntervalModel}
                        step={60}
                        triggerInitialPropertiesConsolidation={true}
                    />
                </div>
                {/* endregion */}

                {/* region checkbox */}
                <div
                    className="playground__inputs__requireable-checkbox"
                    style={{
                        display: activeSection === 'requireable-checkbox' ?
                            'block' :
                            'none'
                    }}
                >
                    <Checkbox name="checkbox1" onChange={onChange} />
                    <Checkbox
                        name="CheckboxControlled"
                        onChange={onChange}
                        onChangeValue={onChangeCheckboxInputValue}
                        triggerInitialPropertiesConsolidation={true}
                        value={checkboxInputValue}
                    />

                    <hr/>

                    <Checkbox name="checkbox2" onChange={onChange} />
                    <Checkbox
                        model={useMemorizedValue({name: 'checkbox2Model'})}
                        onChange={onChange}
                        themeConfiguration={useMemorizedValue({
                            primary: 'yellow',
                            secondary: 'blue'
                        })}
                    />

                    <hr/>

                    <Checkbox
                        default
                        disabled
                        name="checkbox3"
                        onChange={onChange}
                        required
                    />
                    <Checkbox
                        model={useMemorizedValue({
                            name: 'checkbox3Model',
                            mutable: false,
                            nullable: false
                        })}
                        onChange={onChange}
                    />

                    <hr/>

                    <Checkbox
                        description="checkbox4Description"
                        name="checkbox4"
                        onChange={onChange}
                        required
                        showInitialValidationState
                    />
                    <Checkbox
                        model={useMemorizedValue({
                            default: true,
                            description: 'checkbox4ModelDescription',
                            name: 'checkbox4Model',
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
                        visible independently of current scroll position.
                     */}
                    <pre className="playground__outputs__bar">
                        {represent(selectedState)}
                    </pre>
                    <pre className="playground__outputs__content">
                        {represent(selectedState)}
                    </pre>
                </div> :
                ''
            }
        </div>
    </>)
}
window.onload = () => {
    const applicationElement = document.querySelector('application')
    if (applicationElement)
        createRoot(applicationElement).render(<Application/>)
}
