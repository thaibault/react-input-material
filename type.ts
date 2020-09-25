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
import {SelectProps} from '@rmwc/select'
import GenericPropertyTypes from 'clientnode/property-types'
import {Mapping, PlainObject, RecursivePartial, ValueOf} from 'clientnode/type'
import {
    ComponentClass,
    FocusEvent,
    ForwardRefExoticComponent,
    FunctionComponent,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    RefAttributes,
    SyntheticEvent
} from 'react'
import {IconOptions} from '@rmwc/types'
import {ThemeProviderProps} from '@rmwc/theme'
import {TooltipProps} from '@rmwc/tooltip'
import {StaticReactWebComponent} from 'web-component-wrapper/type'
// endregion
// region exports
export type ModelState = {
    dirty:boolean;
    focused:boolean;
    invalid:boolean;
    invalidMaximum:boolean;
    invalidMaximumLength:boolean;
    invalidMinimum:boolean;
    invalidMinimumLength:boolean;
    invalidPattern:boolean;
    invalidRequired:boolean;
    pristine:boolean;
    touched:boolean;
    untouched:boolean;
    valid:boolean;
    visited:boolean;
}
export type NativeInputType = 'date'|'datetime-local'|'month'|'number'|'range'|'text'|'time'|'week'
export type GenericInputType = 'currency'|'float'|'integer'|'string'|NativeInputType
export type BaseModel<Type = any> = {
    declaration:string;
    default?:null|Type;
    description:string;
    editor:'code'|'code(css)'|'code(script)'|'plain'|'text'|'richtext(raw)'|'richtext(simple)'|'richtext(normal)'|'richtext(advanced)';
    emptyEqualsNull:boolean;
    maximum:number;
    maximumLength:number;
    minimum:number;
    minimumLength:number;
    name:string;
    regularExpressionPattern:RegExp|string;
    selection?:SelectProps['options'];
    trim:boolean;
    type:GenericInputType;
    value?:null|Type;
}
export type Model<Type = any> = BaseModel<Type> & {
    mutable:boolean;
    nullable:boolean;
    state:ModelState;
    writable:boolean;
}
export type Output = Mapping<true|((...parameter:Array<any>) => Mapping<any>)>
export type Properties<Type = any> = BaseModel<Type> & ModelState & {
    align:'end'|'start';
    cursor:{
        end:number;
        start:number;
    };
    disabled?:boolean;
    editorIsActive:boolean;
    fullWidth:boolean;
    icon:string|(IconOptions & {tooltip?:string|TooltipProps});
    initialValue:null|Type;
    hidden:boolean;
    maximumLengthText:string;
    maximumText:string;
    minimumLengthText:string;
    minimumText:string;
    model:Model<Type>;
    onBlur:(event:SyntheticEvent) => void;
    onChange:(properties:Properties<Type>, event?:SyntheticEvent) => void;
    onChangeEditorIsActive:(isActive:boolean, event?:MouseEvent) => void;
    onChangeValue:(value:null|Type, event?:SyntheticEvent) => void;
    onChangeShowDeclaration:(show:boolean, event?:SyntheticEvent) => void;
    onChangeState:(state:ModelState, event?:SyntheticEvent) => void;
    onClick:(event:MouseEvent) => void;
    onFocus:(event:FocusEvent) => void;
    onKeyUp:(event:KeyboardEvent) => void;
    onSelectionChange:(event:SyntheticEvent) => void;
    onTouch:(event:SyntheticEvent) => void;
    outlined:boolean;
    pattern:RegExp|string;
    patternText:string;
    placeholder:string;
    representation:string;
    required?:boolean;
    requiredText:string;
    ripple:boolean;
    rows:number;
    selectableEditor:boolean;
    showDeclaration:boolean;
    showInitialValidationState:boolean;
    theme:ThemeProviderProps['options'];
    tooltip:string|TooltipProps;
    trailingIcon:string|(IconOptions & {tooltip?:string|TooltipProps});
}
export type PropertyTypes<Type = any> = {
    [key in keyof Properties<Type>]:ValueOf<typeof GenericPropertyTypes>
}
export type Props<Type = any> = Partial<Omit<Properties<Type>, 'model'>> & {
    model?:Partial<Model<Type>>
}
export type State<Type = any> = {
    cursor:{
        end:number;
        start:number;
    };
    editorIsActive:boolean;
    hidden?:boolean;
    model:ModelState;
    representation?:string;
    selectionIsUnstable:boolean;
    showDeclaration:boolean;
    value:null|Type;
}
export type FormatSpecification<Type = any> = {
    options?:PlainObject;
    transform:(value:null|Type) => string;
}
export type DataTransformSpecification<Type = any> = {
    format:{
        final:FormatSpecification;
        intermediate:FormatSpecification;
    };
    parse:(value:string) => null|Type;
    type:NativeInputType;
}
export type GenericInputDataTransformation<Type = any> =
    Mapping<RecursivePartial<DataTransformSpecification<Type>>> &
    {
        currency: DataTransformSpecification<Type>;
        float: DataTransformSpecification<Type>;
        integer: {
            format:{
                final:FormatSpecification<Type>
                intermediate?:DataTransformSpecification<Type>['format']['intermediate'];
            };
            parse:DataTransformSpecification<Type>['parse'];
            type:NativeInputType;
        };
        number: {
            format?:DataTransformSpecification<Type>['format'];
            parse:DataTransformSpecification<Type>['parse'];
            type?:DataTransformSpecification<Type>['type'];
        };
    }
export type Renderable = Array<ReactElement|string>|ReactElement|string
export interface StaticInputComponent<Instance, Type = any> extends StaticReactWebComponent {
    new (properties:Props<Type>):Instance;
    defaultModelState:ModelState
    defaultProps:Props<Type>
    local:string
    propTypes:StaticReactWebComponent['propTypes'];
    strict:boolean
    transformer:GenericInputDataTransformation<Type>
}
export type StaticWebInputComponent<Instance, Type = any> =
    Omit<ComponentClass<Properties<Type>>, 'defaultProps'> &
    StaticInputComponent<Instance, Type>
export type StaticWebInputFunctionComponent<Instance, Type = any> =
    Omit<FunctionComponent<Properties<Type>>, 'defaultProps'> &
    StaticInputComponent<Instance, Type>
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
