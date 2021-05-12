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
import {
    createRef,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    ReactElement,
    RefObject,
    useImperativeHandle,
    useEffect,
    useState
} from 'react'
import {ComponentAdapter} from 'web-component-wrapper/type'
import {IconButton} from '@rmwc/icon-button'

import GenericInput from './GenericInput'
import styles from './Inputs.module'
import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter,
    determineInitialValue,
    getConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists
} from '../helper'
import {
    defaultInputsProperties,
    defaultProperties,
    GenericEvent,
    InputsAdapter as Adapter,
    InputsAdapterWithReferences as AdapterWithReferences,
    InputsModel as Model,
    InputsModelState as ModelState,
    InputsProperties,
    inputsPropertyTypes as propertyTypes,
    InputsProps,
    inputsRenderProperties as renderProperties,
    Properties,
    StaticComponent
} from '../type'
// endregion
// region helper
const getPrototype = function<P extends Properties>(
    properties:InputsProperties<P>
):Partial<P> {
    return {
        ...defaultProperties,
        className: styles.inputs__item__input,
        ...(properties.default && properties.default.length > 0 ?
            properties.default![0] :
            {}
        )
    } as Partial<P>
}
const inputPropertiesToValues = function<P extends Properties>(
    inputProperties:Array<P>|null
):Array<P['value']>|null {
    return Array.isArray(inputProperties) ?
        inputProperties.map(({model, value}):P['value'] =>
            typeof value === undefined ? model?.value : value
        ) :
        inputProperties
}
const getModelState = function<P extends Properties>(
    inputsProperties:InputsProperties<P>
):ModelState {
    const properties:Array<P> = inputsProperties.value || []

    const unpack = (name:keyof P, defaultValue:boolean = false) =>
        (properties:P):boolean =>
            properties[name] as unknown as boolean ?? defaultValue

    const validMaximumNumber:boolean =
        inputsProperties.maximumNumber >= properties.length
    const validMinimumNumber:boolean =
        inputsProperties.minimumNumber <= properties.length

    const valid:boolean = validMaximumNumber && validMinimumNumber

    return {
        dirty: properties.some(unpack('dirty')),
        focused: properties.some(unpack('focused')),
        invalid: !valid || properties.some(unpack('invalid', true)),
        invalidMaximumNumber: !validMaximumNumber,
        invalidMinimumNumber: !validMinimumNumber,
        invalidRequired: properties.some(unpack('invalidRequired')),
        pristine: properties.every(unpack('pristine', true)),
        touched: properties.some(unpack('touched')),
        untouched: properties.every(unpack('untouched', true)),
        valid: valid && properties.every(unpack('valid')),
        visited: properties.some(unpack('visited'))
    }
}
const getExternalProperties = function<P extends Properties>(
    properties:InputsProperties<P>
):InputsProperties<P> {
    const modelState:ModelState = getModelState<P>(properties)

    return {
        ...properties,
        ...modelState,
        model: {
            ...(properties.model || {}),
            state: modelState,
            value: Array.isArray(properties.value) ?
                properties.value.map(
                    ({model}):Properties['model'] => model || {}
                ) :
                properties.value
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
    const givenProperties:InputsProps<P> = Tools.extend(
        true, Tools.copy(Inputs.defaultProperties), givenProps
    )
    // endregion
    // region consolidate state
    let [newInputState, setNewInputState] =
        useState<'added'|'rendered'|'stabilized'>('stabilized')
    useEffect(():void => {
        if (newInputState === 'added')
            setNewInputState('rendered')
        else if (newInputState === 'rendered') {
            setNewInputState('stabilized')
            triggerOnChange(properties.value)
        }
    })

    let [values, setValues] = useState<Array<P['value']>|null>(
        inputPropertiesToValues<P>(
            determineInitialValue<Array<P['value']>>(
                givenProps, Tools.copy(Inputs.defaultProperties.model?.default)
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

    const references:Array<RefObject<ComponentAdapter<P, State>>> = []

    const properties:InputsProperties<P> =
        getConsolidatedProperties<InputsProps<P>, InputsProperties<P>>(
            mapPropertiesIntoModel<InputsProps<P>, Model<P['model']>>(
                givenProperties,
                Inputs.defaultProperties.model as Model<P['model']>
            )
        )

    /*TODO
    const modelState:ModelState = getModelState<P>(properties)
    console.log('TODO', properties.invalidMinimumNumber)
     */

    const triggerOnChange = (
        values:Array<P>|null,
        event?:GenericEvent,
        inputProperties?:Partial<P>,
        index?:number
    ):void => {
        if (values)
            properties.value = values.map((_:P, index:number):P =>
                references[index]?.current?.properties ||
                (properties.value as Array<P>)[index]
            )

        if (!properties.value)
            properties.value = []

        if (inputProperties === undefined && typeof index === 'number')
            properties.value.splice(index, 1)
        else if (inputProperties)
            if (typeof index === 'number')
                properties.value![index] = inputProperties as P
            else
                properties.value!.push(inputProperties as P)

        if (
            properties.emptyEqualsNull &&
            (!properties.value || properties.value.length === 0)
        )
            properties.value = null

        triggerCallbackIfExists<InputsProperties<P>>(
            properties as InputsProperties<P>,
            'change',
            controlled,
            getExternalProperties<P>(properties as InputsProperties<P>),
            event
        )
    }
    const triggerOnChangeValue = (
        values:Array<P['value']>|null,
        event?:GenericEvent,
        value?:P['value'],
        index?:number
    ):Array<P['value']>|null => {
        if (values === null)
            values = []

        if (typeof index === 'number')
            if (value === undefined)
                values.splice(index, 1)
            else
                values[index] = value
        else
            values.push(value)

        values = [...values]

        if (properties.emptyEqualsNull && values.length === 0)
            values = null

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
        properties.value?.length || 0,
        !controlled && values?.length || 0
    ); index += 1) {
        const reference:RefObject<ComponentAdapter<P, State>> =
            createRef<ComponentAdapter<P, State>>()
        references.push(reference)

        if (!properties.value)
            properties.value = []
        if (index >= properties.value.length)
            properties.value.push({} as P)

        properties.value[index] = Tools.extend(
            true,
            {
                ...properties.createPrototype!({
                    index,
                    properties,
                    prototype: Tools.copy(getPrototype<P>(properties)),
                    values
                }),
                ...properties.value[index],
                onChange: (inputProperties:P, event?:GenericEvent):void =>
                    triggerOnChange(
                        properties.value,
                        event,
                        inputProperties,
                        index
                    ),
                onChangeValue: (
                    value:null|P['value'], event?:GenericEvent
                ):void =>
                    setValues((
                        values:Array<P['value']>|null
                    ):Array<P['value']>|null =>
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
            !controlled && values && values.length > index ?
                {value: values[index]} :
                {}
        )
    }

    if (
        properties.emptyEqualsNull &&
        (!properties.value || properties.value.length === 0)
    )
        properties.value = values = null
    else
        values = inputPropertiesToValues<P>(properties.value)
    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValues = createDummyStateSetter<Array<P['value']>|null>(values)
    useImperativeHandle(
        reference,
        ():AdapterWithReferences<P> => ({
            properties: properties as InputsProperties<P>,
            references,
            state: controlled ? {} : {value: properties.value}
        })
    )

    const add = (event?:GenericEvent):void => setValues((
        values:Array<P['value']>|null
    ):Array<P['value']> => {
        const newProperties:Partial<P> = properties.createPrototype!({
            index: values?.length || 0,
            properties,
            prototype: getPrototype<P>(properties),
            values
        })

        triggerOnChange(values, event, newProperties)

        const result:Array<P['value']> = triggerOnChangeValue(
            values,
            event,
            newProperties.value ?? newProperties.model?.value ?? null
        ) as Array<P['value']>

        /**
         * NOTE: new Properties are not yet consolidated by nested input
         * component. So save that info for further rendering.
         */
        setNewInputState('added')

        return result
    })
    const createRemove = (index:number) => (event?:GenericEvent):void =>
        setValues((values:Array<P['value']>|null):Array<P['value']>|null => {
            values = triggerOnChangeValue(values, event, undefined, index)
            triggerOnChange(values, event, undefined, index)
            return values
        })
    // endregion
    // region render
    const addButton:ReactElement = <IconButton
        className={styles.inputs__add__button}
        icon={properties.addIcon}
        onClick={add}
    />
    const renderInput = (
        inputProperties:Partial<P>, index:number
    ):ReactElement =>
        Tools.isFunction(properties.children) ?
            properties.children({
                index,
                inputsProperties: properties,
                properties: inputProperties
            }) :
            <GenericInput
                {...inputProperties}
                name={`${properties.name}-${index + 1}`}
            />

    return <WrapConfigurations
        strict={Inputs.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={
                [styles.inputs].concat(properties.className ?? []).join(' ')
            }
            data-name={properties.name}
        >
            {properties.value ?
                (properties.value as Array<P>).map((
                    inputProperties:P, index:number
                ):ReactElement =>
                    <div className={styles.inputs__item} key={index}>
                        {renderInput(inputProperties, index)}

                        {properties.disabled ?
                            '' :
                            <IconButton
                                className={styles.inputs__item__remove}
                                icon={properties.removeIcon}
                                onClick={createRemove(index)}
                            />
                        }
                    </div>
                ) :
                <div className={[
                    styles.inputs__item, styles['inputs__item--disabled']
                ].join(' ')}>
                    {renderInput(
                        properties.createPrototype!({
                            index: 0,
                            properties,
                            prototype: {
                                ...getPrototype<P>(properties),
                                disabled: true
                            },
                            values
                        }),
                        0
                    )}

                    {properties.invalidMaximumNumber ? null : addButton}
                </div>
            }

            {(
                properties.disabled ||
                !properties.value ||
                properties.invalidMaximumNumber ||
                properties.value.some(({value}):boolean =>
                    [null, undefined].includes(value)
                )
            ) ?
                '' :
                <div className={styles.inputs__add}>{addButton}</div>
            }
        </div>
    </WrapConfigurations>
    // endregion
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
