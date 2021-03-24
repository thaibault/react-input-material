// -*- coding: utf-8 -*-
/** @module type */
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
import {SelectProps} from '@rmwc/select'
import PropertyTypes, {
    any,
    arrayOf,
    boolean,
    func,
    number,
    object,
    objectOf,
    oneOfType,
    shape,
    string,
    symbol
} from 'clientnode/property-types'
import {Mapping, PlainObject, RecursivePartial, ValueOf} from 'clientnode/type'
import {
    Component,
    ComponentClass,
    FocusEvent,
    ForwardRefExoticComponent,
    FunctionComponent,
    HTMLProps,
    KeyboardEvent,
    MouseEvent,
    ReactElement,
    RefAttributes,
    Requireable,
    SyntheticEvent
} from 'react'
import {IconOptions, RipplePropT} from '@rmwc/types'
import {ThemeProviderProps} from '@rmwc/theme'
import {TooltipProps} from '@rmwc/tooltip'
import {
    StaticWebComponent as StaticBaseWebComponent, WebComponentAdapter
} from 'web-component-wrapper/type'
// endregion
// region exports
// / region generic
export type GenericEvent = SyntheticEvent & {detail?:any}
export type TestEnvironment = {
    container:HTMLDivElement|null
    render:(component:ReactElement) => ChildNode|null
}
export type BaseModel<Type = any> = {
    declaration:string
    default:null|Type
    description:string
    emptyEqualsNull:boolean
    maximum:number|string
    maximumLength:number
    minimum:number|string
    minimumLength:number
    name:string
    regularExpressionPattern:null|RegExp|string
    selection?:SelectProps['options']
    trim:boolean
    type:GenericInputType
    value?:null|Type
}
export type CursorState = {
    end:number
    start:number
}
export type Renderable = Array<ReactElement|string>|ReactElement|string
export type ModelState = {
    dirty:boolean
    focused:boolean
    invalid:boolean
    invalidRequired:boolean
    pristine:boolean
    touched:boolean
    untouched:boolean
    valid:boolean
    visited:boolean
}
export type Model<Type = any> =
    BaseModel<Type> &
    {
        mutable:boolean
        nullable:boolean
        state:ModelState
        writable:boolean
    }
export type FormatSpecification<Type = any> = {
    options?:PlainObject
    transform:(value:null|Type) => string
}
export type DataTransformSpecification<Type = any> = {
    format:{
        final:FormatSpecification
        intermediate:FormatSpecification
    }
    parse:(value:any, configuration:Properties<Type>) => null|Type
    type?:NativeInputType
}
export type Properties<Type = any> =
    BaseModel<Type> &
    ModelState &
    {
        disabled:boolean
        id:string
        initialValue:null|Type
        label:string
        model:Model<Type>
        name:string
        onBlur:(event:GenericEvent) => void
        onChange:(properties:Properties<Type>, event?:GenericEvent) => void
        onChangeShowDeclaration:(show:boolean, event?:GenericEvent) => void
        onChangeState:(state:ModelState, event?:GenericEvent) => void
        onChangeValue:(value:null|Type, event?:GenericEvent) => void
        onClick:(event:MouseEvent) => void
        onFocus:(event:FocusEvent) => void
        onTouch:(event:GenericEvent) => void
        required:boolean
        requiredText:string
        ripple:RipplePropT
        rootProps:HTMLProps<any>
        showDeclaration:boolean
        showInitialValidationState:boolean
        themeConfiguration:ThemeProviderProps['options']
        tooltip:string|TooltipProps
    }
export type Props<Type = any> =
    Partial<Omit<Properties<Type>, 'model'>> &
    {model?:Partial<Model<Type>>}
export type DefaultProperties<Type = any> =
    Omit<Props<Type>, 'model'> &
    {model:Model<Type>}
export type State<Type = any> = {
    modelState:ModelState
    showDeclaration:boolean
    value:null|Type
}
export interface StaticWebComponent<P = Props> extends StaticBaseWebComponent {
    new (properties:P):Component<P>
    defaultModelState:ModelState
    defaultProperties:P
    strict:boolean
}
export type StaticComponent<Type = any> =
    Omit<ComponentClass<Props<Type>>, 'propTypes'> &
    StaticWebComponent<Type>
export type StaticFunctionComponent<Type = any> =
    Omit<FunctionComponent<Props<Type>>, 'propTypes'> &
    StaticComponent<Type>
export type ValueState<Type = any, MS = ModelState> = {
    modelState:MS
    representation?:string
    value:null|Type
}
export type EditorState = {
    editorIsActive:boolean
    selectionIsUnstable:boolean
}
// // region constants
export const baseModelPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    declaration: string,
    default: any,
    description: string,
    name: string,
    selection: oneOfType([
        arrayOf(oneOfType([number, string])),
        objectOf(oneOfType([number, string]))
    ]),
    /*
        NOTE: Not yet working:
        type: oneOf([
            'date',
            'datetime-local',
            'month',
            'number',
            'range',
            'string',
            'time',
            'week'
        ])
    */
    type: string,
    value: any
} as const
export const modelStatePropertyTypes:{
    [key in keyof ModelState]:Requireable<boolean|symbol>
} = {
    dirty: oneOfType([boolean, symbol]),
    focused: oneOfType([boolean, symbol]),
    invalid: oneOfType([boolean, symbol]),
    invalidRequired: oneOfType([boolean, symbol]),
    pristine: oneOfType([boolean, symbol]),
    touched: oneOfType([boolean, symbol]),
    untouched: oneOfType([boolean, symbol]),
    valid: oneOfType([boolean, symbol]),
    visited: oneOfType([boolean, symbol])
} as const
export const modelPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...baseModelPropertyTypes,
    emptyEqualsNull: boolean,
    maximum: oneOfType([number, string]),
    maximumLength: number,
    minimum: oneOfType([number, string]),
    minimumLength: number,
    mutable: boolean,
    pattern: oneOfType([object, string]),
    state: shape(modelStatePropertyTypes),
    writable: boolean,
    regularExpressionPattern: oneOfType([object, string]),
    trim: boolean
} as const
export const propertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...baseModelPropertyTypes,
    ...modelStatePropertyTypes,
    disabled: boolean,
    initialValue: any,
    model: shape<any>(modelPropertyTypes),
    onChange: func,
    onChangeValue: func,
    onChangeShowDeclaration: func,
    onChangeState: func,
    onClick: func,
    onFocus: func,
    onTouch: func,
    required: boolean,
    requiredText: string,
    ripple: oneOfType([boolean, object]),
    showDeclaration: oneOfType([boolean, symbol]),
    showInitialValidationState: boolean,
    themeConfiguration: object,
    /*
        NOTE: Not yet working:
        tooltip?:string|TooltipProps
        trailingIcon?:string|(IconOptions & {tooltip?:string|TooltipProps})
    */
    tooltip: any,
}
export const defaultModelState:ModelState = {
    dirty: false,
    focused: false,
    invalid: false,
    invalidRequired: false,
    pristine: true,
    touched: false,
    untouched: true,
    valid: true,
    visited: false
} as const
export const defaultModel:Model = {
    declaration: '',
    default: null,
    description: '',
    emptyEqualsNull: true,
    maximum: -1,
    maximumLength: -1,
    minimum: 0,
    minimumLength: 0,
    mutable: true,
    name: 'NO_NAME_DEFINED',
    nullable: true,
    regularExpressionPattern: null,
    state: {...defaultModelState},
    trim: true,
    type: 'string',
    value: null,
    writable: true
} as const
export const defaultProperties:DefaultProperties = {
    model: {...defaultModel},
    showDeclaration: undefined,
    showInitialValidationState: false,
    requiredText: 'Please fill this field.',
} as const
// // endregion
// / endregion
// / region checkbox
export type CheckboxProperties =
    Properties<boolean> &
    {
        checked:boolean
        id:string
        onChange:(properties:CheckboxProperties, event?:GenericEvent) => void
    }
export type CheckboxModel = Model<boolean>
export type CheckboxModelState = ModelState
export type CheckboxProps =
    Partial<Omit<CheckboxProperties, 'model'>> &
    {model?:Partial<CheckboxModel>}
export type DefaultCheckboxProperties<Type = any> =
    Omit<CheckboxProps, 'model'> &
    {model:CheckboxModel}
export type CheckboxState = State<boolean>
export type CheckboxAdapter<Type = any> =
    WebComponentAdapter<CheckboxProperties, CheckboxState>
// // region constants
export const checkboxPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...propertyTypes,
    checked: boolean,
    id: string,
} as const
export const defaultCheckboxModel:Model<boolean> = {
    ...defaultModel,
    default: false,
    type: 'boolean',
    value: false
}
export const defaultCheckboxProperties:CheckboxProps = {
    ...defaultProperties,
    default: false,
    model: {...defaultCheckboxModel},
    requiredText: 'Please check this field.',
} as const
// // endregion
// / endregion
// / region input
export type InputModelState =
    ModelState &
    {
        invalidMaximum:boolean
        invalidMaximumLength:boolean
        invalidMinimum:boolean
        invalidMinimumLength:boolean
        invalidPattern:boolean
        invalidRequired:boolean
    }
export type InputModel<Type = any> =
    Omit<Model<Type>, 'state'> &
    {state:InputModelState}
export type NativeInputType = 'date'|'datetime-local'|'month'|'number'|'range'|'text'|'time'|'week'
export type GenericInputType = 'boolean'|'currency'|'float'|'integer'|'string'|NativeInputType
export type InputProperties<Type = any> =
    Properties<Type> &
    InputModelState &
    {
        align:'end'|'start'
        cursor:CursorState
        /*
            plain -> input field
            text -> textarea
            richtext(raw) -> texteditor without formatting
            richtext(simple) -> texteditor with semantic text modifications
            richtext(normal) -> texteditor with additional text formatting
            richtext(advanced) -> texteditor with advanced text formatting
         */
        editor:'code'|'code(css)'|'code(script)'|'plain'|'text'|'richtext(raw)'|'richtext(simple)'|'richtext(normal)'|'richtext(advanced)'
        editorIsActive:boolean
        fullWidth:boolean
        hidden:boolean
        icon:string|(IconOptions & {tooltip?:string|TooltipProps})
        labels:Array<string>|Mapping
        maximumLengthText:string
        maximumText:string
        minimumLengthText:string
        minimumText:string
        model:InputModel<Type>
        onChange:(properties:InputProperties<Type>, event?:GenericEvent) =>
            void
        onChangeEditorIsActive:(isActive:boolean, event?:MouseEvent) => void
        onKeyDown:(event:KeyboardEvent) => void
        onKeyUp:(event:KeyboardEvent) => void
        onSelectionChange:(event:GenericEvent) => void
        outlined:boolean
        pattern:RegExp|string
        patternText:string
        placeholder:string
        representation:string
        rows:number
        selectableEditor:boolean
        trailingIcon:string|(IconOptions & {tooltip?:string|TooltipProps})
    }
export type InputProps<Type = any> =
    Partial<Omit<InputProperties<Type>, 'model'>> &
    {model?:Partial<InputModel<Type>>}
export type DefaultInputProperties<Type = any> =
    Omit<InputProps, 'model'> &
    {model:InputModel}
export type InputPropertyTypes<Type = any> = {
    [key in keyof InputProperties<Type>]:ValueOf<typeof PropertyTypes>
}
export type InputState<Type = any> =
    State<Type> &
    {
        cursor:CursorState
        editorIsActive:boolean
        hidden?:boolean
        modelState:InputModelState
        representation?:string
        selectionIsUnstable:boolean
    }
export type InputDataTransformation<Type = any> =
    Mapping<RecursivePartial<DataTransformSpecification<Type>>> &
    {
        boolean:DataTransformSpecification<Type>
        boolean:{
            format?:DataTransformSpecification<Type>['format']
            parse:DataTransformSpecification<Type>['parse']
            type:NativeInputType
        }
        currency:DataTransformSpecification<Type>
        date:DataTransformSpecification<Type>
        'datetime-local':DataTransformSpecification<Type>
        float:DataTransformSpecification<Type>
        integer:{
            format:{
                final:FormatSpecification<Type>
                intermediate?:DataTransformSpecification<Type>['format']['intermediate']
            }
            parse:DataTransformSpecification<Type>['parse']
            type:NativeInputType
        }
        number:{
            format?:DataTransformSpecification<Type>['format']
            parse:DataTransformSpecification<Type>['parse']
            type?:DataTransformSpecification<Type>['type']
        }
        time:DataTransformSpecification<Type>
    }
export interface StaticWebInputComponent<Type = any> extends StaticWebComponent<InputProps<Type>> {
    defaultModelState:InputModelState
    local:string
    transformer:InputDataTransformation<Type>
}
// NOTE: We hold "selectionIsUnstable" state value as internal private one.
export type InputAdapter<Type = any> =
    WebComponentAdapter<InputProperties<Type>, Omit<InputState<Type>, 'selectionIsUnstable'>>
export type StaticFunctionInputComponent<Type = any> =
    Omit<FunctionComponent<Props<Type>>, 'propTypes'> &
    StaticWebInputComponent<Type>
// // region constants
export const inputModelStatePropertyTypes:{
    [key in keyof InputModelState]:Requireable<boolean|symbol>
} = {
    ...modelStatePropertyTypes,
    invalidMaximum: oneOfType([boolean, symbol]),
    invalidMaximumLength: oneOfType([boolean, symbol]),
    invalidMinimum: oneOfType([boolean, symbol]),
    invalidMinimumLength: oneOfType([boolean, symbol]),
    invalidPattern: oneOfType([boolean, symbol])
} as const
export const inputPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...propertyTypes,
    ...modelPropertyTypes,
    ...inputModelStatePropertyTypes,
    /*
        NOTE: Not yet working:
        align: oneOf(['end', 'start']),
    */
    align: string,
    cursor: oneOfType([
        shape({
            end: number.isRequired,
            start: number.isRequired
        }),
        symbol
    ]),
    /*
        NOTE: Not yet working:
        editor: oneOf([
            'code',
            'code(css)',
            'code(script)',
            'plain',
            'text',
            'richtext(raw)',
            'richtext(simple)',
            'richtext(normal)',
            'richtext(advanced)'
        ]),
    */
    editor: string,
    editorIsActive: oneOfType([boolean, symbol]),
    fullWidth: boolean,
    hidden: oneOfType([boolean, symbol]),
    /*
        NOTE: Not yet working:
        icon?:string|(IconOptions & {tooltip?:string|TooltipProps})
    */
    icon: oneOfType([string, object]),
    labels: oneOfType([arrayOf(string), object]),
    maximumLengthText: string,
    maximumText: string,
    minimumLengthText: string,
    minimumText: string,
    onBlur: func,
    onChangeEditorIsActive: func,
    onKeyDown: func,
    onKeyUp: func,
    onSelectionChange: func,
    outlined: boolean,
    patternText: string,
    placeholder: string,
    representation: oneOfType([string, symbol]),
    rows: number,
    selectableEditor: boolean,
    trailingIcon: any
} as const
export const defaultInputModelState:InputModelState = {
    ...defaultModelState,
    invalidMaximum: false,
    invalidMaximumLength: false,
    invalidMinimum: false,
    invalidMinimumLength: false,
    invalidPattern: false
} as const
export const defaultInputModel:InputModel = {
    ...defaultModel,
    state: defaultInputModelState
} as const
export const defaultInputProperties:DefaultInputProperties = {
    ...defaultProperties,
    cursor: {
        end: 0,
        start: 0
    },
    editor: 'plain',
    maximumLengthText:
        'Please type less or equal than ${maximumLength} symbols.',
    maximumText: 'Please type less or equal than ${formatValue(maximum)}.',
    minimumLengthText:
        'Please type at least or equal ${minimumLength} symbols.',
    minimumText: 'Please type at least or equal ${formatValue(minimum)}.',
    model: defaultInputModel,
    patternText:
        'Your string have to match the regular expression: "${pattern}".',
    rows: 4,
    selectableEditor: false
} as const
// // endregion
// / endregion
export type ConfigurationProperties = {
    strict?:boolean
    themeConfiguration?:ThemeProviderProps['options']
    tooltip?:Properties['tooltip']
    wrap?:boolean
}
// endregion
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
