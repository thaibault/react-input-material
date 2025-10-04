// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module Inputs */
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
import {copy, extend, isFunction, Mapping} from 'clientnode'
import {GenericEvent} from 'react-generic-tools/type'
import {
    createRef,
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    ReactNode,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    SyntheticEvent,
    useImperativeHandle,
    useEffect,
    useState,
    useRef
} from 'react'
import {
    ComponentAdapter, PropertiesValidationMap
} from 'web-component-wrapper/type'

import IconButton from '#implementations/IconButton'

import TextInput from '../TextInput'
/*
"namedExport" version of css-loader:

import {
    inputsAddButtonClassName,
    inputsAddClassName,
    inputsClassName,
    inputsItemClassName,
    inputsItemDisabledClassName,
    inputsItemInputClassName,
    inputsItemRemoveClassName
} from './style.module'
*/
import cssClassNames from './style.module'

import WrapConfigurations from '../Wrapper/WrapConfigurations'
import {
    createDummyStateSetter,
    determineInitialValue,
    getConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../../helper'
import {
    defaultProperties as baseDefaultProperties, ValueState
} from '../../type'
import {Props as TextInputProps} from '../TextInput/type'

import {
    defaultProperties,
    DefaultProperties,
    propertyTypes,
    renderProperties,
    Adapter,
    AdapterWithReferences,
    Component,
    Model,
    ModelState,
    Properties,
    PropertiesItem,
    Props
} from './type'
// endregion
const CSS_CLASS_NAMES = cssClassNames
// region helper
const getPrototype = function<T, P extends PropertiesItem<T>>(
    properties: Properties<T, P>
): Partial<P> {
    return {
        ...baseDefaultProperties as unknown as Partial<P>,
        className: CSS_CLASS_NAMES.inputsItemInput,
        triggerInitialPropertiesConsolidation:
            properties.triggerInitialPropertiesConsolidation,
        ...(properties.default && (properties.default as Array<T>).length > 0 ?
            (properties.default as Array<T>)[0] :
            {}
        )
    } as Partial<P>
}
const inputPropertiesToValues = function<
    T, P extends PropertiesItem<T>
>(inputProperties: Array<P> | null): Array<T> | null {
    return Array.isArray(inputProperties) ?
        inputProperties.map(({model, value}): T =>
            typeof value === 'undefined' ? model?.value as T : value
        ) :
        inputProperties
}
const getModelState = function<T, P extends PropertiesItem<T>>(
    inputsProperties: Properties<T, P>
): ModelState {
    const properties: Array<P> = inputsProperties.value || []

    const unpack = (name: string, defaultValue = false) =>
        (properties: P): boolean =>
            (properties as unknown as Mapping<boolean | undefined>)[name] ??
            (
                properties.model?.state &&
                (properties.model.state as Mapping<boolean>)[name]
            ) as boolean | undefined ??
            defaultValue

    const validMaximumNumber: boolean =
        inputsProperties.maximumNumber >= properties.length
    const validMinimumNumber: boolean =
        inputsProperties.minimumNumber <= properties.length

    const constraintsSatisfied: boolean =
        validMaximumNumber && validMinimumNumber
    const invalid =
        !constraintsSatisfied ||
        properties.some(unpack('invalid', false))

    return {
        invalid,
        valid: !invalid,

        invalidMaximumNumber: !validMaximumNumber,
        invalidMinimumNumber: !validMinimumNumber,

        invalidRequired: properties.some(unpack('invalidRequired')),

        dirty: properties.some(unpack('dirty')),
        pristine: properties.every(unpack('pristine', true)),

        touched: properties.some(unpack('touched')),
        untouched: properties.every(unpack('untouched', true)),

        focused: properties.some(unpack('focused')),
        visited: properties.some(unpack('visited'))
    }
}
const getExternalProperties = function<T, P extends PropertiesItem<T>>(
    properties: Properties<T, P>
): Properties<T, P> {
    const modelState = getModelState<T, P>(properties)

    return {
        ...properties,
        ...modelState,
        model: {
            ...properties.model,
            state: modelState,
            value: properties.value
        }
    }
}
// endregion
/**
 * Generic inputs wrapper component.
 * @property displayName - Descriptive name for component to show in web
 * developer tools.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const InputsInner = function<
    T = unknown,
    P extends PropertiesItem<T> = TextInputProps<T>,
    State = Mapping<unknown>
>(
    props: Props<T, P>, reference?: ForwardedRef<Adapter<T, P>>
): ReactElement {
    // region consolidate properties
    const givenProps: Props<T, P> =
        translateKnownSymbols(props) as Props<T, P>
    /*
        Normalize value property (providing only value instead of props which
        allowed from the outside).
    */
    if (Array.isArray(givenProps.value))
        for (let index = 0; index < givenProps.value.length; index += 1)
            if (
                givenProps.value[index] === null ||
                typeof givenProps.value[index] !== 'object'
            )
                givenProps.value[index] =
                    {value: givenProps.value[index] as T} as Partial<P>
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties: Props<T, P> = extend<Props<T, P>>(
        true,
        copy<Props<T, P>>(Inputs.defaultProperties as Props<T, P>),
        givenProps
    )
    // endregion
    // region consolidate state
    const [newInputState, setNewInputState] = useState<{
        name: 'added' | 'rendered' | 'stabilized'
        event?: GenericEvent | null
    }>({name: 'stabilized', event: null})

    useEffect(
        () => {
            if (newInputState.name === 'added')
                setNewInputState((oldState) => ({
                    name: 'rendered',
                    event: oldState.event
                }))
            else if (newInputState.name === 'rendered') {
                setNewInputState({name: 'stabilized', event: null})
                triggerOnChange(
                    inputPropertiesToValues<T, P>(properties.value),
                    newInputState.event
                )
            }
        },
        [newInputState.name]
    )

    let [values, setValues] = useState<Array<T> | null>(
        inputPropertiesToValues<T, P>(
            determineInitialValue<Array<P> | null>(
                givenProps,
                copy(Inputs.defaultProperties.model.default) as
                    unknown as
                    Array<P> | null
            ) ||
            null
        )
    )
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled: boolean =
        !givenProperties.enforceUncontrolled &&
        (
            (
                Array.isArray(givenProps.model?.value) ||
                givenProps.model?.value === null
            ) ||
            (Array.isArray(givenProps.value) || givenProps.value === null)
        ) &&
        Boolean(givenProperties.onChange || givenProperties.onChangeValue)
    // endregion
    // region functions
    /// region callbacks
    const triggerOnChange = (
        values?: Array<T> | null,
        event?: GenericEvent | null,
        inputProperties?: Partial<P>,
        index?: number
    ): void => {
        const isDeleteChange =
            inputProperties === undefined && typeof index === 'number'

        if (values && !isDeleteChange)
            properties.value = values.map((_: T, index): P =>
                references.current[index]?.current?.properties ||
                (properties.value as Array<P>)[index]
            )

        if (!properties.value)
            properties.value = []

        if (inputProperties)
            if (typeof index === 'number')
                properties.value[index] = inputProperties as P
            else
                properties.value.push(inputProperties as P)
        else if (isDeleteChange)
            properties.value.splice(index, 1)

        if (properties.emptyEqualsNull && properties.value.length === 0)
            properties.value = null

        triggerCallbackIfExists<Properties<T, P>>(
            properties,
            'change',
            controlled,
            getExternalProperties<T, P>(properties),
            event,
            properties
        )
    }
    const triggerOnChangeValue = (
        values: Array<T> | null,
        event: GenericEvent | undefined,
        value: T,
        index?: number
    ): Array<T> | null => {
        if (values === null)
            values = []

        if (typeof index === 'number')
            if (value === null)
                values.splice(index, 1)
            else
                values[index] = value
        else
            values.push(value)

        values = [...values]

        if (properties.emptyEqualsNull && values.length === 0)
            values = null

        triggerCallbackIfExists<Properties<T, P>>(
            properties,
            'changeValue',
            controlled,
            values,
            event,
            properties
        )

        return values
    }
    const add = (event?: SyntheticEvent): void => {
        setValues((values: Array<T> | null): Array<T> | null => {
            event?.stopPropagation()

            const newProperties: Partial<P> = properties.createPrototype({
                index: values?.length || 0,
                item: getPrototype<T, P>(properties),
                lastValue: values?.length ? values[values.length - 1] : null,
                properties,
                values
            })

            triggerOnChange(
                values, event as unknown as GenericEvent, newProperties
            )

            const result = triggerOnChangeValue(
                values,
                event as unknown as GenericEvent,
                (newProperties.value ?? newProperties.model?.value ?? null) as T
            )

            /**
             * NOTE: new Properties are not yet consolidated by nested input
             * component. So save that info for further rendering.
             */
            setNewInputState({
                name: 'added', event: event as unknown as GenericEvent
            })

            return result
        })
    }
    const createRemoveCallback = (index: number) =>
        (event?: SyntheticEvent) => {
            setValues((values: Array<T> | null): Array<T> | null => {
                values = triggerOnChangeValue(
                    values, event as unknown as GenericEvent, null as T, index
                )
                triggerOnChange(
                    values, event as unknown as GenericEvent, undefined, index
                )
                return values
            })
            references.current.splice(index, 1)
        }
    /// endregion
    const renderInput = (
        inputProperties: Partial<P>, index: number
    ): ReactNode =>
        isFunction(properties.children) ?
            properties.children({
                index,
                inputsProperties: properties,
                properties: inputProperties
            }) :
            <TextInput
                {...inputProperties as TextInputProps<T>}
                name={`${properties.name}-${String(index + 1)}`}
            />
    // endregion
    // region prepare environment
    /*
        NOTE: Avoid writing into mutable model object properties. So project
        value to properties directly.
    */
    if (
        givenProperties.model?.value !== undefined &&
        givenProperties.value === undefined
    )
        givenProperties.value = givenProperties.model.value
    if (givenProperties.value === undefined)
        // NOTE: Indicates to be filled later from state.
        givenProperties.value = []

    const properties: Properties<T, P> =
        getConsolidatedProperties<Props<T, P>, Properties<T, P>>(
            mapPropertiesIntoModel<Props<T, P>, DefaultProperties<T, P>>(
                givenProperties,
                Inputs.defaultProperties.model as unknown as Model<T, P>
            )
        )

    const references =
        useRef<Array<RefObject<ComponentAdapter<P, State> | null>>>([])

    for (let index = 0; index < Math.max(
        properties.model.value?.length || 0,
        properties.value?.length || 0,
        !controlled && values?.length || 0
    ); index += 1) {
        let reference: RefObject<ComponentAdapter<P, State> | null>
        if (references.current.length < index + 1) {
            /*
                NOTE: We cannot use "useRef" here since the number of calls
                would be variable und therefor break the rules of hooks.
            */
            reference = createRef<ComponentAdapter<P, State>>()
            references.current.push(reference)
        } else
            reference = references.current[index]

        if (!properties.value)
            properties.value = []
        if (index >= properties.value.length)
            properties.value.push({} as P)

        properties.value[index] = extend<P>(
            true,
            {
                ...properties.createItem({
                    index,
                    item: copy(getPrototype<T, P>(properties)),
                    properties,
                    values
                }),
                ...properties.value[index],
                onChange: (inputProperties: P, event?: GenericEvent) => {
                    triggerOnChange(
                        inputPropertiesToValues<T, P>(properties.value),
                        event,
                        inputProperties,
                        index
                    )
                },
                onChangeValue: (value: T, event?: GenericEvent) => {
                    /*
                        NOTE: Only values are synchronized with nested
                        components.
                    */
                    setValues((values: Array<T> | null): Array<T> | null =>
                        triggerOnChangeValue(values, event, value, index)
                    )
                },
                ref: reference
            },
            (
                properties.model.value &&
                properties.model.value.length > index &&
                properties.model.value[index].model ?
                    {model: properties.model.value[index].model} :
                    {}
            ) as P,
            (
                properties.value.length > index ?
                    {value: (properties.value)[index].value} :
                    {}
            ) as P,
            (
                !controlled && values && values.length > index ?
                    {value: values[index]} :
                    {}
            ) as P
        )
    }

    if (
        properties.emptyEqualsNull &&
        (!properties.value || properties.value.length === 0)
    )
        properties.value = values = null
    else
        values = inputPropertiesToValues<T, P>(properties.value)

    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValues = createDummyStateSetter<Array<T> | null>(values)

    if (!properties.model.state)
        properties.model.state = {} as ModelState

    properties.invalidMaximumNumber =
        properties.model.state.invalidMaximumNumber =
            properties.maximumNumber < (properties.value?.length || 0)
    properties.invalidMinimumNumber =
        properties.model.state.invalidMinimumNumber =
            properties.minimumNumber > (properties.value?.length || 0)

    useImperativeHandle(
        reference,
        (): AdapterWithReferences<T, P> => ({
            properties: properties,
            references: references.current,
            state: controlled ?
                {} :
                {value: inputPropertiesToValues(properties.value)}
        })
    )
    // endregion
    // region render
    const addButton: ReactElement = <IconButton
        classNames={[CSS_CLASS_NAMES.inputsAddButton]}

        icon={properties.addIcon}

        onChange={add}
    />

    let {valid} = getModelState(properties)
    if (valid)
        /*
            NOTE: When no inter input constraint has been violated check each
            input individually for a commonly marked invalid state.
        */
        for (const reference of references.current)
            if (
                reference.current &&
                [
                    (reference.current.properties as
                        unknown as
                        ModelState | undefined
                    )?.valid,
                    (
                        reference.current.state as
                            Partial<ValueState> | undefined
                    )?.modelState?.valid
                ].includes(false)
            ) {
                valid = false
                break
            }

    return <WrapConfigurations
        strict={Inputs.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={
                [CSS_CLASS_NAMES.inputs]
                    .concat(valid ? [] : CSS_CLASS_NAMES.inputsInvalid)
                    .concat(properties.className)
                    .join(' ')
            }
            data-name={properties.name}
            style={properties.styles}
        >
            {properties.value ?
                properties.value.map((
                    inputProperties: P, index
                ): ReactNode =>
                    <div className={CSS_CLASS_NAMES.inputsItem} key={index}>
                        {renderInput(inputProperties, index)}

                        {properties.disabled ?
                            '' :
                            <IconButton
                                classNames={
                                    [CSS_CLASS_NAMES.inputsItemRemove]
                                }

                                icon={properties.removeIcon}

                                onChange={createRemoveCallback(index)}
                            />
                        }
                    </div>
                ) :
                <div className={[
                    CSS_CLASS_NAMES.inputsItem,
                    CSS_CLASS_NAMES.inputsItemDisabled
                ].join(' ')}>
                    {renderInput(
                        properties.createPrototype({
                            index: 0,
                            item: {
                                ...getPrototype<T, P>(properties),
                                disabled: true
                            },
                            lastValue: null,
                            properties,
                            values
                        }),
                        0
                    )}

                    {0 < properties.maximumNumber ? addButton : null}
                </div>
            }

            {(
                properties.disabled ||
                properties.invalidMaximumNumber ||
                !properties.value ||
                properties.maximumNumber <= properties.value.length ||
                properties.value.some(({model, value}): boolean =>
                    [null, undefined].includes(value as null) &&
                    [null, undefined].includes(model?.value as null)
                )
            ) ?
                '' :
                <div className={CSS_CLASS_NAMES.inputsAdd}>{addButton}</div>
            }
        </div>
    </WrapConfigurations>
    // endregion
}
// NOTE: This is useful in react dev tools.
InputsInner.displayName = 'Inputs'
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
export const Inputs: Component<typeof InputsInner> =
    memorize(forwardRef(InputsInner)) as
        unknown as
        Component<typeof InputsInner>
// region static properties
/// region web-component hints
Inputs.wrapped = InputsInner
Inputs.webComponentAdapterWrapped = 'react'
/// endregion
Inputs.defaultProperties = defaultProperties
Inputs.propTypes = propertyTypes as PropertiesValidationMap
Inputs.renderProperties = renderProperties
Inputs.strict = false
// endregion
export default Inputs
