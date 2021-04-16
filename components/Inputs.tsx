// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module inputs */
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
import {
    createRef,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    ReactElement,
    RefObject,
    useImperativeHandle,
    useState
} from 'react'

import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter, translateKnownSymbols, triggerCallbackIfExists
} from '../helper'
import {
    GenericEvent,
    InputsAdapter,
    InputsProperties,
    InputsProps,
    Properties,
    Props,
    StaticComponent
} from '../type'
// endregion
/**
 * Generic inputs wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const InputsInner = function<
    Type = any,
    Props extends Props = Props,
    Properties extends Properties = Properties
>((
    props:InputsProps<Type>, reference?:RefObject<InputsAdapter<Type>>
):ReactElement => {
    // region consolidate properties
    const givenProps:InputsProps<Type> =
        translateKnownSymbols(props) as PropsInputs<Type>
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:InputsProps<Type> = Tools.extend(
        true, Tools.copy(Inputs.defaultProperties), givenProps
    )
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !properties.enforceUncontrolled &&
        (
            Array.isArray(givenProps.model) &&
            givenProps.model.every(({value}):boolean => value !== undefined) ||
            Array.isArray(givenProps.value) &&
            givenProps.value.every((value:Type):boolean value !== undefined)
        ) &&
        Boolean(onChange || onChangeValue)

    let [value, setValue] = useState<Array<Type>>([])
    if (!properties.value)
        properties.value = value
    const propertiesToForward:Props =
        Tools.mask<Props>(
            properties as Props,
            {exclude: {
                enforceUncontrolled: true,
                model: true,
                name: true,
                onChange: true,
                onChangeValue: true,
                value: true
            }}
        )

    // TODO
    cons propertiesList:Array<Properties> = properties.model.map((
        properties:Properties<Type>, index:number
    ):Properties<Type> =>
        Tools.extend(
            true,
            properties,
            properties.model && properties.model.length > index ?
                {model: properties.model[index]} :
                {},
            propertiesToForward
        )
    )

    const inputReferences:Array<RefObject<InputAdapterWithReferences<Type>>> =
        createRef<Array<InputAdapterWithReferences<Type>>>()

    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Array<Type>>(properties.value)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences => ({
            properties: properties as Properties,
            references: {end: endInputReference, start: startInputReference},
            state: controlled ? {} : {value: properties.value}
        })
    )
    // region attach event handler
    if (onChange) {
        const getModelState = (
            startProperties:InputProperties<number>,
            endProperties:InputProperties<number>
        ):ModelState => ({
            dirty: startProperties.dirty || endProperties.dirty,
            focused: startProperties.focused || endProperties.focused,
            invalid: startProperties.invalid || endProperties.invalid,
            invalidRequired:
                startProperties.invalidRequired ||
                endProperties.invalidRequired,
            pristine: startProperties.pristine && endProperties.pristine,
            touched: startProperties.touched || endProperties.touched,
            untouched: startProperties.untouched && endProperties.untouched,
            valid: startProperties.valid && endProperties.valid,
            visited: startProperties.visited || endProperties.visited
        })
        const getExternalProperties = (
            startProperties:InputProperties<number>,
            endProperties:InputProperties<number>
        ):Properties => {
            const modelState = getModelState(startProperties, endProperties)

            return {
                ...properties as Properties,
                ...modelState,
                end: endProperties,
                icon: iconProperties,
                model: {
                    end: endProperties.model,
                    start: startProperties.model,
                    state: modelState
                },
                start: startProperties,
                value: {
                    end: endProperties.value, start: startProperties.value
                }
            }
        }

        endProperties.onChange = (
            inputProperties:InputProperties<number>, event?:GenericEvent
        ):void => {
            const start:InputProperties<number> =
                startInputReference.current?.properties ||
                startProperties as unknown as InputProperties<number>
            start.value = Math.min(
                endInputReference.current?.properties?.value ?? Infinity,
                inputProperties.value ?? Infinity
            )

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(start, inputProperties),
                event
            )
        }
        startProperties.onChange = (
            inputProperties:InputProperties<number>, event?:GenericEvent
        ):void => {
            const end:InputProperties<number> =
                endInputReference.current?.properties ||
                endProperties as unknown as InputProperties<number>
            end.value = Math.max(
                endInputReference.current?.properties?.value ?? -Infinity,
                inputProperties.value ?? -Infinity
            )

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(inputProperties, end),
                event
            )
        }
    }

    endProperties.onChangeValue = (
        value:null|number, event?:GenericEvent
    ):void => {
        const startValue:number = Math.min(
            startInputReference.current?.properties?.value ?? Infinity,
            value ?? Infinity
        )
        const newValue:Value = {
            end: value, start: isFinite(startValue) ? startValue : value
        }
        triggerCallbackIfExists<Properties>(
            properties as Properties,
            'changeValue',
            controlled,
            newValue,
            event
        )
        setValue(newValue)
    }
    startProperties.onChangeValue = (
        value:null|number, event?:GenericEvent
    ):void => {
        const endValue:number = Math.max(
            endInputReference.current?.properties?.value ?? -Infinity,
            value ?? -Infinity
        )
        const newValue:Value = {
            end: isFinite(endValue) ? endValue : value, start: value
        }
        triggerCallbackIfExists<Properties>(
            properties as Properties,
            'changeValue',
            controlled,
            newValue,
            event
        )
        setValue(newValue)
    }
    // endregion 
    return <WrapConfigurations
        strict={Inputs.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={
                styles.inputs +
                (properties.className ? ` ${properties.className}` : '')
            }
            data-name={properties.name}
        >
            {propertiesList.map((
                properties:Properties<Type>, index:number
            ):ReactElement =>
                properties.children(properties, index)
            )}
        </div>
    </WrapConfigurations>
}) as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
InputsInner.displayName = 'Inputs'
/**
 * Wrapping web component compatible react component.
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
export const Inputs:StaticComponent<Props> =
    memorize(forwardRef(InputsInner)) as unknown as StaticComponent<Props>
// region static properties 
// / region web-component hints
Inputs.wrapped = InputsInner
Inputs.webComponentAdapterWrapped = 'react'
// / endregion
Inputs.defaultProperties = defaultProperties
Inputs.propTypes = propertyTypes
Inputs.strict = false
// endregion
export default Inputs
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
