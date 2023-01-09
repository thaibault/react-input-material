// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module GenericInput */
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
import {Ace as CodeEditorNamespace} from 'ace-builds'

import Tools from 'clientnode'
import {EvaluationResult, Mapping} from 'clientnode/type'

import {
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardedRef,
    KeyboardEvent as ReactKeyboardEvent,
    lazy,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    MutableRefObject,
    ReactElement,
    ReactNode,
    Suspense,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
    useState
} from 'react'
import CodeEditorType, {IAceEditorProps as CodeEditorProps} from 'react-ace'
import Dummy from 'react-generic-dummy'
import {TransitionProps} from 'react-transition-group/Transition'
import UseAnimationsType from 'react-useanimations'
import LockAnimation from 'react-useanimations/lib/lock'
import PlusToXAnimation from 'react-useanimations/lib/plusToX'

import {Editor as RichTextEditor} from 'tinymce'

import {MDCMenuFoundation} from '@material/menu'
import {MDCSelectFoundation} from '@material/select'
import {MDCTextFieldFoundation} from '@material/textfield'

import {CircularProgress} from '@rmwc/circular-progress'
import {FormField} from '@rmwc/formfield'
import {Icon} from '@rmwc/icon'
import {IconButton} from '@rmwc/icon-button'
import {
    Menu, MenuApi, MenuSurface, MenuSurfaceAnchor, MenuItem, MenuOnSelectEventT
} from '@rmwc/menu'
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

import GenericAnimate from '../GenericAnimate'
/*
"namedExport" version of css-loader:

import {
    genericInputSuggestionsSuggestionClassName,
    genericInputSuggestionsSuggestionMarkClassName,
    genericInputClassName,
    genericInputCustomClassName,
    genericInputEditorLabelClassName,
    genericInputSuggestionsClassName,
    genericInputSuggestionsPendingClassName
} from './style.module'
 */
import cssClassNames from './style.module'
import WrapConfigurations from '../WrapConfigurations'
import WrapTooltip from '../WrapTooltip'
import {
    deriveMissingPropertiesFromState as deriveMissingBasePropertiesFromState,
    determineInitialValue,
    determineInitialRepresentation,
    determineValidationState as determineBaseValidationState,
    formatValue,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    getLabelAndValues,
    getValueFromSelection,
    mapPropertiesIntoModel,
    normalizeSelection,
    parseValue,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../../helper'
import {
    CursorState,
    DataTransformSpecification,
    defaultInputModelState as defaultModelState,
    DefaultInputProperties as DefaultProperties,
    defaultInputProperties as defaultProperties,
    EditorState,
    GenericEvent,
    InputAdapter as Adapter,
    InputAdapterWithReferences as AdapterWithReferences,
    InputDataTransformation,
    InputModelState as ModelState,
    InputProperties as Properties,
    inputPropertyTypes as propertyTypes,
    InputProps as Props,
    inputRenderProperties as renderProperties,
    InputState as State,
    InputModel as Model,
    NativeInputType,
    NormalizedSelection,
    Renderable,
    GenericInputComponent,
    InputTablePosition as TablePosition,
    InputValueState as ValueState,
    TinyMCEOptions
} from '../../type'

declare const TARGET_TECHNOLOGY:string

const isBrowser =
    !(TARGET_TECHNOLOGY === 'node' || typeof window === undefined)
/* eslint-disable @typescript-eslint/no-var-requires */
const GivenRichTextEditorComponent:typeof RichTextEditorComponent =
    isBrowser && RichTextEditorComponent ?
        RichTextEditorComponent :
        Dummy as unknown as typeof RichTextEditorComponent
const UseAnimations:null|typeof Dummy|typeof UseAnimationsType = isBrowser ?
    (require('react-useanimations') as
        {default:null|typeof Dummy|typeof UseAnimationsType}
    )?.default : null
const lockAnimation:null|typeof LockAnimation = isBrowser ?
    (require('react-useanimations/lib/lock') as
        {default:null|typeof LockAnimation}
    )?.default : null
const plusToXAnimation:null|typeof PlusToXAnimation = isBrowser ?
    (require('react-useanimations/lib/plusToX') as
        {default:null|typeof PlusToXAnimation}
    )?.default : null
/* eslint-enable @typescript-eslint/no-var-requires */
// endregion
const CSS_CLASS_NAMES:Mapping = cssClassNames as Mapping
// region code editor configuration
export const ACEEditorOptions = {
    basePath: '/node_modules/ace-builds/src-noconflict/',
    useWorker: false
}
const CodeEditor = lazy<typeof CodeEditorType>(
    async ():Promise<{default:typeof CodeEditorType}> => {
        const {config} = await import('ace-builds')
        for (const [name, value] of Object.entries(ACEEditorOptions))
            config.set(name, value)

        return await import('react-ace')
    }
)
// endregion
// region rich text editor configuration
declare const UTC_BUILD_TIMESTAMP:number|undefined
// NOTE: Could be set via module bundler environment variables.
const CURRENT_UTC_BUILD_TIMESTAMP =
    typeof UTC_BUILD_TIMESTAMP === 'undefined' ? 1 : UTC_BUILD_TIMESTAMP
let richTextEditorLoadedOnce = false
const tinymceBasePath = '/node_modules/tinymce/'
export const TINYMCE_DEFAULT_OPTIONS:Partial<TinyMCEOptions> = {
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
    cache_suffix: `?version=${CURRENT_UTC_BUILD_TIMESTAMP}`,
    contextmenu: [],
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
    plugins: [
        'fullscreen',
        'link',
        'code',
        'nonbreaking',
        'searchreplace',
        'visualblocks'
    ],
    /* eslint-enable max-len */
    relative_urls: false,
    remove_script_host: false,
    remove_trailing_brs: true,
    schema: 'html5',
    toolbar1: `
        cut copy paste |
        undo redo removeformat |
        styleselect formatselect fontselect fontsizeselect |
        searchreplace visualblocks fullscreen code
    `.trim(),
    toolbar2: `
        alignleft aligncenter alignright alignjustify outdent indent |
        link nonbreaking bullist numlist bold italic underline strikethrough
    `.trim(),
    trim: true
    /* eslint-enable camelcase */
}
// endregion
// region static helper
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param currentState - Current component state.
 *
 * @returns Boolean indicating whether component is in an aggregated valid or
 * invalid state.
 */
export function determineValidationState<T>(
    properties:DefaultProperties<T>, currentState:Partial<ModelState>
):boolean {
    return determineBaseValidationState<
        DefaultProperties<T>, Partial<ModelState>
    >(
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
            invalidMinimum: ():boolean => (
                typeof properties.model.minimum === 'number' &&
                typeof properties.model.value === 'number' &&
                !isNaN(properties.model.value) &&
                properties.model.value < properties.model.minimum
            ),

            invalidMaximumLength: ():boolean => (
                typeof properties.model.maximumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.maximumLength >= 0 &&
                properties.model.maximumLength < properties.model.value.length
            ),
            invalidMinimumLength: ():boolean => (
                typeof properties.model.minimumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.value.length < properties.model.minimumLength
            ),

            invalidInvertedPattern: ():boolean => (
                typeof properties.model.value === 'string' &&
                ([] as Array<null|RegExp|string>)
                    .concat(properties.model.invertedRegularExpressionPattern)
                    .some((expression:null|RegExp|string):boolean =>
                        typeof expression === 'string' &&
                        (new RegExp(expression)).test(
                            properties.model.value as unknown as string
                        ) ||
                        expression !== null &&
                        typeof expression === 'object' &&
                        expression
                            .test(properties.model.value as unknown as string)
                    )
            ),
            invalidPattern: ():boolean => (
                typeof properties.model.value === 'string' &&
                ([] as Array<null|RegExp|string>)
                    .concat(properties.model.regularExpressionPattern)
                    .some((expression:null|RegExp|string):boolean =>
                        typeof expression === 'string' &&
                        !(new RegExp(expression)).test(
                            properties.model.value as unknown as string
                        ) ||
                        expression !== null &&
                        typeof expression === 'object' &&
                        !expression
                            .test(properties.model.value as unknown as string)
                    )
            )
        }
    )
}
/**
 * Avoid propagating the enter key event since this usually sends a form which
 * is not intended when working in a text field.
 * @param event - Keyboard event.
 *
 * @returns Nothing.
 */
export function preventEnterKeyPropagation(event:ReactKeyboardEvent):void {
    if (Tools.keyCode.ENTER === event.keyCode)
        event.stopPropagation()
}
/**
 * Indicates whether a provided query is matching currently provided
 * suggestion.
 * @param suggestion - Candidate to match again.
 * @param query - Search query to check for matching.
 *
 * @returns Boolean result whether provided suggestion matches given query or
 * not.
 */
export function suggestionMatches(
    suggestion:string, query?:null|string
):boolean {
    if (query) {
        suggestion = suggestion.toLowerCase()

        return query
            .replace(/  +/g, ' ')
            .toLowerCase()
            .split(' ')
            .every((part:string):boolean => suggestion.includes(part))
    }

    return false
}
// endregion
/* eslint-disable jsdoc/require-description-complete-sentence */
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
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 *
 * @returns React elements.
 */
export const GenericInputInner = function<Type = unknown>(
    props:Props<Type>, reference?:ForwardedRef<Adapter<Type>>
):ReactElement {
    const id:string = useId()
/* eslint-enable jsdoc/require-description-complete-sentence */
    // region live-cycle
    /// region text-editor selection synchronisation
    /**
     * Is triggered immediate after a re-rendering. Re-stores cursor selection
     * state if editor has been switched.
     * @returns Nothing.
     */
    useEffect(():void => {
        if (selectionIsUnstable || editorState.selectionIsUnstable)
            if (properties.editorIsActive) {
                /*
                    NOTE: If the corresponding editor are not loaded yet they
                    will set the selection state on initialisation as long as
                    "editorState.selectionIsUnstable" is set to "true".
                */
                if (codeEditorReference.current?.editor?.selection) {
                    (codeEditorReference.current.editor.textInput as
                        unknown as
                        HTMLInputElement
                    ).focus()
                    setCodeEditorSelectionState(codeEditorReference.current)

                    if (editorState.selectionIsUnstable)
                        setEditorState(
                            {...editorState, selectionIsUnstable: false}
                        )
                } else if (richTextEditorInstance.current?.selection) {
                    richTextEditorInstance.current.focus(false)
                    setRichTextEditorSelectionState(
                        richTextEditorInstance.current
                    )

                    if (editorState.selectionIsUnstable)
                        setEditorState(
                            {...editorState, selectionIsUnstable: false}
                        )
                }
            } else if (inputReference.current) {
                // eslint-disable-next-line @typescript-eslint/no-extra-semi
                ;(
                    inputReference.current as
                        HTMLInputElement|HTMLTextAreaElement
                ).setSelectionRange(
                    properties.cursor.start, properties.cursor.end
                )

                if (editorState.selectionIsUnstable)
                    setEditorState(
                        {...editorState, selectionIsUnstable: false}
                    )
            }
    })
    /// endregion
    /// region input element property synchronisation
    /**
     * Is triggered immediate after a re-rendering. Connects error message
     * with input element.
     * @returns Nothing.
     */
    useEffect(():void => {
        if (inputReference.current) {
            const determinedInputProps:Mapping<boolean|number|string> = {}
            const propsToRemove:Array<string> = []

            // Apply aria attributes regarding validation state.
            if (properties.valid) {
                propsToRemove.push('ariaErrormessage')
                propsToRemove.push('ariaInvalid')
            } else {
                determinedInputProps.ariaErrormessage =
                    `${id}-error-message`
                determinedInputProps.ariaInvalid = 'true'
            }

            // Apply aria attributes regarding searching.
            if (useSuggestions) {
                if (inputReference.current.getAttribute('type') !== 'search')
                    determinedInputProps.role = 'searchbox'

                determinedInputProps.ariaAutocomplete =
                    properties.searchSelection ? 'inline' : 'list'
            } else {
                propsToRemove.push('searchbox')
                propsToRemove.push('ariaAutocomplete')
            }

            if (properties.showDeclaration)
                determinedInputProps.ariaDescribedby = `${id}-declaration`
            else
                propsToRemove.push('ariaDescribedby')

            const inputProps = {
                ...determinedInputProps, ...properties.inputProps || {}
            }

            // Apply configured native input properties.
            for (const [name, value] of Object.entries(inputProps)) {
                const attributeName:string =
                    Tools.stringCamelCaseToDelimited(name)

                if (typeof value === 'boolean')
                    if (value)
                        inputReference.current.setAttribute(attributeName, '')
                    else
                        inputReference.current.removeAttribute(attributeName)
                else
                    inputReference.current.setAttribute(
                        attributeName, String(value)
                    )
            }

            for (const name of propsToRemove) {
                const attributeName:string =
                    Tools.stringCamelCaseToDelimited(name)
                if (inputReference.current.hasAttribute(attributeName))
                    inputReference.current.removeAttribute(attributeName)
            }
        }
    })
    /// endregion
    /// region apply missing initial aria attribute regarding menu popup state.
    /**
     * Is triggered immediate after a re-rendering. Sets initial aria list box
     * opening and hidden state.
     * @returns Nothing.
     */
    useEffect(():void => {
        if (useSelection) {
            const selectionWrapper:HTMLElement|null|undefined =
                wrapperReference.current?.querySelector(
                    '[aria-haspopup="listbox"]'
                )
            if (selectionWrapper) {
                if (!selectionWrapper.hasAttribute('aria-expanded'))
                    selectionWrapper.setAttribute('aria-expanded', 'false')

                const activeIcon:HTMLElement|null = selectionWrapper
                    .querySelector('.mdc-select__dropdown-icon-active')
                if (activeIcon && !activeIcon.hasAttribute('aria-hidden'))
                    activeIcon.setAttribute('aria-hidden', 'true')

                const inactiveIcon:HTMLElement|null = selectionWrapper
                    .querySelector('.mdc-select__dropdown-icon-inactive')
                if (inactiveIcon && !inactiveIcon.hasAttribute('aria-hidden'))
                    inactiveIcon.setAttribute('aria-hidden', 'true')
            }
        }
    })
    /// endregion
    /// region avoid accidentally opening select menu.
    /**
     * Is triggered immediate after a re-rendering. Captures key down events
     * on disabled select fields.
     * @returns Nothing.
     */
    useEffect(():void|(() => void) => {
        if (useSelection) {
            const selectionWrapper:HTMLElement|null|undefined =
                wrapperReference.current?.querySelector(
                    '[aria-haspopup="listbox"]'
                )
            if (selectionWrapper) {
                const handler = (event:KeyboardEvent):void => {
                    if (properties.disabled)
                        event.stopPropagation()
                }

                selectionWrapper.addEventListener('keydown', handler, true)

                return ():void => {
                    selectionWrapper.removeEventListener(
                        'keydown', handler, true
                    )
                }
            }
        }
    })
    /// endregion
    // endregion
    // region context helper
    /// region render helper
    /**
     * Applies icon preset configurations.
     * @param options - Icon options to extend of known preset identified.
     *
     * @returns Given potential extended icon configuration.
     */
    const applyIconPreset = (
        options?:Properties['icon']
    ):IconOptions|string|undefined => {
        if (options === 'clear_preset') {
            const handler = (
                event:ReactKeyboardEvent|ReactMouseEvent
            ):void => {
                if (
                    typeof (event as ReactKeyboardEvent).keyCode ===
                        'number' &&
                    ![Tools.keyCode.ENTER, Tools.keyCode.SPACE].includes(
                        (event as ReactKeyboardEvent).keyCode
                    )
                )
                    return

                event.preventDefault()
                event.stopPropagation()

                onChangeValue(parseValue<Type>(
                    properties,
                    properties.default as Type,
                    GenericInput.transformer
                ))
            }

            const hide:boolean =
                Tools.equals(properties.value, properties.default) as boolean
            return {
                icon: <GenericAnimate in={!hide}>
                    {(
                        UseAnimations &&
                        !(UseAnimations as typeof Dummy).isDummy &&
                        plusToXAnimation
                    ) ?
                        <UseAnimations
                            animation={plusToXAnimation} reverse={true}
                        /> :
                        <Icon icon="clear" />
                    }
                </GenericAnimate>,

                'aria-hidden': hide ? 'true' : 'false',
                onClick: handler,
                onKeyDown: handler,
                tabIndex: hide ? -1 : 0,
                strategy: 'component',
                tooltip: 'Clear input'
            }
        }

        if (options === 'password_preset') {
            const handler = (
                event:ReactKeyboardEvent|ReactMouseEvent
            ):void => {
                if (
                    typeof (event as ReactKeyboardEvent).keyCode ===
                        'number' &&
                    ![Tools.keyCode.ENTER, Tools.keyCode.SPACE].includes(
                        (event as ReactKeyboardEvent).keyCode
                    )
                )
                    return

                event.preventDefault()
                event.stopPropagation()

                setHidden((value:boolean|undefined):boolean => {
                    if (value === undefined)
                        value = properties.hidden
                    properties.hidden = !value

                    onChange(event)

                    return properties.hidden
                })
            }

            return {
                icon: (
                    UseAnimations &&
                    !(UseAnimations as typeof Dummy).isDummy &&
                    lockAnimation
                ) ?
                    <UseAnimations
                        animation={lockAnimation}
                        reverse={!properties.hidden}
                    /> :
                    properties.hidden ? 'lock_open' : 'lock',

                onClick: handler,
                onKeyDown: handler,
                strategy: 'component',
                tooltip: `${(properties.hidden ? 'Show' : 'Hide')} password`
            }
        }

        if (options) {
            if (typeof options === 'string')
                options = {icon: options}

            if (!Object.prototype.hasOwnProperty.call(options, 'onClick')) {
                options.tabIndex = -1
                options['aria-hidden'] = true
            }
        }

        return options
    }
    /**
     * Derives native input type from given input property configuration.
     * @param properties - Input configuration to derive native input type
     * from.
     *
     * @returns Determined input type.
     */
    const determineNativeType = (
        properties:Properties<Type>
    ):NativeInputType =>
        (
            properties.type === 'string' ?
                properties.hidden ?
                    'password' :
                    useSuggestions ?
                        'search' :
                        'text' :
                transformer[
                    properties.type as keyof InputDataTransformation
                ]?.type ?? properties.type
        ) as NativeInputType
    /**
     * Render help or error texts with current validation state color.
     * @returns Determined renderable markup specification.
     */
    const renderHelpText = ():ReactElement => <>
        <GenericAnimate
            in={
                properties.selectableEditor &&
                properties.type === 'string' &&
                properties.editor !== 'plain'
            }
        >
            <IconButton
                icon={{
                    // TODO make configurable
                    'aria-label':
                        properties.editorIsActive ?
                            'plain' :
                            properties.editor.startsWith('code') ?
                                'code' :
                                'richtext',
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
                    'aria-expanded':
                        properties.showDeclaration ? 'true' : 'false',
                    // TODO make configurable
                    'aria-label': 'declaration',
                    icon:
                        'more_' +
                        (properties.showDeclaration ? 'vert' : 'horiz'),
                    onClick: onChangeShowDeclaration,
                    onKeyDown: onChangeShowDeclaration
                }}
            />
        </GenericAnimate>
        <GenericAnimate
            id={`${id}-declaration`}
            in={properties.showDeclaration}
        >
            {properties.declaration}
        </GenericAnimate>
        <GenericAnimate
            in={
                !properties.showDeclaration &&
                properties.invalid &&
                properties.showValidationState &&
                (properties.showInitialValidationState || properties.visited)
            }
        >
            <Theme use="error" wrap={true}>
                <span id={`${id}-error-message`}>
                    {renderMessage(
                        properties.invalidMaximum &&
                        properties.maximumText ||
                        properties.invalidMaximumLength &&
                        properties.maximumLengthText ||
                        properties.invalidMinimum &&
                        properties.minimumText ||
                        properties.invalidMinimumLength &&
                        properties.minimumLengthText ||
                        properties.invalidInvertedPattern &&
                        properties.invertedPatternText ||
                        properties.invalidPattern &&
                        properties.patternText ||
                        properties.invalidRequired &&
                        properties.requiredText
                    )}
                </span>
            </Theme>
        </GenericAnimate>
    </>
    /**
     * Renders given template string against all properties in current
     * instance.
     * @param template - Template to render.
     *
     * @returns Evaluated template or an empty string if something goes wrong.
     */
    const renderMessage = (template?:unknown):string => {
        if (typeof template === 'string') {
            const evaluated:EvaluationResult = Tools.stringEvaluate(
                `\`${template}\``,
                {
                    formatValue: (value:Type):string =>
                        formatValue<Type>(properties, value, transformer),
                    ...properties
                }
            )

            if (evaluated.error) {
                console.warn(
                    'Given message template could not be proceed:',
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
     * @param condition - Show condition.
     *
     * @returns Wrapped component.
     */
    const wrapAnimationConditionally = (
        content:Renderable,
        propertiesOrInCondition:(
            boolean|Partial<TransitionProps<HTMLElement|undefined>>
        ) = {},
        condition = true
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
     *
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
    /// endregion
    /// region handle cursor selection state
    //// region rich-text editor
    /**
     * Determines absolute offset in given markup.
     * @param contentDomNode - Wrapping dom node where all content is
     * contained.
     * @param domNode - Dom node which contains given position.
     * @param offset - Relative position within given node.
     *
     * @returns Determine absolute offset.
     */
    const determineAbsoluteSymbolOffsetFromHTML = (
        contentDomNode:Element, domNode:Element, offset:number
    ):number => {
        if (!properties.value)
            return 0

        const indicatorKey = 'generic-input-selection-indicator'
        const indicatorValue = '###'
        const indicator = ` ${indicatorKey}="${indicatorValue}"`

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
    //// endregion
    //// region code editor
    /**
     * Determines absolute range from table oriented position.
     * @param column - Symbol offset in given row.
     * @param row - Offset row.
     *
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
     *
     * @returns Position.
     */
    const determineTablePosition = (offset:number):TablePosition => {
        const result:TablePosition = {column: 0, row: 0}

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
     *
     * @returns Nothing.
     */
    const setCodeEditorSelectionState = (instance:CodeEditorType):void => {
        const range:CodeEditorNamespace.Range =
            instance.editor.selection.getRange()
        const endPosition:TablePosition =
            determineTablePosition(properties.cursor.end)
        range.setEnd(endPosition.row, endPosition.column)
        const startPosition:TablePosition =
            determineTablePosition(properties.cursor.start)
        range.setStart(startPosition.row, startPosition.column)
        instance.editor.selection.setRange(range)
    }
    /**
     * Sets current cursor selection range in given rich text editor instance.
     * @param instance - Code editor instance.
     *
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

        let value:string = properties.representation as string
        for (const type of keysSorted)
            value = (
                value.substring(0, cursor[type]) +
                indicator[type] +
                value.substring(cursor[type])
            )
        instance.getBody().innerHTML = value

        const walker:TreeWalker = document.createTreeWalker(
            instance.getBody(), NodeFilter.SHOW_TEXT, null
        )

        const range:Range = instance.dom.createRng()
        const result:{
            end?:[Node, number]
            start?:[Node, number]
        } = {}

        let node:Node|null
        while (node = walker.nextNode())
            for (const type of keysSorted)
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

        for (const type of keysSorted)
            if (result[type])
                range[
                    `set${Tools.stringCapitalize(type)}` as 'setEnd'|'setStart'
                ](...(result[type] as [Node, number]))

        if (result.end && result.start)
            instance.selection.setRng(range)
    }
    //// endregion
    /**
     * Saves current selection/cursor state in components state.
     * @param event - Event which triggered selection change.
     *
     * @returns Nothing.
     */
    const saveSelectionState = (event:GenericEvent):void => {
        /*
            NOTE: Known issues is that we do not get the absolute positions but
            the one in current selected node.
        */
        const codeEditorRange =
            codeEditorReference.current?.editor?.selection?.getRange()
        const richTextEditorRange =
            richTextEditorInstance.current?.selection?.getRng()
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
                    richTextEditorInstance.current!.getBody(),
                    richTextEditorInstance.current!.selection.getEnd(),
                    richTextEditorRange.endOffset
                ),
                start: determineAbsoluteSymbolOffsetFromHTML(
                    richTextEditorInstance.current!.getBody(),
                    richTextEditorInstance.current!.selection.getStart(),
                    richTextEditorRange.startOffset
                )
            })
        else if (
            typeof selectionEnd === 'number' &&
            typeof selectionStart === 'number'
        ) {
            const add:0|1|-1 =
                (event as unknown as KeyboardEvent)?.key?.length === 1 ?
                    1 :
                    (event as unknown as KeyboardEvent)?.key === 'Backspace' &&
                    (
                        (properties.representation as string).length >
                        selectionStart
                    ) ?
                        -1 :
                        0

            setCursor({end: selectionEnd + add, start: selectionStart + add})
        }
    }
    /// endregion
    /// region property aggregation
    const deriveMissingPropertiesFromState = () => {
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

        /*
            NOTE: This logic is important to re-determine representation when a
            new value is provided via properties.
        */
        if (givenProperties.representation === undefined)
            givenProperties.representation = valueState.representation

        if (givenProperties.showDeclaration === undefined)
            givenProperties.showDeclaration = showDeclaration

        deriveMissingBasePropertiesFromState<Props<Type>, ValueState<Type>>(
            givenProperties, valueState
        )

        if (givenProperties.value === undefined) {
            if (
                givenProperties.representation === undefined &&
                givenProperties.model!.value === undefined
            )
                givenProperties.representation = valueState.representation
        } else if (
            !representationControlled &&
            givenProperties.value !== valueState.value
        )
            /*
                NOTE: Set representation to "undefined" to trigger to derive
                current representation from current value.
            */
            givenProperties.representation = undefined
    }
    /**
     * Synchronizes property, state and model configuration:
     * Properties overwrites default properties which overwrites default model
     * properties.
     * @param properties - Properties to merge.
     *
     * @returns Nothing.
    */
    const mapPropertiesAndValidationStateIntoModel = (
        properties:Props<Type>
    ):DefaultProperties<Type> => {
        const result:DefaultProperties<Type> =
            mapPropertiesIntoModel<Props<Type>, DefaultProperties<Type>>(
                properties,
                GenericInput.defaultProperties.model as unknown as Model<Type>
            )

        result.model.value = parseValue<Type>(
            result, result.model.value as null|Type, transformer
        )

        determineValidationState<Type>(result, result.model.state)

        return result
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     *
     * @returns External properties object.
     */
    const getConsolidatedProperties = (
        properties:Props<Type>
    ):Properties<Type> => {
        const result:Properties<Type> =
            getBaseConsolidatedProperties<Props<Type>, Properties<Type>>(
                mapPropertiesAndValidationStateIntoModel(properties) as
                    Props<Type>
            )

        if (!result.selection && result.type === 'boolean')
            // NOTE: Select-Fields restricts values to strings.
            result.selection = [
                {label: 'No', value: false as unknown as string},
                {label: 'Yes', value: true as unknown as string}
            ]

        // NOTE: If only an editor is specified it should be displayed.
        if (!(result.selectableEditor || result.editor === 'plain'))
            result.editorIsActive = true

        if (typeof result.representation !== 'string') {
            result.representation = formatValue<Type>(
                result,
                result.value as null|Type,
                transformer,
                /*
                    NOTE: Handle two cases:

                    1. Representation has to be determine initially
                       (-> usually no focus).
                    2. Representation was set from the outside
                       (-> usually no focus).
                */
                !result.focused
            )
            /*
                NOTE: We will try to restore last known selection state if
                representation has been modified.
            */
            if (
                result.focused &&
                result.representation !== result.value as unknown as string &&
                ['password', 'text'].includes(determineNativeType(result))
            )
                selectionIsUnstable = true
        }

        return result
    }
    /// endregion
    /// region reference setter
    /**
     * Set code editor references.
     * @param instance - Code editor instance.
     *
     * @returns Nothing.
     */
    const setCodeEditorReference = (instance:CodeEditorType|null):void => {
        codeEditorReference.current = instance

        if (codeEditorReference.current?.editor?.container?.querySelector(
            'textarea'
        ))
            codeEditorInputReference.current =
                codeEditorReference.current.editor.container
                    .querySelector('textarea')

        if (
            codeEditorReference.current &&
            properties.editorIsActive &&
            editorState.selectionIsUnstable
        ) {
            (codeEditorReference.current.editor.textInput as
                unknown as
                HTMLInputElement
            ).focus()
            setCodeEditorSelectionState(codeEditorReference.current)
            setEditorState({...editorState, selectionIsUnstable: false})
        }
    }
    /**
     * Set rich text editor references.
     * @param instance - Editor instance.
     *
     * @returns Nothing.
     */
    const setRichTextEditorReference = (
        instance:null|RichTextEditorComponent
    ):void => {
        richTextEditorReference.current = instance

        /*
            Refer inner element here is possible but marked as private.

            if (richTextEditorReference.current?.elementRef)
                richTextEditorInputReference.current =
                    richTextEditorReference.current.elementRef
        */
    }
    /// endregion
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     *
     * @returns Newly computed value state.
     */
    const onBlur = (
        event:ReactFocusEvent<HTMLDivElement>
    ):void => setValueState((
        oldValueState:ValueState<Type, ModelState>
    ):ValueState<Type, ModelState> => {
        if (
            event.relatedTarget &&
            wrapperReference.current?.contains(
                event.relatedTarget as unknown as Node
            )
        )
            return oldValueState

        setIsSuggestionOpen(false)

        let changed = false
        let stateChanged = false

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

        if (!useSuggestions || properties.suggestSelection) {
            const candidate:null|Type = getValueFromSelection<Type>(
                properties.representation, normalizedSelection!
            )
            if (candidate === null) {
                properties.value = parseValue<Type>(
                    properties, properties.value as null|Type, transformer
                )
                properties.representation = formatValue<Type>(
                    properties, properties.value, transformer
                )
            } else
                properties.value = candidate
        }

        if (
            !Tools.equals(oldValueState.value, properties.value) ||
            oldValueState.representation !== properties.representation
        )
            changed = true

        if (changed)
            onChange(event)

        if (!Tools.equals(oldValueState.value, properties.value))
            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeValue',
                controlled,
                properties.value,
                event,
                properties
            )

        if (stateChanged)
            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeState',
                controlled,
                properties.model.state,
                event,
                properties
            )

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'blur', controlled, event, properties
        )

        return changed ?
            {
                modelState: properties.model.state,
                representation: properties.representation,
                value: properties.value as null|Type
            } :
            oldValueState
    })
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     *
     * @returns Nothing.
     */
    const onChange = (event?:GenericEvent):void => {
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

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'change', controlled, properties, event
        )
    }
    /**
     * Triggered when editor is active indicator should be changed.
     * @param event - Mouse event object.
     *
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

            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeEditorIsActive',
                controlled,
                properties.editorIsActive,
                event,
                properties
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
     *
     * @returns Nothing.
     */
    const onChangeShowDeclaration = (
        event?:ReactKeyboardEvent|ReactMouseEvent
    ):void => {
        if (event) {
            if (
                typeof (event as ReactKeyboardEvent).keyCode === 'number' &&
                ![Tools.keyCode.ENTER, Tools.keyCode.SPACE].includes(
                    (event as ReactKeyboardEvent).keyCode
                )
            )
                return

            event.preventDefault()
            event.stopPropagation()
        }

        setShowDeclaration((value:boolean):boolean => {
            properties.showDeclaration = !value

            onChange(event)

            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeShowDeclaration',
                controlled,
                properties.showDeclaration,
                event,
                properties
            )

            return properties.showDeclaration
        })
    }
    /**
     * Triggered when ever the value changes.
     * Takes a given value or determines it from given event object and
     * generates new value state (internal value, representation and validation
     * states). Derived event handler will be triggered when internal state has
     * been consolidated.
     * @param eventOrValue - Event object or new value.
     * @param editorInstance - Potential editor instance if triggered from a
     * rich text or code editor.
     * @param selectedIndex - Indicates whether given event was triggered by a
     * selection.
     *
     * @returns Nothing.
     */
    const onChangeValue = (
        eventOrValue:GenericEvent|null|Type,
        editorInstance?:RichTextEditor,
        selectedIndex = -1
    ):void => {
        setIsSuggestionOpen(true)

        let event:GenericEvent|undefined
        if (eventOrValue !== null && typeof eventOrValue === 'object') {
            const target:HTMLInputElement|null|undefined =
                (eventOrValue as GenericEvent).target as HTMLInputElement ||
                (eventOrValue as GenericEvent).detail as HTMLInputElement
            if (target)
                properties.value = typeof target.value === 'undefined' ?
                    null :
                    target.value as unknown as Type
            else
                properties.value = eventOrValue as null|Type
        } else
            properties.value = eventOrValue

        const setHelper = ():void => setValueState((
            oldValueState:ValueState<Type, ModelState>
        ):ValueState<Type, ModelState> => {
            if (
                !representationControlled &&
                oldValueState.representation === properties.representation &&
                /*
                    NOTE: Unstable intermediate states have to be synced of a
                    suggestion creator was pending.
                */
                !properties.suggestionCreator &&
                selectedIndex === -1
            )
                /*
                    NOTE: No representation update and no controlled value or
                    representation:

                        -> No value update
                        -> No state update
                        -> Nothing to trigger
                */
                return oldValueState

            const valueState:ValueState<Type, ModelState> = {
                ...oldValueState, representation: properties.representation
            }

            if (
                !controlled &&
                Tools.equals(oldValueState.value, properties.value)
            )
                /*
                    NOTE: No value update and no controlled value:

                        -> No state update
                        -> Nothing to trigger
                */
                return valueState

            valueState.value = properties.value as null|Type

            let stateChanged = false

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState<Type>(
                properties as DefaultProperties<Type>, oldValueState.modelState
            ))
                stateChanged = true

            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeValue',
                controlled,
                properties.value,
                event,
                properties
            )

            if (stateChanged) {
                valueState.modelState = properties.model.state

                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            if (useSelection || selectedIndex !== -1)
                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'select',
                    controlled,
                    event,
                    properties
                )

            return valueState
        })

        properties.representation = selectedIndex !== -1 ?
            currentSuggestionLabels[selectedIndex] :
            typeof properties.value === 'string' ?
                properties.value :
                formatValue<Type>(properties, properties.value, transformer)

        if (!useSuggestions) {
            properties.value =
                parseValue<Type>(properties, properties.value, transformer)

            setHelper()
        } else if (properties.suggestionCreator) {
            const abortController:AbortController = new AbortController()

            const onResultsRetrieved = (
                results:Properties['selection']
            ):void => {
                if (abortController.signal.aborted)
                    return

                /*
                    NOTE: A synchronous retrieved selection may has to stop a
                    pending (slower) asynchronous request.
                */
                setSelection((
                    oldSelection:AbortController|Properties['selection']
                ):Properties['selection'] => {
                    if (
                        oldSelection instanceof AbortController &&
                        !oldSelection.signal.aborted
                    )
                        oldSelection.abort()

                    return results
                })

                if (selectedIndex === -1) {
                    const result:null|Type = getValueFromSelection<Type>(
                        properties.representation, normalizeSelection(results)!
                    )

                    if (result !== null || properties.searchSelection)
                        properties.value = result
                    else
                        properties.value = parseValue<Type>(
                            properties,
                            properties.representation as unknown as null|Type,
                            transformer
                        )
                }

                setHelper()
            }

            /*
                Trigger asynchronous suggestions retrieving and delayed state
                consolidation.
            */
            const result:(
                Properties['selection']|Promise<Properties['selection']>
            ) = properties.suggestionCreator({
                abortController,
                properties,
                query: properties.representation as string
            })

            if ((result as Promise<Properties['selection']>)?.then) {
                setSelection((
                    oldSelection:AbortController|Properties['selection']
                ):AbortController => {
                    if (
                        oldSelection instanceof AbortController &&
                        !oldSelection.signal.aborted
                    )
                        oldSelection.abort()

                    return abortController
                })
                /*
                    NOTE: Immediate sync current representation to maintain
                    cursor state.
                */
                setValueState((
                    oldValueState:ValueState<Type, ModelState>
                ):ValueState<Type, ModelState> => ({
                    ...oldValueState, representation: properties.representation
                }))

                ;(result as Promise<Properties['selection']>).then(
                    onResultsRetrieved,
                    /*
                        NOTE: Avoid to through an exception when aborting the
                        request intentionally.
                    */
                    Tools.noop
                )
            } else
                onResultsRetrieved(result as Properties['selection'])
        } else {
            if (selectedIndex === -1) {
                /*
                    Map value from given selections and trigger state
                    consolidation.
                */
                const result:null|Type = getValueFromSelection<Type>(
                    properties.representation, normalizedSelection!
                )

                if (result !== null || properties.searchSelection)
                    properties.value = result
                else
                    properties.value = parseValue<Type>(
                        properties,
                        properties.representation as unknown as null|Type,
                        transformer
                    )
            }

            setHelper()
        }
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     *
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
        onSelectionChange(event)

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'click', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events and opens suggestions.
     * @param event - Focus event object.
     *
     * @returns Nothing.
     */
    const triggerOnFocusAndOpenSuggestions = (event:ReactFocusEvent):void => {
        setIsSuggestionOpen(true)

        onFocus(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     *
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        triggerCallbackIfExists<Properties<Type>>(
            properties, 'focus', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on key down events.
     * @param event - Key up event object.
     *
     * @returns Nothing.
     */
    const onKeyDown = (event:ReactKeyboardEvent):void => {
        if (
            !properties.disabled &&
            useSuggestions &&
            Tools.keyCode.DOWN === event.keyCode &&
            event.target === inputReference.current
        )
            suggestionMenuAPIReference.current?.focusItemAtIndex(0)

        /*
            NOTE: We do not want to forward keydown enter events coming from
            textareas.
        */
        if (
            useSelection ||
            properties.type === 'string' &&
            properties.editor !== 'plain'
        )
            preventEnterKeyPropagation(event)

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'keyDown', controlled, event, properties
        )
    }
    /**
     * Triggered on key up events.
     * @param event - Key up event object.
     *
     * @returns Nothing.
     */
    const onKeyUp = (event:ReactKeyboardEvent):void => {
        // NOTE: Avoid breaking password-filler on non textarea fields!
        if (event.keyCode) {
            onSelectionChange(event)

            triggerCallbackIfExists<Properties<Type>>(
                properties, 'keyUp', controlled, event, properties
            )
        }
    }
    /**
     * Triggered on selection change events.
     * @param event - Event which triggered selection change.
     *
     * @returns Nothing.
     */
    const onSelectionChange = (event:GenericEvent):void => {
        saveSelectionState(event)

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'selectionChange', controlled, event, properties
        )
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     *
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((
            oldValueState:ValueState<Type, ModelState>
        ):ValueState<Type, ModelState> => {
            let changedState = false

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

                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            triggerCallbackIfExists<Properties<Type>>(
                properties, 'touch', controlled, event, properties
            )

            return result
        })
    // endregion
    // region properties
    /// region references
    const codeEditorReference:MutableRefObject<CodeEditorType|null> =
        useRef<CodeEditorType>(null)
    const codeEditorInputReference:MutableRefObject<HTMLTextAreaElement|null> =
        useRef<HTMLTextAreaElement>(null)
    const foundationReference:MutableRefObject<
        MDCSelectFoundation|MDCTextFieldFoundation|null
    > = useRef<MDCSelectFoundation|MDCTextFieldFoundation>(null)
    const inputReference:MutableRefObject<
        HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement|null
    > = useRef<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>(null)
    const richTextEditorInputReference:MutableRefObject<
        HTMLTextAreaElement|null
    > = useRef<HTMLTextAreaElement>(null)
    const richTextEditorInstance:MutableRefObject<null|RichTextEditor> =
        useRef<RichTextEditor>(null)
    const richTextEditorReference:MutableRefObject<
        null|RichTextEditorComponent
    > = useRef<RichTextEditorComponent>(null)
    const suggestionMenuAPIReference:MutableRefObject<MenuApi|null> =
        useRef<MenuApi>(null)
    const suggestionMenuFoundationReference:MutableRefObject<
        MDCMenuFoundation|null
    > = useRef<MDCMenuFoundation>(null)
    const wrapperReference:MutableRefObject<HTMLDivElement|null> =
        useRef<HTMLDivElement>(null)
    /// endregion
    const givenProps:Props<Type> = translateKnownSymbols(props)

    const [cursor, setCursor] = useState<CursorState>({end: 0, start: 0})
    const [editorState, setEditorState] = useState<EditorState>({
        editorIsActive: false, selectionIsUnstable: false
    })
    const [hidden, setHidden] = useState<boolean|undefined>()
    const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false)
    const [showDeclaration, setShowDeclaration] = useState<boolean>(false)

    let initialValue:null|Type = determineInitialValue<Type>(
        givenProps,
        GenericInput.defaultProperties.model?.default as unknown as null|Type
    )
    if (initialValue instanceof Date)
        initialValue = (initialValue.getTime() / 1000) as unknown as Type
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties:Props<Type> = Tools.extend<Props<Type>>(
        true,
        Tools.copy<Props<Type>>(GenericInput.defaultProperties as Props<Type>),
        givenProps
    )

    const type:keyof InputDataTransformation =
        givenProperties.type as keyof InputDataTransformation ||
        givenProperties.model?.type ||
        'string'
    const transformer:InputDataTransformation =
        givenProperties.transformer ?
            {
                ...GenericInput.transformer,
                [type]: Tools.extend<DataTransformSpecification<Type>>(
                    true,
                    Tools.copy<DataTransformSpecification<Type>>(
                        GenericInput.transformer[type] as
                            DataTransformSpecification<Type>
                    ) ||
                    {},
                    givenProperties.transformer as
                        DataTransformSpecification<Type>
                )
            } :
            GenericInput.transformer

    let [selection, setSelection] =
        useState<AbortController|Properties['selection']>()
    if (givenProperties.selection || givenProperties.model?.selection)
        selection =
            givenProperties.selection || givenProperties.model?.selection

    const normalizedSelection:NormalizedSelection|undefined =
        selection instanceof AbortController ?
            [] :
            normalizeSelection(selection, givenProperties.labels)
    const [suggestionLabels, suggestionValues] =
        selection instanceof AbortController ?
            [[], []] :
            getLabelAndValues(normalizedSelection)

    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    let [valueState, setValueState] = useState<ValueState<Type, ModelState>>(
        () => ({
            modelState: {...GenericInput.defaultModelState},
            representation: determineInitialRepresentation<Type>(
                givenProperties as DefaultProperties<Type>,
                GenericInput.defaultProperties as
                    unknown as
                    DefaultProperties<Type>,
                initialValue,
                transformer,
                normalizedSelection
            ),
            value: initialValue
        })
    )

    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !givenProperties.enforceUncontrolled &&
        (
            givenProps.model?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(givenProps.onChange || givenProps.onChangeValue)
    const representationControlled:boolean =
        controlled && givenProps.representation !== undefined
    let selectionIsUnstable = false

    deriveMissingPropertiesFromState()

    const properties:Properties<Type> =
        getConsolidatedProperties(givenProperties)

    if (properties.hidden === undefined)
        properties.hidden = properties.name?.startsWith('password')
    // region synchronize properties into state where values are not controlled
    if (!Tools.equals(properties.cursor, cursor))
        setCursor(properties.cursor)
    if (properties.editorIsActive !== editorState.editorIsActive)
        setEditorState({
            ...editorState, editorIsActive: properties.editorIsActive
        })
    if (properties.hidden !== hidden)
        setHidden(properties.hidden)
    if (properties.showDeclaration !== showDeclaration)
        setShowDeclaration(properties.showDeclaration)

    const currentValueState:ValueState<Type, ModelState> = {
        modelState: properties.model.state,
        representation: properties.representation,
        value: properties.value!
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        !controlled &&
        (
            !Tools.equals(properties.value, valueState.value) ||
            properties.representation !== valueState.representation
        ) ||
        !Tools.equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState = wrapStateSetter<ValueState<Type, ModelState>>(
            setValueState, currentValueState
        )
    // endregion
    // endregion
    // region export references
    useImperativeHandle(
        reference,
        ():AdapterWithReferences<Type> => {
            const state:State<Type> =
                {modelState: properties.model.state} as State<Type>

            for (const name of [
                'cursor', 'editorIsActive', 'hidden', 'showDeclaration'
            ] as const)
                if (!Object.prototype.hasOwnProperty.call(givenProps, name))
                    (state[name] as boolean|CursorState) = properties[name]

            if (!representationControlled)
                state.representation = properties.representation
            if (!controlled)
                state.value = properties.value as null|Type

            return {
                properties,
                references: {
                    codeEditorReference,
                    codeEditorInputReference,
                    foundationReference,
                    inputReference,
                    richTextEditorInputReference,
                    richTextEditorInstance,
                    richTextEditorReference,
                    suggestionMenuAPIReference,
                    suggestionMenuFoundationReference,
                    wrapperReference
                },
                state
            }
        }
    )
    // endregion
    // region render
    /// region intermediate render properties
    const genericProperties:Partial<
        CodeEditorProps|RichTextEditorProps|SelectProps|TextFieldProps
    > = {
        /*
            NOTE: If not set label with unalowed symbols will automatically
            used.
        */
        id,
        onFocus: triggerOnFocusAndOpenSuggestions,
        placeholder: properties.placeholder
    }
    const materialProperties:SelectProps|TextFieldProps = {
        disabled: properties.disabled,
        helpText: {
            children: renderHelpText(),
            persistent: Boolean(properties.declaration)
        },
        invalid: (
            properties.invalid &&
            properties.showValidationState &&
            (properties.showInitialValidationState || properties.visited)
        ),
        label: properties.description || properties.name,
        outlined: properties.outlined
        /*
            NOTE: Validation is not handle by the material component kike this:

            pattern: properties.pattern,
            required: properties.required
        */
    }
    if (properties.icon)
        materialProperties.icon = wrapIconWithTooltip(
            applyIconPreset(properties.icon) as IconOptions
        ) as IconOptions

    const tinyMCEOptions:Partial<TinyMCEOptions> = {
        ...TINYMCE_DEFAULT_OPTIONS,
        // eslint-disable-next-line camelcase
        content_style: properties.disabled ? 'body {opacity: .38}' : '',
        placeholder: properties.placeholder,
        readonly: Boolean(properties.disabled),
        setup: (instance:RichTextEditor):void => {
            richTextEditorInstance.current = instance
            richTextEditorInstance.current.on('init', ():void => {
                if (!richTextEditorInstance.current)
                    return

                richTextEditorLoadedOnce = true

                if (
                    properties.editorIsActive &&
                    editorState.selectionIsUnstable
                ) {
                    richTextEditorInstance.current.focus(false)
                    setRichTextEditorSelectionState(
                        richTextEditorInstance.current
                    )
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

    const currentRenderableSuggestions:Array<ReactElement> = []
    const currentSuggestionLabels:Array<ReactNode|string> = []
    const currentSuggestionValues:Array<unknown> = []
    const useSuggestions = Boolean(
        properties.suggestionCreator ||
        suggestionLabels.length &&
        (properties.searchSelection || properties.suggestSelection)
    )
    if (useSuggestions && suggestionLabels.length) {
        // NOTE: Create consistent property configuration.
        properties.suggestSelection = !properties.searchSelection

        let index = 0
        for (const suggestion of suggestionLabels) {
            if (Tools.isFunction(properties.children)) {
                const result:null|ReactElement = properties.children({
                    index,
                    normalizedSelection: normalizedSelection!,
                    properties,
                    query: properties.representation as string,
                    suggestion,
                    value: suggestionValues[index] as Type
                })

                if (result) {
                    currentRenderableSuggestions.push(
                        <MenuItem
                            className={CSS_CLASS_NAMES[
                                'generic-input__suggestions__suggestion'
                            ]}
                            key={index}
                        >
                            {result}
                        </MenuItem>
                    )
                    currentSuggestionLabels.push(suggestion)
                    currentSuggestionValues.push(suggestionValues[index])
                }
            } else if (
                !properties.representation ||
                properties.suggestionCreator ||
                suggestionMatches(
                    suggestion as string, properties.representation as string
                )
            ) {
                currentRenderableSuggestions.push(
                    <MenuItem
                        className={CSS_CLASS_NAMES[
                            'generic-input__suggestions__suggestion'
                        ]}
                        key={index}
                    >
                        {(Tools.stringMark(
                            suggestion,
                            (
                                properties.representation as string
                            )?.split(' ') || '',
                            {
                                marker: (foundWord:string):ReactElement =>
                                    <span className={CSS_CLASS_NAMES[
                                        'generic-input__suggestions' +
                                        '__suggestion__mark'
                                    ]}>
                                        {foundWord}
                                    </span>,
                                normalizer: (value:unknown):string =>
                                    `${value as string}`.toLowerCase(),
                                skipTagDelimitedParts: null
                            }
                        ) as Array<ReactElement|string>).map((
                            item:ReactElement|string, index:number
                        ):ReactElement =>
                            <span key={index}>{item}</span>
                        )}
                    </MenuItem>
                )
                currentSuggestionLabels.push(suggestion)
                currentSuggestionValues.push(suggestionValues[index])
            }

            index += 1
        }
    }
    const useSelection:boolean =
        (Boolean(normalizedSelection) || Boolean(properties.labels)) &&
        !useSuggestions
    /// endregion
    /// region determine type specific constraints
    const constraints:Mapping<unknown> = {}
    if (properties.type === 'number') {
        constraints.step = properties.step

        if (properties.maximum !== Infinity)
            constraints.max = properties.maximum
        if (properties.minimum !== -Infinity)
            constraints.min = properties.minimum
    } else if (properties.type === 'string') {
        if (
            properties.maximumLength >= 0 &&
            properties.maximumLength !== Infinity
        )
            constraints.maxLength = properties.maximumLength
        if (properties.minimumLength > 0)
            constraints.minLength = properties.minimumLength

        if (properties.editor !== 'plain')
            constraints.rows = properties.rows
    } else if ([
        'date', 'datetime-local', 'time', 'time-local'
    ].includes(properties.type)) {
        constraints.step = properties.step

        if (properties.maximum !== Infinity)
            constraints.max = formatValue<Type>(
                properties,
                properties.maximum as
                    unknown as
                    Type,
                transformer
            )
        if (properties.minimum !== -Infinity)
            constraints.min = formatValue<Type>(
                properties,
                properties.minimum as
                    unknown as
                    Type,
                transformer
            )
    }
    /// endregion
    /// region main markup
    return <WrapConfigurations
        strict={GenericInput.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    >
        <div
            className={[CSS_CLASS_NAMES['generic-input']]
                .concat(
                    isAdvancedEditor ?
                        CSS_CLASS_NAMES['generic-input--custom'] :
                        [],
                    properties.className ?? []
                )
                .join(' ')
            }
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            ref={wrapperReference}
            style={properties.styles}
            {...(useSuggestions ? {role: 'search'} : {})}
        >
            {wrapAnimationConditionally(
                <Select
                    {...genericProperties as SelectProps}
                    {...materialProperties as SelectProps}
                    enhanced={true}
                    foundationRef={foundationReference as
                        MutableRefObject<MDCSelectFoundation|null>
                    }
                    inputRef={inputReference as
                        unknown as
                        (reference:HTMLSelectElement|null) => void
                    }
                    onChange={onChangeValue}
                    onKeyDown={(event:ReactKeyboardEvent):void => {
                        /*
                            Avoid scrolling page interactions when navigating
                            through option.
                        */
                        if (!(
                            properties.disabled ||
                            event.keyCode === Tools.keyCode.TAB
                        ))
                            event.preventDefault()
                    }}
                    options={normalizedSelection as SelectProps['options']}
                    rootProps={{
                        name: properties.name,
                        onClick: onClick,
                        ...properties.rootProps
                    }}
                    value={`${properties.value as unknown as string}`}
                    {...properties.inputProperties as SelectProps}
                />,
                useSelection
            )}
            {wrapAnimationConditionally(
                [
                    <FormField
                        className={['mdc-text-field']
                            .concat(
                                properties.disabled ?
                                    'mdc-text-field--disabled' :
                                    [],
                                'mdc-text-field--textarea'
                            )
                            .join(' ')
                        }
                        onKeyDown={preventEnterKeyPropagation}
                        key="advanced-editor-form-field"
                    >
                        <label>
                            <span className={
                                [CSS_CLASS_NAMES[
                                    'generic-input__editor__label'
                                ]]
                                    .concat(
                                        'mdc-floating-label',
                                        'mdc-floating-label--float-above'
                                    )
                                    .join(' ')
                            }>
                                <Theme use={
                                    properties.invalid &&
                                    properties.showValidationState &&
                                    (
                                        properties.showInitialValidationState ||
                                        properties.visited
                                    ) ? 'error' : undefined
                                }>
                                    {
                                        (
                                            properties.description ||
                                            properties.name
                                        ) +
                                        (properties.required ? '*' : '')
                                    }
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
                                            mode={(
                                                properties.editor.startsWith(
                                                    'code('
                                                ) &&
                                                properties.editor.endsWith(')')
                                            ) ?
                                                properties.editor.substring(
                                                    'code('.length,
                                                    properties.editor.length -
                                                    1
                                                ) :
                                                'javascript'
                                            }
                                            name={properties.name}
                                            onChange={onChangeValue as
                                                unknown as
                                                (
                                                    value:string,
                                                    event?:unknown
                                                ) => void
                                            }
                                            onCursorChange={onSelectionChange}
                                            onSelectionChange={
                                                onSelectionChange
                                            }
                                            ref={setCodeEditorReference}
                                            setOptions={{
                                                maxLines: properties.rows,
                                                minLines: properties.rows,
                                                readOnly: properties.disabled,
                                                tabSize: 4,
                                                useWorker: false
                                            }}
                                            theme="github"
                                            value={
                                                properties.representation as
                                                    string
                                            }
                                            {...properties.inputProperties as
                                                CodeEditorProps
                                            }
                                        />
                                    </Suspense> :
                                    <GivenRichTextEditorComponent
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
                                            RichTextEditorProps[
                                                'onEditorChange'
                                            ]
                                        }
                                        onKeyUp={onKeyUp as
                                            unknown as
                                            RichTextEventHandler<KeyboardEvent>
                                        }
                                        ref={setRichTextEditorReference}
                                        textareaName={properties.name}
                                        tinymceScriptSrc={
                                            (
                                                TINYMCE_DEFAULT_OPTIONS
                                                    .base_url as
                                                        string
                                            ) +
                                            'tinymce.min.js'
                                        }
                                        value={
                                            properties.representation as string
                                        }
                                        {...properties.inputProperties as
                                            RichTextEditorProps
                                        }
                                    />
                            }
                        </label>
                    </FormField>,
                    <div
                        className="mdc-text-field-helper-line"
                        key="advanced-editor-helper-line"
                    >
                        <p
                            className={
                                'mdc-text-field-helper-text ' +
                                'mdc-text-field-helper-text--persistent'
                            }
                            id={`${id}-error-message`}
                        >
                            {(
                                materialProperties.helpText as
                                    {children:ReactElement}
                            ).children}
                        </p>
                    </div>
                ],
                isAdvancedEditor,
                richTextEditorLoadedOnce ||
                properties.editor.startsWith('code')
            )}
            {wrapAnimationConditionally(
                <div>
                    {useSuggestions ?
                        <MenuSurfaceAnchor
                            onKeyDown={preventEnterKeyPropagation}
                        >
                            {selection instanceof AbortController ?
                                <MenuSurface
                                    anchorCorner="bottomLeft"
                                    className={
                                        CSS_CLASS_NAMES[
                                            'generic-input__suggestions'
                                        ] +
                                        ' ' +
                                        CSS_CLASS_NAMES[
                                            'generic-input__suggestions' +
                                            '--pending'
                                        ]
                                    }
                                    open={true}
                                >
                                    <CircularProgress size="large" />
                                </MenuSurface> :
                                <Menu
                                    anchorCorner="bottomLeft"
                                    apiRef={(instance:MenuApi|null):void => {
                                        suggestionMenuAPIReference.current =
                                            instance
                                    }}
                                    className={CSS_CLASS_NAMES[
                                        'generic-input__suggestions'
                                    ]}
                                    focusOnOpen={false}
                                    foundationRef={
                                        suggestionMenuFoundationReference
                                    }
                                    onFocus={onFocus}
                                    onSelect={(
                                        event:MenuOnSelectEventT
                                    ):void => {
                                        onChangeValue(
                                            currentSuggestionValues[
                                                event.detail.index
                                            ] as Type,
                                            undefined,
                                            event.detail.index
                                        )
                                        setIsSuggestionOpen(false)
                                    }}
                                    open={
                                        Boolean(
                                            currentSuggestionLabels.length
                                        ) &&
                                        isSuggestionOpen &&
                                        /*
                                            NOTE: If single possibility is
                                            already selected avoid showing this
                                            suggestion.
                                        */
                                        !(
                                            currentSuggestionLabels.length ===
                                                1 &&
                                            currentSuggestionLabels[0] ===
                                                properties.representation
                                        )
                                    }
                                >
                                    {currentRenderableSuggestions}
                                </Menu>
                            }
                        </MenuSurfaceAnchor> :
                        ''
                    }
                    <TextField
                        {...genericProperties as TextFieldProps}
                        {...materialProperties as TextFieldProps}
                        {...constraints}
                        align={properties.align}
                        characterCount={
                            typeof properties.maximumLength === 'number' &&
                            !isNaN(properties.maximumLength) &&
                            properties.maximumLength >= 0
                        }
                        foundationRef={foundationReference as
                            MutableRefObject<MDCTextFieldFoundation|null>
                        }
                        inputRef={inputReference as
                            MutableRefObject<HTMLInputElement|null>
                        }
                        onChange={onChangeValue}
                        ripple={properties.ripple}
                        rootProps={{
                            name: properties.name,
                            onClick,
                            onKeyUp,
                            /*
                                NOTE: Disabled input fields are not focusable
                                via keyboard which makes them unreachable for
                                blind people using e.g. screen readers.
                                Therefore the label gets a tabindex to make the
                                input focusable.
                            */
                            tabIndex: properties.disabled ? '0' : '-1',
                            ...properties.rootProps
                        }}
                        textarea={
                            properties.type === 'string' &&
                            properties.editor !== 'plain'
                        }
                        trailingIcon={wrapIconWithTooltip(applyIconPreset(
                            properties.trailingIcon
                        ))}
                        type={determineNativeType(properties)}
                        value={properties.representation as string}
                        {...properties.inputProperties as TextFieldProps}
                    />
                </div>,
                !(isAdvancedEditor || useSelection),
                richTextEditorLoadedOnce ||
                properties.editor.startsWith('code')
            )}
        </div>
    </WrapConfigurations>
    /// endregion
    // endregion
}
// NOTE: This is useful in react dev tools.
GenericInputInner.displayName = 'GenericInput'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProperties - Initial property configuration.
 * @property static:locales - Defines input formatting locales.
 * @property static:propTypes - Triggers reacts runtime property value checks.
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:transformer - Generic input data transformation
 * specifications.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 *
 * @returns React elements.
 */
export const GenericInput:GenericInputComponent<typeof GenericInputInner> =
    memorize(forwardRef(GenericInputInner)) as
        unknown as
        GenericInputComponent<typeof GenericInputInner>
// region static properties
/// region web-component hints
GenericInput.wrapped = GenericInputInner
GenericInput.webComponentAdapterWrapped = 'react'
/// endregion
GenericInput.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
GenericInput.defaultProperties = {
    ...defaultProperties,
    cursor: undefined,
    model: {
        ...defaultProperties.model,
        // Trigger initial determination.
        state: undefined as unknown as ModelState,
        value: undefined
    },
    representation: undefined,
    value: undefined
}
GenericInput.locales = Tools.locales
GenericInput.propTypes = propertyTypes
GenericInput.renderProperties = renderProperties
GenericInput.strict = false
GenericInput.transformer = {
    boolean: {
        parse: (value:number|string):boolean =>
            typeof value === 'boolean' ?
                value :
                new Map<number|string, boolean>([
                    ['false', false],
                    ['true', true],
                    [0, false],
                    [1, true]
                ]).get(value) ??
                    true,
        type: 'text'
    },
    currency: {
        format: {final: {
            options: {currency: 'USD'},
            transform: (
                value:number,
                configuration:DefaultProperties<number>,
                transformer:InputDataTransformation
            ):string => {
                const currency:string =
                    transformer.currency.format?.final.options?.currency as
                        string ??
                    'USD'

                if (value === Infinity)
                    return `Infinity ${currency}`

                if (value === -Infinity)
                    return `- Infinity ${currency}`

                if (isNaN(value))
                    return 'unknown'

                return (new Intl.NumberFormat(
                    GenericInput.locales,
                    {
                        style: 'currency',
                        ...transformer.currency.format?.final.options ?? {}
                    }
                )).format(value)
            }
        }},
        parse: (
            value:string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):number =>
            transformer.float.parse ?
                transformer.float.parse(value, configuration, transformer) :
                NaN,
        type: 'text'
    },

    date: {
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer.date.parse)
                    value = transformer.date.parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string =
                (new Date(Math.round(value * 1000))).toISOString()

            return formattedValue.substring(0, formattedValue.indexOf('T'))
        }}},
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value)
                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        }
    },
    // TODO respect local to utc conversion.
    'datetime-local': {
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer['datetime-local'].parse)
                    value = transformer['datetime-local'].parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string =
                (new Date(Math.round(value * 1000))).toISOString()

            return formattedValue.substring(0, formattedValue.length - 1)
        }}},
        parse: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):number => {
            if (transformer.date.parse)
                return transformer.date.parse(
                    value, configuration, transformer
                )

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value as string)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value as string)
                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        }
    },
    time: {
        format: {
            final: {transform: (
                value:Date|number|string,
                configuration:DefaultProperties<number>,
                transformer:InputDataTransformation
            ):string => {
                if (typeof value !== 'number')
                    if (transformer.time.parse)
                        value = transformer.time.parse(
                            value, configuration, transformer
                        )
                    else {
                        const parsedDate:number = value instanceof Date ?
                            value.getTime() / 1000 :
                            Date.parse(value)
                        if (isNaN(parsedDate)) {
                            const parsedFloat:number =
                                parseFloat(value as string)
                            value = isNaN(parsedFloat) ? 0 : parsedFloat
                        } else
                            value = parsedDate / 1000
                    }

                if (value === Infinity)
                    return 'Infinitely far in the future'
                if (value === -Infinity)
                    return 'Infinitely early in the past'
                if (!isFinite(value))
                    return ''

                let formattedValue:string =
                    (new Date(Math.round(value * 1000))).toISOString()

                formattedValue = formattedValue.substring(
                    formattedValue.indexOf('T') + 1, formattedValue.length - 1
                )

                if (
                    configuration.step &&
                    configuration.step >= 60 &&
                    (configuration.step % 60) === 0
                )
                    return formattedValue.substring(
                        0, formattedValue.lastIndexOf(':')
                    )

                return formattedValue
            }}
        },
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value.replace(
                    /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                    (
                        _match:string,
                        hours:string,
                        minutes:string,
                        secondsSuffix?:string,
                        seconds?:string,
                        _millisecondsSuffix?:string
                    ):string =>
                        String(
                            parseInt(hours) *
                            60 ** 2 +
                            parseInt(minutes) *
                            60 +
                            (secondsSuffix ? parseFloat(seconds!) : 0)
                        )
                ))

                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        }
    },
    /*
        NOTE: Daylight saving time should not make a difference since times
        will always be saved on zero unix timestamp where no daylight saving
        time rules existing.
    */
    'time-local': {
        format: {
            final: {transform: (
                value:Date|number|string,
                configuration:DefaultProperties<number>,
                transformer:InputDataTransformation
            ):string => {
                if (typeof value !== 'number')
                    if (transformer['time-local'].parse)
                        value = transformer['time-local'].parse(
                            value, configuration, transformer
                        )
                    else {
                        const parsedDate:number = value instanceof Date ?
                            value.getTime() / 1000 :
                            Date.parse(value)
                        if (isNaN(parsedDate)) {
                            const parsedFloat:number =
                                parseFloat(value as string)
                            value = isNaN(parsedFloat) ? 0 : parsedFloat
                        } else
                            value = parsedDate / 1000
                    }

                if (value === Infinity)
                    return 'Infinitely far in the future'
                if (value === -Infinity)
                    return 'Infinitely early in the past'
                if (!isFinite(value))
                    return ''

                const dateTime = new Date(Math.round(value * 1000))
                const hours:number = dateTime.getHours()
                const minutes:number = dateTime.getMinutes()

                const formattedValue:string = (
                    `${hours < 10 ? '0' : ''}${String(hours)}:` +
                    `${minutes < 10 ? '0' : ''}${String(minutes)}`
                )

                if (!(
                    configuration.step &&
                    configuration.step >= 60 &&
                    (configuration.step % 60) === 0
                )) {
                    const seconds:number = dateTime.getSeconds()

                    return (
                        `${formattedValue}:${(seconds < 10) ? '0' : ''}` +
                        String(seconds)
                    )
                }

                return formattedValue
            }}
        },
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value.replace(
                    /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                    (
                        _match:string,
                        hours:string,
                        minutes:string,
                        secondsSuffix?:string,
                        seconds?:string,
                        _millisecondsSuffix?:string
                    ):string => {
                        const zeroDateTime = new Date(0)

                        zeroDateTime.setHours(parseInt(hours))
                        zeroDateTime.setMinutes(parseInt(minutes))
                        if (secondsSuffix)
                            zeroDateTime.setSeconds(parseInt(seconds!))

                        return String(zeroDateTime.getTime() / 1000)
                    }
                ))

                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        },
        type: 'time'
    },

    float: {
        format: {final: {transform: (
            value:number,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string =>
            transformer.float.format ?
                value === Infinity ?
                    'Infinity' :
                    value === -Infinity ?
                        '- Infinity' :
                        (new Intl.NumberFormat(
                            GenericInput.locales,
                            transformer.float.format.final.options || {}
                        )).format(value) :
                `${value}`
        }},
        parse: (
            value:number|string, configuration:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseFloat(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/\./g, '').replace(/,/g, '.') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof value === 'number' &&
                (
                    typeof configuration.minimum === 'number' &&
                    configuration.minimum >= 0 &&
                    value < 0 ||
                    typeof configuration.maximum === 'number' &&
                    configuration.maximum <= 0 &&
                    value > 0
                )
            )
                value *= -1

            return value
        },
        type: 'text'
    },
    integer: {
        format: {final: {transform: (
            value:number,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => (
            new Intl.NumberFormat(
                GenericInput.locales,
                {
                    maximumFractionDigits: 0,
                    ...(transformer.integer.format?.final.options ?? {})
                }
            )).format(value)
        }},
        parse: (
            value:number|string, configuration:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseInt(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/[,.]/g, '') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof value === 'number' &&
                (
                    typeof configuration.minimum === 'number' &&
                    configuration.minimum >= 0 &&
                    value < 0 ||
                    typeof configuration.maximum === 'number' &&
                    configuration.maximum <= 0 &&
                    value > 0
                )
            )
                value *= -1

            return value
        },
        type: 'text'
    },
    number: {parse: (value:number|string):number =>
        typeof value === 'number' ? value : parseInt(value)
    }
}
// endregion
export default GenericInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
