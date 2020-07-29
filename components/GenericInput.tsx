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

import {Model, ModelState, Properties} from '../type'
// endregion
/*
    NOTE: Using an imported "Props" type (which consists of a "Partial"
    modifier) is not yet working with "babel-plugin-typescript-to-proptypes".
*/
export type Props<Type = any> = {
    // BaseModel
    declaration?:string;
    default?:Type;
    description?:string;
    editor?:'code'|'code(css)'|'code(script)'|'plain'|'text'|'text(simple)'|'text(advanced)';
    emtyEqualsNull?:boolean;
    maximum?:number;
    maximumLength?:number;
    minimum?:number;
    minimumLength?:number;
    mutable?:boolean;
    name?:string;
    nullable?:boolean;
    regularExpressionPattern?:string;
    selection?:Array<number|string>|Mapping<any>;
    state?:ModelState;
    trim?:boolean;
    type?:'date'|'datetime-local'|'month'|'number'|'range'|'string'|'time'|'week';
    value?:null|Type;

    // Properties
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
    outlined?:boolean;
    patternText?:string;
    placeholder?:string;
    requiredText?:string;
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
 * @property static:attributeEvaluationTypes - Defines external property
 * interface (e.g. as web-component).
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:self - Back-reference to this class.
 *
 * @property model - Current model configuration.
 * @property properties - Current properties.
 * @property state - Current state.
 */
export class GenericInput<Type = any> extends Component<Props<Type>> {
    // region static properties
    static readonly attributeEvaluationTypes = {
        any: ['default', 'model', 'selection', 'value'],
        boolean: [
            'dirty',
            'disabled',
            'emptyEqualsNull',
            'fullWidth',
            'hidden',
            'invalid',
            'outlined',
            'pristine',
            'required',
            'selectableEditor',
            'showDeclaration',
            'showValidationState',
            'touched',
            'trim',
            'untouched',
            'valid'
        ],
        number: [
            'maximumLength', 'maximum', 'minimumLength', 'minimum', 'rows'
        ],
        output: {
            onChangeState: (state:ModelState):ModelState => state,
            onChangeValue: (value:Type):{value:Type} => ({value}),
        },
        string: [
            'declaration',
            'description',
            'editor',
            'hideInputText',
            'icon',
            'maximumLengthText',
            'maximumText',
            'minimumLengthText',
            'minimumText',
            'name',
            'pattern',
            'patternText',
            'placeholder',
            'requiredText',
            'showInputText',
            'trailingIcon',
            'type'
        ]
    }
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
            editor: 'auto',
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
    // region helper
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @returns Nothing.
    */
    consolidateProperties():void {
        this.properties = Tools.copy(this.props)
        if (this.props.disabled) {
            delete this.properties.disabled
            this.properties.mutable = !this.props.disabled
        }
        if (this.props.required) {
            delete this.properties.required
            this.properties.nullable = !this.props.required
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
    // endregion
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        this.consolidateProperties()
        const properties:Properties = this.properties
        return (
            //<React.StrictMode>
            <TextField
                disabled={!properties.model.mutable}
                fullwidth={properties.fullWidth}
                helpText={properties.model.declaration}
                icon={properties.icon}
                label={properties.model.description || properties.model.name}
                maxLength={properties.model.maximumLength}
                minLength={properties.model.minimumLength}
                onChange={(event:Event):void => {
                    let value:any = event.target.value
                    if (properties.model.trim && typeof value === 'string')
                        value = value.trim()
                    /*
                        TODO validate ...
                        const state:ModelState = {invalid: , valid: , ...modelState}
                        setState({model: state})
                        properties.onChangeState && properties.onChangeState(state)
                    */
                    this.setState({value})
                    properties.onChangeValue && properties.onChangeValue(value)
                }}
                outlined={properties.outlined}
                pattern={properties.model.regularExpressionPattern}
                placeholder={properties.placeholder}
                required={!properties.model.nullable}
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
