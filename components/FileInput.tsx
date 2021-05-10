// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module FileInput */
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
import {FirstParameter} from 'clientnode/type'
import {
    createRef,
    FocusEvent as ReactFocusEvent,
    forwardRef,
    ForwardRefRenderFunction,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    ReactElement,
    RefCallback,
    RefObject,
    SyntheticEvent,
    useEffect,
    useImperativeHandle,
    useState
} from 'react'
import {
    Card,
    CardActionButton,
    CardActionButtons,
    CardActions,
    CardMedia,
    CardPrimaryAction
} from '@rmwc/card'
import {Theme} from '@rmwc/theme'
import {Typography} from '@rmwc/typography'
import {ComponentAdapter} from 'web-component-wrapper/type'

import styles from './FileInput.module'
import GenericInput from './GenericInput'
import {WrapConfigurations} from './WrapConfigurations'
import {
    deriveMissingPropertiesFromState,
    determineInitialValue,
    determineValidationState as determineBaseValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../helper'
import {
    defaultFileInputModelState as defaultModelState,
    DefaultFileInputProperties as DefaultProperties,
    defaultFileInputProperties as defaultProperties,
    FileInputAdapter as Adapter,
    FileInputModel as Model,
    FileInputModelState as ModelState,
    FileInputProperties as Properties,
    FileInputProps as Props,
    FileInputState as State,
    FileValue,
    FileInputValueState as ValueState,
    fileInputPropertyTypes as propertyTypes,
    InputAdapter,
    InputProperties,
    InputProps,
    FileRepresentationType as RepresentationType,
    StaticFunctionFileInputComponent
} from '../type'
// endregion
// region constants
const imageMimeTypeRegularExpression:RegExp = new RegExp(
    '^image/(?:p?jpe?g|png|svg(?:\\+xml)?|vnd\\.microsoft\\.icon|gif|' +
    'tiff|webp|vnd\\.wap\\.wbmp|x-(?:icon|jng|ms-bmp))$'
)
const textMimeTypeRegularExpression:RegExp = new RegExp(
    '^(?:application/xml)|' +
    '(?:text/(?:plain|x-ndpb[wy]html|(?:x-)?csv|x?html?|xml))$'
)
const representableTextMimeTypeRegularExpression:RegExp =
    // Plain version:
    /^text\/plain$/
    // Rendered version:
    // '^(?:application/xml)|(?:text/(?:plain|x?html?|xml))$'
const videoMimeTypeRegularExpression:RegExp = new RegExp(
    '^video/(?:(?:x-)?(?:x-)?webm|3gpp|mp2t|mp4|mpeg|quicktime|' +
    '(?:x-)?flv|(?:x-)?m4v|(?:x-)mng|x-ms-as|x-ms-wmv|x-msvideo)|' +
    '(?:application/(?:x-)?shockwave-flash)$'
)
// endregion
// region helper
/**
 * Determines which type of file we have to present.
 * @param contentType - File type to derive representation type from.
 * @returns Nothing.
 */
export const determineRepresentationType = (
    contentType:string
):RepresentationType => {
    contentType = contentType.replace(/; *charset=.+$/, '')

    if (textMimeTypeRegularExpression.test(contentType)) {
        if (representableTextMimeTypeRegularExpression.test(contentType))
            return 'renderableText'

        return 'text'
    }

    if (imageMimeTypeRegularExpression.test(contentType))
        return 'image'

    if (videoMimeTypeRegularExpression.test(contentType))
        return 'video'

    return 'binary'
}
export const determineValidationState = (
    properties:Properties, currentState:ModelState
):boolean => {
    return determineBaseValidationState<Properties>(
        properties,
        currentState,
        {
            invalidMaximumSize: ():boolean => (
                typeof properties.model.maximumSize === 'number' &&
                properties.model.maximumSize <
                    (properties.model.value?.blob.size || 0)
            ),
            invalidMinimumSize: ():boolean => (
                typeof properties.model.minimumSize === 'number' &&
                properties.model.minimumSize >
                    (properties.model.value?.blob.size || 0)
            ),
            invalidNamePattern: ():boolean => (
                typeof properties.model.value?.name === 'string' &&
                (
                    typeof properties.model.regularExpressionNamePattern ===
                        'string' &&
                    !(new RegExp(
                        properties.model.regularExpressionNamePattern
                    )).test(properties.model.value.name) ||
                    properties.model.regularExpressionNamePattern !== null &&
                    typeof properties.model.regularExpressionNamePattern ===
                        'object' &&
                    !properties.model.regularExpressionNamePattern
                        .test(properties.model.value.name)
                )
            ),
            invalidMimeTypePattern: ():boolean => (
                typeof properties.model.value?.blob.type === 'string' &&
                (
                    typeof properties.model
                        .regularExpressionMimeTypePattern === 'string' &&
                    !(new RegExp(
                        properties.model.regularExpressionMimeTypePattern
                    )).test(properties.model.value.blob.type) ||
                    properties.model.regularExpressionMimeTypePattern !==
                        null &&
                    typeof properties.model
                        .regularExpressionMimeTypePattern === 'object' &&
                    !properties.model.regularExpressionMimeTypePattern
                        .test(properties.model.value.blob.type)
                )
            )
        }
    )
}
export const readBinaryDataIntoText = (
    blob:Blob, encoding:string = 'utf-8'
):Promise<string> =>
    new Promise<string>((resolve:Function, reject:Function):void => {
        const fileReader:FileReader = new FileReader()

        fileReader.onload = (event:Event):void => {
            let content:string = event.target.result
            // Remove preceding BOM.
            if (
                encoding.endsWith('-sig') &&
                content.length &&
                content.charCodeAt(0) === 0xFEFF
            )
                content = content.slice(1)
            // Normalize line endings to unix format.
            content = content.replace(/\r\n/g, '\n')
            resolve(content)
        }

        fileReader.onabort = reject
        fileReader.onerror = reject

        fileReader.readAsText(
            blob,
            encoding.endsWith('-sig') ?
                encoding.substring(0, encoding.length - '-sig'.length) :
                encoding
        )
    }
// endregion
/**
 * Validateable checkbox wrapper component.
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * Dataflow:
 *
 * 1. On-Render all states are merged with given properties into a normalized
 *    property object.
 * 2. Properties, corresponding state values and sub node instances are saved
 *    into a "ref" object (to make them accessible from the outside e.g. for
 *    wrapper like web-components).
 * 3. Event handler saves corresponding data modifications into state and
 *    normalized properties object.
 * 4. All state changes except selection changes trigger an "onChange" event
 *    which delivers the consolidated properties object (with latest
 *    modifications included).
 *
 * @property static:displayName - Descriptive name for component to show in web
 * developer tools.
 *
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const FileInputInner = function(
    props:Props, reference?:RefObject<Adapter>
):ReactElement {
    // region property aggregation
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (properties:Props):Properties => {
        let result:Props = mapPropertiesIntoModel<Props, Model>(
            properties, FileInput.defaultProperties.model as Model
        )

        determineValidationState(
            result as Properties, result.model!.state as ModelState
        )

        result = getBaseConsolidatedProperties<Props, Properties>(result)

        return result as Properties
    }
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Nothing.
     */
    const onBlur = (event:SyntheticEvent):void => setValueState((
        oldValueState:ValueState
    ):ValueState => {
        let changed:boolean = false

        if (oldValueState.modelState.focused) {
            properties.focused = false
            changed = true
        }

        if (!oldValueState.modelState.visited) {
            properties.visited = true
            changed = true
        }

        if (changed) {
            onChange(event)

            triggerCallbackIfExists<Properties>(
                properties,
                'changeState',
                controlled,
                properties.model.state,
                event
            )
        }

        triggerCallbackIfExists<Properties>(
            properties, 'blur', controlled, event
        )

        return changed ?
            {...oldValueState, modelState: properties.model.state} :
            oldValueState
    })
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     * @returns Nothing.
     */
    const onChange = (event?:SyntheticEvent):void => {
        Tools.extend(
            true,
            properties,
            getConsolidatedProperties(
                /*
                    Workaround since "Type" isn't identified as subset of
                    "RecursivePartial<Type>" yet.
                */
                properties as unknown as Props
            )
        )

        triggerCallbackIfExists<Properties>(
            properties, 'change', controlled, properties, event
        )
    }
    /**
     * Triggered when ever the value changes.
     * @param event - Event object or new value.
     * @returns Nothing.
     */
    const onChangeValue = (eventOrName:null|string|SyntheticEvent):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        let event:SyntheticEvent|undefined
        if (
            fileInputReference.current &&
            (eventOrName as SyntheticEvent)?.target ===
                fileInputReference.current
        ) {
            event = eventOrName as SyntheticEvent
            const blob:File =
                (event.target as unknown as {files:FileList}).files &&
                (event.target as unknown as {files:FileList}).files[0]
            properties.value = {blob, name: blob.name}
        } else
            /*
                NOTE: A name can only be changed if a blob is available
                beforehand.
            */
            properties.value!.name = eventOrName as string

        setValueState((oldValueState:ValueState):ValueState => {
            if (Tools.equals(oldValueState.value, properties.value))
                return oldValueState

            let stateChanged:boolean = false

            const result:ValueState = {
                ...oldValueState, value: properties.value as FileValue|null
            }

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState(properties, oldValueState.modelState))
                stateChanged = true

            triggerCallbackIfExists<Properties>(
                properties, 'changeValue', controlled, properties.value, event
            )

            if (stateChanged) {
                result.modelState = properties.model.state

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event
                )
            }

            return result
        })
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
        triggerCallbackIfExists<Properties>(
            properties, 'click', controlled, event
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        triggerCallbackIfExists<Properties>(
            properties, 'focus', controlled, event
        )

        onTouch(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((oldValueState:ValueState):ValueState => {
            let changedState:boolean = false

            if (!oldValueState.modelState.focused) {
                properties.focused = true
                changedState = true
            }

            if (oldValueState.modelState.untouched) {
                properties.touched = true
                properties.untouched = false
                changedState = true
            }

            let result:ValueState = oldValueState

            if (changedState) {
                onChange(event)

                result = {...oldValueState, modelState: properties.model.state}

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event
                )
            }

            triggerCallbackIfExists<Properties>(
                properties, 'touch', controlled, event
            )

            return result
        })
    // endregion
    // region properties
    // / region references
    const fileInputReference:RefObject<HTMLInputElement> =
        createRef<HTMLInputElement>()
    const nameInputReference:RefObject<InputAdapter<string>> =
        createRef<InputAdapter<string>>()
    // / endregion
    const givenProps:Props = translateKnownSymbols(props)

    const initialValue:FileValue|null = determineInitialValue<FileValue>(
        givenProps, FileInput.defaultProperties.model!.default
    )
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties:Props = Tools.extend(
        true, Tools.copy(FileInput.defaultProperties), givenProps
    )
    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    let [valueState, setValueState] = useState<ValueState>({
        modelState: {...FileInput.defaultModelState},
        value: initialValue
    })

    const controlled:boolean =
        !givenProperties.enforceUncontrolled &&
        (
            givenProps.model?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(givenProps.onChange || givenProps.onChangeValue)

    deriveMissingPropertiesFromState(givenProperties, valueState)

    const properties:Properties = getConsolidatedProperties(givenProperties)
    // region synchronize properties i nto state where values are not controlled
    const currentValueState:ValueState = {
        modelState: properties.model.state,
        value: properties.value as FileValue|null
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        !(controlled || Tools.equals(properties.value, valueState.value)) ||
        !Tools.equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState =
            wrapStateSetter<ValueState>(setValueState, currentValueState)
    // endregion
    useImperativeHandle(
        reference,
        ():Adapter & {
            references:{
                fileInputReference:RefObject<HTMLInputElement>,
                nameInputReference:RefObject<InputAdapter<string>>
            }
        } => ({
            properties,
            references: {fileInputReference, nameInputReference},
            state: {
                modelState: properties.model.state,
                ...(controlled ? {} : {value: properties.value})
            }
        })
    )
    // endregion
    useEffect(async ():Promise<void> => {
        if (properties.value.blob && !properties.value.source) {
            let source:string

            if (textMimeTypeRegularExpression.test(
                properties.value.blob.type
            ))
                source = await readBinaryDataIntoText(properties.value.blob)
            else {
                source = `data:${properties.value.blob.type};base64,`
                source += typeof Blob === 'undefined' ?
                    properties.value.toString('base64') :
                    await blobToBase64String(properties.value.blob)
            }

            setValueState((oldValueState:ValueState):ValueState => ({
                ...oldValueState, source
            }))
        }
    })
    // region render
    const representationType:RepresentationType =
        determineRepresentationType(properties.value.blob?.type)
    const invalid:boolean = (
        properties.invalid &&
        (
            properties.showInitialValidationState ||
            /*
                Material inputs show their validation state at least after a
                blur event so we synchronize error appearances.
            */
            properties.visited
        )
    )

    return <WrapConfigurations
        strict={FileInput.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    ><Card
        className={
            styles['file-input'] +
            (properties.className ? ` ${properties.className}` : '')
        }
        onBlur={onBlur}
        onClick={onClick}
        onFocus={onFocus}
    >
        <CardPrimaryAction>
            {properties.value?.source ?
                representationType === 'image' ?
                <CardMedia
                    {...properties.media}
                    style={{
                        backgroundImage: `url(${properties.value.source})`
                    }}
                /> :
                <CardMedia {...properties.media}>
                    {representationType === 'video' ?
                        <video autoplay loop muted>
                            <source
                                src={properties.value.source}
                                type={properties.value.blob.type}
                            />
                        </video> :
                    representationType === 'rendereableText' ?
                        <div class={
                            'iframe-wrapper' +
                            ([
                                'text/html', 'text/plain'
                            ].includes(properties.value.blob.type) ?
                                ' wrapped' :
                                ''
                            )
                        }>
                            <iframe
                                src={properties.value.source}
                                style={{
                                    border: 'none',
                                    height: '125%',
                                    overflow: 'hidden',
                                    transform: 'scale(.75)',
                                    transformOrigin: '0 0',
                                    width: '125%'
                                }}
                            ></iframe>
                        </div> :
                    representationType === 'text' ?
                        properties.value.source :
                        ''
                    }
                </CardMedia>
            }
            <div>
                {properties.name ?
                    <Typography use="headline6" tag="h2">
                        {invalid ?
                            <Theme use="error">{properties.name}</Theme> :
                            properties.name
                        }
                    </Typography> :
                    ''
                }
                {properties.description ?
                    <Typography
                        style={{marginTop: '-1rem'}}
                        tag="h3"
                        theme="textSecondaryOnBackground"
                        use="subtitle2"
                    >
                        {invalid ?
                            <Theme use="error">
                                {properties.description}
                            </Theme> :
                            properties.description
                        }
                    </Typography> :
                    ''
                }
                {properties.value ?
                    <GenericInput
                        disabled={properties.disabled}
                        {...properties.fileName as InputProps<string>}
                        onChangeValue={onChangeValue}
                        ref={nameInputReference as any}
                        required
                        value={properties.value?.name}
                    /> :
                    ''
                }
                {properties.children ?
                    properties.children({
                        declaration: properties.declaration,
                        invalid,
                        properties,
                        value: properties.value
                    }) :
                    properties.declaration ?
                        <Typography
                            tag="div"
                            theme="textSecondaryOnBackground"
                            use="body1"
                        >{properties.declaration}</Typography> :
                        ''
                }
            </div>
            {/*TODO use "accept" attribute*/}
            <input
                disabled={properties.disabled}
                className={styles['file-input__native']}
                id={properties.id || properties.name}
                name={properties.name}
                onChange={onChangeValue}
                ref={fileInputReference as
                    unknown as
                    RefCallback<HTMLInputElement>
                }
                type="file"
            />
        </CardPrimaryAction>
        <CardActions>
            <CardActionButtons>
                <CardActionButton
                    onClick={():void => fileInputReference.current?.click()}
                    ripple={properties.ripple}
                >New</CardActionButton>
                <CardActionButton ripple={properties.ripple}>
                    Delete
                </CardActionButton>
                <CardActionButton ripple={properties.ripple}>
                    Download
                </CardActionButton>
            </CardActionButtons>
        </CardActions>
    </Card></WrapConfigurations>
    // endregion
} as ForwardRefRenderFunction<Adapter, Props>
// NOTE: This is useful in react dev tools.
FileInputInner.displayName = 'FileInput'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
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
export const FileInput:StaticFunctionFileInputComponent =
    memorize(forwardRef(FileInputInner)) as
        unknown as
        StaticFunctionFileInputComponent
// region static properties
// / region web-component hints
FileInput.wrapped = FileInputInner
FileInput.webComponentAdapterWrapped = 'react'
// / endregion
FileInput.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
FileInput.defaultProperties = {
    ...defaultProperties,
    model: {...defaultProperties.model, state: undefined, value: undefined},
    value: undefined
}
FileInput.propTypes = propertyTypes
FileInput.strict = false
// endregion
export default FileInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
