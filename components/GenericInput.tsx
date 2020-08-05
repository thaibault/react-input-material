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
import {IconButton} from '@rmwc/icon-button'
import {Select} from '@rmwc/select'
import {TextField} from '@rmwc/textfield'

import '@rmwc/icon-button/styles'
import '@rmwc/select/styles'
import '@rmwc/textfield/styles'

import '../material-fixes'
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
    // NOTE: Not yet working with "babel-plugin-typescript-to-proptypes".
    // editor?:'code'|'code(css)'|'code(script)'|'plain'|'text'|'text(simple)'|'text(advanced)';
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
        rows: 4,
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
    // region event handler
    onBlur = (event:SyntheticEvent):void => {
        if (this.properties.focused) {
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
                this.getConsolidatedProperties(this.properties), event
            )
    }
    onChangeState(state:ModelState, event:SyntheticEvent):void {
        this.setState({model: state})
        if (this.properties.onChangeState)
            this.properties.onChangeState(state, event)
    }
    onChangeValue = (event:SyntheticEvent):void => {
        this.properties.value = this.transformValue(
            this.properties, event.target.value
        )
        let stateChanged:boolean = this.determineValidationState(
            this.properties, this.properties.value
        )

        this.setState({value: this.properties.value})
        if (this.properties.onChangeValue)
            this.properties.onChangeValue(this.properties.value, event)

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
    /**
     * Triggers on start interacting with the input.
     * @param event - Event which triggers interaction.
     * @returns Nothing.
     */
    onTouch(event:FocusEvent|MouseEvent):void {
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
    mapPropertiesToModel(
        properties:Partial<Properties<Type>>
    ):Properties<Type> {
        /*
            NOTE: Default props seems not to respect nested layers to merge so
            we have to manage this for nested model structure.
        */
        const result:Properties<Type> = Tools.extend(
            true, {}, {model: this.self.defaultProps.model}, properties
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
        result.model.state = this.state.model
        if (
            !Object.prototype.hasOwnProperty.call(result.model, 'value') ||
            result.model.value === undefined
        )
            result.model.value = this.state.value
        // else -> Controlled component via model's "value" property.
        // endregion
        result.model.value = this.transformValue(result, result.model.value)
        this.determineValidationState(result, result.model.value)

        return result
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
        }

        return changed
    }
    /**
     * Applies configured value transformations.
     * @param configuration - Input configuration.
     * @param value - Value to transform.
     * @returns Transformed value.
     */
    transformValue(configuration:Properties<Type>, value:any):any {
        if (configuration.model.trim && typeof value === 'string')
            value = value.trim()
        if (configuration.model.emptyEqualsNull && value === '')
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
        const properties:Properties<Type> =
        this.properties =
            this.getConsolidatedProperties(this.props)

        const materialProperties = {
            disabled: properties.disabled,
            helpText: {
                persistent: Boolean(
                    properties.showDeclaration && properties.declaration
                ),
                children: (
                    properties.valid &&
                    properties.showDeclaration &&
                    properties.declaration
                ) ?
                    // TODO
                    <>
                        <IconButton
                            icon={{
                                icon: 'info_outline',
                                onClick: () =>
                                    console.log('A', properties.showDeclaration)
                            }}
                        />
                        {properties.declaration}
                    </> :
                    null
            },
            icon: properties.icon,
            invalid: properties.showValidationState && properties.invalid,
            label: properties.description || properties.name,
            onBlur: this.onBlur,
            onChange: this.onChangeValue,
            onClick: this.onClick,
            onFocus: this.onFocus,
            outlined: properties.outlined,
            placeholder: properties.placeholder,
            required: properties.required,
            value: properties.value || ''
        }
        return (
            //<React.StrictMode>{
                properties.selection ?
                    <Select
                        enhanced
                        options={properties.selection}
                        {...materialProperties}
                    /> :
                    <TextField
                        align={properties.align}
                        fullwidth={properties.fullWidth}
                        maxLength={properties.maximumLength}
                        minLength={properties.minimumLength}
                        pattern={properties.regularExpressionPattern}
                        ripple={properties.ripple}
                        rows={properties.rows}
                        textarea={
                            properties.type === 'string' &&
                            properties.editor === 'text'
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
