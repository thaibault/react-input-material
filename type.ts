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
    RefObject,
    Requireable,
    SyntheticEvent
} from 'react'
import CodeEditorType from 'react-ace'

import {Editor as RichTextEditor} from 'tinymce'
import {
    StaticWebComponent as StaticBaseWebComponent, WebComponentAdapter
} from 'web-component-wrapper/type'
import {MDCSelectFoundation} from '@material/select'
import {MDCTextFieldFoundation} from '@material/textfield'
import {SelectProps} from '@rmwc/select'
import {ThemeProviderProps} from '@rmwc/theme'
import {TooltipProps} from '@rmwc/tooltip'
import {IconOptions, RipplePropT} from '@rmwc/types'
import {Editor as RichTextEditorComponent} from '@tinymce/tinymce-react'
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
    type:string
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
    transform:(
        value:null|Type,
        configuration:InputProperties<Type>,
        transformer:InputDataTransformation<Type>
    ) => string
}
export type DataTransformSpecification<Type = any> = {
    format:{
        final:FormatSpecification
        intermediate?:FormatSpecification
    }
    parse:(
        value:any,
        configuration:InputProperties<Type>,
        transformer:InputDataTransformation<Type>
    ) => null|Type
    type?:NativeInputType
}
export type BaseProperties<Type = any> =
    BaseModel<Type> &
    ModelState &
    {
        className:string
        disabled:boolean
        enforceUncontrolled:boolean
        id:string
        initialValue:null|Type
        label:string
        model:Model<Type>
        name:string
        onBlur:(event:GenericEvent) => void
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
export type Properties<
    Type = any,
    ExternalProperties extends BaseProperties<Type> = BaseProperties<Type>
> =
    BaseProperties<Type> &
    {onChange:(properties:ExternalProperties, event?:GenericEvent) => void}
export type BaseProps<Type = any> =
    Partial<Omit<BaseProperties<Type>, 'model'>> &
    {model?:Partial<Model<Type>>}
export type Props<
    Type = any,
    ExternalProperties extends BaseProperties<Type> = BaseProperties<Type>
> =
    Partial<Omit<Properties<Type, ExternalProperties>, 'model'>> &
    {model?:Partial<Model<Type>>}
export type DefaultProperties<Type = any> =
    Omit<Props<Type>, 'model'> & {model:Model<Type>}
export type State<Type = any> = {
    modelState?:ModelState
    value?:null|Type
}
export interface StaticWebComponent<P = Props> extends StaticBaseWebComponent {
    new (properties:P):Component<P>
    defaultModelState:ModelState
    defaultProperties:P
    strict:boolean
}
export type StaticComponent<P = Props> =
    Omit<ComponentClass<P>, 'propTypes'> & StaticWebComponent<P>
export type StaticFunctionComponent<P = Props> =
    Omit<FunctionComponent<P>, 'propTypes'> & StaticComponent<P>
export type ValueState<Type = any, MS = ModelState> = {
    modelState:MS
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
    className: string,
    disabled: boolean,
    enforceUncontrolled: boolean,
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
    maximum: Infinity,
    maximumLength: -1,
    minimum: -Infinity,
    minimumLength: 0,
    mutable: true,
    name: 'NO_NAME_DEFINED',
    nullable: true,
    regularExpressionPattern: null,
    state: {...defaultModelState},
    trim: true,
    type: 'string',
    /*
        NOTE: We do not want to shadow "default" here:
        value: null,
    */
    writable: true
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultProperties:DefaultProperties = {
    enforceUncontrolled: false,
    model: {...defaultModel},
    showDeclaration: undefined,
    showInitialValidationState: false,
    requiredText: 'Please fill this field.',
} as const
// // endregion
// / endregion
// / region checkbox
export type AdditionalCheckboxProperties = {checked:boolean;id:string}
export type CheckboxProperties =
    Properties<boolean, Properties<boolean> & AdditionalCheckboxProperties> &
    AdditionalCheckboxProperties
export type CheckboxModel = Model<boolean>
export type CheckboxModelState = ModelState
export type CheckboxProps =
    Partial<Omit<CheckboxProperties, 'model'>> &
    {model?:Partial<CheckboxModel>}
export type DefaultCheckboxProperties<Type = any> =
    Omit<CheckboxProps, 'model'> & {model:CheckboxModel}
export type CheckboxState = State<boolean>
export type CheckboxAdapter<Type = any> =
    WebComponentAdapter<CheckboxProperties, Omit<CheckboxState, 'value'>>
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
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
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
    }
export type InputModel<Type = any> =
    Omit<Model<Type>, 'state'> &
    {state:InputModelState}
export type InputValueState<Type = any, MS = ModelState> =
    ValueState<Type, MS> &
    {representation?:string}
export type NativeInputType = 'date'|'datetime-local'|'month'|'number'|'range'|'text'|'time'|'week'
export type GenericInputType = 'boolean'|'currency'|'float'|'integer'|'string'|NativeInputType
export type AdditionalInputProperties<Type> =
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
        step:number
        trailingIcon:string|(IconOptions & {tooltip?:string|TooltipProps})
        transformer:RecursivePartial<DataTransformSpecification<Type>>
    }
export type InputProperties<Type = any> =
    Properties<Type, Properties<Type> & AdditionalInputProperties<Type>> &
    AdditionalInputProperties<Type>
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
        showDeclaration:boolean
    }
export type InputDataTransformation<Type = any> =
    Mapping<RecursivePartial<DataTransformSpecification<Type>>> &
    {
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
            format:DataTransformSpecification<Type>['format']
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
export interface StaticWebInputComponent<
    P extends InputProps = InputProps
> extends StaticWebComponent<P> {
    defaultModelState:InputModelState
    locales:Array<string>
    transformer:InputDataTransformation<P['value']>
}
// NOTE: We hold "selectionIsUnstable" state value as internal private one.
export type InputAdapter<Type = any> = WebComponentAdapter<
    InputProperties<Type>,
    Omit<InputState<Type>, 'representation'|'selectionIsUnstable'|'value'> &
    {
        representation?:string
        value?:null|Type
    }
>
export type InputAdapterWithReferences<Type = any> = InputAdapter<Type> & {
    references:{
        codeEditorReference?:CodeEditorType
        codeEditorInputReference:RefObject<HTMLTextAreaElement>
        foundationRef:RefObject<MDCSelectFoundation|MDCTextFieldFoundation>
        inputReference:RefObject<
            HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement
        >
        richTextEditorInputReference:RefObject<HTMLTextAreaElement>
        richTextEditorInstance?:RichTextEditor
        richTextEditorReference?:RichTextEditorComponent
    }
}
export type StaticFunctionInputComponent<P = Props> =
    Omit<FunctionComponent<P>, 'propTypes'> & StaticWebInputComponent<P>
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
    step: number,
    trailingIcon: any,
    transformer: object
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
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
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
    model: {...defaultInputModel},
    patternText:
        'Your string have to match the regular expression: "${pattern}".',
    rows: 4,
    selectableEditor: false,
    step: 1
} as const
// // endregion
// / endregion
// / region file-input
export type FileInputModelState = ModelState &
    {
        invalidMaximumSize:boolean
        invalidMinimumSize:boolean
        invalidPattern:boolean
    }
export type FileInputModel =
    Omit<Model<File>, 'state'> & {state:FileInputModelState}
export type FileInputValueState = ValueState<File>
export type AdditionalFileInputProperties =
    FileInputModelState &
    {
        maximumSizeText:string
        minimumSizeText:string
        model:FileInputModel
        outlined:boolean
        pattern:RegExp|string
        patternText:string
    }
export type FileInputProperties =
    Properties<File, Properties<File> & AdditionalFileInputProperties> &
    AdditionalFileInputProperties
export type FileInputProps =
    Partial<Omit<FileInputProperties, 'model'>> &
    {model?:Partial<FileInputModel>}
export type DefaultFileInputProperties =
    Omit<FileInputProps, 'model'> & {model:FileInputModel}
export type FileInputPropertyTypes = {
    [key in keyof FileInputProperties]:ValueOf<typeof PropertyTypes>
}
export type FileInputState = State<File> & {modelState:FileInputModelState}
export type FileInputAdapter = WebComponentAdapter<
    FileInputProperties, Omit<FileInputState, 'value'> & {value?:File|null}
>
export type FileInputAdapterWithReferences =
    FileInputAdapter &
    {references:{inputReference:RefObject<HTMLInputElement>}}
// // region constants
export const fileInputModelStatePropertyTypes:{
    [key in keyof FileInputModelState]:Requireable<boolean|symbol>
} = {
    ...modelStatePropertyTypes,
    invalidMaximumSize: oneOfType([boolean, symbol]),
    invalidMinimumSize: oneOfType([boolean, symbol]),
    invalidPattern: oneOfType([boolean, symbol])
} as const
export const fileInputPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...propertyTypes,
    ...modelPropertyTypes,
    ...fileInputModelStatePropertyTypes,
    maximumSizeText: string,
    minimumSizeText: string,
    onBlur: func,
    outlined: boolean,
    patternText: string
} as const
export const defaultFileInputModelState:InputModelState = {
    ...defaultModelState,
    invalidMaximumSize: false,
    invalidMinimumSize: false,
    invalidPattern: false
} as const
export const defaultFileInputModel:InputModel = {
    ...defaultModel,
    state: defaultFileInputModelState
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultFileInputProperties:DefaultFileInputProperties = {
    ...defaultProperties,
    maximumSizeText:
        'Please provide a file with less or equal size than ${maximumSize} byte.',
    minimumSizeText:
        'Please provide a file with more or equal size than ${maximumSize} byte.',
    model: {...defaultFileInputModel},
    patternText:
        'Your file\'s mime-type hase to match the regular expression: "${pattern}".'
} as const
// // endregion
// / endregion
// / region inputs
export type InputsModel<M extends Partial<Model> = Partial<Model>> =
    Model<Array<M>> &
    {
        maximumLength:number
        minimumLength:number
        state:ModelState
        writable:boolean
    }
export type AdditionalInputsProperties<P extends Properties = Properties> =
    ModelState &
    {
        addIcon:IconOptions
        model:InputsModel<P['model']>
        removeIcon:IconOptions
        value:Array<P>|null
        writable:boolean
    }
export type InputsProperties<P extends Properties = Properties> =
    Omit<Properties<
        Array<P>, Properties<Array<P>> & AdditionalInputsProperties<P>
    >, 'model'|'onChangeValue'> &
    AdditionalInputsProperties<P> &
    {
        children:(options:{
            index:number,
            inputsProperties:InputsProperties<P>,
            properties:Partial<P>
        }) => ReactElement
        createPrototype:(options:{
            index:number
            properties:InputsProperties<P>
            prototype:Partial<P>
            values:Array<P['value']>|null
        }) => Partial<P>
        onChangeValue:(values:Array<P['value']>|null, event?:GenericEvent) =>
            void
    }
export type InputsProps<P extends Properties = Properties> =
    Partial<Omit<InputsProperties<P>, 'model'|'value'>> &
    {
        model?:Partial<InputsModel<Partial<P['model']>>>
        value?:Array<Partial<P>>|Array<P['value']>|null
    }
export type DefaultInputsProperties =
    Partial<Omit<InputsProperties, 'default'|'model'|'value'>> &
    {model:InputsModel}
export type InputsPropertyTypes<P extends Properties = Properties> = {
    [key in keyof InputsProperties<P>]:ValueOf<typeof PropertyTypes>
}
export type InputsState<Type = any> = State<Array<Type>>
export type InputsAdapter<P extends Properties = Properties> =
    WebComponentAdapter<InputsProperties<P>, InputsState<P['value']>>
export type InputsAdapterWithReferences<
    P extends Properties = Properties, RefType = unknown
> =
    InputsAdapter<P> &
    {references:Array<RefObject<RefType>>}
// // region constants
export const inputsPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...propertyTypes,
    // We use that function (render prop) to produce input component instances.
    children: func,
    createPrototype: func
} as const
export const inputsRenderProperties:Array<string> =
    ['children', 'createPrototype']
export const defaultInputsModel:InputsModel = {
    ...defaultModel,
    minimumLength: 0,
    type: 'string[]'
} as const
/*
    NOTE: Avoid setting any properties already defined in model here since they
    would permanently shadow them.
*/
export const defaultInputsProperties:DefaultInputsProperties = {
    ...defaultProperties,
    addIcon: {icon: 'add'},
    createPrototype: ({prototype}):Partial<Properties> => prototype,
    model: {...defaultInputsModel},
    removeIcon: {icon: 'clear'}
} as const
// // endregion
// / endregion
// / region interval
export type IntervalValue = {
    end?:null|number
    start?:null|number
}
export type IntervalConfiguration = {
    end:InputProps<number>
    start:InputProps<number>
}
export type IntervalModelState = ModelState
export type IntervalModel = {
    name:string
    state:IntervalModelState
    value:{
        end:InputModel<number>
        start:InputModel<number>
    }
}
export type AdditionalIntervalProperties = {
    icon:IconOptions
    model:IntervalModel
    value:IntervalConfiguration
}
export type IntervalProperties =
    Omit<
        InputProperties<number>,
        'icon'|'model'|'onChange'|'onChangeValue'|'value'
    > &
    AdditionalIntervalProperties &
    {
        onChange:(
            properties:AdditionalIntervalProperties, event?:GenericEvent
        ) => void
        onChangeValue:(value:null|IntervalValue, event?:GenericEvent) => void
    }
export type IntervalProps =
    Omit<
        InputProps<number>, 'icon'|'model'|'onChange'|'onChangeValue'|'value'
    > &
    Partial<{
        end:InputProps<number>
        icon:IntervalProperties['icon']
        model:IntervalProperties['model']
        onChange:IntervalProperties['onChange']
        onChangeValue:IntervalProperties['onChangeValue']
        start:InputProps<number>
        value:IntervalConfiguration|IntervalValue|null
    }>
export type IntervalPropertyTypes<Type = any> = {
    [key in keyof IntervalProperties]:ValueOf<typeof PropertyTypes>
}
export type IntervalAdapter =
    WebComponentAdapter<IntervalProperties, {value?:IntervalValue|null}>
export type IntervalAdapterWithReferences = IntervalAdapter & {
    references:{
        end:RefObject<InputAdapterWithReferences<number>>
        start:RefObject<InputAdapterWithReferences<number>>
    }
}
// // region constants
export const intervalPropertyTypes:Mapping<ValueOf<typeof PropertyTypes>> = {
    ...inputPropertyTypes,
    value: shape<any>({
        end: oneOfType([number, shape<any>(inputPropertyTypes)]),
        start: oneOfType([number, shape<any>(inputPropertyTypes)])
    })
} as const
export const defaultIntervalProperties:IntervalProps = {
    icon: {icon: 'timelapse'},
    maximumText:
        'Please provide somthing earlier than ${formatValue(maximum)}.',
    minimumText: 'Please provide somthing later than ${formatValue(minimum)}.',
    name: 'NO_NAME_DEFINED',
    requiredText: 'Please provide a range.',
    type: 'time',
    value: {
        end: {description: 'End', name: 'end'},
        start: {description: 'Start', name: 'start'},
    }
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
