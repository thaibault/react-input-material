// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module FileInput */
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
import {FirstParameter} from 'clientnode/type'
import {
    createRef,
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    ReactElement,
    RefCallback,
    RefObject,
    SyntheticEvent,
    useImperativeHandle,
    useState
} from 'react'
import {Card} from '@rmwc/card'
import {Theme} from '@rmwc/theme'

import styles from './FileInput.module'
import {WrapConfigurations} from './WrapConfigurations'
import {
    determineInitialValue,
    determineValidationState as determineBaseValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../helper'
import {
    FileInputAdapter as Adapter,
    FileInputModel as Model,
    FileInputProperties as Properties,
    FileInputProps as Props,
    FileInputState as State,
    defaultModelState,
    DefaultFileInputProperties as DefaultProperties,
    defaultFileInpitProperties as defaultProperties,
    FileInputModelState as ModelState,
    fileInputPropertyTypes as propertyTypes,
    StaticFunctionComponent as StaticComponent,
    ValueState
} from '../type'
// endregion
/**
 * Validateable checkbox wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
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
export const FileInputInner = function(
    props:Props, reference?:RefObject<Adapter>
):ReactElement {
    // TODO
    // region property aggregation
    const deriveMissingPropertiesFromState = () => {
        if (givenProperties.showDeclaration === undefined)
            givenProperties.showDeclaration = showDeclaration
        // region value state
        /*
            NOTE: Avoid writing into mutable model object properties. So project
            value to properties directly.
        */
        if (
            givenProperties.model!.value !== undefined &&
            givenProperties.value === undefined
        )
            givenProperties.value = givenProperties.model!.value
         if (givenProperties.value === undefined)
            givenProperties.value = valueState.value

        if (givenProperties.model!.state)
            givenProperties.model!.state = {...givenProperties.model!.state}
        else
            givenProperties.model!.state = {} as ModelState
        for (const key in valueState.modelState)
            if (
                Object.prototype.hasOwnProperty.call(valueState.modelState, key) &&
                (
                    givenProperties.model!.state as Partial<ModelState>
                )[key as keyof ModelState] === undefined
            )
                givenProperties.model!.state[key as keyof ModelState] =
                    valueState.modelState[key as keyof ModelState]
        // endregion
    }
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (properties:Props):Properties => {
        let result:Props = mapPropertiesIntoModel<Props, Model>(
            properties, RequireableCheckbox.defaultProperties.model as Model
        )

        determineValidationState(
            result as Properties, result.model!.state as ModelState
        )

        result = getBaseConsolidatedProperties<Props, Properties>(result)

        result.checked = Boolean(result.value)

        return result as Properties
    }
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Nothing.
     */
    const onBlur = (event:SyntheticEvent):void => setValueState((
        oldValueState:ValueState<boolean, ModelState>
    ):ValueState<boolean, ModelState> => {
        let changed:boolean = false

        if (oldValueState.modelState.focused) {
            properties.focused = false
            changed = true
        }

        if (!oldValueState.modelState.visited) {
            properties.visited = true
            changed = true
        }

        if (changed) {
            onChange(event)

            triggerCallbackIfExists<Properties>(
                properties,
                'changeState',
                controlled,
                properties.model.state,
                event
            )
        }

        triggerCallbackIfExists<Properties>(
            properties, 'blur', controlled, event
        )

        return changed ?
            {...oldValueState, modelState: properties.model.state} :
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
                properties as unknown as Props
            )
        )

        triggerCallbackIfExists<Properties>(
            properties, 'change', controlled, properties, event
        )
    }
    /**
     * Triggered when show declaration indicator should be changed.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChangeShowDeclaration = (event?:ReactMouseEvent):void =>
        setShowDeclaration((value:boolean):boolean => {
            properties.showDeclaration = !value

            onChange(event)

            triggerCallbackIfExists<Properties>(
                properties,
                'changeShowDeclaration',
                controlled,
                properties.showDeclaration,
                event
            )

            return properties.showDeclaration
        })
    /**
     * Triggered when ever the value changes.
     * @param eventOrValue - Event object or new value.
     * @returns Nothing.
     */
    const onChangeValue = (eventOrValue:boolean|null|SyntheticEvent):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        let event:SyntheticEvent|undefined
        if (
            eventOrValue !== null &&
            typeof eventOrValue === 'object' &&
            (eventOrValue as SyntheticEvent).target
        ) {
            event = eventOrValue as SyntheticEvent
            properties.value = Boolean(
                (event.target as unknown as {checked:boolean|null}).checked
            )
        } else
            properties.value = eventOrValue as boolean|null

        setValueState((
            oldValueState:ValueState<boolean, ModelState>
        ):ValueState<boolean, ModelState> => {
            if (oldValueState.value === properties.value)
                return oldValueState

            let stateChanged:boolean = false

            const result:ValueState<boolean, ModelState> =
                {...oldValueState, value: properties.value as boolean|null}

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState(properties, oldValueState.modelState))
                stateChanged = true

            triggerCallbackIfExists<Properties>(
                properties, 'changeValue', controlled, properties.value, event
            )

            if (stateChanged) {
                result.modelState = properties.model.state

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event
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
        triggerCallbackIfExists<Properties>(
            properties, 'click', controlled, event
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        triggerCallbackIfExists<Properties>(
            properties, 'focus', controlled, event
        )

        onTouch(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((
            oldValueState:ValueState<boolean, ModelState>
        ):ValueState<boolean, ModelState> => {
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

            let result:ValueState<boolean, ModelState> = oldValueState

            if (changedState) {
                onChange(event)

                result = {...oldValueState, modelState: properties.model.state}

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event
                )
            }

            triggerCallbackIfExists<Properties>(
                properties, 'touch', controlled, event
            )

            return result
        })
    // endregion
    // region properties
    // / region references
    const inputReference:RefObject<HTMLInputElement> =
        createRef<HTMLInputElement>()
    const foundationRef:RefObject<MDCCheckboxFoundation> =
        createRef<MDCCheckboxFoundation>()
    // / endregion
    const givenProps:Props = translateKnownSymbols(props)

    let [showDeclaration, setShowDeclaration] = useState<boolean>(false)

    const initialValue:boolean|null = determineInitialValue<boolean>(
        givenProps,
        RequireableCheckbox.defaultProperties.model!.default,
        givenProps.checked
    )
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties:Props = Tools.extend(
        true, Tools.copy(RequireableCheckbox.defaultProperties), givenProps
    )
    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    let [valueState, setValueState] =
        useState<ValueState<boolean, ModelState>>({
            modelState: {...RequireableCheckbox.defaultModelState},
            value: initialValue
        })

    const controlled:boolean =
        !givenProperties.enforceUncontrolled &&
        (
            givenProps.model?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(givenProps.onChange || givenProps.onChangeValue)

    deriveMissingPropertiesFromState()

    const properties:Properties = getConsolidatedProperties(givenProperties)
    // region synchronize properties into state where values are not controlled
    if (properties.showDeclaration !== showDeclaration)
        setShowDeclaration(properties.showDeclaration)

    const currentValueState:ValueState<boolean, ModelState> = {
        modelState: properties.model.state,
        value: properties.value as boolean|null
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        !controlled && properties.value !== valueState.value ||
        !Tools.equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState = wrapStateSetter<ValueState<boolean, ModelState>>(
            setValueState, currentValueState
        )
    // endregion
    useImperativeHandle(
        reference,
        ():Adapter & {
            references:{
                foundationRef:RefObject<MDCCheckboxFoundation>
                inputReference:RefObject<HTMLInputElement>
            }
        } => ({
            properties,
            references: {foundationRef, inputReference},
            state: {
                modelState: properties.model.state,
                showDeclaration: properties.showDeclaration,
                ...(controlled ?
                    {} :
                    {value: properties.value as boolean|null}
                )
            }
        })
    )
    // endregion
    // region render
    // TODO Helptext
    return <WrapConfigurations
        strict={RequireableCheckbox.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    ><div className={
        styles['requireable-checkbox'] +
        (properties.className ? ` ${properties.className}` : '')
    }>
        <Checkbox
            checked={Boolean(properties.value)}
            disabled={properties.disabled}
            foundationRef={
                foundationRef as unknown as RefCallback<MDCCheckboxFoundation>
            }
            id={properties.id || properties.name}
            indeterminate={properties.value === null}
            inputRef={
                inputReference as unknown as RefCallback<HTMLInputElement>
            }
            label={(
                properties.invalid &&
                (
                    properties.showInitialValidationState ||
                    /*
                        Material inputs show their validation state at least
                        after a blur event so we synchronize error appearances.
                    */
                    properties.visited
                )
            ) ?
                <Theme use="error">
                    {properties.description || properties.name}
                </Theme> :
                properties.description || properties.name
            }
            name={properties.name}
            onBlur={onBlur}
            onChange={onChangeValue}
            onClick={onClick}
            onFocus={onFocus}
            ripple={properties.ripple}
            value={`${properties.value}`}
        />
    </div></WrapConfigurations>
    // endregion
} as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
FileInputInner.displayName = 'FileInput'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProperties - Initial property configuration.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const FileInput:StaticComponent<Props> =
    memorize(forwardRef(FileInputInner)) as unknown as StaticComponent<Props>
// region static properties
// / region web-component hints
FileInput.wrapped = FileInputInner
FileInput.webComponentAdapterWrapped = 'react'
// / endregion
FileInput.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
FileInput.defaultProperties = {
    ...defaultProperties,
    model: {...defaultProperties.model, state: undefined, value: undefined},
    value: undefined
}
FileInput.propTypes = propertyTypes
FileInput.strict = false
// endregion
export default FileInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion