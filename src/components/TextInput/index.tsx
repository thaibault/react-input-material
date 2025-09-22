// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput */
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
import {javascript} from '@codemirror/lang-javascript'
import {css} from '@codemirror/lang-css'

import {Theme} from '@rmwc/theme'

import {
    camelCaseToDelimited,
    copy,
    equals,
    extend,
    isFunction,
    isObject,
    LOCALES,
    Mapping,
    mark
} from 'clientnode'
import React, {
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardedRef,
    KeyboardEvent as ReactKeyboardEvent,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    ReactElement,
    ReactNode,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
    useState, SyntheticEvent
} from 'react'
import GenericAnimate from 'react-generic-animate'
import {GenericEvent} from 'react-generic-tools/type'
import Dummy from 'react-generic-dummy'
import {
    TransitionChildren, TransitionProps
} from 'react-transition-group/Transition'

import {PropertiesValidationMap} from 'web-component-wrapper/type'

import Icon from '#implementations/Icon'
import IconButton from '#implementations/IconButton'
import Menu from '#implementations/Menu'
import Select from '#implementations/Select'
import TextField from '#implementations/TextField'

import WrapConfigurations from '../Wrapper/WrapConfigurations'
import WrapTooltip from '../Wrapper/WrapTooltip'
import {
    deriveMissingPropertiesFromState as deriveMissingBasePropertiesFromState,
    determineInitialValue,
    determineInitialRepresentation,
    formatValue,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    getLabelAndValues,
    getValueFromSelection,
    mapPropertiesIntoModel,
    normalizeSelection,
    parseValue,
    renderMessage,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../../helper'
import {
    CursorState, EditorState, Selection, TypeSpecification
} from '../../type'
import {
    IconProperties,
    InputReference,
    LowLevelBaseComponentProperties,
    MenuReference,
    TextAreaProperties,
    TextAreaReference,
    TextFieldProperties,
    TextInputProperties,
    TypeTextInputProperties
} from '../../implementations/type'

import CodeEditorComponent, {
    Reference as CodeMirrorReference
} from './CodeMirror'
import RichTextEditorComponent, {Reference as TipTapReference} from './Tiptap'
import {
    CSS_CLASS_NAMES,
    determineValidationState,
    lockAnimation,
    plusToXAnimation,
    preventEnterKeyPropagation,
    suggestionMatches,
    TIPTAP_DEFAULT_OPTIONS,
    UseAnimations
} from './helper'
import {
    AdapterWithReferences,
    CodeMirrorProperties as CodeEditorProperties,
    Component,
    DataTransformation,
    DataTransformSpecification,
    defaultModelState,
    DefaultProperties,
    defaultProperties,
    EditorReference,
    Model,
    ModelState,
    NativeType,
    NormalizedSelection,
    Properties,
    propertyTypes,
    Props,
    renderProperties,
    State,
    TiptapProperties as RichTextEditorProperties,
    ValueState
} from './type'
import TRANSFORMER from './transformer'
import TextArea from '#implementations/TextArea'
import {
    Reference as InputEventMapperReference
} from './InputEventMapperWrapper'

export {
    CODE_EDITOR_OPTIONS,

    CSS_CLASS_NAMES,

    determineValidationState,
    preventEnterKeyPropagation,
    suggestionMatches,

    TIPTAP_DEFAULT_OPTIONS
} from './helper'
export const INPUT_TRANSFORMER = TRANSFORMER
// endregion
/**
 * Generic text input wrapper component which automatically determines a useful
 * input field depending on given model specification.
 * Dataflow:
 * 1. On-Render all states are merged with given properties into a normalized
 *    property object.
 * 2. Properties, corresponding state values and sub node instances are saved
 *    into a "ref" object (to make them accessible from the outside for example
 *    for wrapper like web-components).
 * 3. Event handler saves corresponding data modifications into state and
 *    normalized properties object.
 * 4. All state changes except selection changes trigger an "onChange" event
 *    which delivers the consolidated properties object (with latest
 *    modifications included).
 * @property displayName - Descriptive name for component to show in web
 * developer tools.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const TextInputInner = function<Type = unknown>(
    props: Props<Type>, reference?: ForwardedRef<AdapterWithReferences<Type>>
): ReactElement {
    const defaultID = useId()
    const id = props.id ?? defaultID
    // region live-cycle
    /// region input element property synchronisation
    /**
     * Is triggered immediate after a re-rendering. Connects error message
     * with input element.
     */
    useEffect(() => {
        if (inputReference.current?.input?.current) {
            let input = inputReference.current.input.current as
                HTMLElement |
                TextAreaReference |
                EditorReference
            if ((input as Partial<TextAreaReference>).input?.current) {
                input =
                    (input as Partial<TextAreaReference | EditorReference>)
                    .input?.current as
                        HTMLElement | TextAreaReference
                if ((input as Partial<TextAreaReference>).input?.current)
                    input =
                        (input as Partial<TextAreaReference>).input?.current as
                            HTMLElement
            } else
                return
            const inputDomNode = input as HTMLElement

            const determinedAttributes: Mapping<boolean | number | string> = {}
            const propsToRemove: Array<string> = []

            // Apply aria attributes regarding validation state.
            if (properties.valid) {
                propsToRemove.push('ariaErrormessage')
                propsToRemove.push('ariaInvalid')
            } else {
                determinedAttributes.ariaErrormessage =
                    `${id}-error-message`
                determinedAttributes.ariaInvalid = 'true'
            }

            // Apply aria attributes regarding searching.
            if (useSuggestions) {
                if (inputDomNode.getAttribute('type') !== 'search')
                    determinedAttributes.role = 'searchbox'

                determinedAttributes.ariaAutocomplete =
                    properties.searchSelection ? 'inline' : 'list'
            } else {
                propsToRemove.push('searchbox')
                propsToRemove.push('ariaAutocomplete')
            }

            if (properties.showDeclaration)
                determinedAttributes.ariaDescribedby = `${id}-declaration`
            else
                propsToRemove.push('ariaDescribedby')

            const attributes = {
                ...determinedAttributes, ...properties.attributes || {}
            }

            // Apply configured native input properties.
            for (const [name, value] of Object.entries(attributes)) {
                const attributeName: string = camelCaseToDelimited(name)

                if (typeof value === 'boolean')
                    if (value)
                        inputDomNode.setAttribute(attributeName, '')
                    else
                        inputDomNode.removeAttribute(attributeName)
                else
                    inputDomNode.setAttribute(attributeName, String(value))
            }

            for (const name of propsToRemove) {
                const attributeName: string = camelCaseToDelimited(name)
                if (inputDomNode.hasAttribute(attributeName))
                    inputDomNode.removeAttribute(attributeName)
            }
        }
    })
    /// endregion
    /// region apply missing initial aria attribute regarding menu popup state.
    /**
     * Is triggered immediate after a re-rendering. Sets initial aria list box
     * opening and hidden state.
     */
    useEffect(() => {
        if (isSelection) {
            const selectionWrapper: HTMLElement | null | undefined =
                wrapperReference.current?.querySelector(
                    '[aria-haspopup="listbox"]'
                )
            if (selectionWrapper) {
                if (!selectionWrapper.hasAttribute('aria-expanded'))
                    selectionWrapper.setAttribute('aria-expanded', 'false')

                const activeIcon: HTMLElement | null = selectionWrapper
                    .querySelector('.mdc-select__dropdown-icon-active')
                if (activeIcon && !activeIcon.hasAttribute('aria-hidden'))
                    activeIcon.setAttribute('aria-hidden', 'true')

                const inactiveIcon: HTMLElement | null = selectionWrapper
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
    useEffect((): undefined | (() => void) => {
        if (isSelection) {
            const selectionWrapper: HTMLElement | null | undefined =
                wrapperReference.current?.querySelector(
                    '[aria-haspopup="listbox"]'
                )
            if (selectionWrapper) {
                const handler = (event: KeyboardEvent) => {
                    if (properties.disabled)
                        event.stopPropagation()
                }

                selectionWrapper.addEventListener('keydown', handler, true)

                return () => {
                    selectionWrapper.removeEventListener(
                        'keydown', handler, true
                    )
                }
            }
        }
    })
    /// endregion
    useEffect(
        () => {
            if (properties.triggerInitialPropertiesConsolidation)
                onChange(new Event(
                    'genericInitialPropertiesConsolidation'
                ) as unknown as GenericEvent)
        },
        []
    )
    // endregion
    // region context helper
    /// region render helper
    /**
     * Applies icon preset configurations.
     * @param options - Icon options to extend of known preset identified.
     * @returns Given potential extended icon configuration.
     */
    const applyIconPreset = (
        options?: Properties['leadingIcon']
    ): Properties['leadingIcon'] | undefined => {
        if (options === 'clear_preset') {
            const handler = (
                event: ReactKeyboardEvent | ReactMouseEvent
            ): void => {
                if (
                    (event as ReactKeyboardEvent).code &&
                    !['Enter', 'Space'].includes(
                        (event as ReactKeyboardEvent).code
                    )
                )
                    return

                event.preventDefault()
                event.stopPropagation()

                onChangeValue(parseValue<Type>(
                    properties,
                    properties.default as Type,
                    TextInput.transformer,
                    !controlled && properties.model.trim
                ))
            }

            const hide =
                equals(properties.value, properties.default) as boolean
            return {
                icon: <GenericAnimate in={!hide}>
                    {(
                        UseAnimations &&
                        !(UseAnimations as Partial<typeof Dummy>).isDummy &&
                        plusToXAnimation
                    ) ?
                        <UseAnimations
                            animation={plusToXAnimation} reverse={true}
                        /> :
                        <Icon icon="clear" />
                    }
                </GenericAnimate>,

                componentProperties: {
                    'aria-hidden': hide ? 'true' : 'false',
                    'tab-index': hide ? -1 : 0
                },

                onClick: handler,
                onKeyDown: handler,

                strategy: 'component',
                tooltip: 'Clear input'
            }
        }

        if (options === 'password_preset') {
            const handler = (
                event: ReactKeyboardEvent | ReactMouseEvent
            ): void => {
                if (
                    (event as ReactKeyboardEvent).code &&
                    !['Enter', 'Space'].includes(
                        (event as ReactKeyboardEvent).code
                    )
                )
                    return

                event.preventDefault()
                event.stopPropagation()

                setHidden((value: boolean | undefined): boolean => {
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
                    !(UseAnimations as Partial<typeof Dummy>).isDummy &&
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
                options.domNodeProperties = options.domNodeProperties ?? {}
                options.domNodeProperties['tab-index'] = -1
                options.domNodeProperties['aria-hidden'] = true
            }
        }

        return options
    }
    /**
     * Derives native input type from given input property configuration.
     * @param properties - Input configuration to derive native input type
     * from.
     * @returns Determined input type.
     */
    const determineNativeType = (
        properties: Properties<Type>
    ): NativeType =>
        (
            properties.type === 'string' ?
                properties.hidden ?
                    'password' :
                    useSuggestions ?
                        'search' :
                        'text' :
                transformer[
                    properties.type as keyof DataTransformation
                ]?.type ?? properties.type
        ) as NativeType
    /**
     * Render help or error texts with current validation state color.
     * @returns Determined renderable markup specification.
     */
    const renderHelpText = (): ReactElement => <>
        <GenericAnimate
            in={
                properties.selectableEditor &&
                properties.type === 'string' &&
                properties.editor !== 'plain'
            }
        >
            <IconButton
                domNodeProperties={{
                    'aria-label': properties.editorIsActive ?
                        'plain' :
                        properties.editor.startsWith('code') ?
                            'code' :
                            'richtext'
                }}
                icon={
                    properties.editorIsActive ?
                        'subject' :
                        properties.editor.startsWith('code') ?
                            'code' :
                            'text_format'
                }
                onClick={onChangeEditorIsActive}
            />
        </GenericAnimate>
        <GenericAnimate in={Boolean(properties.declaration)}>
            <IconButton
                aria-expanded={properties.showDeclaration ? 'true' : 'false'}
                aria-label="declaration"

                value={properties.showDeclaration}

                icon="more_horiz"
                onIcon="more_vert"

                onChange={onChangeShowDeclaration}
            />
        </GenericAnimate>
        <GenericAnimate
            id={`${id}-declaration`} in={properties.showDeclaration}
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
                        properties.requiredText,
                        {
                            formatValue: (value: Type): string =>
                                formatValue<Type>(
                                    properties, value, transformer
                                ),
                            ...properties
                        }
                    )}
                </span>
            </Theme>
        </GenericAnimate>
    </>
    /**
     * Wraps given component with animation component if given condition holds.
     * @param content - Component or string to wrap.
     * @param propertiesOrInCondition - Animation properties or in condition
     * only.
     * @param doAnimationCondition - Show condition.
     * @returns Wrapped component.
     */
    const wrapAnimationConditionally = (
        content: TransitionChildren,
        propertiesOrInCondition: (
            boolean | Partial<TransitionProps<HTMLElement | undefined>>
        ) = {},
        doAnimationCondition = true
    ): ReactNode => {
        if (typeof propertiesOrInCondition === 'boolean')
            return (doAnimationCondition ?
                <GenericAnimate in={propertiesOrInCondition}>
                    {content}
                </GenericAnimate> :
                propertiesOrInCondition ? content : ''
            ) as ReactNode

        return (doAnimationCondition ?
            <GenericAnimate {...propertiesOrInCondition}>
                {content}
            </GenericAnimate> :
            propertiesOrInCondition.in ? content : ''
        ) as ReactNode
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
        options?: Properties['leadingIcon']
    ): IconProperties | undefined => {
        if (typeof options === 'object' && options.tooltip) {
            const tooltip: Properties['tooltip'] = options.tooltip
            options = {...options}
            delete options.tooltip
            const nestedOptions: IconProperties = {...options}
            options.strategy = 'component'

            options.icon = <WrapTooltip value={tooltip}>
                <Icon {...nestedOptions} />
            </WrapTooltip>
        }

        return options as IconProperties | undefined
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
                givenProperties.model?.value === undefined
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
     * @returns Default properties.
     */
    const mapPropertiesAndValidationStateIntoModel = (
        properties: Props<Type>
    ): DefaultProperties<Type> => {
        const result: DefaultProperties<Type> =
            mapPropertiesIntoModel<Props<Type>, DefaultProperties<Type>>(
                properties,
                TextInput.defaultProperties.model as unknown as Model<Type>
            )

        result.model.value = parseValue<Type>(
            result,
            result.model.value,
            transformer,
            !controlled && properties.model?.trim
        )

        determineValidationState<Type>(
            result, result.model.state as ModelState
        )

        return result
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (
        properties: Props<Type>
    ): Properties<Type> => {
        const result: Properties<Type> =
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

        if (['plain', 'text'].includes(result.editor))
            result.selectableEditor = false

        // NOTE: If only an editor is specified it should be displayed.
        if (!(result.selectableEditor || result.editor === 'plain'))
            result.editorIsActive = true

        if (typeof result.representation !== 'string')
            result.representation = formatValue<Type>(
                result,
                result.value as null | Type,
                transformer,
                /*
                    NOTE: Handle two cases:

                    1. Representation has to be determined initially
                       (-> usually no focus).
                    2. Representation was set from the outside
                       (-> usually no focus).
                */
                !result.focused
            )

        return result
    }
    /// endregion
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     */
    const onBlur = (
        event: ReactFocusEvent<HTMLDivElement>
    ): void => {
        setValueState((
            oldValueState: ValueState<Type, ModelState>
        ): ValueState<Type, ModelState> => {
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
                const candidate: null | Type = getValueFromSelection<Type>(
                    properties.representation, normalizedSelection
                )
                if (candidate === null) {
                    properties.value = parseValue<Type>(
                        properties,
                        properties.value,
                        transformer,
                        properties.model.trim
                    )
                    properties.representation = formatValue<Type>(
                        properties, properties.value, transformer
                    )
                } else
                    properties.value = candidate
            }

            if (
                !equals(oldValueState.value, properties.value) ||
                oldValueState.representation !== properties.representation
            )
                changed = true

            if (changed)
                onChange(event)

            if (!equals(oldValueState.value, properties.value))
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
                    value: properties.value as null | Type
                } as ValueState<Type, ModelState> :
                oldValueState
        })
    }
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     */
    const onChange = (event: GenericEvent): void => {
        extend(
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
     */
    const onChangeEditorIsActive = (event: ReactMouseEvent): void => {
        event.preventDefault()
        event.stopPropagation()

        setEditorState(({editorIsActive}): EditorState => {
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
     */
    const onChangeShowDeclaration = (event?: SyntheticEvent) => {
        setShowDeclaration((value: boolean): boolean => {
            properties.showDeclaration = !value

            onChange(event as unknown as GenericEvent)

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
     * @param selectedIndex - Indicates whether given event was triggered by a
     * selection.
     */
    const onChangeValue = (
        eventOrValue: GenericEvent<Type> | Type, selectedIndex = -1
    ): void => {
        setIsSuggestionOpen(true)

        let event: GenericEvent
        if (isObject(eventOrValue)) {
            event = eventOrValue as unknown as GenericEvent
            const target: HTMLInputElement | null | undefined =
                event.target as HTMLInputElement | null ||
                event.detail as HTMLInputElement | null
            if (target)
                properties.value = typeof target.value === 'undefined' ?
                    null as Type :
                    target.value as Type
            else
                properties.value = eventOrValue as Type
        } else
            properties.value = eventOrValue as Type

        const setHelper = (): void => {
            setValueState((
                oldValueState: ValueState<Type, ModelState>
            ): ValueState<Type, ModelState> => {
                if (
                    !representationControlled &&
                    oldValueState.representation ===
                        properties.representation &&
                    /*
                        NOTE: Unstable intermediate states have to be synced of
                        a suggestion creator was pending.
                    */
                    !properties.suggestionCreator &&
                    selectedIndex === -1
                )
                    /*
                        NOTE: No representation update and no controlled value
                        or representation:

                            -> No value update
                            -> No state update
                            -> Nothing to trigger
                    */
                    return oldValueState

                const valueState: ValueState<Type, ModelState> = {
                    ...oldValueState, representation: properties.representation
                }

                if (
                    !controlled &&
                    equals(oldValueState.value, properties.value)
                )
                    /*
                        NOTE: No value update and no controlled value:

                            -> No state update
                            -> Nothing to trigger
                    */
                    return valueState

                valueState.value = properties.value as null | Type

                let stateChanged = false

                if (oldValueState.modelState.pristine) {
                    properties.dirty = true
                    properties.pristine = false
                    stateChanged = true
                }

                onChange(event)

                if (determineValidationState<Type>(
                    properties as DefaultProperties<Type>,
                    oldValueState.modelState
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

                if (stateChanged && properties.model.state) {
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

                if (isSelection || selectedIndex !== -1)
                    triggerCallbackIfExists<Properties<Type>>(
                        properties,
                        'select',
                        controlled,
                        event,
                        properties
                    )

                return valueState
            })
        }

        const trim = !controlled && properties.model.trim

        properties.representation = selectedIndex !== -1 ?
            currentSuggestionLabels[selectedIndex] :
            typeof properties.value === 'string' ?
                properties.value :
                formatValue<Type>(properties, properties.value, transformer)

        if (!useSuggestions) {
            properties.value = parseValue<Type>(
                properties,
                properties.value,
                transformer,
                trim
            )

            setHelper()
        } else if (properties.suggestionCreator) {
            const abortController = new AbortController()

            const onResultsRetrieved = (
                results: Properties['selection']
            ): void => {
                if (abortController.signal.aborted)
                    return

                /*
                    NOTE: A synchronous retrieved selection may have to stop a
                    pending (slower) asynchronous request.
                */
                setSelection((
                    oldSelection: AbortController | Properties['selection']
                ): Properties['selection'] => {
                    if (
                        oldSelection instanceof AbortController &&
                        !oldSelection.signal.aborted
                    )
                        oldSelection.abort()

                    return results
                })

                if (selectedIndex === -1) {
                    const result: Type = getValueFromSelection<Type>(
                        properties.representation, normalizeSelection(results)
                    )

                    if (result !== null || properties.searchSelection)
                        properties.value = result
                    else
                        properties.value = parseValue<Type>(
                            properties,
                            properties.representation as unknown as Type,
                            transformer,
                            trim
                        )
                }

                setHelper()
            }

            /*
                Trigger asynchronous suggestions retrieving and delayed state
                consolidation.
            */
            const result: (
                Properties['selection'] | Promise<Properties['selection']>
            ) = properties.suggestionCreator({
                abortController,
                properties,
                query: properties.representation as string
            })

            if ((result as Promise<Properties['selection']> | null)?.then) {
                setSelection((
                    oldSelection: AbortController | Properties['selection']
                ): AbortController => {
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
                    oldValueState: ValueState<Type, ModelState>
                ): ValueState<Type, ModelState> => ({
                    ...oldValueState, representation: properties.representation
                }))

                ;(result as Promise<Properties['selection']>).then(
                    onResultsRetrieved,
                    /*
                        NOTE: Avoid to through an exception when aborting the
                        request intentionally.
                    */
                    () => {
                        // Do nothing regardless of an error.
                    }
                )
            } else
                onResultsRetrieved(result as Properties['selection'])
        } else {
            if (selectedIndex === -1) {
                /*
                    Map value from given selections and trigger state
                    consolidation.
                */
                const result: null | Type = getValueFromSelection<Type>(
                    properties.representation, normalizedSelection
                )

                if (result !== null || properties.searchSelection)
                    properties.value = result
                else
                    properties.value = parseValue<Type>(
                        properties,
                        properties.representation as unknown as Type,
                        transformer,
                        trim
                    )
            }

            setHelper()
        }
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     */
    const onClick = (event: ReactMouseEvent) => {
        onSelectionChange(event)

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'click', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events and opens suggestions.
     * @param event - Focus event object.
     */
    const triggerOnFocusAndOpenSuggestions = (event: ReactFocusEvent) => {
        setIsSuggestionOpen(true)

        onFocus(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     */
    const onFocus = (event: ReactFocusEvent) => {
        triggerCallbackIfExists<Properties<Type>>(
            properties, 'focus', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on key down events.
     * @param event - Key up event object.
     */
    const onKeyDown = (event: ReactKeyboardEvent): void => {
        if (
            !properties.disabled &&
            useSuggestions &&
            'ArrowDown' === event.code &&
            event.target === inputReference.current?.input?.current
        )
            menuReference.current?.focusItem(0)

        /*
            NOTE: We do not want to forward keydown enter events coming from
            textareas.
        */
        if (
            isSelection ||
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
     */
    const onKeyUp = (event: ReactKeyboardEvent) => {
        // NOTE: Avoid breaking password-filler on non textarea fields!
        if (event.code) {
            onSelectionChange(event)

            triggerCallbackIfExists<Properties<Type>>(
                properties, 'keyUp', controlled, event, properties
            )
        }
    }
    /**
     * Triggered on selection change events.
     * @param event - Event which triggered selection change.
     */
    const onSelectionChange = (event: GenericEvent) => {
        triggerCallbackIfExists<Properties<Type>>(
            properties, 'selectionChange', controlled, event, properties
        )
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     */
    const onTouch = (event: ReactFocusEvent | ReactMouseEvent): void => {
        setValueState((
            oldValueState: ValueState<Type, ModelState>
        ): ValueState<Type, ModelState> => {
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

            let result: ValueState<Type, ModelState> = oldValueState

            if (changedState) {
                onChange(event)

                result = {
                    ...oldValueState,
                    modelState: properties.model.state as ModelState
                }

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
    }
    // endregion
    // region properties
    /// region references
    const inputReference =
        useRef<InputReference | InputEventMapperReference>(null)
    const wrapperReference = useRef<HTMLDivElement>(null)
    const menuReference: RefObject<MenuReference | null> =
        useRef<MenuReference>(null)
    /// endregion
    const givenProps: Props<Type> = translateKnownSymbols(props)

    const [cursor, setCursor] = useState<CursorState>({end: 0, start: 0})
    const [editorState, setEditorState] = useState<EditorState>({
        editorIsActive: givenProps.editorIsInitiallyActive || false,
        selectionIsUnstable: false
    })
    const [hidden, setHidden] = useState<boolean | undefined>()
    const [isSuggestionOpen, setIsSuggestionOpen] = useState<boolean>(false)
    const [showDeclaration, setShowDeclaration] = useState<boolean>(false)

    let initialValue: null | Type = determineInitialValue<Type>(
        givenProps,
        TextInput.defaultProperties.model.default as Type
    )
    if (initialValue instanceof Date)
        initialValue = (initialValue.getTime() / 1000) as unknown as Type
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties: Props<Type> = extend<Props<Type>>(
        true,
        copy<Props<Type>>(TextInput.defaultProperties as Props<Type>),
        givenProps
    )

    const type: TypeSpecification =
        givenProperties.type as keyof DataTransformation | null ||
        givenProperties.model?.type ||
        'string'
    const transformer: DataTransformation =
        givenProperties.transformer ?
            {
                ...TextInput.transformer,
                [type as string]: extend<DataTransformSpecification<Type>>(
                    true,
                    copy(
                        TextInput.transformer[
                            type as keyof DataTransformation
                        ] as DataTransformSpecification<Type> | null
                    ) ||
                    {},
                    givenProperties.transformer as
                        DataTransformSpecification<Type>
                )
            } :
            TextInput.transformer

    let [selection, setSelection] =
        useState<AbortController | Properties['selection']>()
    if (givenProperties.selection || givenProperties.model?.selection)
        selection =
            givenProperties.selection ||
            givenProperties.model?.selection as
                Selection

    const normalizedSelection: NormalizedSelection | null | undefined =
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
            modelState: {...TextInput.defaultModelState},
            representation: determineInitialRepresentation<Type>(
                givenProperties as DefaultProperties<Type>,
                TextInput.defaultProperties as
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
    const controlled: boolean =
        !givenProperties.enforceUncontrolled &&
        (
            givenProps.model?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(givenProps.onChange || givenProps.onChangeValue)
    const representationControlled: boolean =
        controlled && givenProps.representation !== undefined

    deriveMissingPropertiesFromState()

    const properties: Properties<Type> =
        getConsolidatedProperties(givenProperties)

    if (properties.hidden === undefined)
        properties.hidden = properties.name.startsWith('password')
    /// region synchronize properties into state where values are not controlled
    if (properties.cursor && !equals(properties.cursor, cursor))
        setCursor(properties.cursor as CursorState)
    if (properties.editorIsActive !== editorState.editorIsActive)
        setEditorState({
            ...editorState, editorIsActive: properties.editorIsActive
        })
    if (properties.hidden !== hidden)
        setHidden(properties.hidden)
    if (properties.showDeclaration !== showDeclaration)
        setShowDeclaration(properties.showDeclaration)

    const currentValueState: ValueState<Type, ModelState> = {
        modelState: properties.model.state as ModelState,
        representation: properties.representation,
        value: properties.value || null
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        !controlled &&
        (
            !equals(properties.value, valueState.value) ||
            properties.representation !== valueState.representation
        ) ||
        !equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState = wrapStateSetter<ValueState<Type, ModelState>>(
            setValueState, currentValueState
        )
    /// endregion
    // endregion
    // region export references
    useImperativeHandle(
        reference,
        (): AdapterWithReferences<Type> => {
            const state: State<Type> =
                {modelState: properties.model.state} as State<Type>

            for (const name of [
                'cursor', 'editorIsActive', 'hidden', 'showDeclaration'
            ] as const)
                if (!Object.prototype.hasOwnProperty.call(givenProps, name))
                    (state[name] as boolean | Partial<CursorState>) =
                        properties[name] ?? false

            if (!representationControlled)
                state.representation = properties.representation
            if (!controlled)
                state.value = properties.value as null | Type

            return {
                properties,
                references: {
                    input: inputReference,
                    menu: menuReference,
                    wrapper: wrapperReference
                },
                state
            }
        }
    )
    // endregion
    // region render
    /// region intermediate render properties
    const textInputProperties: Partial<TextInputProperties<Type>> = {
        ref: inputReference as RefObject<InputReference>,
        /*
            NOTE: If not set label with forbidden symbols will automatically
            be used.
        */
        id,

        componentProperties: properties.componentProperties,
        domNodeProperties: properties.domNodeProperties,

        onClick,
        onFocus: triggerOnFocusAndOpenSuggestions as
            LowLevelBaseComponentProperties['onFocus'],

        disabled: properties.disabled,
        helpText: {
            children: renderHelpText(),
            persistent: true
        },
        name: properties.name || properties.description,
        label: properties.description || properties.name
        /*
            NOTE: Validation is not handled by the low level component like
            this:

            pattern: properties.pattern,
            required: properties.required
        */
    }
    const typeTextInputProperties: Partial<TypeTextInputProperties<Type>> = {
        invalid: (
            properties.invalid &&
            properties.showValidationState &&
            (properties.showInitialValidationState || properties.visited)
        ),

        placeholder: properties.placeholder,
        characterCount:
            typeof properties.maximumLength === 'number' &&
            !isNaN(properties.maximumLength) &&
            properties.maximumLength >= 0,

        value: properties.representation as Type,

        /*
            NOTE: Disabled input fields are not focusable via keyboard which
            makes them unreachable for blind people using e.g. screen readers.
            That's why the label gets a tabindex to make the input focusable.
        */
        domNodeProperties: {
            'tab-index': properties.disabled ? '0' : '-1',
            ...properties.domNodeProperties
        },

        onKeyUp
    }

    const isAdvancedEditor: boolean = (
        !properties.selection &&
        properties.type === 'string' &&
        properties.editorIsActive &&
        (
            properties.editor === 'code' ||
            properties.editor.startsWith('code(') &&
            properties.editor.endsWith(')') ||
            properties.editor === 'richtext' ||
            properties.editor.startsWith('richtext(') &&
            properties.editor.endsWith(')')
        )
    )
    const isCodeEditor =
        isAdvancedEditor && properties.editor.startsWith('code')

    const currentRenderableSuggestions: (
        Array<Array<ReactElement> | ReactElement>
    ) = []
    const currentSuggestionLabels: Array<ReactNode | string> = []
    const currentSuggestionValues: Array<unknown> = []
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
            if (isFunction(properties.children)) {
                const result: null | ReactElement = properties.children({
                    index,
                    normalizedSelection: normalizedSelection,
                    properties,
                    query: properties.representation as string,
                    suggestion,
                    value: suggestionValues[index] as Type
                })

                if (result) {
                    currentRenderableSuggestions.push(result)
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
                    (mark(
                        console.log('S', suggestion) || suggestion,
                        (
                            properties.representation as string | null
                        )?.split(' ') || '',
                        {
                            marker: (foundWord: string): ReactElement =>
                                <span className={
                                    CSS_CLASS_NAMES
                                        .textInputSuggestionsSuggestionMark
                                }>
                                    {foundWord}
                                </span>,
                            normalizer: (value: unknown): string =>
                                String(value).toLowerCase(),
                            skipTagDelimitedParts: null
                        }
                    ) as Array<ReactElement | string>)
                        .map((
                            item: ReactNode | string, index: number
                        ): ReactElement =>
                            <span key={index}>{item}</span>
                        )
                )
                currentSuggestionLabels.push(suggestion)
                currentSuggestionValues.push(suggestionValues[index])
            }

            index += 1
        }
    }
    const isSelection: boolean =
        (Boolean(normalizedSelection) || Boolean(properties.labels)) &&
        !useSuggestions
    /// endregion
    /// region determine type specific constraints
    const typeTextConstraints: Mapping<unknown> = {}
    if (properties.type === 'number') {
        typeTextConstraints.step = properties.step

        if (properties.maximum !== Infinity)
            typeTextConstraints.max = properties.maximum
        if (properties.minimum !== -Infinity)
            typeTextConstraints.min = properties.minimum
    } else if (properties.type === 'string') {
        if (
            properties.maximumLength >= 0 &&
            properties.maximumLength !== Infinity
        )
            typeTextConstraints.maximumLength = properties.maximumLength
        if (properties.minimumLength > 0)
            typeTextConstraints.minimumLength = properties.minimumLength

        if (properties.editor !== 'plain')
            typeTextConstraints.rows = properties.rows
    } else if ([
        'date', 'date-local',
        'date', 'date-local',
        'datetime', 'datetime-local',
        'time', 'time-local'
    ].includes(properties.type as string)) {
        typeTextConstraints.step = properties.step

        if (properties.maximum !== Infinity)
            typeTextConstraints.max = formatValue<Type>(
                properties,
                properties.maximum as
                    unknown as
                    Type,
                transformer
            )
        if (properties.minimum !== -Infinity)
            typeTextConstraints.min = formatValue<Type>(
                properties,
                properties.minimum as
                    unknown as
                    Type,
                transformer
            )
    }
    /// endregion
    const editorProperties = {} as
        CodeEditorProperties | RichTextEditorProperties
    if (isAdvancedEditor)
        if (
            properties.editor.startsWith('code(') &&
            properties.editor.endsWith(')')
        ) {
            const modeName = properties.editor.substring(
                'code('.length, properties.editor.length - 1
            )
            if (modeName) {
                editorProperties.editor = {}
                if (
                    javascript as (object | undefined) &&
                    [
                        'js', 'jsx',
                        'ts', 'tsx',
                        'script', 'javascript',
                        'typescript'
                    ]
                        .includes(modeName.toLowerCase())
                )
                    (editorProperties as CodeEditorProperties).editor.mode =
                        javascript({jsx: true, typescript: true})
                else if (
                    css as (object | undefined) &&
                    [
                        'css',
                        'style',
                        'styles',
                        'cascadingstylesheet',
                        'cascadingstylesheets'
                    ].includes(modeName.toLowerCase())
                )
                    (editorProperties as CodeEditorProperties).editor.mode =
                        css()
            }
        } else
            editorProperties.editor = TIPTAP_DEFAULT_OPTIONS
    /// region main markup
    return <WrapConfigurations
        strict={TextInput.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    >
        <div
            ref={wrapperReference}

            className={[CSS_CLASS_NAMES.textInput]
                .concat(properties.className)
                .join(' ')
            }
            style={properties.styles}

            onBlur={onBlur}
            onKeyDown={onKeyDown}


            {...(useSuggestions ? {role: 'search'} : {})}
        >
            {wrapAnimationConditionally(
                <Select<Type>
                    {...textInputProperties}

                    name={properties.name}

                    onChange={onChangeValue}
                    onClick={onClick}
                    onKeyDown={(event: ReactKeyboardEvent): void => {
                        /*
                            Avoid scrolling page interactions when navigating
                            through option.
                        */
                        if (!(properties.disabled || event.code === 'Tab'))
                            event.preventDefault()
                    }}

                    options={normalizedSelection as NormalizedSelection}
                    value={properties.value as Type}
                />,
                isSelection
            )}
            {isAdvancedEditor ?
                isCodeEditor ?
                    wrapAnimationConditionally(
                        <CodeEditorComponent
                            {...textInputProperties}
                            {...typeTextInputProperties as
                                Partial<CodeEditorProperties>
                            }
                            {...typeTextConstraints}

                            onChange={onChangeValue as
                                CodeEditorProperties['onChange']
                            }

                            {...editorProperties as
                                Partial<CodeEditorProperties>
                            }

                            ref={inputReference as
                                RefObject<CodeMirrorReference>
                            }
                        />,
                        isAdvancedEditor
                    ) :
                    <RichTextEditorComponent
                        {...textInputProperties as
                            Partial<RichTextEditorProperties>
                        }
                        {...typeTextInputProperties as
                            Partial<RichTextEditorProperties>
                        }
                        {...typeTextConstraints}

                        onChange={onChangeValue as
                            RichTextEditorProperties['onChange']
                        }

                        {...editorProperties as
                            Partial<RichTextEditorProperties>
                        }

                        ref={inputReference as RefObject<TipTapReference>}
                    /> :
                ''
            }
            {wrapAnimationConditionally(
                <div>
                    {useSuggestions ?
                        <Menu
                            ref={menuReference}

                            onKeyDown={preventEnterKeyPropagation}
                            pending={selection instanceof AbortController}

                            classNames={[CSS_CLASS_NAMES.textInputSuggestions]}
                            pendingClassNames={[
                                CSS_CLASS_NAMES.textInputSuggestionsPending
                            ]}
                            onFocus={onFocus}
                            onSelect={(event: SyntheticEvent) => {
                                onChangeValue(
                                    currentSuggestionValues[
                                        (event as
                                            unknown as
                                            {detail: {index: number}}
                                        )
                                            .detail.index
                                    ] as Type,
                                    (event as
                                        unknown as
                                        {detail: {index: number}}
                                    ).detail.index
                                )
                                setIsSuggestionOpen(false)
                            }}
                            open={
                                Boolean(currentSuggestionLabels.length) &&
                                isSuggestionOpen &&
                                /*
                                    NOTE: If single possibility is already
                                    selected avoid showing this suggestion.
                                */
                                !(
                                    currentSuggestionLabels.length === 1 &&
                                    currentSuggestionLabels[0] ===
                                        properties.representation
                                )
                            }

                            options={currentRenderableSuggestions}
                        /> :
                        ''
                    }
                    {
                        properties.type === 'string' &&
                        properties.editor !== 'plain' ?
                            <TextArea
                                {...textInputProperties as
                                    Partial<TextInputProperties<string>>
                                }
                                {...typeTextInputProperties as
                                    Partial<TypeTextInputProperties<string>>
                                }
                                {...typeTextConstraints as
                                    Partial<TypeTextInputProperties<string>>
                                }

                                ref={inputReference as
                                    RefObject<TextAreaReference>
                                }

                                onChange={
                                    onChangeValue as
                                        TextAreaProperties['onChange']
                                }
                            /> :
                            <TextField
                                {...textInputProperties}
                                {...typeTextInputProperties as
                                    Partial<TextFieldProperties>
                                }
                                {...typeTextConstraints}

                                onChange={onChangeValue as
                                    TextFieldProperties['onChange']
                                }

                                leadingIcon={wrapIconWithTooltip(
                                    applyIconPreset(properties.leadingIcon)
                                )}
                                trailingIcon={wrapIconWithTooltip(
                                    applyIconPreset(properties.trailingIcon)
                                )}

                                type={determineNativeType(properties)}
                            />
                    }
                </div>,
                !(isAdvancedEditor || isSelection),
                properties.editor.startsWith('code')
            )}
        </div>
    </WrapConfigurations>
    /// endregion
    // endregion
}
// NOTE: This is useful in react dev tools.
TextInputInner.displayName = 'TextInput'
/**
 * Wrapping web component compatible react component.
 * @property defaultModelState - Initial model state.
 * @property defaultProperties - Initial property configuration.
 * @property locales - Defines input formatting locales.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in reacts
 * strict component.
 * @property transformer - Text input data transformation specifications.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const TextInput = memorize(forwardRef(TextInputInner)) as
    unknown as
    Component<typeof TextInputInner>
// region static properties
/// region web-component hints
TextInput.wrapped = TextInputInner
TextInput.webComponentAdapterWrapped = 'react'
/// endregion
TextInput.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
TextInput.defaultProperties = {
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
TextInput.locales = LOCALES
TextInput.propTypes = propertyTypes as PropertiesValidationMap
TextInput.renderProperties = renderProperties
TextInput.strict = false
TextInput.transformer = TRANSFORMER
// endregion
export default TextInput
