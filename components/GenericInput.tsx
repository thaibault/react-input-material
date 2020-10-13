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
import {
    any,
    boolean,
    func,
    number,
    object,
    objectOf,
    oneOfType,
    shape,
    string
} from 'clientnode/property-types'
import {Mapping, PlainObject, ValueOf} from 'clientnode/type'
import {ValidationMap} from 'prop-types'
import React, {
    ComponentType,
    createRef,
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardRefRenderFunction,
    KeyboardEvent as ReactKeyboardEvent,
    lazy,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    ReactElement,
    RefCallback,
    RefObject,
    Suspense,
    SyntheticEvent,
    useEffect,
    useImperativeHandle,
    useState,
    VoidFunctionComponent
} from 'react'
import CodeEditorType, {IAceEditorProps as CodeEditorProps} from 'react-ace'
import {TransitionProps} from 'react-transition-group/Transition'
import {
    Editor as RichTextEditor, RawEditorSettings as TinyMCEOptions
} from 'tinymce'
import {WebComponentAdapter} from 'web-component-wrapper/type'
import {MDCSelectFoundation} from '@material/select'
import {MDCTextFieldFoundation} from '@material/textfield'
import {CircularProgress} from '@rmwc/circular-progress'
import {FormField} from '@rmwc/formfield'
import {Icon} from '@rmwc/icon'
import {IconButton} from '@rmwc/icon-button'
import {Select, SelectProps} from '@rmwc/select'
import {TextField, TextFieldProps} from '@rmwc/textfield'
import {Theme} from '@rmwc/theme'
import {IconOptions} from '@rmwc/types'
import {
    Editor as RichTextEditorComponent, IAllProps as RichTextEditorProps
} from '@tinymce/tinymce-react'
import {
    EventHandler as RichTextEventHandler
} from '@tinymce/tinymce-react/lib/cjs/main/ts/Events'
import UseAnimations from 'react-useanimations'
import lock from 'react-useanimations/lib/lock'
import plusToX from 'react-useanimations/lib/plusToX'

import '@rmwc/circular-progress/styles'
import '@rmwc/formfield/styles'
import '@rmwc/icon-button/styles'
import '@rmwc/select/styles'
import '@rmwc/textfield/styles'
import '@rmwc/theme/styles'
import '@rmwc/tooltip/styles'
import '@rmwc/typography/styles'

import {GenericAnimate} from './GenericAnimate'
import styles from './GenericInput.module'
import WrapConfigurations from './WrapConfigurations'
import WrapTooltip from './WrapTooltip'
import {
    determineInitialValue,
    determineValidationState as determineBaseValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesAndStateToModel
} from '../helper'
import {
    DataTransformSpecification,
    defaultInputModelState as defaultModelState,
    DefaultInputProperties as DefaultProperties,
    defaultInputProperties as defaultProperties,
    InputDataTransformation,
    InputModelState as ModelState,
    InputProperties as Properties,
    inputPropertyTypes as propertyTypes,
    InputProps as Props,
    InputState as State,
    InputModel as Model,
    Renderable,
    StaticFunctionInputComponent as StaticComponent
} from '../type'
// endregion
// region code editor configuration
const CodeEditor = lazy(async ():Promise<{default:ComponentType<any>}> => {
    const {config} = await import('ace-builds')
    config.set('basePath', '/node_modules/ace-builds/src-noconflict/')
    config.set('useWorker', false)
    return await import('react-ace')
})
// endregion
// region rich text editor configuration
declare var UTC_BUILD_TIMESTAMP:number
// NOTE: Could be set via module bundler environment variables.
if (typeof UTC_BUILD_TIMESTAMP === 'undefined')
    /* eslint-disable no-var */
    var UTC_BUILD_TIMESTAMP:number = 1
    /* eslint-enable no-var */
let richTextEditorLoadedOnce:boolean = false
const tinymceBasePath:string = '/node_modules/tinymce/'
const tinymceScriptPath:string = `${tinymceBasePath}tinymce.min.js`
export const TINYMCE_DEFAULT_OPTIONS:TinyMCEOptions = {
    /* eslint-disable camelcase */
    // region paths
    base_url: tinymceBasePath,
    skin_url: `${tinymceBasePath}skins/ui/oxide`,
    theme_url: `${tinymceBasePath}themes/silver/theme.min.js`,
    // endregion
    allow_conditional_comments: false,
    allow_script_urls: false,
    body_class: 'mdc-text-field__input',
    branding: false,
    cache_suffix: `?version=${UTC_BUILD_TIMESTAMP}`,
    contextmenu: false,
    convert_fonts_to_spans: true,
    document_base_url: '/',
    element_format: 'xhtml',
    entity_encoding: 'raw',
    fix_list_elements: true,
    hidden_input: false,
    icon: 'material',
    invalid_elements: 'em',
    invalid_styles: 'color font-size line-height',
    keep_styles: false,
    menubar: false,
    /* eslint-disable max-len */
    plugins: 'fullscreen link code hr nonbreaking searchreplace visualblocks',
    /* eslint-enable max-len */
    relative_urls: false,
    remove_script_host: false,
    remove_trailing_brs: true,
    schema: 'html5',
    /* eslint-disable max-len */
    toolbar1: 'cut copy paste | undo redo removeformat | styleselect formatselect fontselect fontsizeselect | searchreplace visualblocks fullscreen code',
    toolbar2: 'alignleft aligncenter alignright alignjustify outdent indent | link hr nonbreaking bullist numlist bold italic underline strikethrough',
    /* eslint-enable max-len */
    trim: true
    /* eslint-enable camelcase */
}
// endregion
// region static helper
export function determineValidationState<Type = any>(
    configuration:Properties<Type>, currentState:ModelState, value:null|Type
):boolean {
    return determineBaseValidationState<Properties<Type>, Type>(
        configuration,
        currentState,
        value,
        {
            invalidMaximum: ():boolean => (
                typeof configuration.model.maximum === 'number' &&
                typeof value === 'number' &&
                !isNaN(value) &&
                configuration.model.maximum < value
            ),
            invalidMaximumLength: ():boolean => (
                typeof configuration.model.maximumLength === 'number' &&
                typeof value === 'string' &&
                configuration.model.maximumLength < value.length
            ),
            invalidMinimum: ():boolean => (
                typeof configuration.model.minimum === 'number' &&
                typeof value === 'number' &&
                !isNaN(value) &&
                value < configuration.model.minimum
            ),
            invalidMinimumLength: ():boolean => (
                typeof configuration.model.minimumLength === 'number' &&
                typeof value === 'string' &&
                value.length < configuration.model.minimumLength
            ),
            invalidPattern: ():boolean => (
                typeof value === 'string' &&
                (
                    typeof configuration.model.regularExpressionPattern ===
                        'string' &&
                    !(new RegExp(configuration.model.regularExpressionPattern))
                        .test(value) ||
                    configuration.model.regularExpressionPattern !== null &&
                    typeof configuration.model.regularExpressionPattern ===
                        'object' &&
                    !typeof configuration.model.regularExpressionPattern
                        .test(value)
                )
            )
        }
    )
}
/**
 * Represents configured value as string.
 * @param value - To represent.
 * @param type - Input type.
 * @param final - Specifies whether it is a final representation.
 * @returns Transformed value.
 */
export function formatValue<Type = any>(
    value:null|Type, type:string, final:boolean = true
):string {
    const methodName:'final'|'intermediate' = final ? 'final' : 'intermediate'
    if (value === null || typeof value === 'number' && isNaN(value))
        return ''
    if (
        Object.prototype.hasOwnProperty.call(GenericInput.transformer, type) &&
        GenericInput.transformer[type].format &&
        Object.prototype.hasOwnProperty.call(
            GenericInput.transformer[type].format, methodName
        ) &&
        GenericInput.transformer[type].format![methodName]!.transform
    )
        return (
            GenericInput.transformer[type].format as
                DataTransformSpecification['format']
        )[methodName].transform(value)
    return `${value}`
}
/**
 * Determines initial value representation as string.
 * @param properties - Components properties.
 * @param value - Current value to represent.
 * @returns Determined initial representation.
 */
export function determineInitialRepresentation<Type = any>(
    properties:Props, value:null|Type
):string {
    if (typeof properties.representation === 'string')
        return properties.representation
    if (value !== null)
        return formatValue<Type>(
            value,
            properties.type ||
            properties.model?.type ||
            GenericInput.defaultProps.model!.type as string
        )
    return ''
}
// endregion
/**
 * Generic input wrapper component which automatically determines a useful
 * input field depending on given model specification.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const GenericInputInner = function<Type = any>(
    props:Props<Type>,
    reference?:RefObject<WebComponentAdapter<Properties<Type>, State<Type>>>
):ReactElement {
    // region live-cycle
    /**
     * Is triggered immediate after a re-rendering. Re-stores cursor selection
     * state if editor has been switched.
     * @returns Nothing.
     */
    useEffect(():void => {
        if (selectionIsUnstable)
            if (editorIsActive) {
                /*
                    NOTE: If the corresponding editor are not loaded yet they
                    will set the selection state on initialisation as long as
                    "selectionIsUnstable" is set to "true".
                */
                if (codeEditorReference?.editor?.selection) {
                    codeEditorReference.editor.textInput.focus()
                    setCodeEditorSelectionState(codeEditorReference)
                    setSelectionIsUnstable(false)
                } else if (richTextEditorInstance?.selection) {
                    richTextEditorInstance.focus(false)
                    setRichTextEditorSelectionState(richTextEditorInstance)
                    setSelectionIsUnstable(false)
                }
            } else if (inputReference.current) {
                inputReference.current.focus();
                (
                    inputReference.current as
                        HTMLInputElement|HTMLTextAreaElement
                ).setSelectionRange(cursor.start, cursor.end)
                setSelectionIsUnstable(false)
            }
    })
    // endregion
    // region context helper
    // / region render helper
    /**
     * Applies icon preset configurations.
     * @param options - Icon options to extend of known preset identified.
     * @return Given potential extended icon configuration.
     */
    const applyIconPreset = (options?:Properties['icon']):IconOptions|string|undefined => {
        if (options === 'clear_preset')
            return {
                icon: <GenericAnimate
                    in={properties.value !== properties.default}
                >
                    <UseAnimations animation={plusToX} reverse={true}/>
                </GenericAnimate>,
                onClick: (event:ReactMouseEvent):void => {
                    event.preventDefault()
                    event.stopPropagation()
                    onChangeValue(transformFinalValue(
                        properties, properties.default
                    ))
                },
                strategy: 'component',
                tooltip: 'Clear input'
            }
        if (options === 'password_preset')
            return {
                icon: <UseAnimations
                    animation={lock} reverse={!properties.hidden}
                />,
                onClick: (event:ReactMouseEvent):void => {
                    event.preventDefault()
                    event.stopPropagation()
                    setHidden((value:boolean|undefined):boolean => !value)
                    onChange(event)
                },
                strategy: 'component',
                tooltip: `${(properties.hidden ? 'Show' : 'Hide')} password`
            }
        return options
    }
    /**
     * Render help or error texts with current validation state color.
     * @return Determined renderable markup specification.
     */
    const renderHelpText = ():ReactElement => <>
       <GenericAnimate in={
            properties.selectableEditor &&
            properties.type === 'string' &&
            properties.editor !== 'plain'
        }>
            <IconButton
                icon={{
                    icon: properties.editorIsActive ?
                        'subject' :
                        properties.editor.startsWith('code') ?
                            'code' :
                            'text_format',
                    onClick: onChangeEditorIsActive
                }}
            />
        </GenericAnimate>
        <GenericAnimate in={Boolean(properties.declaration)}>
            <IconButton
                icon={{
                    icon:
                        'more_' +
                        (properties.showDeclaration ? 'vert' : 'horiz'),
                    onClick: onChangeShowDeclaration
                }}
            />
        </GenericAnimate>
        <GenericAnimate in={properties.showDeclaration}>
            {properties.declaration}
        </GenericAnimate>
        <GenericAnimate in={
            !properties.showDeclaration &&
            properties.invalid &&
            (
                properties.showInitialValidationState ||
                /*
                    Material inputs show their validation state at
                    least after a blur event so we synchronize error
                    message appearances.
                */
                properties.visited
            )
        }>
            <Theme use="error">{renderMessage(
                properties.invalidMaximum &&
                properties.maximumText ||
                properties.invalidMaximumLength &&
                properties.maximumLengthText ||
                properties.invalidMinimum &&
                properties.minimumText ||
                properties.invalidMinimumLength &&
                properties.minimumLengthText ||
                properties.invalidPattern &&
                properties.patternText ||
                properties.invalidRequired &&
                properties.requiredText
            )}</Theme>
        </GenericAnimate>
    </>
    /**
     * Renders given template string against all properties in current
     * instance.
     * @param template - Template to render.
     * @returns Evaluated template or an empty string if something goes wrong.
     */
    const renderMessage = (template?:any):string => {
        if (typeof template === 'string') {
            const scopeNames:Array<keyof Properties<Type>> = Object
                .keys(properties)
                .filter((name:string):boolean => name !== 'default') as
                    Array<keyof Properties<Type>>
            let render:Function
            try {
                render = new Function(...scopeNames, `return \`${template}\``)
            } catch (error) {
                console.warn(
                    `Given message template "${template}" could not be ` +
                    `parsed: "${Tools.represent(error)}".`
                )
                return ''
            }
            try {
                return render(
                    ...scopeNames.map((name:keyof Properties<Type>
                ):any => properties[name]))
            } catch (error) {
                console.warn(
                    `Given message template "${template}" failed to evaluate` +
                    ' with given scope variables: "' +
                    `${scopeNames.join('", "')}": "${Tools.represent(error)}".`
                )
            }
        }
        return ''
    }
    /**
     * Wraps given component with animation component if given condition holds.
     * @param content - Component or string to wrap.
     * @param propertiesOrInCondition - Animation properties or in condition
     * only.
     * @returns Wrapped component.
     */
    const wrapAnimationConditionally = (
        content:Renderable,
        propertiesOrInCondition:boolean|Partial<TransitionProps<HTMLElement|undefined>> = {},
        condition:boolean = true
    ):Renderable => {
        if (typeof propertiesOrInCondition === 'boolean')
            return condition ?
                <GenericAnimate in={propertiesOrInCondition}>
                    {content}
                </GenericAnimate> :
                propertiesOrInCondition ? content : ''
        return condition ?
            <GenericAnimate {...propertiesOrInCondition}>
                {content}
            </GenericAnimate> :
            propertiesOrInCondition.in ? content : ''
    }
    /**
     * If given icon options has an additional tooltip configuration integrate
     * a wrapping tooltip component into given configuration and remove initial
     * tooltip configuration.
     * @param options - Icon configuration potential extended a tooltip
     * configuration.
     * @returns Resolved icon configuration.
     */
    const wrapIconWithTooltip = (options?:Properties['icon']):IconOptions|undefined => {
        if (typeof options === 'object' && options?.tooltip) {
            const tooltip:Properties['tooltip'] = options.tooltip
            options = {...options}
            delete options.tooltip
            const nestedOptions:IconOptions = {...options}
            options.strategy = 'component'
            options.icon = <WrapTooltip options={tooltip}>
                <Icon icon={nestedOptions} />
            </WrapTooltip>
        }
        return options as IconOptions|undefined
    }
    // / endregion
    // / region handle cursor selection state
    // // region rich-text editor
    /**
     * Determines absolute offset in given markup.
     * @param contentDomNode - Wrapping dom node where all content is
     * contained.
     * @param domNode - Dom node which contains given position.
     * @param offset - Relative position within given node.
     * @returns Determine absolute offset.
     */
    const determineAbsoluteSymbolOffsetFromHTML = (
        contentDomNode:Element, domNode:Element, offset:number
    ):number => {
        if (!value)
            return 0

        const indicatorKey:string = 'generic-input-selection-indicator'
        const indicatorValue:string = '###'
        const indicator:string = ` ${indicatorKey}="${indicatorValue}"`

        domNode.setAttribute(indicatorKey, indicatorValue)
        // NOTE: TinyMCE seems to add a newline after each paragraph.
        const content:string = contentDomNode.innerHTML.replace(
            /(<\/p>)/gi, '$1\n'
        )
        domNode.removeAttribute(indicatorKey)

        const domNodeOffset:number = content.indexOf(indicator)
        const startIndex:number = domNodeOffset + indicator.length

        return (
            offset +
            content.indexOf('>', startIndex) +
            1 -
            indicator.length
        )
    }
    // // endregion
    // // region code editor
    /**
     * Determines absolute range from table oriented position.
     * @param column - Symbol offset in given row.
     * @param row - Offset row.
     * @returns Determined offset.
     */
    const determineAbsoluteSymbolOffsetFromTable = (
        column:number, row:number
    ):number => {
        if (typeof value !== 'string' && !value)
            return 0

        if (row > 0)
            return column + (value as unknown as string)
                .split('\n')
                .slice(0, row)
                .map((line:string):number => 1 + line.length)
                .reduce((sum:number, value:number):number => sum + value)
        return column
    }
    /**
     * Converts absolute range into table oriented position.
     * @param offset - Absolute position.
     * @returns Position.
     */
    const determineTablePosition = (offset:number):{
        column:number
        row:number
    } => {
        const result = {column: 0, row: 0}
        if (typeof value === 'string')
            for (const line of value.split('\n')) {
                if (line.length < offset)
                    offset -= 1 + line.length
                else {
                    result.column = offset
                    break
                }
                result.row += 1
            }
        return result
    }
    /**
     * TODO
     */
    const setCodeEditorSelectionState = (instance:CodeEditorType):void => {
        const range = instance.editor.selection.getRange()
        const endPosition = determineTablePosition(cursor.end)
        range.setEnd(endPosition.row, endPosition.column)
        const startPosition = determineTablePosition(cursor.start)
        range.setStart(startPosition.row, startPosition.column)
        instance.editor.selection.setRange(range)
    }
    /**
     * TODO
     */
    const setRichTextEditorSelectionState = (instance:RichTextEditor):void => {
        const indicator:{
            end:string
            start:string
        } = {
            end: '###generic-input-selection-indicator-end###',
            start: '###generic-input-selection-indicator-start###'
        }
        const cursor:{
            end:number
            start:number
        } = {
            end: properties.cursor.end + indicator.start.length,
            start: properties.cursor.start
        }
        const keysSorted:Array<keyof typeof indicator> =
            ['start', 'end']

        let value:string = properties.representation || ''
        for (const type of keysSorted)
            value = (
                value.substring(0, cursor[type as keyof typeof indicator]) +
                indicator[type] +
                value.substring(cursor[type as keyof typeof indicator])
            )
        instance.getBody().innerHTML = value

        const walker = document.createTreeWalker(
            instance.getBody(),
            NodeFilter.SHOW_TEXT,
            null,
            false
        )

        const range = instance.dom.createRng()
        const result:{
            end?:[Node, number]
            start?:[Node, number]
        } = {}
        let node
        while (node = walker.nextNode())
            for (const type of keysSorted) {
                if (node.nodeValue) {
                    const index:number =
                        node.nodeValue.indexOf(indicator[type])
                    if (index > -1) {
                        node.nodeValue = node.nodeValue.replace(
                            indicator[type], ''
                        )
                        result[type] = [node, index]
                    }
                }
            }

        for (const type of keysSorted)
            if (result[type])
                range[
                    `set${Tools.stringCapitalize(type)}` as 'setEnd'|'setStart'
                ](...(result[type] as [Node, number]))
        if (result.end && result.start)
            instance.selection.setRng(range)
    }
    // // endregion
    /**
     * Saves current selection/cursor state in components state.
     * @returns Nothing.
     */
    const saveSelectionState = ():void => {
        /*
            NOTE: Known issues is that we do not get the absolute positions but
            the one in current selected node.
        */
        const codeEditorRange =
            codeEditorReference?.editor?.selection?.getRange()
        const richTextEditorRange =
            richTextEditorInstance?.selection?.getRng()
        const selectionEnd:null|number = (
            inputReference.current as HTMLInputElement|HTMLTextAreaElement
        )?.selectionEnd
        const selectionStart:null|number = (
            inputReference.current as HTMLInputElement|HTMLTextAreaElement
        )?.selectionStart
        if (codeEditorRange)
            setCursor({
                end: determineAbsoluteSymbolOffsetFromTable(
                    codeEditorRange.end.column,
                    typeof codeEditorRange.end.row === 'number' ?
                        codeEditorRange.end.row :
                        typeof properties.value === 'string' ?
                            properties.value.split('\n').length - 1 :
                            0
                ),
                start: determineAbsoluteSymbolOffsetFromTable(
                    codeEditorRange.start.column,
                    typeof codeEditorRange.start.row === 'number' ?
                        codeEditorRange.start.row :
                        typeof properties.value === 'string' ?
                            properties.value.split('\n').length - 1 :
                            0
                )
            })
        else if (richTextEditorRange)
            setCursor({
                end: determineAbsoluteSymbolOffsetFromHTML(
                    richTextEditorInstance!.getBody(),
                    richTextEditorInstance!.selection.getEnd(),
                    richTextEditorRange.endOffset
                ),
                start: determineAbsoluteSymbolOffsetFromHTML(
                    richTextEditorInstance!.getBody(),
                    richTextEditorInstance!.selection.getStart(),
                    richTextEditorRange.startOffset
                )
            })
        else if (
            typeof selectionEnd === 'number' &&
            typeof selectionStart === 'number'
        )
            setCursor({end: selectionEnd, start: selectionStart})
    }
    // / endregion
    // / region property aggregation
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @param properties - Properties to merge.
     * @returns Nothing.
    */
    const mergePropertiesStateAndModel = (
        properties:Props<Type>
    ):DefaultProperties<Type> => {
        const result:DefaultProperties<Type> =
            mapPropertiesAndStateToModel<Props<Type>, Model<Type>, ModelState, Type>(
                properties,
                GenericInput.defaultProps.model as Model<Type>,
                value,
                model,
                props
            ) as DefaultProperties<Type>
        // region handle state configuration
        if (result.cursor === undefined)
            result.cursor = cursor

        if (result.editorIsActive === undefined)
            result.editorIsActive = editorIsActive

        if (result.hidden === undefined)
            result.hidden = hidden

        if (
            result.representation === undefined &&
            typeof representation === 'string'
        )
            result.representation = representation

        if (result.showDeclaration === undefined)
            result.showDeclaration = showDeclaration
        // endregion
        result.model.value = parseValue(
            result as unknown as Properties<Type>, result.model.value
        )
        determineValidationState<Type>(
            result as unknown as Properties<Type>,
            result.model.state,
            result.model.value as Type
        )

        return result
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (
        properties:Props<Type>
    ):Properties<Type> => {
        const result:Properties<Type> =
            getBaseConsolidatedProperties<Props<Type>, Properties<Type>>(
                mergePropertiesStateAndModel(properties)
            )

        // NOTE: If only an editor is specified it should be displayed.
        if (!(result.editor === 'plain' || result.selectableEditor))
            result.editorIsActive = true

        if (typeof result.representation !== 'string' && result.value)
            result.representation = formatValue<Type>(
                result.value, result.type, !result.focused
            )

        return result
    }
    // / endregion
    // / region reference setter
    /**
     * Set code editor references.
     * @param instance - Code editor instance.
     * @returns Nothing.
     */
    const setCodeEditorReference = (instance?:CodeEditorType):void => {
        codeEditorReference = instance

        if (codeEditorReference?.editor?.container?.querySelector('textarea'))
            codeEditorInputReference = {
                current: codeEditorReference.editor.container.querySelector(
                    'textarea'
                )
            }

        if (codeEditorReference && editorIsActive && selectionIsUnstable) {
            codeEditorReference.editor.textInput.focus()
            setCodeEditorSelectionState(codeEditorReference)
            setSelectionIsUnstable(false)
        }
    }
    /**
     * Set rich text editor references.
     * @param instance - Editor instance.
     * @returns Nothing.
     */
    const setRichTextEditorReference = (instance?:RichTextEditorComponent):void => {
        richTextEditorReference = instance

        /*
            Refer inner element here is possible but marked as private.

            if (richTextEditorReference?.elementRef)
                richTextEditorInputReference =
                    richTextEditorReference.elementRef
        */
    }
    // / endregion
    // / region value transformer
    /**
     * Applies configured value transformations.
     * @param configuration - Input configuration.
     * @param value - Value to transform.
     * @returns Transformed value.
     */
    const parseValue = (configuration:Properties<Type>, value:any):null|Type => {
        if (configuration.emptyEqualsNull && value === '')
            return null
        if (
            ![null, undefined].includes(value) &&
            Object.prototype.hasOwnProperty.call(
                GenericInput.transformer, configuration.type
            ) &&
            GenericInput.transformer[configuration.type].parse
        )
            return (
                GenericInput.transformer[configuration.type].parse as
                    DataTransformSpecification['parse']
            )(value)
        if (typeof value === 'number' && isNaN(value))
            return null
        return value
    }
    /**
     * Applies configured value transformation when editing the input has been
     * ended (element is not focused anymore).
     * @param configuration - Current configuration.
     * @param value - Current value to transform.
     * @returns Transformed value.
     */
    const transformFinalValue = (configuration:Properties<Type>, value:any):null|Type => {
        if (configuration.model.trim && typeof value === 'string')
            value = value.trim().replace(/ +\n/g, '\\n')
        return parseValue(configuration, value)
    }
    // / endregion
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Nothing.
     */
    const onBlur = (event:SyntheticEvent):void => {
        let changed:boolean = false
        if (properties.focused) {
            properties.focused =
            properties.model.state.focused =
                false
            // TODO
            onChangeState(properties.model.state, event)
            changed = true
        }

        if (!properties.visited) {
            properties.visited =
            properties.model.state.visited =
                true
            changed = true
        }

        const oldValue:null|Type = properties.value as null|Type
        onChangeValue(transformFinalValue(properties, properties.value))
        changed = changed || oldValue !== properties.value

        if (changed)
            onChange(event)
        if (properties.onBlur)
            properties.onBlur(event)
    }
    /**
     * Triggered on any change events.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChange = (event?:SyntheticEvent):void => {
        if (properties.onChange)
            properties.onChange(
                getConsolidatedProperties(
                    /*
                        Workaround since "Something" isn't identified as subset
                        of "RecursivePartial<Type>"
                    */
                    properties as unknown as Props<Type>
                ),
                event
            )
    }
    /**
     * Triggered when editor is active indicator should be changed.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onChangeEditorIsActive = (event?:ReactMouseEvent):void => {
        properties.editorIsActive = !properties.editorIsActive
        setEditorIsActive((value:boolean):boolean => !value)
        setSelectionIsUnstable(true)

        if (properties.onChangeEditorIsActive)
            properties.onChangeEditorIsActive(properties.editorIsActive, event)
        onChange(event)
    }
    /**
     * Triggered when show declaration indicator should be changed.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChangeShowDeclaration = (event?:ReactMouseEvent):void =>
        setShowDeclaration((value:boolean):boolean => {
            if (properties.onChangeShowDeclaration)
                properties.onChangeShowDeclaration(value, event)
            onChange(event)
            return !value
        })
    /**
     * Triggered when ever the value changes.
     * @param eventOrValue - Event object or new value.
     * @returns Nothing.
     */
    const onChangeValue = (eventOrValue:null|SyntheticEvent|Type):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        let event:SyntheticEvent|undefined
        if (
            eventOrValue !== null &&
            typeof eventOrValue === 'object' &&
            (eventOrValue as SyntheticEvent).target
        ) {
            event = eventOrValue as SyntheticEvent
            value =
                typeof (event.target as {value?:null|Type}).value ===
                    'undefined' ?
                        null :
                        (event.target as unknown as {value:null|Type}).value
        } else
            value = eventOrValue as null|Type

        setValueState((oldValueState) => {
            const oldValue:null|Type = oldValueState.value

            properties.representation = typeof value === 'string' ?
                value :
                formatValue<Type>(value, properties.type)
            properties.value =
            properties.model.value =
                parseValue(properties, value)

            const result = {
                ...oldValueState, representation: properties.representation
            }
            if (oldValue === properties.value)
                return result

            result.value = value
            let stateChanged:boolean = determineValidationState<Type>(
                properties, oldValueState.model, properties.value
            )

            if (oldValueState.model.pristine) {
                properties.dirty =
                properties.model.state.dirty =
                    true
                properties.pristine =
                properties.model.state.pristine =
                    false
                stateChanged = true
            }
            if (stateChanged) {
                result.model = properties.model.state
                if (properties.onChangeState)
                    properties.onChangeState(state, event)
            }

            onChange(event)

            if (properties.onChangeValue)
                properties.onChangeValue(properties.value, event)
        })
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
        onSelectionChange(event)
        if (properties.onClick)
            properties.onClick(event)
        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        if (properties.onFocus)
            properties.onFocus(event)
        onTouch(event)
    }
    /**
     * Triggered on key up events.
     * @param event - Key up event object.
     * @returns Nothing.
     */
    const onKeyUp = (event:ReactKeyboardEvent):void => {
        onSelectionChange(event)
        if (properties.onKeyUp)
            properties.onKeyUp(event)
    }
    /**
     * Triggered on selection change events.
     * @param event - Event which triggered selection change.
     * @returns Nothing.
     */
    const onSelectionChange = (event:SyntheticEvent):void => {
        saveSelectionState()
        if (properties.onSelectionChange)
            properties.onSelectionChange(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void => {
        setValueState((oldValueState) => {
            let changedState:boolean = false
            if (!oldValueState.model.focused) {
                changedState =
                properties.focused =
                properties.model.state.focused =
                    true
            }
            if (oldValueState.model.untouched) {
                changedState =
                properties.touched =
                properties.model.state.touched =
                    true
                properties.untouched =
                properties.model.state.untouched =
                    false
            }
            let result = oldValueState
            if (changedState) {
                result = {...oldValueState, model: properties.model.state}
                if (properties.onChangeState)
                    properties.onChangeState(properties.model.state, event)
                onChange(event)
            }
            if (properties.onTouch)
                properties.onTouch(event)
            return result
        })
    }
    // endregion
    // region properties
    // / region references
    let codeEditorReference:CodeEditorType|undefined
    let codeEditorInputReference:RefObject<HTMLTextAreaElement> =
        createRef<HTMLTextAreaElement>()
    const foundationRef:RefObject<MDCSelectFoundation|MDCTextFieldFoundation> =
        createRef<MDCSelectFoundation|MDCTextFieldFoundation>()
    const inputReference:RefObject<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement> =
        createRef<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>()
    let richTextEditorInputReference:RefObject<HTMLTextAreaElement> =
        createRef<HTMLTextAreaElement>()
    let richTextEditorInstance:RichTextEditor|undefined
    let richTextEditorReference:RichTextEditorComponent|undefined
    // / endregion
    const [cursor, setCursor] = useState<{
        end:number
        start:number
    }>({end: 0, start: 0})
    let [editorIsActive, setEditorIsActive] = useState<boolean>(false)
    let [hidden, setHidden] = useState<boolean|undefined>()
    const [selectionIsUnstable, setSelectionIsUnstable] =
        useState<boolean>(false)
    let [showDeclaration, setShowDeclaration] = useState<boolean>(false)
    const initialValue:null|type = determineInitialValue<Type>(props)
    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    const [valueState, setValueState] = useState<{
        model:ModelState
        representation:string
        value:null|Type
    }>({
        model: {...GenericInput.defaultModelState},
        representation: determineInitialRepresentation(props, initialValue),
        value: initialValue
    })
    let {representation, model, value}} = valueState
    const properties:Properties<Type> = getConsolidatedProperties(props)
    useImperativeHandle(
        reference,
        ():WebComponentAdapter<Properties<Type>, State<Type>> & {
            references:{
                codeEditorReference?:CodeEditorType
                codeEditorInputReference:RefObject<HTMLTextAreaElement>
                foundationRef:RefObject<MDCSelectFoundation|MDCTextFieldFoundation>
                inputReference:RefObject<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>
                richTextEditorInputReference:RefObject<HTMLTextAreaElement>
                richTextEditorInstance?:RichTextEditor
                richTextEditorReference?:RichTextEditorComponent
            }
        } => ({
            properties,
            references: {
                codeEditorReference,
                codeEditorInputReference,
                foundationRef,
                inputReference,
                richTextEditorInputReference,
                richTextEditorInstance,
                richTextEditorReference
            },
            state: {
                cursor,
                editorIsActive,
                hidden,
                model,
                representation,
                selectionIsUnstable,
                showDeclaration,
                value
            }
        })
    )
    // endregion
    // region derive state variables from given properties
    if (properties.cursor) {
        if (properties.cursor.end !== undefined)
            cursor.end = properties.cursor.end
        if (properties.cursor.start !== undefined)
            cursor.start = properties.cursor.start
    }

    if (properties.editorIsActive !== undefined)
        editorIsActive = properties.editorIsActive

    if (properties.hidden !== undefined)
        hidden = properties.hidden
    if (hidden === undefined)
        hidden = properties.name?.startsWith('password')

    if (properties.showDeclaration !== undefined)
        showDeclaration = properties.showDeclaration

    if (properties.value !== undefined)
        value = properties.value as null|Type
    else if (properties.model?.value !== undefined)
        value = properties.model.value as null|Type

    if (properties.representation !== undefined)
        representation = properties.representation
    // endregion
    // region render
    // / region intermediate render properties
    const genericProperties:Partial<CodeEditorProps|RichTextEditorProps|SelectProps|TextFieldProps> = {
        onBlur: onBlur,
        onFocus: onFocus,
        placeholder: properties.placeholder,
        value: properties.representation
    }
    const materialProperties:SelectProps|TextFieldProps = {
        disabled: properties.disabled,
        helpText: {
            children: renderHelpText(),
            persistent: Boolean(properties.declaration)
        },
        invalid: properties.showInitialValidationState && properties.invalid,
        label: properties.description || properties.name,
        outlined: properties.outlined,
        required: properties.required
    }
    if (properties.icon)
        materialProperties.icon = wrapIconWithTooltip(
            applyIconPreset(properties.icon) as IconOptions
        ) as IconOptions

    const tinyMCEOptions:TinyMCEOptions = {
        ...TINYMCE_DEFAULT_OPTIONS,
        content_style: properties.disabled ? 'body {opacity: .38}' : '',
        placeholder: properties.placeholder,
        readonly: Boolean(properties.disabled),
        setup: (instance:RichTextEditor):void => {
            richTextEditorInstance = instance
            richTextEditorInstance.on('init', ():void => {
                if (!richTextEditorInstance)
                    return

                richTextEditorLoadedOnce = true

                if (editorIsActive && selectionIsUnstable) {
                    richTextEditorInstance.focus(false)
                    setRichTextEditorSelectionState(richTextEditorInstance)
                    setSelectionIsUnstable(false)
                }
            })
        }
    }
    if (properties.editor.endsWith('raw)')) {
        tinyMCEOptions.toolbar1 =
            'cut copy paste | undo redo removeformat | code | fullscreen'
        delete tinyMCEOptions.toolbar2
    } else if (properties.editor.endsWith('simple)')) {
        tinyMCEOptions.toolbar1 =
            'cut copy paste | undo redo removeformat | bold italic ' +
            'underline strikethrough subscript superscript | fullscreen'
        delete tinyMCEOptions.toolbar2
    } else if (properties.editor.endsWith('normal)'))
        tinyMCEOptions.toolbar1 =
            'cut copy paste | undo redo removeformat | styleselect ' +
            'formatselect | searchreplace visualblocks fullscreen code'

    const isAdvancedEditor:boolean = (
        !properties.selection &&
        properties.type === 'string' &&
        properties.editorIsActive &&
        (
            properties.editor.startsWith('code') ||
            properties.editor.startsWith('richtext(')
        )
    )
    // / endregion
    // / region main markup
    // TODO check if mdc-classes can be retrieved
    return <WrapConfigurations
        strict={GenericInput.strict}
        theme={properties.theme}
        tooltip={properties.tooltip}
    ><div className={
        styles['generic-input'] +
        (isAdvancedEditor ? ` ${styles['generic-input--custom']}` : '')
    }>
        <GenericAnimate in={Boolean(properties.selection)}>
            <Select
                {...genericProperties as SelectProps}
                {...materialProperties as SelectProps}
                enhanced
                foundationRef={foundationRef as unknown as
                    RefCallback<MDCSelectFoundation>
                }
                inputRef={inputReference as unknown as
                    RefCallback<HTMLSelectElement|HTMLTextAreaElement>
                }
                rootProps={{
                    name: properties.name,
                    onClick: onClick,
                    ...properties.rootProps
                }}
                onChange={onChangeValue}
                options={properties.selection}
            />
        </GenericAnimate>
        {wrapAnimationConditionally(
            [
                <FormField
                    className={
                        'mdc-text-field' +
                        (properties.disabled ?
                            ' mdc-text-field--disabled' :
                            ''
                        ) +
                        ' mdc-text-field--textarea'
                    }
                    key="advanced-editor-form-field"
                >
                    <label>
                        <span className={
                            styles['generic-input__editor__label'] +
                            ' mdc-floating-label' +
                            ' mdc-floating-label--float-above'
                        }>
                            <Theme use={
                                properties.invalid &&
                                (
                                    properties.showInitialValidationState ||
                                    properties.visited
                                ) ? 'error' : undefined
                            }>
                                {properties.description || properties.name}{properties.required ? '*' : ''}
                            </Theme>
                        </span>
                        {
                            properties.editor.startsWith('code') ?
                                <Suspense fallback={
                                    <CircularProgress size="large" />
                                }>
                                    <CodeEditor
                                        {...genericProperties as
                                            CodeEditorProps
                                        }
                                        className="mdc-text-field__input"
                                        mode="javascript"
                                        name={properties.name}
                                        onChange={onChangeValue}
                                        onCursorChange={onSelectionChange}
                                        onSelectionChange={onSelectionChange}
                                        ref={setCodeEditorReference}
                                        setOptions={{
                                            maxLines: properties.rows,
                                            minLines: properties.rows,
                                            readOnly: properties.disabled,
                                            tabSize: 4,
                                            useWorker: false
                                        }}
                                        theme="github"
                                    />
                                </Suspense>
                            :
                                <RichTextEditorComponent
                                    {...genericProperties as
                                        RichTextEditorProps
                                    }
                                    disabled={properties.disabled}
                                    init={tinyMCEOptions}
                                    onClick={onClick as unknown as
                                        RichTextEventHandler<MouseEvent>
                                    }
                                    onEditorChange={onChangeValue}
                                    onKeyUp={onKeyUp as unknown as
                                        RichTextEventHandler<KeyboardEvent>
                                    }
                                    ref={setRichTextEditorReference as
                                        RefCallback<RichTextEditorComponent>
                                    }
                                    textareaName={properties.name}
                                    tinymceScriptSrc={tinymceScriptPath}
                                />
                        }
                    </label>
                </FormField>,
                <div
                    className="mdc-text-field-helper-line"
                    key="advanced-editor-helper-line"
                >
                    <p
                        className="mdc-text-field-helper-text mdc-text-field-helper-text--persistent"
                    >{(
                        materialProperties.helpText as {children:ReactElement}
                    ).children}</p>
                </div>
            ],
            isAdvancedEditor,
            richTextEditorLoadedOnce || properties.editor.startsWith('code')
        )}
        {wrapAnimationConditionally(
            <TextField
                {...genericProperties as TextFieldProps}
                {...materialProperties as TextFieldProps}
                align={properties.align}
                characterCount
                foundationRef={foundationRef as unknown as
                    RefCallback<MDCTextFieldFoundation>
                }
                fullwidth={properties.fullWidth}
                inputRef={inputReference as unknown as
                    RefCallback<HTMLInputElement|HTMLTextAreaElement>
                }
                max={properties.maximum}
                maxLength={properties.maximumLength}
                min={properties.minimum}
                minLength={properties.minimumLength}
                onChange={onChangeValue}
                ripple={properties.ripple}
                rootProps={{
                    name: properties.name,
                    onClick: onClick,
                    onKeyUp: onKeyUp,
                    ...properties.rootProps
                }}
                rows={properties.rows}
                textarea={
                    properties.type === 'string' &&
                    properties.editor !== 'plain'
                }
                trailingIcon={wrapIconWithTooltip(applyIconPreset(
                    properties.trailingIcon
                ))}
                type={
                    properties.type === 'string' ?
                        properties.hidden ?
                            'password' :
                            'text' :
                            (
                                Object.prototype.hasOwnProperty.call(
                                    GenericInput.transformer,
                                    properties.type
                                ) &&
                                GenericInput.transformer[properties.type].type
                            ) ?
                                GenericInput.transformer[properties.type]
                                    .type :
                                properties.type
                }
            />,
            !(isAdvancedEditor || properties.selection),
            richTextEditorLoadedOnce || properties.editor.startsWith('code')
        )}
    </div></WrapConfigurations>
    // / endregion
    // endregion
} as ForwardRefRenderFunction<WebComponentAdapter<Properties, State>, Props>
// NOTE: This is useful in react dev tools.
GenericInputInner.displayName = 'GenericInput'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:local - Location hint to properly represent values.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:transformer - Generic input data transformation
 * specifications.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const GenericInput:StaticComponent =
    memorize(forwardRef(GenericInputInner)) as unknown as StaticComponent
// region static properties
// / region web-component hints
GenericInput.wrapped = GenericInputInner
GenericInput.webComponentAdapterWrapped = 'react'
// / endregion
GenericInput.defaultModelState = defaultModelState
GenericInput.defaultProps = defaultProperties
GenericInput.local = 'en-US'
GenericInput.propTypes = propertyTypes
GenericInput.strict = false
GenericInput.transformer = {
    currency: {
        format: {
            final: {
                transform: (value:number):string => (new Intl.NumberFormat(
                    GenericInput.local,
                    {
                        currency: 'USD',
                        style: 'currency',
                        ...(
                            GenericInput.transformer.currency.format.final
                                .options ||
                            {}
                        )
                    }
                )).format(value)
            },
            intermediate: {
                transform: (value:string):any =>
                    GenericInput.transformer.float.format.intermediate
                        .transform(value)
            }
        },
        parse: (value:string):any =>
            GenericInput.transformer.float.parse(value),
        type: 'text'
    },
    float: {
        format: {
            final: {
                transform: (value:number):string => (new Intl.NumberFormat(
                    GenericInput.local,
                    {
                        style: 'decimal',
                        ...(
                            GenericInput.transformer.float.format.final
                                .options ||
                            {}
                        )
                    }
                )).format(value)
            },
            intermediate: {
                transform: (value:number):string => `${value}`
            }
        },
        parse: (value:string):any => parseFloat(
            typeof value === 'string' && GenericInput.local === 'de-DE' ?
                value.replace(/\./g, '').replace(/\,/g, '.') :
                value
        ),
        type: 'text'
    },
    integer: {
        format: {
            final: {
                transform: (value:number):string => (new Intl.NumberFormat(
                    GenericInput.local,
                    {
                        maximumFractionDigits: 0,
                        ...(
                            GenericInput.transformer.integer.format.final
                                .options ||
                            {}
                        )
                    }
                )).format(value)
            }
        },
        parse: (value:string):any => parseInt(
            typeof value === 'string' && GenericInput.local === 'de-DE' ?
                value.replace(/[,.]/g, '') :
                value
        ),
        type: 'text'
    },
    number: {parse: parseInt}
} as InputDataTransformation
// endregion
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
