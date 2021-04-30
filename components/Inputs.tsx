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
import {Mapping} from 'clientnode/type'
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
import {WebComponentAdapter} from 'web-component-wrapper/type'
import {IconButton} from '@rmwc/icon-button'

import GenericInput from './GenericInput'
import styles from './Inputs.module'
import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter,
    determineInitialValue,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../helper'
import {
    defaultInputsProperties,
    defaultProperties,
    GenericEvent,
    InputsAdapter as Adapter,
    InputsAdapterWithReferences as AdapterWithReferences,
    InputsProperties,
    inputsPropertyTypes as propertyTypes,
    InputsProps,
    inputsRenderProperties as renderProperties,
    ModelState,
    Properties,
    StaticComponent
} from '../type'
// endregion
// region helper
const inputPropertiesToValues = function<P extends Properties>(
    inputProperties:Array<P>
):Array<P['value']> {
    return inputProperties.map(({model, value}):P['value'] =>
        typeof value === undefined ? model?.value : value
    )
}
const getModelState = function<P extends Properties>(
    inputProperties:Array<P>
):ModelState {
    const unpack = (name:keyof P, defaultValue:boolean = false) =>
        (properties:P):boolean =>
            properties[name] as unknown as boolean ?? defaultValue

    return {
        dirty: inputProperties.some(unpack('dirty')),
        focused: inputProperties.some(unpack('focused')),
        invalid: inputProperties.some(unpack('invalid', true)),
        invalidRequired: inputProperties.some(unpack('invalidRequired')),
        pristine: inputProperties.every(unpack('pristine', true)),
        touched: inputProperties.some(unpack('touched')),
        untouched: inputProperties.every(unpack('untouched', true)),
        valid: inputProperties.every(unpack('valid')),
        visited: inputProperties.some(unpack('visited'))
    }
}
const getExternalProperties = function<P extends Properties>(
    properties:InputsProperties<P>
):InputsProperties<P> {
    const modelState:ModelState = getModelState<P>(properties.value || [])

    return {
        ...properties,
        ...modelState,
        model: {
            ...(properties.model || {}),
            state: modelState,
            value: properties.value?.map(
                ({model}):Properties['model'] => model || {}
            )
        }
    }
}
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
    P extends Properties = Properties, State = Mapping<any>
>(props:InputsProps<P>, reference?:RefObject<Adapter<P>>):ReactElement {
    // region consolidate properties
    let givenProps:InputsProps<P> =
        translateKnownSymbols(props) as InputsProps<P>
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
                givenProps.value[index] = {value: givenProps.value[index]}
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:InputsProps<P> = Tools.extend(
        true, Tools.copy(Inputs.defaultProperties), givenProps
    )
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !properties.enforceUncontrolled &&
        (
            Array.isArray(givenProps.model?.value) &&
            givenProps.model!.value.every(({value}):boolean =>
                value !== undefined
            ) ||
            Array.isArray(givenProps.value) &&
            (givenProps.value as Array<P>).every(({value}):boolean =>
                value !== undefined
            )
        ) &&
        Boolean(properties.onChange || properties.onChangeValue)

    let [values, setValues] = useState<Array<P['value']>>(
        inputPropertiesToValues<P>(
            determineInitialValue<Array<P['value']>>(
                givenProps, Inputs.defaultProperties.model?.default
            ) ||
            []
        )
    )
    const references:Array<RefObject<WebComponentAdapter<P, State>>> = []

    const triggerOnChange = (
        values:Array<P>,
        event?:GenericEvent,
        inputProperties?:Partial<P>,
        index?:number
    ):void => {
        properties.value = values.map((_:P, index:number):P =>
            references[index]?.current?.properties ||
            (properties.value as Array<P>)[index]
        )

        if (inputProperties === undefined && typeof index === 'number')
            properties.value.splice(index, 1)
        else if (inputProperties)
            if (typeof index === 'number')
                properties.value![index] = inputProperties as P
            else
                properties.value!.push(inputProperties as P)

        triggerCallbackIfExists<InputsProperties<P>>(
            properties as InputsProperties<P>,
            'change',
            controlled,
            getExternalProperties<P>(properties as InputsProperties<P>),
            event
        )
    }
    const triggerOnChangeValue = (
        values:Array<P['value']>,
        event?:GenericEvent,
        value?:P['value'],
        index?:number
    ):Array<P['value']> => {
        if (typeof index === 'number')
            if (value === undefined)
                values.splice(index, 1)
            else
                values[index] = value
        else
            values.push(value)

        values = [...values]

        triggerCallbackIfExists<InputsProperties<P>>(
            properties as InputsProperties<P>,
            'changeValue',
            controlled,
            values,
            event
        )

        return values
    }

    for (let index:number = 0; index < Math.max(
        properties.model?.value?.length || 0,
        (properties.value || []).length || 0,
        values.length || 0
    ); index += 1) {
        const reference:RefObject<WebComponentAdapter<P, State>> =
            createRef<WebComponentAdapter<P, State>>()
        references.push(reference)

        if (!properties.value)
            properties.value = []
        if (index >= properties.value.length)
            properties.value.push({} as P)

        properties.value[index] = Tools.extend(
            true,
            {
                ...properties.value[index],
                className: styles.inputs__item__input,
                onChange: (inputProperties:P, event?:GenericEvent):void =>
                    triggerOnChange(
                        properties.value as Array<P>,
                        event,
                        inputProperties,
                        index
                    ),
                onChangeValue: (
                    value:null|P['value'], event?:GenericEvent
                ):void =>
                    setValues((values:Array<P['value']>):Array<P['value']> =>
                        triggerOnChangeValue(values, event, value, index)
                    ),
                ref: reference
            },
            properties.model?.value && properties.model.value.length > index ?
                {model: properties.model.value[index]} :
                {},
            properties.value && properties.value.length > index ?
                {value: (properties.value as Array<P>)[index].value} :
                {},
            values && values.length > index ?
                {value: values[index]} :
                {}
        )
    }

    values = properties.value ?
        inputPropertiesToValues<P>(properties.value as Array<P>) :
        []
    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValues = createDummyStateSetter<Array<P['value']>>(values)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences<P> => ({
            properties: properties as InputsProperties<P>,
            references,
            state: controlled ? {} : {value: properties.value}
        })
    )

    const add = (event?:GenericEvent):void => setValues((
        values:Array<P['value']>
    ):Array<P['value']> => {
        const newProperties:Partial<P> = properties.createPrototype!(
            ({
                ...defaultProperties,
                ...(properties.default && properties.default.length > 0 ?
                    {value: properties.default![0]} :
                    {}
                )
            } as Partial<P>),
            properties as InputsProperties<P>,
            values
        )

        triggerOnChange(values, event, newProperties)

        values = triggerOnChangeValue(
            values,
            event,
            newProperties.value ?? newProperties.model?.value ?? null
        )

        return values
    })
    const createRemove = (index:number) => (event?:GenericEvent):void =>
        setValues((values:Array<P['value']>):Array<P['value']> => {
            values = triggerOnChangeValue(values, event, undefined, index)
            triggerOnChange(values, event, undefined, index)
            return values
        })

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
            {((properties.value as Array<P>) || []).map((
                inputProperties:P, index:number
            ):ReactElement =>
                <div className={styles.inputs__item} key={index}>
                    {Tools.isFunction(properties.children) ?
                        properties.children(
                            inputProperties,
                            index,
                            properties as InputsProperties<P>
                        ) :
                        <GenericInput
                            {...inputProperties}
                            name={`${properties.name}-${index}`}
                        />
                    }

                    {properties.writable ?
                        <IconButton
                            className={styles.inputs__item__remove}
                            icon={properties.removeIcon}
                            onClick={createRemove(index)}
                        /> :
                        ''
                    }
                </div>
            )}

            {properties.writable ?
                <IconButton
                    className={styles.inputs__add}
                    icon={properties.addIcon}
                    onClick={add}
                /> :
                ''
            }
        </div>
    </WrapConfigurations>
} as ForwardRefRenderFunction<Adapter, InputsProps>
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
export const Inputs:StaticComponent<InputsProps> =
    memorize(forwardRef(InputsInner)) as
        unknown as
        StaticComponent<InputsProps>
// region static properties
// / region web-component hints
Inputs.wrapped = InputsInner
Inputs.webComponentAdapterWrapped = 'react'
// / endregion
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
