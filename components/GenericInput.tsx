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

import {Model, ModelState, Properties} from '../types'
// endregion
/**
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultModel - Initial model properties.
 * @property static:defaultProps - Initial property configuration.
 * @property static:properties - Defines external property interface (e.g. as
 * web-component).
 * @property static:propertiesNameMapping - Mapping of alternate property
 * names.
 * @property static:self - Back-reference to this class.
 *
 * @property model - Current model configuration.
 * @property properties - Current properties.
 * @property state - Current state.
 */
export class GenericInput<Type = any> extends Component<Properties<Type>> {
    // region static properties
    static readonly defaultModelState:ModelState = {
        dirty: false,
        invalid: false,
        pristine: true,
        touched: false,
        untouched: true,
        value: true
    }
    static readonly defaultModel:Model<string>  = {
        declaration: '',
        defaultValue: '',
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
        onValueChange: (value:string):void => {},
        onStateChange: (state:ModelState):void => {},
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
    static readonly properties = {
        any: ['default', 'model', 'selection', 'value'],
        boolean: [
            'disabled',
            'emptyEqualsNull',
            'fullWidth',
            'hidden',
            'outlined',
            'required',
            'trim',
            'selectableEditor',
            'showDeclaration',
            'showValidationState'
        ],
        number: [
            'maximumLength', 'maximum', 'minimumLength', 'minimum', 'rows'
        ],
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
    static readonly propertiesNameMapping:Mapping = Object.entries({
        defaultValue: 'default'
    })
    // endregion
    // region properties
    model:Model<Type>
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
        for (const [key, value] of this.self.propertiesNameMapping)
            if (![null, undefined].includes(this.props[value]))
                this.properties[key] = this.props[value]
        this.model = Tools.extend(
            {}, this.self.defaultModel, this.properties.model || {}
        )
        for (const [name, value] of Object.entries(this.model))
            if (Object.prototype.hasOwnProperty.call(this.properties, name))
                this.model[name] = this.properties[name]
        this.model.state = this.state.model
        if (Object.prototype.hasOwnProperty.call(this.properties, 'value'))
            // Controlled component via "value" property.
            this.model.value = this.properties.value
        else if (
            !Object.prototype.hasOwnProperty.call(this.model, 'value') ||
            this.model.value === undefined
        )
            this.model.value = this.state.value
        // else -> Controlled component via models's "value" property.
    }
    // endregion
    /**
     * Renders current's component state.
     * @returns Current component's representation.
     */
    render():Component {
        this.consolidateProperties()
        const {model, properties} = this
        return (
            <TextField
                disabled={!model.mutable}
                fullwidth={properties.fullWidth}
                helpText={model.declaration}
                icon={properties.icon}
                label={model.description || model.name}
                maxLength={model.maximumLength}
                minLength={model.minimumLength}
                onChange={(event:Event):void => {
                    let value:any = event.target.value
                    if (model.trim && typeof value === 'string')
                        value = value.trim()
                    /*
                        TODO validate ...
                        const newState:ModelState = {invalid: , valid: , ...modelState}
                        setState(newState)
                        properties.onStateChange(newState)
                    */
                    this.setState({value})
                    properties.onValueChange(value)
                }}
                outlined={properties.outlined}
                pattern={model.regularExpressionPattern}
                placeholder={properties.placeholder}
                required={!model.nullable}
                rows={properties.rows}
                textarea={model.type === 'string' && model.editor === 'text'}
                trailingIcon={properties.trailingIcon}
                value={model.value || ''}
            />
        )
    }
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
