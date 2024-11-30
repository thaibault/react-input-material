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
import {copy, extend, mask} from 'clientnode'
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

import {
    createDummyStateSetter,
    formatDateTimeAsConfigured,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../../helper'
import TextInput from '../TextInput'
import {InputProperties, InputAdapterWithReferences} from '../TextInput/type'
import WrapConfigurations from '../WrapConfigurations'

/*
"namedExport" version of css-loader:

import {intervalClassName, intervalDisabledClassName} from './style.module'
*/
import cssClassNames from './style.module'

import {
    defaultProperties as defaultProperties,
    Adapter as Adapter,
    AdapterWithReferences as AdapterWithReferences,
    Component,
    ModelState as ModelState,
    Properties as Properties,
    propertyTypes as propertyTypes,
    Props as Props,
    Value as Value,
    IntervalInputProps
} from './type'
// endregion
const CSS_CLASS_NAMES = cssClassNames
// region helper
const determineControlled = (props: Props) =>
    props.model?.value?.end?.value !== undefined ||
    props.model?.value?.start?.value !== undefined ||
    props.value !== undefined &&
    !(
        (props.value?.start as Props | null)?.value ===
            undefined &&
        (props.value?.end as Props | null)?.value === undefined
    )
const normalizeDateTimeToNumber = (
    value?: null | number | string, fallbackValue = 0
): number =>
    typeof value === 'number' ?
        value :
        value ?
            new Date(value).getTime() / 1000 :
            fallbackValue
const getModelState = (
    startProperties: InputProperties<null | number | string>,
    endProperties: InputProperties<null | number | string>
): ModelState => ({
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
    properties: Properties,
    iconProperties: IconOptions,
    startProperties: InputProperties<null | number | string>,
    endProperties: InputProperties<null | number | string>
): Properties => {
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
 * @returns React elements.
 */
export const IntervalInner = function(
    props: Props, reference?: ForwardedRef<Adapter>
): ReactElement {
    // region consolidate properties
    const givenProps: Props = translateKnownSymbols(props) as Props
    /*
        Normalize value property (providing only value instead of props is
        allowed also).
    */
    if (!givenProps.value)
        givenProps.value = {
            end: {value: givenProps.value}, start: {value: givenProps.value}
        }
    if (['number', 'string'].includes(typeof givenProps.value.end))
        givenProps.value.end = {value: givenProps.value.end as number | string}
    if (['number', 'string'].includes(typeof givenProps.value.start))
        givenProps.value.start = {
            value: givenProps.value.start as number | string
        }
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    type StrictProps = Omit<Props, 'value'> & {value: Props['value']}
    const properties: StrictProps =
        extend(
            true,
            copy(Interval.defaultProperties as StrictProps),
            givenProps as StrictProps
        )

    let endProperties =
        properties.value?.end as Props | null ||
        {} as Props
    const iconProperties: IconOptions = typeof properties.icon === 'string' ?
        {icon: properties.icon} :
        properties.icon as IconOptions
    let startProperties =
        properties.value?.start as Props | null ||
        {} as Props
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled: boolean =
        !properties.enforceUncontrolled &&
        determineControlled(givenProps) &&
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
        mask<Props>(
            properties as unknown as Props,
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

    startProperties = extend(
        true,
        copy(propertiesToForward),
        properties.model?.value?.start ?
            {model: properties.model.value.start} :
            {},
        startProperties
    )
    endProperties = extend(
        true,
        copy(propertiesToForward),
        properties.model?.value?.end ?
            {model: properties.model.value.end} :
            {},
        endProperties
    )

    if (!startProperties.className)
        startProperties.className = `${CSS_CLASS_NAMES.interval}__start`
    if (!iconProperties.className)
        iconProperties.className = `${CSS_CLASS_NAMES.interval}__icon`
    if (!endProperties.className)
        endProperties.className = `${CSS_CLASS_NAMES.interval}__end`

    const startConfiguration = {...startProperties.model, ...startProperties}
    const endConfiguration = {...endProperties.model, ...endProperties}

    // NOTE: Consolidates only internal boundaries for better user experience.
    const consolidateBoundaries = ({start, end}: Value) => {
        startProperties.maximum = formatDateTimeAsConfigured(Math.min(
            normalizeDateTimeToNumber(startConfiguration.maximum, Infinity),
            normalizeDateTimeToNumber(end, Infinity),
            normalizeDateTimeToNumber(endConfiguration.maximum, Infinity)
        )) ?? Infinity

        startProperties.minimum = formatDateTimeAsConfigured(
            normalizeDateTimeToNumber(startConfiguration.minimum, -Infinity)
        ) ?? -Infinity
        startProperties.value = formatDateTimeAsConfigured(start)

        endProperties.maximum = formatDateTimeAsConfigured(
            normalizeDateTimeToNumber(endConfiguration.maximum, Infinity)
        ) ?? Infinity

        endProperties.minimum = formatDateTimeAsConfigured(Math.max(
            normalizeDateTimeToNumber(endConfiguration.minimum, -Infinity),
            normalizeDateTimeToNumber(start, -Infinity),
            normalizeDateTimeToNumber(startConfiguration.minimum, -Infinity)
        )) ?? -Infinity
        endProperties.value = end
    }

    const valueState: Value = {
        start: (properties.value?.start as Props | null)?.value,
        end: (properties.value?.end as Props | null)?.value
    }

    consolidateBoundaries(valueState)

    const endInputReference =
        useRef<InputAdapterWithReferences<null | number | string>>(null)
    const startInputReference=
        useRef<InputAdapterWithReferences<null | number | string>>(null)

    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Value>(valueState)
    // endregion
    useImperativeHandle(
        reference,
        (): AdapterWithReferences => ({
            properties: getExternalProperties(
                properties as Properties,
                iconProperties,
                startInputReference.current?.properties ||
                properties.value?.start as
                    InputProperties<null | number | string>,
                endInputReference.current?.properties ||
                properties.value?.end as InputProperties<null | number | string>
            ),
            references: {end: endInputReference, start: startInputReference},
            state: controlled ? {} : {value: valueState}
        })
    )
    // region attach event handler
    if (properties.onChange) {
        startProperties.onChange = (
            inputProperties: InputProperties<null | number | string>,
            event?: GenericEvent
        ): void => {
            const end: InputProperties<null | number | string> =
                endInputReference.current?.properties ||
                endProperties as
                    unknown as
                    InputProperties<null | number | string>
            end.value = end.model.value = normalizeDateTimeToNumber(
                endInputReference.current?.properties?.value, -Infinity
            )
            if (!controlled)
                end.value = end.model.value = formatDateTimeAsConfigured(
                    Math.max(
                        end.value,
                        normalizeDateTimeToNumber(
                            inputProperties.value, -Infinity
                        )
                    )
                )

            // NOTE: We need to reset internal temporary set boundaries.
            end.maximum = end.model.maximum = endConfiguration.maximum
            end.minimum = end.model.minimum = endConfiguration.minimum
            inputProperties.maximum = inputProperties.model.maximum =
                startConfiguration.maximum
            inputProperties.minimum = inputProperties.model.minimum =
                startConfiguration.minimum

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
                event || new Event('genericIntervalStartChange'),
                properties
            )
        }
        endProperties.onChange = (
            inputProperties: InputProperties<null | number | string>,
            event?: GenericEvent
        ): void => {
            const start: InputProperties<null | number | string> =
                startInputReference.current?.properties ||
                startProperties as
                    unknown as
                    InputProperties<null | number | string>
            start.value = start.model.value = normalizeDateTimeToNumber(
                startInputReference.current?.properties?.value, Infinity
            )
            if (!controlled)
                start.value = start.model.value = formatDateTimeAsConfigured(
                    Math.min(
                        start.value,
                        normalizeDateTimeToNumber(
                            inputProperties.value, Infinity
                        )
                    )
                )

            // NOTE: We need to reset internal temporary set boundaries.
            start.maximum = start.model.maximum = startConfiguration.maximum
            start.minimum = start.model.minimum = startConfiguration.minimum
            inputProperties.maximum = inputProperties.model.maximum =
                endConfiguration.maximum
            inputProperties.minimum = inputProperties.model.minimum =
                endConfiguration.minimum

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
                event || new Event('genericIntervalEndChange'),
                properties
            )
        }
    }

    startProperties.onChangeValue = (
        value: null | number | string, event?: GenericEvent
    ) => {
        let endValue = normalizeDateTimeToNumber(
            endInputReference.current?.properties?.value, -Infinity
        )
        if (!controlled)
            endValue = Math.max(
                endValue, normalizeDateTimeToNumber(value, -Infinity)
            )

        const newValue: Value = {
            start: value,
            end: isFinite(endValue) ? endValue : value
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
    endProperties.onChangeValue = (
        value: null | number | string, event?: GenericEvent
    ) => {
        let startValue = normalizeDateTimeToNumber(
            startInputReference.current?.properties?.value, Infinity
        )
        if (!controlled)
            startValue = Math.min(
                startValue, normalizeDateTimeToNumber(value, Infinity)
            )

        const newValue: Value = {
            start: isFinite(startValue) ? startValue : value,
            end: value
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
                        CSS_CLASS_NAMES.intervalDisabled :
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
 * @property defaultProperties - Initial property configuration.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in reacts
 * strict component.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const Interval: Component<typeof IntervalInner> =
    memorize(forwardRef(IntervalInner)) as
        unknown as
        Component<typeof IntervalInner>
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
