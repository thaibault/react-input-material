// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module simple-input */
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
// endregion
export type Properties<Type = any> = {
    declaration:string;
    defaultValue:Type;
    description:string;
    editor:'auto'|'code'|'raw'|'text';
    emtyEqualsNull:boolean;
    maximum:number;
    maximumLength:number;
    minimum:number;
    minimumLength:number;
    mutable:boolean;
    model:Properties<Type>;
    name:string;
    nullable:boolean;
    placeholder:string;
    regularExpressionPattern:string;
    selection:Array<number|string>|Mapping<any>;
    trim:boolean;
    type:'number'|'string';
    value:Type;
    writable:boolean;
}
export const SimpleInput:FunctionComponent<Properties<Type>> = <Type = string>(
    properties:Properties<Type>
) => {
    const [model, setModel] = useState(Tools.extend(
        IgnoreNullAndUndefinedSymbol,
        Tools.extend(
            IgnoreNullAndUndefinedSymbol,
            {
                declaration: '',
                defaultValue: '',
                description: '',
                editor: 'auto',
                emptyEqualsNull: true,
                maximum: Infinity;
                maximumLength: Infinity;
                minimum: 0,
                minimumLength: 0;
                mutable: boolean;
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
            properties.model || {}
        ),
        properties
    ))

    return (
        <TextField
            label={model.name}
            onChange={(event):void =>
                setModel(Tools.extend({}, model, {value: event.target.value}))
            }
            pattern={model.pattern}
            value={model.value}
        />
    )
}
export default SimpleInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
