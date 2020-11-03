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
import Tools from 'clientnode'
import {EvaluationResult} from 'clientnode/type'
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
    Editor as RichTextEditor, RawEditorSettings as RawTinyMCEEditorSettings
} from 'tinymce'
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

import Dummy from './Dummy'
import GenericAnimate from './GenericAnimate'
import styles from './GenericInput.module'
import WrapConfigurations from './WrapConfigurations'
import WrapTooltip from './WrapTooltip'
import {
    determineInitialValue,
    determineInitialRepresentation,
    determineValidationState as determineBaseValidationState,
    formatValue,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
    parseValue,
    transformValue,
    translateKnownSymbols,
    triggerCallbackIfExists,
    useMemorizedValue
} from '../helper'
import {
    CursorState,
    DataTransformSpecification,
    defaultInputModelState as defaultModelState,
    DefaultInputProperties as DefaultProperties,
    defaultInputProperties as defaultProperties,
    EditorState,
    InputAdapter as Adapter,
    InputDataTransformation,
    InputModelState as ModelState,
    InputProperties as Properties,
    inputPropertyTypes as propertyTypes,
    InputProps as Props,
    InputState as State,
    InputModel as Model,
    Renderable,
    StaticFunctionInputComponent as StaticComponent,
    ValueState
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
export type TinyMCEOptions = RawTinyMCEEditorSettings & {
    selector?:undefined
    target?:undefined
}
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
    properties:Properties<Type>, currentState:ModelState
):boolean {
    return determineBaseValidationState<Properties<Type>>(
        properties,
        currentState,
        {
            invalidMaximum: ():boolean => (
                typeof properties.model.maximum === 'number' &&
                typeof properties.model.value === 'number' &&
                !isNaN(properties.model.value) &&
                properties.model.maximum >= 0 &&
                properties.model.maximum < properties.model.value
            ),
            invalidMaximumLength: ():boolean => (
                typeof properties.model.maximumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.maximumLength >= 0 &&
                properties.model.maximumLength < properties.model.value.length
            ),
            invalidMinimum: ():boolean => (
                typeof properties.model.minimum === 'number' &&
                typeof properties.model.value === 'number' &&
                !isNaN(properties.model.value) &&
                properties.model.value < properties.model.minimum
            ),
            invalidMinimumLength: ():boolean => (
                typeof properties.model.minimumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.value.length < properties.model.minimumLength
            ),
            invalidPattern: ():boolean => (
                typeof properties.model.value === 'string' &&
                (
                    typeof properties.model.regularExpressionPattern ===
                        'string' &&
                    !(new RegExp(properties.model.regularExpressionPattern))
                        .test(properties.model.value) ||
                    properties.model.regularExpressionPattern !== null &&
                    typeof properties.model.regularExpressionPattern ===
                        'object' &&
                    !typeof properties.model.regularExpressionPattern
                        .test(properties.model.value)
                )
            )
        }
    )
}
// endregion
/**
 * Generic input wrapper component which automatically determines a useful
 * input field depending on given model specification.
 *
 * Dataflow:
 *
 * 1. On-Render all states are merged with given properties into a normalized
 *    property object.
 * 2. Properties, corresponding state values and sub node instances are saved
 *    into a "ref" object (to make them accessible from the outside e.g. for
 *    wrapper like web-components).
 * 3. Event handler saves corresponding data modifications into state and
 *    normalized properties object.
 * 4. All state changes except selection changes trigger an "onChange" event
 *    which delivers the consolidated properties object (with latest
 *    modifications included).
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const GenericInputInner = function<Type = any>(
    props:Props<Type>, reference?:RefObject<Adapter<Type>>
):ReactElement {
    // region live-cycle
    /**
     * Is triggered immediate after a re-rendering. Re-stores cursor selection
     * state if editor has been switched.
     * @returns Nothing.
     */
    useEffect(():void => {
        if (editorState.selectionIsUnstable)
            if (properties.editorIsActive) {
                /*
                    NOTE: If the corresponding editor are not loaded yet they
                    will set the selection state on initialisation as long as
                    "editorState.selectionIsUnstable" is set to "true".
                */
                if (codeEditorReference?.editor?.selection) {
                    codeEditorReference.editor.textInput.focus()
                    setCodeEditorSelectionState(codeEditorReference)
                    setEditorState(
                        {...editorState, selectionIsUnstable: false}
                    )
                } else if (richTextEditorInstance?.selection) {
                    richTextEditorInstance.focus(false)
                    setRichTextEditorSelectionState(richTextEditorInstance)
                    setEditorState(
                        {...editorState, selectionIsUnstable: false}
                    )
                }
            } else if (inputReference.current) {
                inputReference.current.focus();
                (
                    inputReference.current as
                        HTMLInputElement|HTMLTextAreaElement
                ).setSelectionRange(
                    properties.cursor.start, properties.cursor.end
                )
                setEditorState({...editorState, selectionIsUnstable: false})
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
    const applyIconPreset = (
        options?:Properties['icon']
    ):IconOptions|string|undefined => {
        if (options === 'clear_preset')
            return {
                icon: <GenericAnimate
                    in={properties.value !== properties.default}
                >
                    {(UseAnimations as typeof Dummy).isDummy ?
                        <IconButton icon="clear"/> :
                        <UseAnimations animation={plusToX} reverse={true}/>
                    }
                </GenericAnimate>,
                onClick: (event:ReactMouseEvent):void => {
                    event.preventDefault()
                    event.stopPropagation()
                    onChangeValue(transformValue<Properties<Type>, Type>(
                        properties,
                        properties.default,
                        GenericInput.transformer
                    ))
                },
                strategy: 'component',
                tooltip: 'Clear input'
            }
        if (options === 'password_preset')
            return useMemorizedValue(
                {
                    icon: (UseAnimations as typeof Dummy).isDummy ?
                        <IconButton
                            icon={properties.hidden ? 'lock_open' : 'lock'}
                        /> :
                        <UseAnimations
                            animation={lock} reverse={!properties.hidden}
                        />,
                    onClick: (event:ReactMouseEvent):void => {
                        event.preventDefault()
                        event.stopPropagation()
                        setHidden((value:boolean|undefined):boolean => {
                            if (value === undefined)
                                value = properties.hidden
                            properties.hidden = !value
                            onChange(event)
                            return properties.hidden
                        })
                    },
                    strategy: 'component',
                    tooltip:
                        `${(properties.hidden ? 'Show' : 'Hide')} password`
                },
                properties.hidden
            )
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
            const evaluated:EvaluationResult =
                Tools.stringEvaluate(`\`${template}\``, properties)
            if (evaluated.error) {
                console.warn(
                    'Given message template could not be proceed: ' +
                    evaluated.error
                )
                return ''
            }
            return evaluated.result
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
        propertiesOrInCondition:boolean|Partial<TransitionProps<HTMLElement|undefined>> =
            {},
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
    const wrapIconWithTooltip = (
        options?:Properties['icon']
    ):IconOptions|undefined => {
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
        if (!properties.value)
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
        if (typeof properties.value !== 'string' && !properties.value)
            return 0

        if (row > 0)
            return column + (properties.value as unknown as string)
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
        if (typeof properties.value === 'string')
            for (const line of properties.value.split('\n')) {
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
     * Sets current cursor selection range in given code editor instance.
     * @param instance - Code editor instance.
     * @returns Nothing.
     */
    const setCodeEditorSelectionState = (instance:CodeEditorType):void => {
        const range = instance.editor.selection.getRange()
        const endPosition = determineTablePosition(properties.cursor.end)
        range.setEnd(endPosition.row, endPosition.column)
        const startPosition = determineTablePosition(properties.cursor.start)
        range.setStart(startPosition.row, startPosition.column)
        instance.editor.selection.setRange(range)
    }
    /**
     * Sets current cursor selection range in given rich text editor instance.
     * @param instance - Code editor instance.
     * @returns Nothing.
     */
    const setRichTextEditorSelectionState = (instance:RichTextEditor):void => {
        const indicator:{
            end:string
            start:string
        } = {
            end: '###generic-input-selection-indicator-end###',
            start: '###generic-input-selection-indicator-start###'
        }
        const cursor:CursorState = {
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
    const mapPropertiesAndValidationStateIntoModel = (
        properties:Props<Type>
    ):DefaultProperties<Type> => {
        const result:DefaultProperties<Type> =
            mapPropertiesIntoModel<Props<Type>, Model<Type>>(
                properties,
                GenericInput.defaultProps.model as Model<Type>,
                props
            ) as DefaultProperties<Type>

        result.model.value = parseValue<Properties<Type>, Type>(
            result as unknown as Properties<Type>,
            result.model.value,
            GenericInput.transformer
        )

        determineValidationState<Type>(
            result as unknown as Properties<Type>, result.model.state
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
                mapPropertiesAndValidationStateIntoModel(properties)
            )

        // NOTE: If only an editor is specified it should be displayed.
        if (!(result.editor === 'plain' || result.selectableEditor))
            result.editorIsActive = true

        if (
            typeof result.representation !== 'string' &&
            ![null, undefined].includes(result.value as null)
        )
            result.representation = formatValue<Type>(
                result.value as Type,
                result.type,
                GenericInput.transformer,
                !result.focused
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

        if (
            codeEditorReference &&
            properties.editorIsActive &&
            editorState.selectionIsUnstable
        ) {
            codeEditorReference.editor.textInput.focus()
            setCodeEditorSelectionState(codeEditorReference)
            setEditorState({...editorState, selectionIsUnstable: false})
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
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Nothing.
     */
    const onBlur = (event:SyntheticEvent):void => setValueState((
        oldValueState:ValueState<Type, ModelState>
    ):ValueState<Type, ModelState> => {
        let changed:boolean = false
        let stateChanged:boolean = false

        if (oldValueState.modelState.focused) {
            properties.focused = false
            changed = true
            stateChanged = true
        }

        if (!oldValueState.modelState.visited) {
            properties.visited = true
            changed = true
            stateChanged = true
        }

        properties.value = transformValue<Properties<Type>, Type>(
            properties, properties.value, GenericInput.transformer
        )
        properties.representation = typeof properties.value === 'string' ?
            properties.value :
            formatValue<Type>(
                properties.value as null|Type,
                properties.type,
                GenericInput.transformer
            )

        if (
            oldValueState.value !== properties.value ||
            oldValueState.representation !== properties.representation
        )
            changed = true

        if (changed)
            onChange(event)

        if (oldValueState.value !== properties.value)
            triggerCallbackIfExists<Type>(
                properties, 'valueChange', properties.value, event
            )

        if (stateChanged)
            triggerCallbackIfExists<Type>(
                properties, 'changeState', properties.model.state, event
            )

        triggerCallbackIfExists<Type>(properties, 'blur', event)

        return changed ?
            {
                modelState: properties.model.state,
                representation: properties.representation,
                value: properties.value
            } :
            oldValueState
    })
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChange = (event?:SyntheticEvent):void => {
        Tools.extend(
            true,
            properties,
            getConsolidatedProperties(
                /*
                    Workaround since "Type" isn't identified as subset of
                    "RecursivePartial<Type>" yet.
                */
                properties as unknown as Props<Type>
            )
        )

        triggerCallbackIfExists<Type>(properties, 'change', properties, event)
    }
    /**
     * Triggered when editor is active indicator should be changed.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onChangeEditorIsActive = (event?:ReactMouseEvent):void => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }
        setEditorState(({editorIsActive}):EditorState => {
            properties.editorIsActive = !editorIsActive

            onChange(event)

            triggerCallbackIfExists<Type>(
                properties,
                'changeEditorIsActive',
                properties.editorIsActive,
                event
            )

            return {
                editorIsActive: properties.editorIsActive,
                selectionIsUnstable: true
            }
        })
    }
    /**
     * Triggered when show declaration indicator should be changed.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChangeShowDeclaration = (event?:ReactMouseEvent):void => {
        if (event) {
            event.preventDefault()
            event.stopPropagation()
        }
        setShowDeclaration((value:boolean):boolean => {
            properties.showDeclaration = !value

            onChange(event)

            triggerCallbackIfExists<Type>(
                properties,
                'changeShowDeclaration',
                properties.showDeclaration,
                event
            )

            return properties.showDeclaration
        })
    }
    /**
     * Triggered when ever the value changes.
     * @param eventOrValue - Event object or new value.
     * @returns Nothing.
     */
    const onChangeValue = (
        eventOrValue:null|SyntheticEvent|Type, editorInstance?:RichTextEditor
    ):void => {
        if (properties.disabled)
            return

        let event:SyntheticEvent|undefined
        if (eventOrValue !== null && typeof eventOrValue === 'object') {
            const target:any =
                (eventOrValue as SyntheticEvent).target ||
                (eventOrValue as {detail?:any}).detail
            if (target)
                properties.value = typeof target.value === 'undefined' ?
                    null :
                    target.value
            else
                properties.value = eventOrValue as null|Type
        } else
            properties.value = eventOrValue as null|Type

        setValueState((
            oldValueState:ValueState<Type, ModelState>
        ):ValueState<Type, ModelState> => {
            properties.representation = typeof properties.value === 'string' ?
                properties.value :
                formatValue<Type>(
                    properties.value as null|Type,
                    properties.type,
                    GenericInput.transformer
                )
            properties.value = parseValue<Properties<Type>, Type>(
                properties, properties.value, GenericInput.transformer
            )

            const result:ValueState<Type, ModelState> = {
                ...oldValueState, representation: properties.representation
            }
            if (oldValueState.value === properties.value)
                return result

            result.value = properties.value

            let stateChanged:boolean = false

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState<Type>(
                properties, oldValueState.modelState
            ))
                stateChanged = true

            triggerCallbackIfExists<Type>(
                properties, 'changeValue', properties.value, event
            )

            if (stateChanged) {
                result.modelState = properties.model.state

                triggerCallbackIfExists<Type>(
                    properties, 'changeState', properties.model.state, event
                )
            }

            return result
        })
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
        onSelectionChange(event)

        triggerCallbackIfExists<Type>(properties, 'click', event)

        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        triggerCallbackIfExists<Type>(properties, 'focus', event)

        onTouch(event)
    }
    /**
     * Triggered on key up events.
     * @param event - Key up event object.
     * @returns Nothing.
     */
    const onKeyUp = (event:ReactKeyboardEvent):void => {
        onSelectionChange(event)

        triggerCallbackIfExists<Type>(properties, 'keyUp', event)
    }
    /**
     * Triggered on selection change events.
     * @param event - Event which triggered selection change.
     * @returns Nothing.
     */
    const onSelectionChange = (event:SyntheticEvent):void => {
        /*
            We assume that this event is triggered after a property
            consolidation.
        */
        saveSelectionState()

        triggerCallbackIfExists<Type>(properties, 'selectionChange', event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((
            oldValueState:ValueState<Type, ModelState>
        ):ValueState<Type, ModelState> => {
            let changedState:boolean = false

            if (!oldValueState.modelState.focused) {
                properties.focused = true
                changedState = true
            }

            if (oldValueState.modelState.untouched) {
                properties.touched = true
                properties.untouched = false
                changedState = true
            }

            let result:ValueState<Type, ModelState> = oldValueState

            if (changedState) {
                onChange(event)

                result = {...oldValueState, modelState: properties.model.state}

                triggerCallbackIfExists<Type>(
                    properties, 'changeState', properties.model.state, event
                )
            }

            triggerCallbackIfExists<Type>(properties, 'touch', event)

            return result
        })
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
    const givenProperties:Props<Type> = translateKnownSymbols(props)
    const [cursor, setCursor] = useState<CursorState>({end: 0, start: 0})
    let [hidden, setHidden] = useState<boolean|undefined>()
    let [editorState, setEditorState] = useState<EditorState>({
        editorIsActive: false, selectionIsUnstable: false
    })
    let [showDeclaration, setShowDeclaration] = useState<boolean>(false)
    const initialValue:null|Type = determineInitialValue<Type>(
        props, GenericInput.defaultProps.model?.default
    )
    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    const [valueState, setValueState] = useState<ValueState<Type, ModelState>>(
        {
            modelState: {...GenericInput.defaultModelState},
            representation: determineInitialRepresentation<Props<Type>, Type>(
                props,
                GenericInput.defaultProps,
                initialValue,
                GenericInput.transformer
            ),
            value: initialValue
        }
    )
    // / region derive missing properties from state variables and back
    if (
        givenProperties.cursor === null ||
        typeof givenProperties.cursor !== 'object'
    )
        givenProperties.cursor = {} as CursorState
    if (givenProperties.cursor.end === undefined)
        givenProperties.cursor.end = cursor.end
    if (givenProperties.cursor.start === undefined)
        givenProperties.cursor.start = cursor.start

    if (givenProperties.editorIsActive === undefined)
        givenProperties.editorIsActive = editorState.editorIsActive

    if (givenProperties.hidden === undefined)
        givenProperties.hidden = hidden
    if (givenProperties.hidden === undefined)
        givenProperties.hidden = givenProperties.name?.startsWith('password')

    if (givenProperties.showDeclaration === undefined)
        givenProperties.showDeclaration = showDeclaration
    // // region value state
    /*
        NOTE: React simply copies "defaultProps" flat to we have to do a deep
        copy here. Otherwise different rendering cycles would depend manipulate
        each other.
    */
    givenProperties.model = {...givenProperties.model}
    if (givenProperties.model.value === undefined)
        givenProperties.model.value = valueState.value

    if (givenProperties.value === undefined) {
        if (givenProperties.representation === undefined)
            givenProperties.representation = valueState.representation
    } else
        givenProperties.representation = undefined

    if (givenProperties.model.state)
        givenProperties.model.state = {...givenProperties.model.state}
    else
        givenProperties.model.state = {} as ModelState
    for (const key in valueState.modelState)
        if (
            Object.prototype.hasOwnProperty.call(valueState.modelState, key) &&
            (
                givenProperties.model.state as Partial<ModelState>
            )[key as keyof ModelState] === undefined
        )
            givenProperties.model.state[key as keyof ModelState] =
                valueState.modelState[key as keyof ModelState]
    // // endregion
    const properties:Properties<Type> =
        getConsolidatedProperties(givenProperties)
    if (!Tools.equals(properties.cursor, cursor))
        setCursor(properties.cursor)
    if (properties.editorIsActive !== editorState.editorIsActive)
        setEditorState({
            ...editorState,
            editorIsActive: properties.editorIsActive
        })
    if (properties.hidden !== hidden)
        setHidden(properties.hidden)
    if (properties.showDeclaration !== showDeclaration)
        setShowDeclaration(properties.showDeclaration)

    if (!(
        properties.value === valueState.value &&
        properties.representation === valueState.representation &&
        Tools.equals(properties.model.state, valueState.modelState)
    ))
        setValueState({
            modelState: properties.model.state,
            representation: properties.representation,
            value: properties.value as null|Type
        })
    // / endregion
    useImperativeHandle(
        reference,
        ():Adapter<Type> & {
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
                cursor: properties.cursor,
                editorIsActive: properties.editorIsActive,
                hidden: properties.hidden,
                modelState: properties.model.state,
                representation: properties.representation,
                showDeclaration: properties.showDeclaration,
                value: properties.value as null|Type
            }
        })
    )
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

                if (
                    properties.editorIsActive &&
                    editorState.selectionIsUnstable
                ) {
                    richTextEditorInstance.focus(false)
                    setRichTextEditorSelectionState(richTextEditorInstance)
                    setEditorState(
                        {...editorState, selectionIsUnstable: false}
                    )
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
                                    onClick={onClick as
                                        unknown as
                                        RichTextEventHandler<MouseEvent>
                                    }
                                    onEditorChange={onChangeValue as
                                        unknown as
                                        RichTextEditorProps['onEditorChange']
                                    }
                                    onKeyUp={onKeyUp as
                                        unknown as
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
                max={properties.maximum >= 0 ? properties.maximum : Infinity}
                maxLength={properties.maximumLength >= 0 ? properties.maximumLength : Infinity}
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
} as ForwardRefRenderFunction<Adapter, Props>
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
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
GenericInput.defaultProps = {
    ...defaultProperties,
    cursor: undefined,
    model: {...defaultProperties.model, state: undefined, value: undefined},
    representation: undefined,
    value: undefined
}
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
