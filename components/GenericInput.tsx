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
import Tools, {IgnoreNullAndUndefinedSymbol} from 'clientnode'
import {Mapping} from 'clientnode/type'
import React, {Component, FocusEvent, MouseEvent, SyntheticEvent} from 'react'
import {Select} from '@rmwc/select'
import {TextField} from '@rmwc/textfield'

import '@rmwc/select/styles'
import '@rmwc/textfield/styles'

import {Model, ModelState, Output, Properties} from '../type'
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
    editor?:'code'|'code(css)'|'code(script)'|'plain'|'text'|'text(simple)'|'text(advanced)';
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
    onChangeState?:(state:ModelState, event:SyntheticEvent) => void;
    onClick?:(event:MouseEvent) => void;
    onFocus?:(event:FocusEvent) => void;
    onInitialize?:(properties:Properties<Type>) => void;
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
    showInputText?:string;
    showValidationState?:boolean;
    trailingIcon?:string;
}
// endregion
/**
 * Generic input wrapper component which automatically determines a useful
 * input field depending on given model specification.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:output - Describes external event handler interface.
 * @property static:self - Back-reference to this class.
 *
 * @property model - Current model configuration.
 * @property properties - Current properties.
 * @property state - Current state.
 */
export class GenericInput<Type = any> extends Component<Props<Type>> {
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
        hidden: false,
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
            'Your string have to match the regular expression: "' +
            '${regularExpressionPattern}".',
        requiredText: 'Please fill this field.',
        rows: 8,
        selectableEditor: false,
        showDeclaration: false,
        showInputText: 'Show password.',
        showValidationState: false
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
    properties:Properties<Type>
    self:typeof GenericInput = GenericInput
    state:{
        model:ModelState;
        value:Type;
    } = {
        model: GenericInput.defaultModelState,
        value: null
    }
    // endregion
    // region live-cycle methods
    constructor(props:Props<Type>) {
        super(props)
        this.onInitialize()
    }
    // endregion
    // region event handler
    onBlur = (event:SyntheticEvent):void => {
        if (this.properties.model.state.focused) {
            this.properties.focused =
            this.properties.model.state.focused =
                false
            this.onChangeState(this.properties.model.state, event)
        }
        if (this.properties.onBlur)
            this.properties.onBlur(event)
        this.onChange(event)
    }
    onChange(event?:SyntheticEvent):void {
        if (this.properties.onChange)
            this.properties.onChange(
                this.getExternalPropertiesRepresentation(), event
            )
    }
    onChangeState(state:ModelState, event:SyntheticEvent):void {
        this.setState({model: state})
        if (this.properties.onChangeState)
            this.properties.onChangeState(state, event)
    }
    onChangeValue = (event:SyntheticEvent):void => {
        this.properties.value = this.transformValue(event.target.value)
        let stateChanged:boolean =
            this.determineValidationState(this.properties.value)

        this.setState({value: this.properties.value})
        if (this.properties.onChangeValue)
            this.properties.onChangeValue(this.properties.value, event)

        if (this.properties.model.state.pristine) {
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
        this.onChange(event)
    }
    onClick = (event:MouseEvent):void => {
        if (this.properties.onClick)
            this.properties.onClick(event)
        this.onTouch(event)
    }
    onFocus = (event:FocusEvent):void => {
        if (this.properties.onFocus)
            this.properties.onFocus(event)
        this.onTouch(event)
    }
    onInitialize():void {
        this.properties = this.props
        if (this.properties.onInitialize)
            this.properties.onInitialize(
                this.getExternalPropertiesRepresentation()
            )
        this.onChange()
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event which triggers interaction.
     * @returns Nothing.
     */
    onTouch(event:FocusEvent|MouseEvent):void {
        let changeState:boolean = false
        if (!this.properties.model.state.focused) {
            changeState =
            this.properties.focused =
            this.properties.model.state.focused =
                true
        }
        if (this.properties.model.state.untouched) {
            changeState =
            this.properties.touched =
            this.properties.model.state.touched =
                true
            this.properties.untouched =
            this.properties.model.state.untouched =
                false
        }
        if (changeState)
            this.onChangeState(this.properties.model.state, event)
        if (this.properties.onTouch)
            this.properties.onTouch(event)
        this.onChange(event)
    }
    // endregion
    // region helper
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @returns Nothing.
    */
    consolidateProperties():void {
        /*
            NOTE: Default props seems not to respect nested layers to merge so
            we have to manage this for nested model structure.
        */
        this.properties = Tools.extend(
            true,
            {},
            {model: this.self.defaultProps.model},
            this.properties || this.props
        )
        // region handle aliases
        if (this.properties.disabled) {
            delete this.properties.disabled
            this.properties.model.mutable = false
        }
        if (this.properties.pattern) {
            this.properties.model.regularExpressionPattern =
                this.properties.pattern
            delete this.properties.pattern
        }
        if (this.properties.required) {
            delete this.properties.required
            this.properties.model.nullable = false
        }
        // endregion
        // region handle model configuration
        for (const [name, value] of Object.entries(this.properties.model))
            if (Object.prototype.hasOwnProperty.call(this.properties, name))
                this.properties.model[name] = this.properties[name]
        this.properties.model.state = this.state.model
        if (Object.prototype.hasOwnProperty.call(this.properties, 'value'))
            // Controlled component via "value" property.
            this.properties.model.value = this.properties.value
        else if (
            !Object.prototype.hasOwnProperty.call(
                this.properties.model, 'value'
            ) ||
            this.properties.model.value === undefined
        )
            this.properties.model.value = this.state.value
        // else -> Controlled component via models's "value" property.
        // endregion
        this.properties.model.value =
            this.transformValue(this.properties.model.value)
        this.determineValidationState(this.properties.model.value)
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @returns External properties object.
     */
    getExternalPropertiesRepresentation():Properties<Type> {
        this.consolidateProperties()
        const result:Properties<Type> = Tools.extend(
            {},
            this.properties,
            this.properties.model,
            this.properties.model.state
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
     * Derives current validation state from given value.
     * @param value - Value to validate against current configuration.
     * @returns A boolean indicating if validation state has changed.
     */
    determineValidationState(value:any):boolean {
        let changed:boolean = false
        let oldValue:boolean = false

        oldValue = this.properties.model.state.invalidMaximum
        this.properties.model.state.invalidMaximum =
            typeof this.properties.model.maximum === 'number' &&
            typeof value === 'number' &&
            !isNaN(value) &&
            this.properties.model.maximum < value
        changed =
            changed || oldValue !== this.properties.model.state.invalidMaximum

        oldValue = this.properties.model.state.invalidMaximumLength
        this.properties.model.state.invalidMaximumLength =
            typeof this.properties.model.maximumLength === 'number' &&
            typeof value === 'string' &&
            this.properties.model.maximumLength < value.length
        changed =
            changed ||
            oldValue !== this.properties.model.state.invalidMaximumLength

        oldValue = this.properties.model.state.invalidMinimum
        this.properties.model.state.invalidMinimum =
            typeof this.properties.model.minimum === 'number' &&
            typeof value === 'number' &&
            !isNaN(value) &&
            value < this.properties.model.minimum
        changed =
            changed || oldValue !== this.properties.model.state.invalidMinimum

        oldValue = this.properties.model.state.invalidMinimumLength
        this.properties.model.state.invalidMinimumLength =
            typeof this.properties.model.minimumLength === 'number' &&
            typeof value === 'string' &&
            value.length < this.properties.model.minimumLength
        changed =
            changed ||
            oldValue !== this.properties.model.state.invalidMinimumLength

        oldValue = this.properties.model.state.invalidPattern
        this.properties.model.state.invalidPattern =
            typeof this.properties.model.regularExpressionPattern ===
                'string' &&
            !(new RegExp(this.properties.model.regularExpressionPattern))
                .test(value) ||
            typeof this.properties.model.regularExpressionPattern ===
                'object' &&
            !typeof this.properties.model.regularExpressionPattern.test(value)
        changed =
            changed || oldValue !== this.properties.model.state.invalidPattern

        oldValue = this.properties.model.state.invalidRequired
        this.properties.model.state.invalidRequired =
            this.properties.model.nullable === false && value === null
        changed =
            changed || oldValue !== this.properties.model.state.invalidRequired

        if (changed) {
            this.properties.model.state.invalid =
                this.properties.model.state.invalidMaximum ||
                this.properties.model.state.invalidMaximumLength ||
                this.properties.model.state.invalidMinimum ||
                this.properties.model.state.invalidMinimumLength ||
                this.properties.model.state.invalidPattern ||
                this.properties.model.state.invalidRequired
            this.properties.model.state.valid =
                !this.properties.model.state.invalid
        }
        return changed
    }
    /**
     * Applies configured value transformations.
     * @param value - Value to transform.
     * @returns Transformed value.
     */
    transformValue(value:any):any {
        if (this.properties.model.trim && typeof value === 'string')
            value = value.trim()
        if (this.properties.model.emptyEqualsNull && value === '')
            return null
        return value
    }
    // endregion
    // region render
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        this.consolidateProperties()

        const properties:Properties<Type> = this.properties
        const model:Model<Type> = properties.model

        const materialProperties = {
            disabled: !model.mutable,
            helpText: {
                persistent: Boolean(
                    properties.showDeclaration && model.declaration
                ),
                children:
                    model.state.valid &&
                    properties.showDeclaration &&
                    model.declaration
            },
            icon: properties.icon,
            invalid: model.state.invalid,
            label: model.description || model.name,
            onBlur: this.onBlur,
            onChange: this.onChangeValue,
            onClick: this.onClick,
            onFocus: this.onFocus,
            outlined: properties.outlined,
            placeholder: properties.placeholder,
            required: !model.nullable,
            value: model.value || ''
        }
        return (
            //<React.StrictMode>{
                model.selection ?
                    <Select
                        enhanced
                        options={model.selection}
                        {...materialProperties}
                    /> :
                    <TextField
                        align={properties.align}
                        fullwidth={properties.fullWidth}
                        maxLength={model.maximumLength}
                        minLength={model.minimumLength}
                        pattern={model.regularExpressionPattern}
                        ripple={properties.ripple}
                        rows={properties.rows}
                        textarea={
                            model.type === 'string' && model.editor === 'text'
                        }
                        trailingIcon={properties.trailingIcon}
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
