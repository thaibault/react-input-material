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
const nameMapping:Mapping = Object.entries({
    defaultValue: 'default',
    emptyEqualsNull: 'empty-equals-null',
    fullWitdh: 'full-width',
    maximumLength: 'maximum-length',
    minimumLength: 'minimum-length',
    regularExpressionPattern: 'pattern'
})
export const GenericInput:FunctionComponent<Properties<Type>> = <Type = any>(
    properties:Properties<Type>
) => {
    /*
        Properties overwrites model properties which overwrites default
        properties.
    */
    const givenModel:Model<Type> = properties.model || {}
    if (properties.disabled)
        givenModel.mutable = !properties.disabled
    if (properties.required)
        givenModel.nullable = !properties.required
    for (const [key, value] of nameMapping)
        if (![null, undefined].includes(properties[value]))
            givenModel[key] = properties[value]
    const [model, setModel] = useState(Tools.extend(
        {
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
            name: 'NO_NAME',
            nullable: true,
            placeholder: '',
            regularExpressionPattern: '.*',
            selection: null,
            trim: true,
            type: 'string',
            value: '',
            writable: true
        },
        givenModel,
        properties
    ))

    return (
        <TextField
            disabled={!model.mutable}
            fullwidth={properties.fullWidth}
            helpText={model.declaration}
            label={model.description || model.name}
            maxLength={model.maximumLength}
            minLength={model.minimumLength}
            onChange={(event):void =>
                setModel(Tools.extend({}, model, {value: event.target.value}))
            }
            outlined={properties.outlined}
            pattern={model.regularExpressionPattern}
            placeholder={properties.placeholder}
            required={!model.nullable}
            rows={properties.rows}
            value={model.value}
        />
    )
}
GenericInput.properties = {
    any: [
        'declaration', 'default', 'description', 'model', 'selection', 'value'
    ],
    boolean: [
        'disabled',
        'empty-equals-null',
        'full-width',
        'outlined',
        'required',
        'trim'
    ],
    number: ['maximum-length', 'maximum', 'minimum-length', 'minimum', 'rows'],
    string: ['editor', 'name', 'pattern', 'placeholder', 'type']
}
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
