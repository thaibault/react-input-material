// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Interval */
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
import {Mapping} from 'clientnode/type'
import {GenericEvent} from 'react-generic-tools/type'
import {Icon} from '@rmwc/icon'
import {IconOptions} from '@rmwc/types'
import {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    useImperativeHandle,
    useRef,
    useState
} from 'react'

import TextInput from '../TextInput'
/*
"namedExport" version of css-loader:

import {intervalClassName, intervalDisabledClassName} from './style.module'
*/
import cssClassNames from './style.module'
import WrapConfigurations from '../WrapConfigurations'
import {
    createDummyStateSetter, translateKnownSymbols, triggerCallbackIfExists
} from '../../helper'
import {
    defaultIntervalProperties as defaultProperties,
    InputProps,
    InputProperties,
    InputAdapterWithReferences,
    IntervalAdapter as Adapter,
    IntervalAdapterWithReferences as AdapterWithReferences,
    IntervalComponent,
    IntervalModelState as ModelState,
    IntervalProperties as Properties,
    intervalPropertyTypes as propertyTypes,
    IntervalProps as Props,
    IntervalValue as Value
} from '../../type'
// endregion
const CSS_CLASS_NAMES:Mapping = cssClassNames as Mapping
// region helper
const normalizeDateTimeToNumber = (
    value?:null|number|string, fallbackValue = 0
):number =>
    typeof value === 'number' ?
        value :
        value ?
            new Date(value).getTime() / 1000 :
            fallbackValue
const getModelState = (
    startProperties:InputProperties<null|number|string>,
    endProperties:InputProperties<null|number|string>
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
    properties:Properties,
    iconProperties:IconOptions,
    startProperties:InputProperties<null|number|string>,
    endProperties:InputProperties<null|number|string>
):Properties => {
    const modelState = getModelState(startProperties, endProperties)

    return {
        ...properties,
        ...modelState,
        icon: iconProperties,
        model: {
            name: properties.name,
            state: modelState,
            value: {
                end: endProperties.model,
                start: startProperties.model
            }
        },
        value: {
            end: endProperties,
            start: startProperties
        }
    }
}
// endregion
/**
 * Generic interval start, end input wrapper component.
 * @param props - Component properties.
 * @param reference - Mutable reference bound to created component instance.
 *
 * @returns React elements.
 */
export const IntervalInner = function(
    props:Props, reference?:ForwardedRef<Adapter>
):ReactElement {
    // region consolidate properties
    const givenProps:Props = translateKnownSymbols(props) as Props
    /*
        Normalize value property (providing only value instead of props is
        allowed also).
    */
    if (!givenProps.value)
        givenProps.value = {
            end: {value: givenProps.value}, start: {value: givenProps.value}
        }
    if (['number', 'string'].includes(typeof givenProps.value.end))
        givenProps.value.end = {value: givenProps.value.end as number|string}
    if (['number', 'string'].includes(typeof givenProps.value.start))
        givenProps.value.start = {
            value: givenProps.value.start as number|string
        }
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    type StrictProps = Omit<Props, 'value'> & {value:Properties['value']}
    const properties:StrictProps =
        Tools.extend(
            true,
            Tools.copy(Interval.defaultProperties as StrictProps),
            givenProps as StrictProps
        )

    let endProperties =
        properties.value?.end as InputProps<null|number|string> || {}
    const iconProperties:IconOptions = typeof properties.icon === 'string' ?
        {icon: properties.icon} :
        properties.icon!
    let startProperties =
        properties.value?.start as InputProps<null|number|string> || {}
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !properties.enforceUncontrolled &&
        (
            givenProps.model?.value?.end?.value !== undefined ||
            givenProps.model?.value?.start?.value !== undefined ||
            givenProps.value !== undefined &&
            !(
                (givenProps.value?.start as InputProps)?.value === undefined &&
                (givenProps.value?.end as InputProps)?.value === undefined
            )
        ) &&
        Boolean(properties.onChange || properties.onChangeValue)
    let [value, setValue] = useState<Value>({
        end:
            endProperties.value ??
            properties.model?.value?.end?.value ??
            endProperties.default ??
            properties.model?.value?.end?.default ??
            null,
        start:
            startProperties.value ??
            properties.model?.value?.end?.value ??
            startProperties.default ??
            properties.model?.value?.start?.default ??
            null
    })
    if (!controlled)
        properties.value =
            {end: {value: value.end}, start: {value: value.start}}
    const propertiesToForward =
        Tools.mask<InputProps<null|number|string>>(
            properties as unknown as InputProps<null|number|string>,
            {exclude: {
                className: true,
                enforceUncontrolled: true,
                end: true,
                icon: true,
                start: true,
                model: true,
                name: true,
                onChange: true,
                onChangeValue: true,
                style: true,
                value: true
            }}
        )

    endProperties = Tools.extend(
        true,
        Tools.copy(propertiesToForward),
        properties.model?.value?.end ?
            {model: properties.model.value.end} :
            {},
        endProperties
    )
    startProperties = Tools.extend(
        true,
        Tools.copy(propertiesToForward),
        properties.model?.value?.start ?
            {model: properties.model.value.start} :
            {},
        startProperties
    )

    if (!endProperties.className)
        endProperties.className = `${CSS_CLASS_NAMES.interval}__end`
    if (!iconProperties.className)
        iconProperties.className = `${CSS_CLASS_NAMES.interval}__icon`
    if (!startProperties.className)
        startProperties.className = `${CSS_CLASS_NAMES.interval}__start`

    const endConfiguration = {...endProperties.model, ...endProperties}
    const startConfiguration = {...startProperties.model, ...startProperties}

    startProperties.maximum = Math.min(
        normalizeDateTimeToNumber(startConfiguration.maximum, Infinity),
        normalizeDateTimeToNumber(properties.value.end.value, Infinity),
        normalizeDateTimeToNumber(endConfiguration.maximum, Infinity)
    )
    startProperties.minimum =
        normalizeDateTimeToNumber(startConfiguration.minimum, -Infinity)
    startProperties.value = properties.value.start.value

    endProperties.maximum =
        normalizeDateTimeToNumber(endConfiguration.maximum, Infinity)
    endProperties.minimum = Math.max(
        normalizeDateTimeToNumber(endConfiguration.minimum, -Infinity),
        normalizeDateTimeToNumber(properties.value.start.value, -Infinity),
        normalizeDateTimeToNumber(startConfiguration.minimum, -Infinity)
    )
    endProperties.value = properties.value.end.value

    const endInputReference =
        useRef<InputAdapterWithReferences<null|number|string>>(null)
    const startInputReference=
        useRef<InputAdapterWithReferences<null|number|string>>(null)

    const valueState:Value = {
        end: properties.value.end.value,
        start: properties.value.start.value
    }
    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Value>(valueState)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences => ({
            properties: getExternalProperties(
                properties as Properties,
                iconProperties,
                startInputReference.current?.properties ||
                properties.value.start as InputProperties<null|number|string>,
                endInputReference.current?.properties ||
                properties.value.end as InputProperties<null|number|string>
            ),
            references: {end: endInputReference, start: startInputReference},
            state: controlled ? {} : {value: valueState}
        })
    )
    // region attach event handler
    if (properties.onChange) {
        endProperties.onChange = (
            inputProperties:InputProperties<null|number|string>,
            event?:GenericEvent
        ):void => {
            const start:InputProperties<null|number|string> =
                startInputReference.current?.properties ||
                startProperties as
                    unknown as
                    InputProperties<null|number|string>
            start.value = Math.min(
                normalizeDateTimeToNumber(
                    startInputReference.current?.properties?.value, Infinity
                ),
                normalizeDateTimeToNumber(inputProperties.value, Infinity)
            )

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(
                    properties as Properties,
                    iconProperties,
                    start,
                    inputProperties
                ),
                event,
                properties
            )
        }
        startProperties.onChange = (
            inputProperties:InputProperties<null|number|string>,
            event?:GenericEvent
        ):void => {
            const end:InputProperties<null|number|string> =
                endInputReference.current?.properties ||
                endProperties as unknown as InputProperties<null|number|string>
            end.value = Math.max(
                normalizeDateTimeToNumber(
                    endInputReference.current?.properties?.value, -Infinity
                ),
                normalizeDateTimeToNumber(inputProperties.value, -Infinity)
            )

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(
                    properties as Properties,
                    iconProperties,
                    inputProperties,
                    end
                ),
                event,
                properties
            )
        }
    }

    endProperties.onChangeValue = (
        value:null|number|string, event?:GenericEvent
    ) => {
        const startValue = Math.min(
            normalizeDateTimeToNumber(
                startInputReference.current?.properties?.value, Infinity
            ),
            normalizeDateTimeToNumber(value, Infinity)
        )
        const newValue:Value = {
            end: value, start: isFinite(startValue) ? startValue : value
        }

        triggerCallbackIfExists<Properties>(
            properties as Properties,
            'changeValue',
            controlled,
            newValue,
            event,
            properties
        )

        setValue(newValue)
    }
    startProperties.onChangeValue = (
        value:null|number|string, event?:GenericEvent
    ) => {
        const endValue = Math.max(
            normalizeDateTimeToNumber(
                endInputReference.current?.properties?.value, -Infinity
            ),
            normalizeDateTimeToNumber(value, -Infinity)
        )
        const newValue:Value = {
            end: isFinite(endValue) ? endValue : value, start: value
        }

        triggerCallbackIfExists<Properties>(
            properties as Properties,
            'changeValue',
            controlled,
            newValue,
            event,
            properties
        )

        setValue(newValue)
    }
    // endregion
    return <WrapConfigurations
        strict={Interval.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={[CSS_CLASS_NAMES.interval]
                .concat(
                    properties.className ?? [],
                    properties.disabled ?
                        CSS_CLASS_NAMES['interval--disabled'] :
                        []
                )
                .join(' ')
            }
            data-name={properties.name}
            style={properties.styles}
        >
            <TextInput {...startProperties} ref={startInputReference} />
            <Icon icon={iconProperties} />
            <TextInput {...endProperties} ref={endInputReference} />
        </div>
    </WrapConfigurations>
}
// NOTE: This is useful in react dev tools.
IntervalInner.displayName = 'Interval'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultProperties - Initial property configuration.
 * @property static:propTypes - Triggers reacts runtime property value checks.
 * @property static:strict - Indicates whether we should wrap render output in
 * reacts strict component.
 * @property static:wrapped - Wrapped component.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 *
 * @returns React elements.
 */
export const Interval:IntervalComponent<typeof IntervalInner> =
    memorize(forwardRef(IntervalInner)) as
        unknown as
        IntervalComponent<typeof IntervalInner>
// region static properties
/// region web-component hints
Interval.wrapped = IntervalInner
Interval.webComponentAdapterWrapped = 'react'
/// endregion
Interval.defaultProperties = defaultProperties
Interval.propTypes = propertyTypes
Interval.strict = false
// endregion
export default Interval
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
