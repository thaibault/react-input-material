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
import {createDummyStateSetter, translateKnownSymbols} from '../helper'
import {
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
    const iconProperties:IconOptions|string|undefined = properties.icon
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
            givenProps.model?.value !== undefined ||
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
    value = properties.value ?? value

    delete properties.enforceUncontrolled

    delete properties.end
    delete properties.icon
    delete properties.start

    delete properties.model
    delete properties.onChange
    delete properties.onChangeValue
    delete properties.value

    Tools.extend(true, endProperties, {model: model.end}, properties)
    Tools.extend(true, startProperties, {model: model.start}, properties)

    const endConfiguration = {...endProperties.model, ...endProperties}
    const startConfiguration = {...startProperties.model, ...startProperties}

    startProperties.maximum = Math.min(
        typeof startConfiguration.maximum === 'number' ?
            startConfiguration.maximum :
            Infinity,
        value.end || Infinity,
        typeof endConfiguration.maximum === 'number' ?
            endConfiguration.maximum :
            Infinity
    )
    startProperties.minimum = startConfiguration.minimum || -Infinity
    startProperties.value = value.start

    endProperties.maximum = typeof endConfiguration.maximum === 'number' ?
        endConfiguration.maximum :
        Infinity
    endProperties.minimum = Math.max(
        typeof endConfiguration.minimum === 'number' ?
            endConfiguration.minimum :
            -Infinity,
        value.start || -Infinity,
        typeof startConfiguration.minimum === 'number' ?
            startConfiguration.minimum :
            -Infinity
    )
    endProperties.value = value.end

    const endInputReference = createRef<InputAdapterWithReferences<number>>()
    const startInputReference = createRef<InputAdapterWithReferences<number>>()

    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Value>(value)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences => ({
            properties: properties as Properties,
            references: {end: endInputReference, start: startInputReference},
            state: controlled ? {} : {value}
        })
    )
    // region attach event handler
    if (onChange) {
        endProperties.onChange = (
            inputProperties:InputProperties<number>
        ):void => {
            const startValue:number = Math.min(
                endInputReference.current?.properties?.value ?? Infinity,
                inputProperties.value ?? Infinity
            )

            const properties = {
                end: inputProperties,
                value: {
                    end: inputProperties.value,
                    start: startValue
                },
                start: {
                    ...(startInputReference.current?.properties || {}),
                    model: {
                        ...(
                            startInputReference.current?.properties?.model || {}
                        ),
                        value: startValue
                    },
                    value: startValue
                }
            }
            properties.model = {
                end: properties.end.model, start: properties.start.model
            }
            onChange(properties)
        }
        startProperties.onChange = (inputProperties:InputProperties<number>):void => {
            const endValue:number = Math.max(
                endInputReference.current?.properties?.value ?? -Infinity,
                inputProperties.value ?? -Infinity
            )

            const properties = {
                end: {
                    ...(endInputReference.current?.properties || {}),
                    model: {
                        ...(
                            endInputReference.current?.properties?.model || {}
                        ),
                        value: endValue
                    },
                    value: endValue
                },
                value: {
                    end: endValue,
                    start: inputProperties.value
                },
                start: inputProperties
            }
            properties.model = {
                end: properties.end.model, start: properties.start.model
            }
            onChange(properties)
        }
    }

    endProperties.onChangeValue = (value:number):void => {
        const newValue = {
            end: value,
            start: Math.min(
                startInputReference.current?.properties?.value ?? Infinity,
                value
            )
        }
        onChangeValue && onChangeValue(newValue)
        setValue(newValue)
    }
    startProperties.onChangeValue = (value:number):void => {
        const newValue = {
            end: Math.max(
                endInputReference.current?.properties?.value ?? -Infinity,
                value
            ),
            start: value
        }
        onChangeValue && onChangeValue(newValue)
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
            <GenericInput {...startProperties} ref={startInputReference} />
            <Icon icon={iconProperties} />
            <GenericInput {...endProperties} ref={endInputReference} />
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
// region static properties
// / region web-component hints
Interval.wrapped = IntervalInner
Interval.webComponentAdapterWrapped = 'react'
// / endregion
Interval.defaultProperties = {
    end: {
        className: `${styles.interval}__end`,
        description: 'End'
    },
    enforceUncontrolled: false,
    icon: {className: `${styles.interval}__icon`, icon: 'timelapse'},
    maximumText: 'Please provide somthing earlier than ${formatValue(maximum)}.',
    minimumText: 'Please provide somthing later than ${formatValue(minimum)}.',
    start: {
        className: `${styles.interval}__start`,
        description: 'Start'
    },
    type: 'time'
}
Interval.propTypes = propertyTypes
Interval.strict = false
// endregion
export default Interval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
