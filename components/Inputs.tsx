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

import WrapConfigurations from './WrapConfigurations'
import {
    createDummyStateSetter, translateKnownSymbols, triggerCallbackIfExists
} from '../helper'
import {
    GenericEvent,
    InputsAdapter,
    InputsModelState,
    InputsProperties,
    InputsProps,
    Properties,
    Props,
    StaticComponent
} from '../type'
// endregion
const propertiesListToValues = function<Type, Properties>(
    propertiesList:Array<Properties>
):Array<Type> =>
    propertiesList.map(({value}):Type =>
        typeof properties.value === undefined ?
            properties.model?.value :
            properties.value
    )
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
    Type = any,
    Props extends Props = Props,
    Properties extends Properties = Properties
>((
    props:InputsProps<Type>, reference?:RefObject<InputsAdapter<Type>>
):ReactElement => {
    // region consolidate properties
    const givenProps:InputsProps<Type> =
        translateKnownSymbols(props) as PropsInputs<Type>
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const properties:InputsProps<Type> = Tools.extend(
        true, Tools.copy(Inputs.defaultProperties), givenProps
    )
    /*
        NOTE: Sometimes we need real given properties or derived (default
        extended) "given" properties.
    */
    const controlled:boolean =
        !properties.enforceUncontrolled &&
        (
            Array.isArray(givenProps.model) &&
            givenProps.model.every(({value}):boolean => value !== undefined) ||
            Array.isArray(givenProps.value) &&
            givenProps.value.every((value:Type):boolean value !== undefined)
        ) &&
        Boolean(onChange || onChangeValue)

    let [value, setValue] = useState<Array<Type>>([])
    if (!properties.value)
        properties.value = value
    const propertiesToForward:Props =
        Tools.mask<Props>(
            properties as Props,
            {exclude: {
                enforceUncontrolled: true,
                model: true,
                name: true,
                onChange: true,
                onChangeValue: true,
                value: true
            }}
        )

    cons propertiesList:Array<Properties> = []
    for (let index:number = 0; index < Math.max(
        properties.value?.length || 0, properties.model?.length || 0
    ); index += 1)
        propertiesList.push(Tools.extend(
            true,
            {},
            propertiesToForward,
            properties.model && properties.model.length > index ?
                {model: properties.model[index]} :
                {},
            properties.value && properties.value.length > index ?
                {value: properties.value[index]} :
                {}
        ))

    const inputReferences:Array<RefObject<InputAdapterWithReferences<Type>>> =
        createRef<Array<InputAdapterWithReferences<Type>>>()

    const values:Array<Type> =
        propertiesListToValues<Type, Properties>(propertiesList)
    if (controlled)
        /*
            NOTE: We act as a controlled component by overwriting internal
            state setter.
        */
        setValue = createDummyStateSetter<Array<Type>>(values)
    // endregion
    useImperativeHandle(
        reference,
        ():AdapterWithReferences => ({
            properties: propertiesList,
            references: inputReferences,
            state: controlled ? {} : {value: values}
        })
    )
    // region attach event handler
    if (onChange) {
        const getModelState = (
            propertiesList:Array<Properties>
        ):InputsModelState => ({
            dirty: propertiesList.some((properties:Properties):boolean =>
                properties.dirty
            ),
            focused: propertiesList.some((properties:Properties):boolean =>
                properties.focused
            ),
            invalid: propertiesList.some((properties:Properties):boolean =>
                properties.invalid
            ),
            invalidRequired: propertiesList.some((
                properties:Properties
            ):boolean => properties.invalidRequired),
            pristine: propertiesList.every((properties:Properties):boolean =>
                properties.pristine
            ),
            touched: propertiesList.some((properties:Properties):boolean =>
                properties.touched
            ),
            untouched: propertiesList.every((properties:Properties):boolean =>
                properties.untouched
            ),
            valid: propertiesList.every((properties:Properties):boolean =>
                properties.untouched
            ),
            visited: propertiesList.some((properties:Properties):boolean =>
                properties.visited
            )
        })
        const getExternalProperties = (
            propertiesList:Array<Properties>
        ):InputsProperties => {
            const modelState = getModelState(propertiesList)

            return {
                ...properties as Properties,
                ...modelState,
                model: {

                    state: modelState
                },
                value: propertiesListToValues<Type, Properties>(propertiesList)
            }
        }

        endProperties.onChange = (
            properties:Properties, event?:GenericEvent
        ):void => {
            triggerCallbackIfExists<Properties>(
                properties as Properties,
                'change',
                controlled,
                getExternalProperties(start, inputProperties),
                event
            )
        }
    }

    endProperties.onChangeValue = (
        value:null|number, event?:GenericEvent
    ):void => {
        triggerCallbackIfExists<Properties>(
            properties as Properties,
            'changeValue',
            controlled,
            newValue,
            event
        )
        setValue(newValue)
    }
    // endregion
    return <WrapConfigurations
        strict={Inputs.strict}
        themeConfiguration={properties.themeConfiguration}
    >
        <div
            className={
                'inputs' +
                (properties.className ? ` ${properties.className}` : '')
            }
            data-name={properties.name}
        >
            {propertiesList.map((
                properties:Properties<Type>, index:number
            ):ReactElement =>
                properties.children(properties, index)
            )}
        </div>
    </WrapConfigurations>
}) as ForwardRefRenderFunction<Adapter, Props>
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
export const Inputs:StaticComponent<Props> =
    memorize(forwardRef(InputsInner)) as unknown as StaticComponent<Props>
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
