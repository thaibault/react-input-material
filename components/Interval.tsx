// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module interval */
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
import {Icon} from '@rmwc/icon'
import {IconOptions} from '@rmwc/types'
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

import GenericInput from './GenericInput'
import styles from './Interval.module'
import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter, translateKnownSymbols, triggerCallbackIfExists
} from '../helper'
import {
    defaultIntervalProperties as defaultProperties,
    GenericEvent,
    InputModel,
    InputProps,
    InputProperties,
    InputAdapterWithReferences,
    IntervalAdapter as Adapter,
    IntervalAdapterWithReferences as AdapterWithReferences,
    IntervalProperties as Properties,
    intervalPropertyTypes as propertyTypes,
    IntervalProps as Props,
    IntervalValue as Value,
    StaticFunctionInputComponent as StaticComponent
} from '../type'
// endregion
/**
 * Generic interval start, end input wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const IntervalInner = ((
    props:Props, reference?:RefObject<Adapter>
):ReactElement => {
    // region consolidate properties
    const givenProps:Props = translateKnownSymbols(props) as Props
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:Props = Tools.extend(
        true, Tools.copy(Interval.defaultProperties), givenProps
    )

    const endProperties:InputProps<number> = properties.end!
    const iconProperties:IconOptions = typeof properties.icon === 'string' ?
        {icon: properties.icon} :
        properties.icon!
    const startProperties:InputProps<number> = properties.start!

    const model = properties.model
    const onChange:Function|undefined = properties.onChange
    const onChangeValue:Function|undefined = properties.onChangeValue

    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !properties.enforceUncontrolled &&
        (
            givenProps.model?.end?.value !== undefined ||
            givenProps.model?.start?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(onChange || onChangeValue)

    let [value, setValue] = useState<Value>({
        end:
            endProperties.value ??
            model?.end?.value ??
            endProperties.default ??
            model?.end?.default ??
            null,
        start:
            startProperties.value ??
            model?.end?.value ??
            startProperties.default ??
            model?.start?.default ??
            null,
    })
    if (!properties.value)
        properties.value = value
    const propertiesToForward:InputProps<number> =
        Tools.mask<InputProps<number>>(
            properties as InputProps<number>,
            {exclude: {
                enforceUncontrolled: true,
                end: true,
                icon: true,
                start: true,
                model: true,
                onChange: true,
                onChangeValue: true,
                value: true
            }}
        )

    Tools.extend(true, endProperties, {model: model?.end}, propertiesToForward)
    Tools.extend(
        true, startProperties, {model: model?.start}, propertiesToForward
    )

    if (!endProperties.className)
        endProperties.className = `${styles.interval}__end`
    if (!iconProperties.className)
        iconProperties.className = `${styles.interval}__icon`
    if (!startProperties.className)
        startProperties.className = `${styles.interval}__start`

    const endConfiguration = {...endProperties.model, ...endProperties}
    const startConfiguration = {...startProperties.model, ...startProperties}

    startProperties.maximum = Math.min(
        typeof startConfiguration.maximum === 'number' ?
            startConfiguration.maximum :
            Infinity,
        properties.value.end || Infinity,
        typeof endConfiguration.maximum === 'number' ?
            endConfiguration.maximum :
            Infinity
    )
    startProperties.minimum = startConfiguration.minimum || -Infinity
    startProperties.value = properties.value.start

    endProperties.maximum = typeof endConfiguration.maximum === 'number' ?
        endConfiguration.maximum :
        Infinity
    endProperties.minimum = Math.max(
        typeof endConfiguration.minimum === 'number' ?
            endConfiguration.minimum :
            -Infinity,
        properties.value.start || -Infinity,
        typeof startConfiguration.minimum === 'number' ?
            startConfiguration.minimum :
            -Infinity
    )
    endProperties.value = properties.value.end

    const endInputReference:RefObject<InputAdapterWithReferences<number>> =
        createRef<InputAdapterWithReferences<number>>()
    const startInputReference:RefObject<InputAdapterWithReferences<number>> =
        createRef<InputAdapterWithReferences<number>>()

    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Value>(properties.value)
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
        endProperties.onChange = (
            inputProperties:InputProperties<number>, event?:GenericEvent
        ):void => {
            const startValue:number = Math.min(
                endInputReference.current?.properties?.value ?? Infinity,
                inputProperties.value ?? Infinity
            )
            const startModel:InputModel<number> = {
                ...(
                    startInputReference.current?.properties?.model ||
                    {} as unknown as InputModel<number>
                ),
                value: startValue
            }

            const externalProperties:Properties = {
                ...properties as Properties,
                end: inputProperties,
                icon: iconProperties,
                model: {end: inputProperties.model, start: startModel},
                value: {end: inputProperties.value, start: startValue},
                start: {
                    ...(
                        startInputReference.current?.properties ||
                        startProperties as unknown as InputProperties<number>
                    ),
                    model: startModel,
                    value: startValue
                }
            }
            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                externalProperties,
                event
            )
        }
        startProperties.onChange = (
            inputProperties:InputProperties<number>, event?:GenericEvent
        ):void => {
            const endValue:number = Math.max(
                endInputReference.current?.properties?.value ?? -Infinity,
                inputProperties.value ?? -Infinity
            )
            const endModel:InputModel<number> = {
                ...(
                    endInputReference.current?.properties?.model ||
                    {} as unknown as InputModel<number>
                ),
                value: endValue
            }

            const externalProperties:Properties = {
                ...properties as Properties,
                end: {
                    ...(
                        endInputReference.current?.properties ||
                        endProperties as unknown as InputProperties<number>
                    ),
                    model: endModel,
                    value: endValue
                },
                icon: iconProperties,
                model: {end: endModel, start: inputProperties.model},
                value: {end: endValue, start: inputProperties.value},
                start: inputProperties
            }
            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                externalProperties,
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
        const newValue = {
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
        const newValue = {
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
        strict={Interval.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div className={
            styles.interval +
            (properties.className ? ` ${properties.className}` : '')
        }>
            <GenericInput
                {...startProperties} ref={startInputReference as any}
            />
            <Icon icon={iconProperties} />
            <GenericInput {...endProperties} ref={endInputReference as any} />
        </div>
    </WrapConfigurations>
}) as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
IntervalInner.displayName = 'Interval'
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
export const Interval:StaticComponent<Props> =
    memorize(forwardRef(IntervalInner)) as unknown as StaticComponent<Props>
// region static  properties
// / region web-component hints
Interval.wrapped = IntervalInner
Interval.webComponentAdapterWrapped = 'react'
// / endregion
Interval.defaultProperties = defaultProperties
Interval.propTypes = propertyTypes
Interval.strict = false
// endregion
export default Interval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
