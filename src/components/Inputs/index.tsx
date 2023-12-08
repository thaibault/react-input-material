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
import Tools from 'clientnode'
import {Mapping} from 'clientnode/type'
import {GenericEvent} from 'react-generic-tools/type'
import {
    createRef,
    ForwardedRef,
    forwardRef,
    memo as memorize,
    MutableRefObject,
    ReactElement,
    ReactNode,
    useImperativeHandle,
    useEffect,
    useState
} from 'react'
import {ComponentAdapter} from 'web-component-wrapper/type'
import {IconButton} from '@rmwc/icon-button'

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
import WrapConfigurations from '../WrapConfigurations'
import {
    createDummyStateSetter,
    determineInitialValue,
    getConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../../helper'
import {
    defaultInputsProperties,
    DefaultInputsProperties,
    defaultProperties,
    inputsPropertyTypes as propertyTypes,
    inputsRenderProperties as renderProperties,
    InputProps,
    InputsAdapter as Adapter,
    InputsAdapterWithReferences as AdapterWithReferences,
    InputsComponent,
    InputsModel as Model,
    InputsModelState as ModelState,
    InputsProperties,
    InputsPropertiesItem,
    InputsProps
} from '../../type'
import {IconButtonOnChangeEventT} from '@rmwc/icon-button/lib/icon-button'
// endregion
const CSS_CLASS_NAMES:Mapping = cssClassNames as Mapping
// region helper
const getPrototype = function<T, P extends InputsPropertiesItem<T>>(
    properties:InputsProperties<T, P>
):Partial<P> {
    return {
        ...defaultProperties as unknown as Partial<P>,
        className: CSS_CLASS_NAMES.inputs__item__input,
        triggerInitialPropertiesConsolidation:
            properties.triggerInitialPropertiesConsolidation,
        ...(properties.default && properties.default.length > 0 ?
            properties.default[properties.default.length - 1] :
            {}
        )
    } as Partial<P>
}
const inputPropertiesToValues = function<
    T, P extends InputsPropertiesItem<T>
>(inputProperties:Array<P>|null):Array<T>|null {
    return Array.isArray(inputProperties) ?
        inputProperties.map(({model, value}):T =>
            typeof value === 'undefined' ? model?.value as T : value
        ) :
        inputProperties
}
const getModelState = function<T, P extends InputsPropertiesItem<T>>(
    inputsProperties:InputsProperties<T, P>
):ModelState {
    const properties:Array<P> = inputsProperties.value || []

    const unpack = (name:string, defaultValue = false) =>
        (properties:P) =>
            properties[name as keyof P] as unknown as boolean ?? defaultValue

    const validMaximumNumber:boolean =
        inputsProperties.maximumNumber >= properties.length
    const validMinimumNumber:boolean =
        inputsProperties.minimumNumber <= properties.length

    const valid:boolean = validMaximumNumber && validMinimumNumber

    return {
        invalid: !valid || properties.some(unpack('invalid', true)),
        valid: valid && properties.every(unpack('valid')),

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
const getExternalProperties = function<T, P extends InputsPropertiesItem<T>>(
    properties:InputsProperties<T, P>
):InputsProperties<T, P> {
    const modelState = getModelState<T, P>(properties)

    return {
        ...properties,
        ...modelState,
        model: {
            ...(properties.model || {}),
            state: modelState,
            value: properties.value
        }
    }
}
// endregion
/**
 * Generic inputs wrapper component.
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 *
 * @returns React elements.
 */
export const InputsInner = function<
    T = unknown,
    P extends InputsPropertiesItem<T> = InputProps<T>,
    State = Mapping<unknown>
>(
    props:InputsProps<T, P>, reference?:ForwardedRef<Adapter<T, P>>
):ReactElement {
    // region consolidate properties
    const givenProps:InputsProps<T, P> =
        translateKnownSymbols(props) as InputsProps<T, P>
    /*
        Normalize value property (providing only value instead of props is
        allowed also).
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
    const givenProperties:InputsProps<T, P> = Tools.extend<InputsProps<T, P>>(
        true,
        Tools.copy<InputsProps<T, P>>(
            Inputs.defaultProperties as InputsProps<T, P>
        ),
        givenProps
    )
    // endregion
    // region consolidate state
    const [newInputState, setNewInputState] =
        useState<'added'|'rendered'|'stabilized'>('stabilized')
    useEffect(():void => {
        if (newInputState === 'added')
            setNewInputState('rendered')
        else if (newInputState === 'rendered') {
            setNewInputState('stabilized')
            triggerOnChange(inputPropertiesToValues<T, P>(properties.value))
        }
    })

    let [values, setValues] = useState<Array<T>|null>(
        inputPropertiesToValues<T, P>(
            determineInitialValue<Array<P>|null>(
                givenProps,
                Tools.copy(Inputs.defaultProperties.model?.default) as
                    Array<P>|null
            ) ||
            null
        )
    )
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !givenProperties.enforceUncontrolled &&
        (
            (
                Array.isArray(givenProps.model?.value) ||
                givenProps.model?.value === null
            ) &&
            (Array.isArray(givenProps.value) || givenProps.value === null)
        ) &&
        Boolean(givenProperties.onChange || givenProperties.onChangeValue)
    // endregion
    // region prepare environment
    /*
        NOTE: Avoid writing into mutable model object properties. So project
        value to properties directly.
    */
    if (
        givenProperties.model!.value !== undefined &&
        givenProperties.value === undefined
    )
        givenProperties.value = givenProperties.model!.value
    if (givenProperties.value === undefined)
        // NOTE: Indicates to be filled later from state.
        givenProperties.value = []

    const references:Array<MutableRefObject<ComponentAdapter<P, State>|null>> =
        []

    const properties:InputsProperties<T, P> =
        getConsolidatedProperties<InputsProps<T, P>, InputsProperties<T, P>>(
            mapPropertiesIntoModel<
                InputsProps<T, P>,
                DefaultInputsProperties<T, P>
            >(
                givenProperties,
                Inputs.defaultProperties.model as unknown as Model<T, P>
            )
        )

    const triggerOnChange = (
        values?:Array<T>|null,
        event?:GenericEvent,
        inputProperties?:Partial<P>,
        index?:number
    ):void => {
        if (values)
            properties.value = values.map((_:T, index):P =>
                references[index]?.current?.properties ||
                (properties.value as Array<P>)[index]
            )

        if (!properties.value)
            properties.value = []

        if (inputProperties)
            if (typeof index === 'number')
                properties.value[index] = inputProperties as P
            else
                properties.value.push(inputProperties as P)
        else if (inputProperties === undefined && typeof index === 'number')
            properties.value.splice(index, 1)

        if (
            properties.emptyEqualsNull &&
            (!properties.value || properties.value.length === 0)
        )
            properties.value = null

        triggerCallbackIfExists<InputsProperties<T, P>>(
            properties,
            'change',
            controlled,
            getExternalProperties<T, P>(properties),
            event,
            properties
        )
    }
    const triggerOnChangeValue = (
        values:Array<T>|null,
        event:GenericEvent|undefined,
        value:T,
        index?:number
    ):Array<T>|null => {
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

        triggerCallbackIfExists<InputsProperties<T, P>>(
            properties,
            'changeValue',
            controlled,
            values,
            event,
            properties
        )

        return values
    }

    for (let index = 0; index < Math.max(
        properties.model?.value?.length || 0,
        properties.value?.length || 0,
        !controlled && values?.length || 0
    ); index += 1) {
        /*
            NOTE: We cannot use "useRef" here since the number of calls would
            be variable und therefor break the rules of hooks.
        */
        const reference:MutableRefObject<ComponentAdapter<P, State>|null> =
            createRef<ComponentAdapter<P, State>>()
        references.push(reference)

        if (!properties.value)
            properties.value = []
        if (index >= properties.value.length)
            properties.value.push({} as P)

        properties.value[index] = Tools.extend<P>(
            true,
            {
                ...properties.createItem({
                    index,
                    item: Tools.copy(getPrototype<T, P>(properties)),
                    properties,
                    values
                }),
                ...properties.value[index],
                onChange: (inputProperties:P, event?:GenericEvent):void =>
                    triggerOnChange(
                        inputPropertiesToValues<T, P>(properties.value),
                        event,
                        inputProperties,
                        index
                    ),
                onChangeValue: (value:T, event?:GenericEvent) => {
                    setValues((values:Array<T>|null):Array<T>|null =>
                        triggerOnChangeValue(values, event, value, index)
                    )
                },
                ref: reference
            },
            (
                properties.model?.value &&
                properties.model.value.length > index &&
                properties.model.value[index].model ?
                    {model: properties.model.value[index].model} :
                    {}
            ) as P,
            (
                properties.value && properties.value.length > index ?
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
        setValues = createDummyStateSetter<Array<T>|null>(values)

    properties.invalidMaximumNumber =
        properties.model.state.invalidMaximumNumber =
        properties.maximumNumber < (properties.value?.length || 0)
    properties.invalidMinimumNumber =
        properties.model.state.invalidMinimumNumber =
        properties.minimumNumber > (properties.value?.length || 0)

    useImperativeHandle(
        reference,
        ():AdapterWithReferences<T, P> => ({
            properties: properties,
            references,
            state: controlled ?
                {} :
                {value: inputPropertiesToValues(properties.value)}
        })
    )

    const add = (event?:IconButtonOnChangeEventT):void => setValues((
        values:Array<T>|null
    ):Array<T>|null => {
        /*
            NOTE: This is needed since the event handler is provided to icon
            and button component contained in rmwc's "IconButton".
        */
        event?.stopPropagation()

        const newProperties:Partial<P> = properties.createPrototype({
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
        setNewInputState('added')

        return result
    })
    const createRemove = (index:number) =>
        (event?:IconButtonOnChangeEventT):void =>
            setValues((values:Array<T>|null):Array<T>|null => {
                values = triggerOnChangeValue(
                    values, event as unknown as GenericEvent, null as T, index
                )
                triggerOnChange(
                    values, event as unknown as GenericEvent, undefined, index
                )
                return values
            })
    // endregion
    // region render
    const addButton:ReactElement = <IconButton
        className={CSS_CLASS_NAMES.inputs__add__button}

        icon={properties.addIcon}
        onIcon={properties.addIcon}

        onChange={add}
    />
    const renderInput = (
        inputProperties:Partial<P>, index:number
    ):ReactNode =>
        Tools.isFunction(properties.children) ?
            properties.children({
                index,
                inputsProperties: properties,
                properties: inputProperties
            }) :
            <TextInput
                {...inputProperties as InputProps<T>}
                name={`${properties.name}-${index + 1}`}
            />

    return <WrapConfigurations
        strict={Inputs.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={
                [CSS_CLASS_NAMES.inputs]
                    .concat(properties.className ?? [])
                    .join(' ')
            }
            data-name={properties.name}
            style={properties.styles}
        >
            {properties.value ?
                properties.value.map((
                    inputProperties:P, index
                ):ReactNode =>
                    <div className={CSS_CLASS_NAMES.inputs__item} key={index}>
                        {renderInput(inputProperties, index)}

                        {properties.disabled ?
                            '' :
                            <IconButton
                                className={
                                    CSS_CLASS_NAMES.inputs__item__remove
                                }

                                icon={properties.removeIcon}
                                onIcon={properties.removeIcon}

                                onChange={createRemove(index)}
                            />
                        }
                    </div>
                ) :
                <div className={[
                    CSS_CLASS_NAMES.inputs__item,
                    CSS_CLASS_NAMES['inputs__item--disabled']
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
                properties.value.some(({model, value}):boolean =>
                    [null, undefined].includes(value as null) &&
                    [null, undefined].includes(model?.value as null)
                )
            ) ?
                '' :
                <div className={CSS_CLASS_NAMES.inputs__add}>{addButton}</div>
            }
        </div>
    </WrapConfigurations>
    // endregion
}
// NOTE: This is useful in react dev tools.
InputsInner.displayName = 'Inputs'
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
export const Inputs:InputsComponent<typeof InputsInner> =
    memorize(forwardRef(InputsInner)) as
        unknown as
        InputsComponent<typeof InputsInner>
// region static properties
/// region web-component hints
Inputs.wrapped = InputsInner
Inputs.webComponentAdapterWrapped = 'react'
/// endregion
Inputs.defaultProperties = defaultInputsProperties
Inputs.propTypes = propertyTypes
Inputs.renderProperties = renderProperties
Inputs.strict = false
// endregion
export default Inputs
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
