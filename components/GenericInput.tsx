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
import {ReactAce as CodeEditorType} from 'react-ace'
import {Settings as TinyMCEOptions} from 'tinymce'
import Tools, {IgnoreNullAndUndefinedSymbol} from 'clientnode'
import {DomNode, Mapping} from 'clientnode/type'
import React, {
    Component,
    createRef,
    FocusEvent,
    KeyUpEvent,
    lazy,
    MouseEvent,
    PureComponent,
    RefObject,
    Suspense,
    SyntheticEvent
} from 'react'
import {FormField} from '@rmwc/formfield'
import {Icon} from '@rmwc/icon'
import {IconButton} from '@rmwc/icon-button'
import {Select, SelectProps} from '@rmwc/select'
import {TextField, TextFieldProps} from '@rmwc/textfield'
import {Theme} from '@rmwc/theme'
import {Tooltip, TooltipProps} from '@rmwc/tooltip'
import {IconOptions} from '@rmwc/types'
import {Editor as RichTextEditor} from '@tinymce/tinymce-react'

import '@rmwc/formfield/styles'
import '@rmwc/icon-button/styles'
import '@rmwc/select/styles'
import '@rmwc/textfield/styles'
import '@rmwc/theme/styles'
import '@rmwc/tooltip/styles'

import '../material-fixes'
import {Model, ModelState, Output, Properties, State} from '../type'
// endregion
// region code-editor
const CodeEditor = lazy(async ():Promise<CodeEditorType> => {
    const {config} = await import('ace-builds')
    config.set('basePath', '/node_modules/ace-builds/src-noconflict/')
    return await import('react-ace')
})
// endregion
// region rich-text-editor
const tinymceBasePath:string = '/node_modules/tinymce/'
const tinymceScriptPath:string = `${tinymceBasePath}tinymce.min.js`
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
// endregion
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
    editorIsActive?:boolean;
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
    visited?:boolean;

    // Properties
    align?:'end'|'start';
    /*
        NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
        cursor?:{
            end:number;
            start:number;
        };
    */
    cursor?:any;
    disabled?:boolean;
    fullWidth?:boolean;
    /*
        NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
        icon?:string|(IconOptions & {tooltip?:string|TooltipProps});
    */
    icon?:any;
    hidden?:boolean;
    maximumLengthText?:string;
    maximumText?:string;
    minimumLengthText?:string;
    minimumText?:string;
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // model?:Model<Type>;
    model:any;
    onBlur?:(event:SyntheticEvent) => void;
    onChange?:(value:Properties<Type>, event?:SyntheticEvent) => void;
    onChangeEditorIsActive?:(isActive:boolean, event?:MouseEvent) => void;
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
    /*
        NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
        tooltip?:string|TooltipProps;
        trailingIcon?:string|(IconOptions & {tooltip?:string|TooltipProps});
    */
    tooltip?:any;
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
 * @property static:propertiesToReflectAsAttributes - List of properties to
 * potentially reflect as attributes (e.g. in a wrapped web-component).
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 *
 * @property static:_name - Non minifyable component name.
 *
 * @property inputReference - Current wrapped input reference node.
 * @property properties - Current properties.
 * @property self - Back-reference to this class.
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
        valid: true,
        visited: false
    }
    static readonly defaultProps:Partial<Properties<string>> = {
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
            writable: true
        },
        patternText:
            'Your string have to match the regular expression: "${pattern}".',
        requiredText: 'Please fill this field.',
        rows: 4,
        selectableEditor: false,
        showDeclaration: undefined,
        showInitialValidationState: false
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
            ['valid', true],
            ['visited', true]
        ]
    )
    static readonly strict:boolean = false

    static readonly _name:string = 'GenericInput'
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
        editorIsActive: false,
        hidden: undefined,
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

        if (properties.cursor !== undefined)
            state.cursor = properties.cursor

        if (properties.editorIsActive !== undefined)
            state.editorIsActive = properties.editorIsActive

        if (properties.hidden !== undefined)
            state.hidden = properties.hidden
        if (state.hidden === undefined)
            state.hidden = properties.name?.startsWith('password')

        if (properties.showDeclaration !== undefined)
            state.showDeclaration = properties.showDeclaration

        if (properties.value !== undefined)
            state.value = properties.value
        else if (properties.model?.value !== undefined)
            state.value = properties.model.value

        return state
    }
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Nothing.
     */
    onBlur = (event:SyntheticEvent):void => {
        let changed:boolean = false
        if (this.properties.focused) {
            this.properties.focused =
            this.properties.model.state.focused =
                false
            this.onChangeState(this.properties.model.state, event)
            changed = true
        }

        if (!this.properties.visited) {
            this.properties.visited =
            this.properties.model.state.visited =
                true
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
    /**
     * Triggered on any change events.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    onChange = (event?:SyntheticEvent):void => {
        if (this.properties.onChange)
            this.properties.onChange(
                this.getConsolidatedProperties(this.properties), event
            )
    }
    /**
     * Triggered when editor is active indicator should be changed.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    onChangeEditorIsActive = (event?:MouseEvent):void => {
        this.properties.editorIsActive = !this.properties.editorIsActive
        this.setState(({editorIsActive}):Partial<State<Type>> => (
            {editorIsActive: !editorIsActive}
        ))

        if (this.properties.onChangeEditorIsActive)
            this.properties.onChangeEditorIsActive(
                this.properties.editorIsActive, event
            )
        this.onChange(event)
    }
    /**
     * Triggered when show declaration indicator should be changed.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    onChangeShowDeclaration = (event?:MouseEvent):void => {
        this.properties.showDeclaration = !this.properties.showDeclaration
        this.setState(({showDeclaration}):Partial<State<Type>> => (
            {showDeclaration: !showDeclaration}
        ))

        if (this.properties.onChangeShowDeclaration)
            this.properties.onChangeShowDeclaration(
                this.properties.showDeclaration, event
            )
        this.onChange(event)
    }
    /**
     * Triggered when a value state changes like validation or focusing.
     * @param state - Current value state.
     * @param event - Triggering event object.
     * @returns Nothing.
     */
    onChangeState = (state:ModelState, event:SyntheticEvent):void => {
        for (const key of Object.keys(state))
            if (!Object.prototype.hasOwnProperty.call(this.props, key)) {
                this.setState({model: state})
                break
            }
        if (this.properties.onChangeState)
            this.properties.onChangeState(state, event)
    }
    /**
     * Triggered when ever the value changes.
     * @param eventOrValue - Event object or new value.
     * @returns Nothing.
     */
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
        this.properties.value =
        this.properties.model.value =
            this.transformValue(this.properties, value)

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
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    onClick = (event:MouseEvent):void => {
        this.saveSelectionState()
        if (this.properties.onClick)
            this.properties.onClick(event)
        this.onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     * @returns Nothing.
     */
    onFocus = (event:FocusEvent):void => {
        this.saveSelectionState()
        if (this.properties.onFocus)
            this.properties.onFocus(event)
        this.onTouch(event)
    }
    /**
     * Triggered on key up events.
     * @param event - Key up event object.
     * @returns Nothing.
     */
    onKeyUp = (event:KeyUpEvent):void => {
        this.saveSelectionState()
        if (this.properties.onKeyUp)
            this.properties.onKeyUp(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
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
     * Applies icon preset configurations.
     * @param options - Icon options to extend of known preset identified.
     * @return Given potential extended icon configuration.
     */
    applyIconPreset(options?:Properties['icon']):Properties['icon']|void {
        if (options === 'clear_preset')
            return {
                icon: 'clear',
                onClick: (event:MouseEvent):void => {
                    event.preventDefault()
                    event.stopPropagation()
                    this.onChangeValue(this.transformFinalValue(
                        this.properties, this.properties.default
                    ))
                },
                tooltip: 'Clear input'
            }
        if (options === 'password_preset')
            return {
                icon: 'lock' + (this.properties.hidden ? '_open' : ''),
                onClick: (event:MouseEvent):void => {
                    event.preventDefault()
                    event.stopPropagation()
                    this.setState(({hidden}):void => ({hidden: !hidden}))
                    this.onChange(event)
                },
                tooltip:
                    (this.properties.hidden ? 'Show' : 'Hide') + ' password'
            }
        return options
    }
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

            // Hide declaration to show invalidation state.
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
        properties = this.mapPropertiesAndStateToModel(properties)
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

        // NOTE: If an editor is specified it should be possible to display.
        if (!(result.editor === 'plain' || result.selectableEditor))
            result.editorIsActive = true

        return result
    }
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @returns Nothing.
    */
    mapPropertiesAndStateToModel(
        properties:Partial<Properties<Type>>
    ):Properties<Type> {
        /*
            NOTE: Default props seems not to respect nested layers to merge so
            we have to manage this for nested model structure.
        */
        const result:Properties<Type> = Tools.extend(
            true,
            {
                model: {
                    ...this.self.defaultProps.model,
                    state: {...this.self.defaultProps.model.state}
                }
            },
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

        /*
            NOTE: Model states are not retrieved from state but derived from
            specification and current value.
        */

        if (result.model.value === undefined)
            result.model.value = (this.state.value === undefined) ?
                result.model.default :
                this.state.value
        // else -> Controlled component via model's "value" property.
        // endregion
        // region handle state configuration
        if (result.cursor === undefined)
            result.cursor = this.state.cursor

        if (result.editorIsActive === undefined)
            result.editorIsActive = this.state.editorIsActive

        if (result.hidden === undefined)
            result.hidden = this.state.hidden

        if (result.showDeclaration === undefined)
            result.showDeclaration = this.state.showDeclaration
        // endregion
        result.model.value = this.transformValue(result, result.model.value)
        this.determineValidationState(result, result.model.value)

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
    /**
     * Wraps given component with react strict mode component.
     * @param component - Component or string to wrap.
     * @returns Wrapped component.
     */
    wrapStrict(content:Component|string):Component {
        return this.self.strict ?
            <React.StrictMode>{content}</React.StrictMode> :
            <>{content}</>
    }
    /**
     * Wraps given component with a tooltip component with given tooltip
     * configuration.
     * @param options - Tooltip options.
     * @param content - Component or string to wrap.
     * @returns Wrapped given content.
     */
    wrapTooltip(
        options?:Properties['tooltip'], content:Component|string
    ):Component {
        if (typeof options === 'string')
            return <Tooltip content={options}>{content}</Tooltip>
        else if (options !== null && typeof options === 'object')
            return <Tooltip {...options}>{content}</Tooltip>
        return <>{content}</>
    }
    /**
     * If given icon options has an additional tooltip configuration integrate
     * a wrapping tooltip component into given configuration and remove initial
     * tooltip configuration.
     * @param options - Icon configuration potential extended a tooltip
     * configuration.
     * @returns Resolved icon configuration.
     */
    wrapIconWithTooltip(options?:Properties['icon']):IconOptions|void {
        if (options?.tooltip) {
            const tooltip:Properties['tooltip'] = options.tooltip
            options = {...options}
            delete options.tooltip
            const nestedOptions:IconOptions = {...options}
            options.strategy = 'component'
            options.icon = this.wrapTooltip(tooltip, <Icon icon={nestedOptions} />)
        }
        return options
    }
    // endregion
    // region render
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        // region consolidate properties
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
                        this.properties.selectableEditor &&
                        this.properties.type === 'string' &&
                        this.properties.editor !== 'plain' &&
                        <IconButton
                            icon={{
                                icon: this.properties.editorIsActive ?
                                    'subject' :
                                    this.properties.editor.startsWith('code') ?
                                        'code' :
                                        'text_format',
                                onClick: this.onChangeEditorIsActive
                            }}
                        />
                    }
                    {
                        properties.declaration &&
                        <IconButton
                            icon={{
                                icon:
                                    'more_' +
                                    (properties.showDeclaration ?
                                        'vert' :
                                        'horiz'
                                    ),
                                onClick: this.onChangeShowDeclaration
                            }}
                        />
                    }
                    {
                        properties.showDeclaration ?
                            properties.declaration
                        :
                            properties.invalid &&
                            (
                                properties.showInitialValidationState ||
                                /*
                                    Material inputs show their validation state
                                    at least after a blur event so we
                                    synchronize error message appearances.
                                */
                                properties.visited
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
            icon: this.wrapIconWithTooltip(
                this.applyIconPreset(properties.icon)
            ),
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
        // endregion

        return this.wrapStrict(this.wrapTooltip(
            properties.tooltip,
            (
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
                    properties.editorIsActive &&
                    (
                        properties.editor.startsWith('code') ||
                        properties.editor.startsWith('richtext(')
                    )
                ) ?
                    <>
                        <FormField className="mdc-text-field mdc-text-field--textarea">
                            <label>
                                <span
                                    className="generic-input__editor__label mdc-floating-label mdc-floating-label--float-above"
                                >
                                    <Theme use={
                                        properties.invalid &&
                                        (
                                            properties.showInitialValidationState ||
                                            properties.visited
                                        ) ? 'error' : null
                                    }>
                                        {properties.description || properties.name}{properties.required ? '*' : ''}
                                    </Theme>
                                </span>
                                {
                                    properties.editor.startsWith('code') ?
                                        <Suspense fallback="loading...">
                                            <CodeEditor
                                                mode="javascript"
                                                onChange={this.onChangeValue}
                                                setOptions={{
                                                    maxLines: properties.rows,
                                                    minLines: properties.rows,
                                                    readOnly: properties.disabled,
                                                    tabSize: 4,
                                                    useWorker: false
                                                }}
                                                theme="github"
                                                {...genericProperties}
                                            />
                                        </Suspense>
                                    :
                                        <RichTextEditor
                                            disabled={properties.disabled}
                                            init={{
                                                ...TINYMCE_DEFAULT_OPTIONS,
                                                ...tinyMCEOptions
                                            }}
                                            onEditorChange={this.onChangeValue}
                                            textareaName={this.properties.name}
                                            tinymceScriptSrc={tinymceScriptPath}
                                            {...genericProperties}
                                        />
                                }
                            </label>
                        </FormField>
                        <div className="mdc-text-field-helper-line">
                            <p
                                className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
                            >
                                {materialProperties.helpText.children}
                            </p>
                        </div>
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
                            properties.editor !== 'plain'
                        }
                        trailingIcon={this.wrapIconWithTooltip(
                            this.applyIconPreset(properties.trailingIcon)
                        )}
                        type={(
                            properties.type === 'string' &&
                            properties.hidden
                        ) ?
                            'password' :
                            'text'
                        }
                        {...genericProperties}
                        {...materialProperties}
                    />
            )
        ))
    }
    /**/
    // endregion
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
