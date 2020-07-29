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
import {Mapping, ValueOf} from 'clientnode/type'
import PropTypes from 'prop-types'

import {ReactWeb} from '../web/ReactWeb'
// endregion
// region exports
export type ModelState = {
    dirty:boolean;
    invalid:boolean;
    pristine:boolean;
    touched:boolean;
    untouched:boolean;
    value:boolean;
}
export type BaseModel<Type = any> = {
    declaration:string;
    default:Type;
    description:string;
    editor:'code'|'code(css)'|'code(script)'|'plain'|'text'|'text(simple)'|'text(advanced)';
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
    value?:null|Type;
}
export type Model<Type = any> = BaseModel<Type> & {
    state:ModelState;
    writable:boolean;
}
export type Output = Mapping<(...parameter:Array<any>) => Mapping<any>>
export type Properties<Type = any> = BaseModel<Type> & ModelState & {
    disabled?:boolean;
    fullWidth:boolean;
    icon:string;
    hidden:boolean;
    hideInputText:string;
    maximumLengthText:string;
    maximumText:string;
    minimumLengthText:string;
    minimumText:string;
    model:Model<Type>;
    onChangeValue:(value:Type) => void;
    onChangeState:(state:ModelState) => void;
    onInitialize:(properties:Properties<Type>) => void;
    onTouch:(event:Event) => void;
    outlined:boolean;
    patternText:string;
    placeholder:string;
    required?:boolean;
    requiredText:string;
    rows:number;
    selectableEditor:boolean;
    showDeclaration:boolean;
    showInputText:string;
    showValidationState:boolean;
    trailingIcon:string;
}
export type PropertyTypes = Mapping<ValueOf<PropTypes>|string>
export type Props<Type = any> = Partial<Properties<Type>>
export type WebComponentAPI = {
    component:ReactWeb;
    register:(tagName:string) => void;
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
