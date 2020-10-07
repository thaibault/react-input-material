// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module requireable-checkbox */
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
import {MDCCheckboxFoundation} from '@material/checkbox'
import {Checkbox} from '@rmwc/checkbox'
import '@rmwc/checkbox/styles'
import {Theme} from '@rmwc/theme'
import React, {
    createRef,
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardRefRenderFunction,
    FunctionComponent,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    ReactElement,
    RefCallback,
    RefObject,
    SyntheticEvent,
    useImperativeHandle,
    useState
} from 'react'
import {WebComponentAdapter} from 'web-component-wrapper/type'

import {WrapConfigurations} from './WrapConfigurations'
import {
    determineInitialValue,
    determineValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesAndStateToModel
} from '../helper'
import {
    CheckboxModel as Model,
    CheckboxProperties as Properties,
    CheckboxProps as Props,
    CheckboxState as State,
    defaultModelState,
    DefaultCheckboxProperties as DefaultProperties,
    defaultCheckboxProperties as defaultProperties,
    CheckboxModelState as ModelState,
    propertyTypes,
    StaticFunctionComponent as StaticComponent
} from '../type'
// endregion
/**
 * Validateable checkbox wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const RequireableCheckboxInner = function(
    props:Props, reference?:RefObject<WebComponentAdapter<Properties, State>>
):ReactElement {
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (properties:Props):Properties => {
        const result:DefaultProperties =
            mapPropertiesAndStateToModel<Props, Model, ModelState, boolean>(
                properties,
                RequireableCheckbox.defaultProps.model as Model,
                value,
                model,
                props
            ) as DefaultProperties
        determineValidationState<Properties, boolean>(
            result as Properties, result.model.value as boolean
        )
        return getBaseConsolidatedProperties<Props, Properties>(result)
    }
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
            onChangeState(properties.model.state, event)
            changed = true
        }

        if (!properties.visited) {
            properties.visited =
            properties.model.state.visited =
                true
            changed = true
        }

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
                        of "RecursivePartial"
                    */
                    properties as unknown as Props
                ),
                event
            )
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
     * Triggered when a value state changes like validation or focusing.
     * @param state - Current value state.
     * @param event - Triggering event object.
     * @returns Nothing.
     */
    const onChangeState = (state:ModelState, event?:SyntheticEvent):void => {
        for (const key of Object.keys(state))
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                setModel(state)
                break
            }
        if (properties.onChangeState)
            properties.onChangeState(state, event)
    }
    /**
     * Triggered when ever the value changes.
     * @param eventOrValue - Event object or new value.
     * @returns Nothing.
     */
    const onChangeValue = (eventOrValue:boolean|null|SyntheticEvent):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        let event:SyntheticEvent|undefined
        let value:boolean|null
        if (
            eventOrValue !== null &&
            typeof eventOrValue === 'object' &&
            (eventOrValue as SyntheticEvent).target
        ) {
            event = eventOrValue as SyntheticEvent
            value = (
                typeof (event.target as {checked?:boolean|null}).checked ===
                    'undefined' &&
                typeof properties.indeterminate === 'boolean'
            ) ?
                null :
                Boolean(
                    (event.target as unknown as {checked:boolean|null}).checked
                )
        } else
            value = eventOrValue as boolean|null

        const oldValue:boolean|null = properties.value as boolean|null

        properties.checked = properties.value = properties.model.value = value

        if (oldValue !== properties.value) {
            let stateChanged:boolean =
                determineValidationState<Properties, boolean>(
                    properties, properties.value
                )

            if (properties.pristine) {
                properties.dirty = properties.model.state.dirty = true
                properties.pristine = properties.model.state.pristine = false
                stateChanged = true
            }
            if (stateChanged)
                onChangeState(properties.model.state, event)

            setValue(properties.value)
            onChange(event)

            if (properties.onChangeValue)
                properties.onChangeValue(properties.value, event)
        }
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
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
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void => {
        let changeState:boolean = false
        if (!properties.focused) {
            changeState =
            properties.focused =
            properties.model.state.focused =
                true
        }
        if (properties.untouched) {
            changeState =
            properties.touched =
            properties.model.state.touched =
                true
            properties.untouched =
            properties.model.state.untouched =
                false
        }
        if (changeState) {
            onChangeState(properties.model.state, event)
            onChange(event)
        }
        if (properties.onTouch)
            properties.onTouch(event)
    }
    // endregion
    // region properties
    // / region references
    const inputReference:RefObject<HTMLInputElement> =
        createRef<HTMLInputElement>()
    const foundationRef:RefObject<MDCCheckboxFoundation> =
        createRef<MDCCheckboxFoundation>()
    // / endregion
    const [model, setModel] =
        useState<ModelState>({...RequireableCheckbox.defaultModelState})
    let [showDeclaration, setShowDeclaration] = useState<boolean>(false)
    let [value, setValue] = useState<boolean|null>(
        determineInitialValue<boolean>(props, props.checked)
    )

    const properties:Properties = getConsolidatedProperties(props)
    useImperativeHandle(
        reference,
        ():WebComponentAdapter<Properties, State> & {
            references:{
                foundationRef:RefObject<MDCCheckboxFoundation>
                inputReference:RefObject<HTMLInputElement>
            }
        } => ({
            properties,
            references: {foundationRef, inputReference},
            state: {model, showDeclaration, value}
        })
    )
    // endregion
    // region derive state variables from given properties
    if (properties.showDeclaration !== undefined)
        showDeclaration = properties.showDeclaration

    if (properties.value !== undefined)
        value = Boolean(properties.value)
    else if (properties.model?.value !== undefined)
        value = Boolean(properties.model.value)
    // endregion
    // region markup
    // TODO Helptext
    return <WrapConfigurations
        strict={RequireableCheckbox.strict}
        theme={properties.theme}
        tooltip={properties.tooltip}
    >
        <Checkbox
            checked={value === null ? undefined : value}
            disabled={properties.disabled}
            foundationRef={
                foundationRef as unknown as RefCallback<MDCCheckboxFoundation>
            }
            id={properties.id || properties.name}
            indeterminate={properties.indeterminate || value === null}
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
            value={`${value}`}
        />
    </WrapConfigurations>
    // endregion
} as ForwardRefRenderFunction<WebComponentAdapter<Properties, State>, Props>
// NOTE: This is useful in react dev tools.
RequireableCheckboxInner.displayName = 'RequireableCheckbox'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
 * @property static:defaultProps - Initial property configuration.
 * @property static:propTypes - Triggers reacts runtime property value checks
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const RequireableCheckbox:StaticComponent =
    memorize(forwardRef(RequireableCheckboxInner)) as
        unknown as
        StaticComponent
// region static properties
// / region web-component hints
RequireableCheckbox.wrapped = RequireableCheckboxInner
RequireableCheckbox.webComponentAdapterWrapped = true
// / endregion
RequireableCheckbox.defaultModelState = defaultModelState
RequireableCheckbox.defaultProps = defaultProperties
RequireableCheckbox.propTypes = propertyTypes
RequireableCheckbox.strict = false
// endregion
export default RequireableCheckbox
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
