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
import React, {Component} from 'react'
import {TextField} from '@rmwc/textfield'
import '@rmwc/textfield/styles'

import {Model, ModelState, Output, Properties} from '../type'
// endregion
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
    onChangeValue?:(value:Type) => void;
    onChangeState?:(state:ModelState) => void;
    onClick?:(event:Event) => void;
    onFocus?:(event:Event) => void;
    onInitialize?:(properties:Properties<Type>) => void;
    onTouch?:(event:Event) => void;
    outlined?:boolean;
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
        onChangeState: (state:ModelState):ModelState => state,
        onChangeValue: (value:Type):{value:Type} => ({value}),
        onInitialize: (properties:Properties<Type>):Properties<Type> =>
            properties
    }
    static readonly propertiesToReflectAsAttributes:Mapping<boolean> = new Map(
        [
            ['name', true],
            ['dirty', true],
            ['invalid', true],
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
    constructor(props:Props<Type>) {
        super(props)
        if (props.onInitialize)
            props.onInitialize(this.getExternalProperties())
    }
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
        if (this.properties.disabled) {
            delete this.properties.disabled
            this.properties.model.mutable = false
        }
        if (this.properties.required) {
            delete this.properties.required
            this.properties.model.nullable = false
        }
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

        return result
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event which triggers interaction.
     * @returns Nothing.
     */
    onTouch(event:Event):void {
        const state:ModelState = {...this.properties.model.state}
        if (state.untouched) {
            state.touched = true
            state.untouched = false
            this.setState({model: state})
            if (this.properties.onChangeState)
                this.properties.onChangeState(state)
        }
        if (this.properties.onTouch)
            this.properties.onTouch(event)
    }
    // endregion
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        console.log('do render', this.props.name, this.props.disabled, this.props.mutable, this.props.writable)
        this.consolidateProperties()
        const properties:Properties<Type> = this.properties
        return (
            //<React.StrictMode>
            <TextField
                align={properties.align}
                disabled={!properties.model.mutable}
                fullwidth={properties.fullWidth}
                helpText={properties.model.declaration}
                icon={properties.icon}
                invalid={properties.model.state.invalid}
                label={properties.model.description || properties.model.name}
                maxLength={properties.model.maximumLength}
                minLength={properties.model.minimumLength}
                onChange={(event:Event):void => {
                    let value:any = event.target.value
                    if (properties.model.trim && typeof value === 'string')
                        value = value.trim()

                    // TODO validate

                    this.setState({value})
                    if (properties.onChangeValue)
                        properties.onChangeValue(value)

                    const state:ModelState = {...properties.model.state}
                    if (state.pristine) {
                        state.pristine = false
                        state.dirty = true
                        this.setState({model: state})
                        if (properties.onChangeState)
                            properties.onChangeState(state)
                    }
                }}
                onClick={(event:Event):void => {
                    if (properties.onClick)
                        properties.onClick(event)
                    this.onTouch(event)
                }}
                onFocus={(event:Event):void => {
                    if (properties.onFocus)
                        properties.onFocus(event)
                    this.onTouch(event)
                }}
                outlined={properties.outlined}
                pattern={properties.model.regularExpressionPattern}
                placeholder={properties.placeholder}
                required={!properties.model.nullable}
                ripple={properties.ripple}
                rows={properties.rows}
                textarea={
                    properties.model.type === 'string' &&
                    properties.model.editor === 'text'
                }
                trailingIcon={properties.trailingIcon}
                value={properties.model.value || ''}
            />
            //</React.StrictMode>
        )
    }
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
