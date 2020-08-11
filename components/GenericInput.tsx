// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module generic-input */
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
import {Settings as TinyMCEOptions} from 'tinymce'
import {Editor as RichTextEditor} from '@tinymce/tinymce-react'
import {config as aceConfig} from 'ace-builds'
import Tools, {IgnoreNullAndUndefinedSymbol} from 'clientnode'
import {DomNode, Mapping} from 'clientnode/type'
import React, {
    createRef,
    FocusEvent,
    KeyUpEvent,
    MouseEvent,
    PureComponent,
    RefObject,
    SyntheticEvent
} from 'react'
import CodeEditor from 'react-ace'
import {FormField} from '@rmwc/formfield'
import {IconButton} from '@rmwc/icon-button'
import {Select, SelectProps} from '@rmwc/select'
import {TextField, TextFieldProps} from '@rmwc/textfield'
import {Theme} from '@rmwc/theme'

import '@rmwc/formfield/styles'
import '@rmwc/icon-button/styles'
import '@rmwc/select/styles'
import '@rmwc/textfield/styles'
import '@rmwc/theme/styles'

import '../material-fixes'
import {Model, ModelState, Output, Properties, State} from '../type'
// endregion
aceConfig.set('basePath', '/node_modules/ace-builds/src-noconflict/')

const tinymce = require('tinymce')
const tinymceBasePath:string = '/node_modules/tinymce/'
tinymce.baseURL = tinymceBasePath
export const TINYMCE_DEFAULT_OPTIONS:PlainObject = {
    /* eslint-disable camelcase */
    // region paths
    baseURL: tinymceBasePath,
    scriptPath: `${tinymceBasePath}tinymce.min.js`,
    skin_url: `${tinymceBasePath}skins/ui/oxide`,
    theme_url: `${tinymceBasePath}themes/silver/theme.min.js`,
    // endregion
    allow_conditional_comments: false,
    allow_script_urls: false,
    cache_suffix: `?version=${UTC_BUILD_TIMESTAMP}`,
    convert_fonts_to_spans: true,
    document_base_url: '/',
    element_format: 'xhtml',
    entity_encoding: 'raw',
    fix_list_elements: true,
    hidden_input: false,
    invalid_elements: 'em',
    invalid_styles: 'color font-size line-height',
    keep_styles: false,
    menubar: false,
    /* eslint-disable max-len */
    plugins: 'fullscreen link code hr nonbreaking searchreplace visualblocks',
    /* eslint-enable max-len */
    relative_urls: false,
    remove_script_host: false,
    remove_trailing_brs: true,
    schema: 'html5',
    /* eslint-disable max-len */
    toolbar1: 'cut copy paste | undo redo removeformat | styleselect formatselect fontselect fontsizeselect | searchreplace visualblocks fullscreen code',
    toolbar2: 'alignleft aligncenter alignright alignjustify outdent indent | link hr nonbreaking bullist numlist bold italic underline strikethrough',
    /* eslint-enable max-len */
    trim: true
    /* eslint-enable camelcase */
}
// region prop-types
/*
    NOTE: Using an imported "Props" type (which consists of a "Partial"
    modifier) is not yet working with "babel-plugin-typescript-to-proptypes".
*/
export type Props<Type = any> = {
    // BaseModel
    declaration?:string;
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // default?:Type;
    default?:any;
    description?:string;
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // editor?:'code'|'code(css)'|'code(script)'|'plain'|'text'|'richtext(raw)'|'richtext(simple)'|'richtext('normal')'|'richtext(advanced)';
    editor?:string;
    emptyEqualsNull?:boolean;
    maximum?:number;
    maximumLength?:number;
    minimum?:number;
    minimumLength?:number;
    mutable?:boolean;
    name?:string;
    nullable?:boolean;
    regularExpressionPattern?:string;
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // selection?:Array<number|string>|Mapping<any>;
    selection?:any;
    trim?:boolean;
    type?:'date'|'datetime-local'|'month'|'number'|'range'|'string'|'time'|'week';
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // value?:null|Type;
    value?:any;

    // ModelState
    dirty?:boolean;
    focused?:boolean;
    invalid?:boolean;
    invalidMaximum?:boolean;
    invalidMaximumLength?:boolean;
    invalidMinimum?:boolean;
    invalidMinimumLength?:boolean;
    invalidPattern?:boolean;
    invalidRequired?:boolean;
    pristine?:boolean;
    touched?:boolean;
    untouched?:boolean;
    valid?:boolean;

    // Properties
    align?:'end'|'start';
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    cursor?:any;
    disabled?:boolean;
    fullWidth?:boolean;
    icon?:string;
    hidden?:boolean;
    hideInputText?:string;
    maximumLengthText?:string;
    maximumText?:string;
    minimumLengthText?:string;
    minimumText?:string;
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // model?:Model<Type>;
    model:any;
    onBlur?:(event:SyntheticEvent) => void;
    onChange?:(value:Properties<Type>, event?:SyntheticEvent) => void;
    onChangeValue?:(value:Type, event:SyntheticEvent) => void;
    onChangeShowDeclaration?:(show:boolean, event?:MouseEvent) => void;
    onChangeState?:(state:ModelState, event:SyntheticEvent) => void;
    onClick?:(event:MouseEvent) => void;
    onFocus?:(event:FocusEvent) => void;
    onKeyUp?:(event:KeyUpEvent) => void;
    onTouch?:(event:FocusEvent|MouseEvent) => void;
    outlined?:boolean;
    pattern?:string;
    patternText?:string;
    placeholder?:string;
    required?:boolean;
    requiredText?:string;
    ripple?:boolean;
    rows?:number;
    selectableEditor?:boolean;
    showDeclaration?:boolean;
    showInitialValidationState?:boolean;
    showInputText?:string;
    /*
        NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
        trailingIcon?:string|{
            icon:string;
            onClick:(event:MouseEvent) => void
            tabIndex:number;
        };
    */
    trailingIcon?:any;
}
// endregion
/**
 * Generic input wrapper component which automatically determines a useful
 * input field depending on given model specification.
 *
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:output - Describes external event handler interface.
 * @property static:self - Back-reference to this class.
 *
 * @property model - Current model configuration.
 * @property properties - Current properties.
 * @property state - Current state.
 */
export class GenericInput<Type = any> extends PureComponent<Props<Type>> {
    // region static properties
    static readonly defaultModelState:ModelState = {
        dirty: false,
        focused: false,
        invalid: false,
        invalidMaximum: false,
        invalidMaximumLength: false,
        invalidMinimum: false,
        invalidMinimumLength: false,
        invalidPattern: false,
        invalidRequired: false,
        pristine: true,
        touched: false,
        untouched: true,
        valid: true
    }
    static readonly defaultProps:Partial<Properties<string>> = {
        hideInputText: 'Hide password.',
        hidden: undefined,
        maximumLengthText:
            'Please type less or equal than ${maximumLength} symbols.',
        maximumText: 'Please give a number less or equal than ${maximum}.',
        minimumLengthText:
            'Please type at least or equal ${minimumLength} symbols.',
        minimumText: 'Please give a number at least or equal to ${minimum}.',
        model: {
            declaration: '',
            default: '',
            description: '',
            editor: 'plain',
            emptyEqualsNull: true,
            maximum: Infinity,
            maximumLength: Infinity,
            minimum: 0,
            minimumLength: 0,
            mutable: true,
            name: 'NO_NAME_DEFINED',
            nullable: true,
            placeholder: '',
            regularExpressionPattern: '.*',
            selection: null,
            state: GenericInput.defaultModelState,
            trim: true,
            type: 'string',
            value: undefined,
            writable: true
        },
        patternText:
            'Your string have to match the regular expression: "${pattern}".',
        requiredText: 'Please fill this field.',
        rows: 4,
        selectableEditor: false,
        showDeclaration: undefined,
        showInitialValidationState: false,
        showInputText: 'Show password.'
    }
    static readonly output:Output = {onChange: true}
    static readonly propertiesToReflectAsAttributes:Mapping<boolean> = new Map(
        [
            ['dirty', true],
            ['focused', true],
            ['invalid', true],
            ['invalidMaximum', true],
            ['invalidMaximumLength', true],
            ['invalidMinimum', true],
            ['invalidMinimumLength', true],
            ['invalidPattern', true],
            ['invalidRequired', true],
            ['name', true],
            ['pristine', true],
            ['touched', true],
            ['untouched', true],
            ['valid', true]
        ]
    )
    // endregion
    // region properties
    inputReference:RefObject<HTMLInputElement> = createRef<HTMLInputElement>()
    properties:Properties<Type>
    self:typeof GenericInput = GenericInput
    state:State<Type> = {
        cursor: {
            end: 0,
            start: 0
        },
        hidden: false,
        model: GenericInput.defaultModelState,
        showDeclaration: false,
        value: null
    }
    // endregion
    // region live-cycle
    /**
     * Updates state depending on given properties.
     * @param properties - Properties to derive into state.
     * @param state - Current state to update with respect to given properties.
     * @returns Updated state.
     */
    static getDerivedStateFromProps(
        properties:Partial<Properties<Type>>, state:State<Type>
    ):State<Type> {

        if (properties.value !== undefined)
            state.value = properties.value
        else if (properties.model?.value !== undefined)
            state.value = properties.model.value

        if (properties.showDeclaration !== undefined)
            state.showDeclaration = properties.showDeclaration

        return state
    }
    // endregion
    // region event handler
    onBlur = (event:SyntheticEvent):void => {
        let changed:boolean = false
        if (this.properties.focused) {
            this.properties.focused =
            this.properties.model.state.focused =
                false
            this.onChangeState(this.properties.model.state, event)
            changed = true
        }

        const oldValue:string = this.properties.value
        this.onChangeValue(
            this.transformFinalValue(this.properties, this.properties.value)
        )
        changed = changed || oldValue !== this.properties.value

        if (changed)
            this.onChange(event)
        if (this.properties.onBlur)
            this.properties.onBlur(event)
    }
    onChange = (event?:SyntheticEvent):void => {
        if (this.properties.onChange)
            this.properties.onChange(
                this.getConsolidatedProperties(this.properties), event
            )
    }
    onChangeShowDeclaration = (event?:MouseEvent):void => {
        this.setState(({showDeclaration}):Partial<State<Type>> =>
            {showDeclaration: !showDeclaration}
        )

        if (this.properties.onChangeShowDeclaration)
            this.properties.onChangeShowDeclaration(
                this.properties.showDeclaration, event
            )
        this.onChange(event)
    }
    onChangeState = (state:ModelState, event:SyntheticEvent):void => {
        for (const key of Object.keys(state))
            if (!Object.prototype.hasOwnProperty.call(this.props, key)) {
                this.setState({model: state})
                break
            }
        if (this.properties.onChangeState)
            this.properties.onChangeState(state, event)
    }
    onChangeValue = (eventOrValue:string|SyntheticEvent):void => {
        if (!(this.properties.model.mutable && this.properties.model.writable))
            return

        let event:SyntheticEvent
        let value:string
        if (
            eventOrValue !== null &&
            typeof eventOrValue === 'object' &&
            eventOrValue.target
        ) {
            event = eventOrValue
            value = event.target.value
        } else
            value = eventOrValue

        const oldValue:string = this.properties.value
        this.properties.value = this.transformValue(this.properties, value)

        if (oldValue !== this.properties.value) {
            let stateChanged:boolean = this.determineValidationState(
                this.properties, this.properties.value
            )

            if (this.properties.pristine) {
                this.properties.dirty =
                this.properties.model.state.dirty =
                    true
                this.properties.pristine =
                this.properties.model.state.pristine =
                    false
                stateChanged = true
            }
            if (stateChanged)
                this.onChangeState(this.properties.model.state, event)

            this.setState({value: this.properties.value})
            this.onChange(event)

            if (this.properties.onChangeValue)
                this.properties.onChangeValue(this.properties.value, event)
        }
    }
    onClick = (event:MouseEvent):void => {
        this.saveSelectionState()
        if (this.properties.onClick)
            this.properties.onClick(event)
        this.onTouch(event)
    }
    onFocus = (event:FocusEvent):void => {
        this.saveSelectionState()
        if (this.properties.onFocus)
            this.properties.onFocus(event)
        this.onTouch(event)
    }
    onKeyUp = (event:KeyUpEvent):void => {
        this.saveSelectionState()
        if (this.properties.onKeyUp)
            this.properties.onKeyUp(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event which triggers interaction.
     * @returns Nothing.
     */
    onTouch = (event:FocusEvent|MouseEvent):void => {
        let changeState:boolean = false
        if (!this.properties.focused) {
            changeState =
            this.properties.focused =
            this.properties.model.state.focused =
                true
        }
        if (this.properties.untouched) {
            changeState =
            this.properties.touched =
            this.properties.model.state.touched =
                true
            this.properties.untouched =
            this.properties.model.state.untouched =
                false
        }
        if (changeState) {
            this.onChangeState(this.properties.model.state, event)
            this.onChange(event)
        }
        if (this.properties.onTouch)
            this.properties.onTouch(event)
    }
    // endregion
    // region helper
    /**
     * Derives current validation state from given value.
     * @param configuration - Input configuration.
     * @param value - Value to validate against given configuration.
     * @returns A boolean indicating if validation state has changed.
     */
    determineValidationState(
        configuration:Properties<Type>, value:any
    ):boolean {
        let changed:boolean = false
        let oldValue:boolean = false

        oldValue = configuration.model.state.invalidMaximum
        configuration.model.state.invalidMaximum =
            typeof configuration.model.maximum === 'number' &&
            typeof value === 'number' &&
            !isNaN(value) &&
            configuration.model.maximum < value
        changed =
            changed || oldValue !== configuration.model.state.invalidMaximum

        oldValue = configuration.model.state.invalidMaximumLength
        configuration.model.state.invalidMaximumLength =
            typeof configuration.model.maximumLength === 'number' &&
            typeof value === 'string' &&
            configuration.model.maximumLength < value.length
        changed =
            changed ||
            oldValue !== configuration.model.state.invalidMaximumLength

        oldValue = configuration.model.state.invalidMinimum
        configuration.model.state.invalidMinimum =
            typeof configuration.model.minimum === 'number' &&
            typeof value === 'number' &&
            !isNaN(value) &&
            value < configuration.model.minimum
        changed =
            changed || oldValue !== configuration.model.state.invalidMinimum

        oldValue = configuration.model.state.invalidMinimumLength
        configuration.model.state.invalidMinimumLength =
            typeof configuration.model.minimumLength === 'number' &&
            typeof value === 'string' &&
            value.length < configuration.model.minimumLength
        changed =
            changed ||
            oldValue !== configuration.model.state.invalidMinimumLength

        oldValue = configuration.model.state.invalidPattern
        configuration.model.state.invalidPattern =
            typeof configuration.model.regularExpressionPattern === 'string' &&
            !(new RegExp(configuration.model.regularExpressionPattern))
                .test(value) ||
            typeof configuration.model.regularExpressionPattern === 'object' &&
            !typeof configuration.model.regularExpressionPattern.test(value)
        changed =
            changed || oldValue !== configuration.model.state.invalidPattern

        oldValue = configuration.model.state.invalidRequired
        configuration.model.state.invalidRequired =
            configuration.model.nullable === false && value === null
        changed =
            changed || oldValue !== configuration.model.state.invalidRequired

        if (changed) {
            configuration.model.state.invalid =
                configuration.model.state.invalidMaximum ||
                configuration.model.state.invalidMaximumLength ||
                configuration.model.state.invalidMinimum ||
                configuration.model.state.invalidMinimumLength ||
                configuration.model.state.invalidPattern ||
                configuration.model.state.invalidRequired
            configuration.model.state.valid =
                !configuration.model.state.invalid
            if (
                configuration.showDeclaration &&
                configuration.model.state.invalid
            )
                this.onChangeShowDeclaration()
        }

        return changed
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @returns External properties object.
     */
    getConsolidatedProperties(
        properties:Partial<Properties<Type>>
    ):Properties<Type> {
        properties = this.mapPropertiesToModel(properties)
        const result:Properties<Type> = Tools.extend(
            {}, properties, properties.model, properties.model.state
        )

        delete result.state
        delete result.writable

        result.disabled = !result.mutable
        delete result.mutable

        result.required = !result.nullable
        delete result.nullable

        result.pattern = result.regularExpressionPattern
        delete result.regularExpressionPattern

        return result
    }
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @returns Nothing.
    */
    mapPropertiesToModel(
        properties:Partial<Properties<Type>>
    ):Properties<Type> {
        /*
            NOTE: Default props seems not to respect nested layers to merge so
            we have to manage this for nested model structure.
        */
        const result:Properties<Type> = Tools.extend(
            true,
            {},
            {model: Tools.copy(this.self.defaultProps.model)},
            properties
        )
        // region handle aliases
        if (result.disabled) {
            delete result.disabled
            result.model.mutable = false
        }
        if (result.pattern) {
            result.model.regularExpressionPattern = result.pattern
            delete result.pattern
        }
        if (result.required) {
            delete result.required
            result.model.nullable = false
        }
        // endregion
        // region handle model configuration
        for (const [name, value] of Object.entries(result.model))
            if (Object.prototype.hasOwnProperty.call(result, name))
                result.model[name] = result[name]
        for (const [name, value] of Object.entries(result.model.state))
            if (Object.prototype.hasOwnProperty.call(result, name))
                result.model.state[name] = result[name]
         for (const key of Object.keys(result.model.state))
            if (!Object.prototype.hasOwnProperty.call(this.props, key)) {
                result.model.state = this.state.model
                break
            }

        if (result.model.value === undefined)
            result.model.value = (this.state.value === undefined) ?
                result.model.default :
                this.state.value
        // else -> Controlled component via model's "value" property.
        // endregion
        result.model.value = this.transformValue(result, result.model.value)
        this.determineValidationState(result, result.model.value)

        if (result.showDeclaration === undefined)
            result.showDeclaration = this.state.showDeclaration

        return result
    }
    /**
     * Renders given template string against all properties in current
     * instance.
     * @param template - Template to render.
     * @returns Evaluated template or an empty string if something goes wrong.
     */
    renderMessage(template?:any):string {
        if (typeof template === 'string') {
            const scopeNames:Array<string> = Object.keys(this.properties)
                .filter((name:string):boolean => name !== 'default')
            let render:Function
            try {
                render = new Function(...scopeNames, `return \`${template}\``)
            } catch (error) {
                console.warn(
                    `Given message template "${template}" could not be ` +
                    `parsed: "${Tools.represent(error)}".`
                )
                return ''
            }
            try {
                return render(...scopeNames.map((name:string):any =>
                    this.properties[name])
                )
            } catch (error) {
                console.warn(
                    `Given message template "${template}" failed to evaluate` +
                    ' with given scope variables: "' +
                    `${scopeNames.join('", "')}": "${Tools.represent(error)}".`
                )
            }
        }
        return ''
    }
    /**
     * Saves current selection/cursor state in components state.
     * @returns Nothing.
     */
    saveSelectionState():void {
        if (
            typeof this.inputReference.current?.selectionEnd === 'number' &&
            typeof this.inputReference.current?.selectionStart === 'number'
        )
            this.setState({
                cursor: {
                    end: this.inputReference.current?.selectionEnd,
                    start: this.inputReference.current?.selectionStart
                }
            })
    }
    /**
     * Applies configured value transformations.
     * @param configuration - Input configuration.
     * @param value - Value to transform.
     * @returns Transformed value.
     */
    transformValue(configuration:Properties<Type>, value:any):Type {
        if (configuration.model.emptyEqualsNull && value === '')
            return null
        return value
    }
    /**
     * Applies configured value transformation when editing the input has been
     * ended (element is not focused anymore).
     * @param configuration - Current configuration.
     * @param value - Current value to transform.
     * @returns Transformed value.
     */
    transformFinalValue(configuration:Properties<Type>, value:any):Type {
        if (configuration.model.trim && typeof value === 'string')
            value = value.trim().replace(/ +\n/g, '\\n')
        return this.transformValue(configuration, value)
    }
    // endregion
    // region render
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        console.log('A', this.props.showDeclaration, this.state.showDeclaration)

        const properties:Properties<Type> =
        this.properties =
            this.getConsolidatedProperties(this.props)

        const genericProperties:Partial<HTMLInputElement> = {
            name: properties.name,
            onBlur: this.onBlur,
            onClick: this.onClick,
            onFocus: this.onFocus,
            onKeyUp: this.onKeyUp,
            placeholder: properties.placeholder,
            value: properties.value || ''
        }
        const materialProperties:SelectProps|TextFieldProps = {
            disabled: properties.disabled,
            helpText: {
                persistent: Boolean(properties.declaration),
                children: <>
                    {
                        properties.declaration &&
                        <IconButton
                            icon={{
                                icon: 'more_horiz',
                                onClick: this.onChangeShowDeclaration
                            }}
                        />
                    }
                    {
                        properties.showDeclaration ?
                            properties.declaration :
                            properties.invalid &&
                            (
                                properties.showInitialValidationState ||
                                // TODO need something like "visited"
                                properties.touched
                            ) &&
                            <Theme use="error">
                                {this.renderMessage(
                                    properties.invalidMaximum &&
                                    properties.maximumText ||
                                    properties.invalidMaximumLength &&
                                    properties.maximumLengthText ||
                                    properties.invalidMinimum &&
                                    properties.minimumText ||
                                    properties.invalidMinimumLength &&
                                    properties.minimumLengthText ||
                                    properties.invalidPattern &&
                                    properties.patternText ||
                                    properties.invalidRequired &&
                                    properties.requiredText
                                )}
                            </Theme>
                    }
                </>
            },
            icon: properties.icon,
            invalid:
                properties.showInitialValidationState && properties.invalid,
            label: properties.description || properties.name,
            outlined: properties.outlined,
            required: properties.required
        }

        const tinyMCEOptions:TinyMCEOptions = {}
        if (properties.editor.endsWith('raw)')) {
            tinyMCEOptions.toolbar1 =
                'cut copy paste | undo redo removeformat | code | fullscreen'
            tinyMCEOptions.toolbar2 = false
        } else if (properties.editor.endsWith('simple)')) {
            tinyMCEOptions.toolbar1 =
                'cut copy paste | undo redo removeformat | bold italic ' +
                'underline strikethrough subscript superscript | fullscreen'
            tinyMCEOptions.toolbar2 = false
        } else if (properties.editor.endsWith('normal)'))
            tinyMCEOptions.toolbar1 =
                'cut copy paste | undo redo removeformat | styleselect ' +
                'formatselect | searchreplace visualblocks fullscreen code'

        return (
            //<React.StrictMode>{
                properties.selection ?
                    <Select
                        enhanced
                        onChange={this.onChangeValue}
                        options={properties.selection}
                        {...genericProperties}
                        {...materialProperties}
                    />
                : (
                    properties.type === 'string' &&
                    (
                        properties.editor.startsWith('code') ||
                        properties.editor.startsWith('richtext(')
                    )
                ) ?
                    <>
                        <FormField>
                            <label>
                                {properties.name}

                                {
                                    properties.editor.startsWith('code') ?
                                        <CodeEditor
                                            mode="javascript"
                                            onChange={this.onChangeValue}
                                            theme="github"
                                            setOptions={{
                                                maxLines: properties.rows,
                                                minLines: properties.rows,
                                                readOnly: properties.disabled,
                                                tabSize: 4,
                                                useWorker: false
                                            }}
                                            {...genericProperties}
                                        />
                                    :
                                        <RichTextEditor
                                            disabled={properties.disabled}
                                            init={{
                                                ...TINYMCE_DEFAULT_OPTIONS,
                                                ...tinyMCEOptions
                                            }}
                                            onEditorChange={this.onChangeValue}
                                            textareaName={this.properties.name}
                                            {...genericProperties}
                                        />
                                }
                            </label>
                        </FormField>
                        {materialProperties.helpText.children}
                    </>
                :
                    <TextField
                        align={properties.align}
                        fullwidth={properties.fullWidth}
                        inputRef={this.inputReference}
                        maxLength={properties.maximumLength}
                        minLength={properties.minimumLength}
                        onChange={this.onChangeValue}
                        pattern={properties.regularExpressionPattern}
                        ripple={properties.ripple}
                        rootProps={{onKeyUp: this.onKeyUp}}
                        rows={properties.rows}
                        textarea={
                            properties.type === 'string' &&
                            properties.editor === 'text'
                        }
                        trailingIcon={properties.trailingIcon}
                        {...genericProperties}
                        {...materialProperties}
                    />
            //}</React.StrictMode>
        )
    }
    // endregion
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
