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
import {
    createRef,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    RefObject,
    useImperativeHandle,
    useState
} from 'react'

import GenericInput from './GenericInput'
import styles from './Interval.module'
import WrapConfigurations from './WrapConfigurations'
import {createDummyStateSetter, translateKnownSymbols} from '../helper'
import {
    IntervalAdapter as Adapter,
    IntervalAdapterWithReferences as AdapterWithReferences,
    IntervalProperties as Properties,
    intervalPropertyTypes as propertyTypes,
    IntervalProps as Props
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
    const givenProps:Props<Type> = translateKnownSymbols(props)
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:Props = Tools.extend(
        true, Tools.copy(Interval.defaultProperties), givenProps
    )

    const endProperties = properties.end
    const iconProperties = properties.icon
    const startProperties = properties.start
    const onChange = properties.onChange
    const onChangeValue = properties.onChangeValue

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

    let [value, setValue] = useState<{end:number;start:number}>({
        end: endProperties.value, start: startProperties.value
    })
    properties.value = properties.value ?? value

    delete properties.enforceUncontrolled

    delete properties.end
    delete properties.icon
    delete properties.start

    delete properties.onChange
    delete properties.onChangeValue

    Tools.extend(true, endProperties, properties)
    Tools.extend(true, startProperties, properties)

    startProperties.maximum = Math.min(
        startProperties.maximum || Infinity,
        endProperties.value || Infinity,
        endProperties.maximum || Infinity
    )
    startProperties.minimum = startProperties.minimum || -Infinity
    startProperties.value = properties.value.start

    endProperties.maximum = endProperties.maximum || Infinity
    endProperties.minimum = Math.max(
        endProperties.minimum || -Infinity,
        startProperties.value || -Infinity,
        startProperties.minimum || -Infinity
    )
    endProperties.value = properties.value.end

    endProperties.ref = createRef<GenericInput>()
    startProperties.ref = createRef<GenericInput>()


    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<number>(properties.value)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences => ({
            properties,
            references: {end: endProperties.ref, start: startPropertes.ref},
            state: {
                ...(controlled ?
                    {} :
                    {value: properties.value as null|number}
                )
            }
        })
    )
    // region attach event handler
    if (onChange) {
        endProperties.onChange = (properties:InputProperties<number>):void => {
            const startValue:number = Math.min(
                startProperties.ref.current?.properties.value ?? Infinity,
                properties.value
            )

            onChange({
                end: properties,
                value: {
                    end: properties.value,
                    start: startValue
                },
                start: {
                    ...(startProperties.ref.current?.properties || {}),
                    model: {
                        ...(
                            startProperties.ref.current?.properties.model || {}
                        ),
                        value: startValue
                    },
                    value: startValue
                }
            })
        }
        startProperties.onChange = (properties:InputProperties<number>):void => {
            const endValue:number = Math.max(
                endProperties.ref.current?.properties.value ?? -Infinity,
                properties.value
            )

            onChange({
                end: {
                    ...(endProperties.ref.current?.properties || {}),
                    model: {
                        ...(
                            endProperties.ref.current?.properties.model || {}
                        ),
                        value: endValue
                    },
                    value: endValue
                },
                value: {
                    end: endValue,
                    start: properties.value
                },
                start: properties
            })
        }
    }

    endProperties.onChangeValue = (value:number):void => {
        const newValue = {
            end: value,
            start: Math.min(
                startProperties.ref.current?.properties.value ?? Infinity,
                value
            )
        }
        onChangeValue && onChangeValue(newValue)
        setValue(newValue)
    }
    startProperties.onChangeValue = (value:number):void => {
        const newValue = {
            end: Math.max(
                endProperties.ref.current?.properties.value ?? -Infinity,
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
            <GenericInput {...startProperties} />
            <Icon {...iconProperties} />
            <GenericInput {...endProperties} />
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
export const Interval:StaticComponent =
    memorize(forwardRef(IntervalInner)) as unknown as StaticComponent
// region static propertie s
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
