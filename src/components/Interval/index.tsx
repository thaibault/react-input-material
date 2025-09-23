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
import {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    useImperativeHandle,
    useRef,
    useState
} from 'react'

import Icon from '#implementations/Icon'

import {
    createDummyStateSetter,
    formatDateTimeAsConfigured,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../../helper'
import TextInput from '../TextInput'
import {
    Properties as TextInputProperties,
    AdapterWithReferences as TextInputAdapterWithReferences
} from '../TextInput/type'
import WrapConfigurations from '../Wrapper/WrapConfigurations'

/*
"namedExport" version of css-loader:

import {intervalClassName, intervalDisabledClassName} from './style.module'
*/
import cssClassNames from './style.module'

import {IconProperties} from '../../implementations/type'

import {
    Adapter,
    AdapterWithReferences,
    Component,
    defaultProperties,
    IntervalTextInputProps,
    ModelState,
    Properties,
    propertyTypes,
    Props,
    Value
} from './type'
// endregion
const CSS_CLASS_NAMES = cssClassNames
// region helper
const determineControlled = (props: Props) =>
    props.model?.value?.end?.value !== undefined ||
    props.model?.value?.start?.value !== undefined ||
    props.value !== undefined &&
    !(
        (props.value?.start as IntervalTextInputProps | null)?.value ===
            undefined &&
        (props.value?.end as IntervalTextInputProps | null)?.value ===
            undefined
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
    startProperties: TextInputProperties<null | number | string>,
    endProperties: TextInputProperties<null | number | string>
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
    iconProperties: IconProperties,
    startProperties: TextInputProperties<null | number | string>,
    endProperties: TextInputProperties<null | number | string>
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
        properties.value?.end as IntervalTextInputProps | null ||
        {} as IntervalTextInputProps
    const iconProperties: IconProperties = typeof properties.icon === 'string' ?
        {icon: properties.icon} :
        properties.icon as IconProperties
    let startProperties =
        properties.value?.start as IntervalTextInputProps | null ||
        {} as IntervalTextInputProps
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
        mask<IntervalTextInputProps>(
            properties as unknown as IntervalTextInputProps,
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
        startProperties.className = [`${CSS_CLASS_NAMES.interval}__start`]
    if (!iconProperties.classNames)
        iconProperties.classNames = [`${CSS_CLASS_NAMES.interval}__icon`]
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
        start:
            (properties.value?.start as IntervalTextInputProps | null)?.value,
        end: (properties.value?.end as IntervalTextInputProps | null)?.value
    }

    consolidateBoundaries(valueState)

    const endInputReference =
        useRef<TextInputAdapterWithReferences<null | number | string>>(null)
    const startInputReference=
        useRef<TextInputAdapterWithReferences<null | number | string>>(null)

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
                    TextInputProperties<null | number | string>,
                endInputReference.current?.properties ||
                properties.value?.end as
                    TextInputProperties<null | number | string>
            ),
            references: {end: endInputReference, start: startInputReference},
            state: controlled ? {} : {value: valueState}
        })
    )
    // region attach event handler
    if (properties.onChange) {
        startProperties.onChange = (
            textInputProperties: TextInputProperties<null | number | string>,
            event?: GenericEvent
        ): void => {
            const end: TextInputProperties<null | number | string> =
                endInputReference.current?.properties ||
                endProperties as
                    unknown as
                    TextInputProperties<null | number | string>
            end.value = end.model.value = normalizeDateTimeToNumber(
                endInputReference.current?.properties?.value, -Infinity
            )
            if (!controlled)
                end.value = end.model.value = formatDateTimeAsConfigured(
                    Math.max(
                        end.value,
                        normalizeDateTimeToNumber(
                            textInputProperties.value, -Infinity
                        )
                    )
                )

            // NOTE: We need to reset internal temporary set boundaries.
            end.maximum = end.model.maximum = endConfiguration.maximum
            end.minimum = end.model.minimum = endConfiguration.minimum
            textInputProperties.maximum = textInputProperties.model.maximum =
                startConfiguration.maximum
            textInputProperties.minimum = textInputProperties.model.minimum =
                startConfiguration.minimum

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(
                    properties as Properties,
                    iconProperties,
                    textInputProperties,
                    end
                ),
                event || new Event('genericIntervalStartChange'),
                properties
            )
        }
        endProperties.onChange = (
            textInputProperties: TextInputProperties<null | number | string>,
            event?: GenericEvent
        ): void => {
            const start: TextInputProperties<null | number | string> =
                startInputReference.current?.properties ||
                startProperties as
                    unknown as
                    TextInputProperties<null | number | string>
            start.value = start.model.value = normalizeDateTimeToNumber(
                startInputReference.current?.properties?.value, Infinity
            )
            if (!controlled)
                start.value = start.model.value = formatDateTimeAsConfigured(
                    Math.min(
                        start.value,
                        normalizeDateTimeToNumber(
                            textInputProperties.value, Infinity
                        )
                    )
                )

            // NOTE: We need to reset internal temporary set boundaries.
            start.maximum = start.model.maximum = startConfiguration.maximum
            start.minimum = start.model.minimum = startConfiguration.minimum
            textInputProperties.maximum = textInputProperties.model.maximum =
                endConfiguration.maximum
            textInputProperties.minimum = textInputProperties.model.minimum =
                endConfiguration.minimum

            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(
                    properties as Properties,
                    iconProperties,
                    start,
                    textInputProperties
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
            <Icon {...properties.icon as IconProperties} />
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
