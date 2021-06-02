// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module RequireableCheckbox */
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
import {MDCCheckboxFoundation} from '@material/checkbox'
import {Checkbox} from '@rmwc/checkbox'
import {Theme} from '@rmwc/theme'

import styles from './RequireableCheckbox.module'
import {WrapConfigurations} from './WrapConfigurations'
import {
    deriveMissingPropertiesFromState,
    determineInitialValue,
    determineValidationState as determineBaseValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../helper'
import {
    CheckboxAdapter as Adapter,
    CheckboxModel as Model,
    CheckboxProperties as Properties,
    CheckboxProps as Props,
    CheckboxState as State,
    defaultModelState,
    DefaultCheckboxProperties as DefaultProperties,
    defaultCheckboxProperties as defaultProperties,
    CheckboxModelState as ModelState,
    checkboxPropertyTypes as propertyTypes,
    StaticFunctionComponent as StaticComponent,
    CheckboxValueState as ValueState
} from '../type'
// endregion
// region helper
export function determineValidationState(
    properties:Properties, currentState:ModelState
):boolean {
    return determineBaseValidationState<Properties>(
        properties,
        currentState,
        {invalidRequired: ():boolean =>
            properties.model.nullable === false && !properties.model.value
        }
    )
}
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
export const RequireableCheckboxInner = function(
    props:Props, reference?:RefObject<Adapter>
):ReactElement {
    // region property aggregation
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
        oldValueState:ValueState
    ):ValueState => {
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
                event,
                properties
            )
        }

        triggerCallbackIfExists<Properties>(
            properties, 'blur', controlled, event, properties
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
     * Triggered when ever the value changes.
     * @param event - Event object.
     * @returns Nothing.
     */
    const onChangeValue = (event:SyntheticEvent):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        properties.value = Boolean(
            (event.target as unknown as {checked:boolean|null}).checked
        )

        setValueState((oldValueState:ValueState):ValueState => {
            if (oldValueState.value === properties.value)
                return oldValueState

            let stateChanged:boolean = false

            const result:ValueState =
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
                properties,
                'changeValue',
                controlled,
                properties.value,
                event,
                properties
            )

            if (stateChanged) {
                result.modelState = properties.model.state

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
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
            properties, 'click', controlled, event, properties
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
            properties, 'focus', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((oldValueState:ValueState):ValueState => {
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

            let result:ValueState = oldValueState

            if (changedState) {
                onChange(event)

                result = {...oldValueState, modelState: properties.model.state}

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            triggerCallbackIfExists<Properties>(
                properties, 'touch', controlled, event, properties
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
    let [valueState, setValueState] = useState<ValueState>({
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

    deriveMissingPropertiesFromState<Props, ValueState>(
        givenProperties, valueState
    )

    const properties:Properties = getConsolidatedProperties(givenProperties)

    const currentValueState:ValueState = {
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
        setValueState =
            wrapStateSetter<ValueState>(setValueState, currentValueState)
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
                ...(controlled ?
                    {} :
                    {value: properties.value as boolean|null}
                )
            }
        })
    )
    // endregion
    // region render
    return <WrapConfigurations
        strict={RequireableCheckbox.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    ><div
        className={[styles['requireable-checkbox']]
            .concat(properties.className ?? [])
            .join(' ')
        }
        style={properties.style}
    >
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
RequireableCheckboxInner.displayName = 'RequireableCheckbox'
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
export const RequireableCheckbox:StaticComponent<Props> =
    memorize(forwardRef(RequireableCheckboxInner)) as
        unknown as
        StaticComponent<Props>
// region static properties
// / region web-component hints
RequireableCheckbox.wrapped = RequireableCheckboxInner
RequireableCheckbox.webComponentAdapterWrapped = 'react'
// / endregion
RequireableCheckbox.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
RequireableCheckbox.defaultProperties = {
    ...defaultProperties,
    model: {...defaultProperties.model, state: undefined, value: undefined},
    value: undefined
}
RequireableCheckbox.propTypes = propertyTypes
RequireableCheckbox.strict = false
// endregion
export default RequireableCheckbox
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
