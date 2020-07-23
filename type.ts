// -*- coding: utf-8 -*-
/** @module type */
'use strict'
/* !
    region header
    [Project page](https://torben.website/storelocator)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {Mapping} from 'clientnode/type'

import {ReactWeb} from '../web/ReactWeb'
// endregion
// region exports
export type BaseModel<Type = any> = {
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
    name:string;
    nullable:boolean;
    regularExpressionPattern:string;
    selection:Array<number|string>|Mapping<any>;
    trim:boolean;
    type:'date'|'datetime-local'|'month'|'number'|'range'|'string'|'time'|'week';
    value:Type;
}
export type Model<Type = any> = BaseModel<Type> & {
    writable:boolean;
}
export type Properties<Type = any> = BaseModel<Type> & {
    fullWidth:boolean;
    model:Model<Type>;
    outlined:boolean;
    placeholder:string;
    rows:number;
}
export type WebComponentAPI = {
    component:ReactWeb;
    register:(tagName:string) => void;
}
export type WebComponentAttributes = {
    any:Array<string>;
    boolean:Array<string>;
    number:Array<string>;
    string:Array<string>;
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
