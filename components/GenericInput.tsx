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
import React, {FunctionComponent, setState, useState} from 'react'
import {TextField} from '@rmwc/textfield'
import '@rmwc/textfield/styles'

import {Model, Properties} from '../types'
// endregion
export const defaultModelState:ModelState = {
    dirty: false,
    invalid: false,
    pristine: true,
    touched: false,
    untouched: true,
    value: true
}
export const defaultModel:Model<string> = {
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
    state: defaultModelState,
    trim: true,
    type: 'string',
    value: null,
    writable: true
}
export const defaultProperties:Partial<Properties<string>> = {
    hideInputText: 'Hide password.',
    hidden: false,
    maximumLengthText:
        'Please type less or equal than ${maximumLength} symbols.',
    maximumText: 'Please give a number less or equal than ${maximum}.',
    minimumLengthText:
        'Please type at least or equal ${minimumLength} symbols.',
    minimumText: 'Please give a number at least or equal to ${minimum}.',
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
export const propertiesNameMapping:Mapping = Object.entries({
    defaultValue: 'default'
})
export const GenericInput:FunctionComponent<Properties<Type>> = <Type = any>(
    givenProperties:Partial<Properties<Type>>
) => {
    /*
        Properties overwrites default properties which overwrites default
        model properties.
    */
    // region consolidate properties
    const properties:Properties<Type> = Tools.extend(
        true,
        defaultProperties,
        givenProperties
    )
    if (givenProperties.disabled) {
        delete properties.disabled
        properties.mutable = !givenProperties.disabled
    }
    if (givenProperties.required) {
        delete properties.required
        properties.nullable = !givenProperties.required
    }
    for (const [key, value] of nameMapping)
        if (![null, undefined].includes(givenProperties[value])) {
            delete properties[key]
            properties[key] = givenProperties[value]
        }
    // / region consolidate model properties
    const model:Model<Type> = Tools.extend(
        {}, defaultModel, properties.model || {}
    )
    for (const [name, value] of Object.entries(model))
        if (Object.prototype.hasOwnProperty.call(properties, name))
            model[name] = properties[name]
    // / endregion
    // endregion
    // region determine state
    const [modelState, setModelState] = useState(defaultModelState)
    const [value, setValue] = useState(defaultModel.value)
    model.state = modelState
    if (model.value && value !== model.value)
        setValue(model.value)
    model.value = value
    // endregion
    return (
        <TextField
            textarea={type === 'string' && model.editor === 'text'}
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
                setValue(value)
                properties.onValueChange(value)
            }}
            outlined={properties.outlined}
            pattern={model.regularExpressionPattern}
            placeholder={properties.placeholder}
            required={!model.nullable}
            rows={properties.rows}
            trailingIcon={properties.trailingIcon}
            value={model.value}
        />
    )
}
GenericInput.properties = {
    any: ['default', 'model', 'selection', 'value'],
    boolean: [
        'disabled',
        'empty-equals-null',
        'full-width',
        'hidden',
        'outlined',
        'required',
        'trim',
        'selectable-editor',
        'show-declaration',
        'show-validation-state'
    ],
    number: ['maximum-length', 'maximum', 'minimum-length', 'minimum', 'rows'],
    string: [
        'declaration', 
        'description', 
        'editor',
        'hide-input-text',
        'icon',
        'maximum-length-text',
        'maximum-text',
        'minimum-length-text',
        'minimum-text',
        'name',
        'pattern',
        'pattern-text',
        'placeholder',
        'required-text',
        'show-input-text',
        'trailing-icon',
        'type'
    ]
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
