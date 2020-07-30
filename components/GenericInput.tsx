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
import {TextField} from '@rmwc/textfield'
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
    static readonly output:Output = {
        onChangeValue: (value:Type):{value:Type} => ({value})
    }
    static readonly propertiesToReflectAsAttributes:Mapping<boolean> = new Map(
        [
            ['dirty', true],
            ['focused', true],
            ['invalid', true],
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
        if (props.onInitialize)
            props.onInitialize(this.getExternalProperties())
    }
    // endregion
    // region event handler
    onBlur = (event:SyntheticEvent):void => {
        if (this.properties.model.state.focused) {
            const state:ModelState =
                {...this.properties.model.state, focused: false}
            this.setState({model: state})
            if (this.properties.onChangeState)
                this.properties.onChangeState(state, event)
        }
        if (this.properties.onBlur)
            this.properties.onBlur(event)
    }
    onChange = (event:SyntheticEvent):void => {
        let value:any = event.target.value
        if (this.properties.model.trim && typeof value === 'string')
            value = value.trim()

        // TODO validate

        this.setState({value})
        if (this.properties.onChangeValue)
            this.properties.onChangeValue(value, event)

        const state:ModelState = {...this.properties.model.state}
        if (state.pristine) {
            state.pristine = false
            state.dirty = true
            this.setState({model: state})
            if (this.properties.onChangeState)
                this.properties.onChangeState(state, event)
        }
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
        const state:ModelState = {...this.properties.model.state}
        let changeState:boolean = false
        if (!state.focused) {
            changeState = true
            state.focused = true
        }
        if (state.untouched) {
            changeState = true
            state.touched = true
            state.untouched = false
        }
        if (changeState) {
            this.setState({model: state})
            if (this.properties.onChangeState)
                this.properties.onChangeState(state)
        }
        if (this.properties.onTouch)
            this.properties.onTouch(event)
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
            true, {}, {model: this.self.defaultProps.model}, this.props
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
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @returns External properties object.
     */
    getExternalProperties():Properties<Type> {
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
        return (
            //<React.StrictMode>
            <TextField
                align={properties.align}
                disabled={!model.mutable}
                fullwidth={properties.fullWidth}
                helpText={{
                    persistent: Boolean(model.declaration),
                    children: model.valid && model.declaration || null
                }}
                icon={properties.icon}
                invalid={model.state.invalid}
                label={model.description || model.name}
                maxLength={model.maximumLength}
                minLength={model.minimumLength}
                onBlur={this.onBlur}
                onChange={this.onChange}
                onClick={this.onClick}
                onFocus={this.onFocus}
                outlined={properties.outlined}
                pattern={model.regularExpressionPattern}
                placeholder={properties.placeholder}
                required={!model.nullable}
                ripple={properties.ripple}
                rows={properties.rows}
                textarea={model.type === 'string' && model.editor === 'text'}
                trailingIcon={properties.trailingIcon}
                value={model.value || ''}
            />
            //</React.StrictMode>
        )
    }
    // endregion
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
