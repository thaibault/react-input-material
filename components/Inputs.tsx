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

import styles from './Inputs.module'
import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter, translateKnownSymbols, triggerCallbackIfExists
} from '../helper'
import {
    defaultInputsProperties as defaultProperties,
    GenericEvent,
    InputsAdapter as Adapter,
    ModelState,
    InputsAdapterWithReferences as AdapterWithReferences,
    InputsProperties,
    inputsPropertyTypes as propertyTypes,
    InputsProps,
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
    return {
        dirty: inputProperties.some(({dirty}):boolean => dirty),
        focused: inputProperties.some(({focused}):boolean => focused),
        invalid: inputProperties.some(({invalid}):boolean => invalid),
        invalidRequired: inputProperties.some(({invalidRequired}):boolean =>
            invalidRequired
        ),
        pristine: inputProperties.every(({pristine}):boolean => pristine),
        touched: inputProperties.some(({touched}):boolean => touched),
        untouched: inputProperties.every(({untouched}):boolean => untouched),
        valid: inputProperties.every(({valid}):boolean => valid),
        visited: inputProperties.some(({visited}):boolean => visited)
    }
}
const getExternalProperties = function<P extends Properties>(
    properties:InputsProperties<P>
):InputsProperties<P> {
    const modelState:ModelState = getModelState<P>(properties.inputProperties)

    return {
        ...properties,
        ...modelState,
        model: {
            ...(properties.model || {}),
            state: modelState,
            value: properties.inputProperties.map(
                ({model}):Properties['model'] => model
            )
        },
        value: inputPropertiesToValues<Properties>(properties.inputProperties)
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
    const givenProps:InputsProps<P> =
        translateKnownSymbols(props) as InputsProps<P>
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
            givenProps.value.every((value:P['value']):boolean =>
                value !== undefined
            )
        ) &&
        Boolean(properties.onChange || properties.onChangeValue)

    let [value, setValue] = useState<Array<P['value']>>([])
    if (!properties.value)
        properties.value = value
    const references:Array<RefObject<WebComponentAdapter<P, State>>> = []
    properties.inputProperties = properties.inputProperties || []
    for (let index:number = 0; index < Math.max(
        properties.inputProperties.length || 0,
        properties.model?.value?.length || 0,
        properties.value?.length || 0
    ); index += 1) {
        const reference:RefObject<WebComponentAdapter<P, State>> =
            createRef<WebComponentAdapter<P, State>>()
        references.push(reference)

        if (index >= properties.inputProperties.length)
            properties.inputProperties.push({} as P)

        properties.inputProperties[index] = Tools.extend(
            true,
            {
                ...properties.inputProperties[index],
                className: styles.inputs__item__input,
                onChange: (inputProperties:P, event?:GenericEvent):void => {
                    properties.inputProperties = references.map((
                        {current}, index:number
                    ):P =>
                        current?.properties ||
                        properties.inputProperties[index]
                    )
                    properties.inputProperties![index] = inputProperties

                    triggerCallbackIfExists<InputsProperties<P>>(
                        properties as InputsProperties<P>,
                        'change',
                        controlled,
                        getExternalProperties<P>(
                            properties as InputsProperties<P>
                        ),
                        event
                    )
                },
                onChangeValue: (
                    value:null|P['value'], event?:GenericEvent
                ):void => {
                    values = references.map((
                        {current}, index:number
                    ):P['value'] =>
                        current?.properties?.value || values[index]
                    )
                    values[index] = value

                    triggerCallbackIfExists<InputsProperties<P>>(
                        properties as InputsProperties<P>,
                        'changeValue',
                        controlled,
                        values,
                        event
                    )

                    setValue(values)
                },
                ref: reference
            },
            properties.model?.value && properties.model.value.length > index ?
                {model: properties.model.value[index]} :
                {},
            properties.value && properties.value.length > index ?
                {value: properties.value[index]} :
                {}
        )
    }

    const values:Array<P['value']> =
        inputPropertiesToValues<P>(properties.inputProperties)
    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Array<P['value']>>(values)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences<P> => ({
            properties: properties as InputsProperties<P>,
            references,
            state: controlled ? {} : {value: values}
        })
    )

    const add = (event?:GenericEvent):void => {
        setValue((values:Array<P['value']>):Array<P['value']> => {
            values = values.concat(properties.prototype.value)
        })
        // TODO trigger onChange and onChangeValue
    }
    const remove = (event?:GenericEvent):void => {
        setValue((values:Array<P['value']>):Array<P['value']> => {
            values.filter((item:P['value'], subIndex:number):boolean =>
                index !== subIndex
            )
        })
        // TODO trigger onChange and onChangeValue
    }

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
            {properties.inputProperties.map((
                inputProperties:P, index:number
            ):ReactElement =>
                <div className={styles.inputs__item} key={index}>
                    {properties.children ?
                        properties.children(inputProperties, index) :
                        Tools.represent(inputProperties)
                    }

                    {properties.writable ?
                        <IconButton
                            icon={properties.removeIcon} onClick={remove}
                        /> :
                        ''
                    }
                </div>
            )}

            {properties.writable ?
                <IconButton icon={properties.addIcon} onClick={add}/> :
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
Inputs.defaultProperties = defaultProperties
Inputs.propTypes = propertyTypes
Inputs.strict = false
// endregion
export default Inputs
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
