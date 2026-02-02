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
import {dataURLToBlob} from 'blob-util'
import {copy, equals, extend, mask} from 'clientnode'
import {
    FocusEvent as ReactFocusEvent,
    ForwardedRef,
    forwardRef,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    // NOTE: can be "RefObject" directly when migrated to react19.
    ReactElement,
    SyntheticEvent,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
    useState
} from 'react'
import {ArrayBuffer as MD5ArrayBuffer, hash as md5Hash} from 'spark-md5'
import {PropertiesValidationMap} from 'web-component-wrapper/type'

import MediaCard from '#implementations/MediaCard'

import TextInput from '../TextInput'
import {WrapConfigurations} from '../Wrapper/WrapConfigurations'
import {
    deriveMissingPropertiesFromState,
    determineInitialValue,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
    renderMessage,
    translateKnownSymbols,
    triggerCallbackIfExists,
    wrapStateSetter
} from '../../helper'
import {
    Adapter as TextInputAdapter,
    Properties as TextInputProperties,
    Props as TextInputProps
} from '../TextInput/type'

import {
    AdapterWithReferences,
    Component,
    defaultFileNameInputProperties,
    defaultModelState,
    DefaultProperties,
    defaultProperties,
    Model,
    ModelState,
    Properties,
    propertyTypes,
    Props,
    renderProperties,
    RepresentationType,
    Value,
    ValueState
} from './type'
import {
    CSS_CLASS_NAMES,
    deriveBase64String,
    determineContentType,
    determineRepresentationType,
    determineValidationState,
    readBinaryDataIntoText
} from './helper'
import {
    MediaCardReference,
    MediaCardRepresentationType
} from '../../implementations/type'

export {
    CSS_CLASS_NAMES,

    IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION,
    TEXT_CONTENT_TYPE_REGULAR_EXPRESSION,
    EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION,
    VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION,

    determineRepresentationType,
    determineValidationState,
    deriveBase64String,
    readBinaryDataIntoText,
    preserveStaticFileBaseNameInputGenerator
} from './helper'
// endregion
/**
 * Validatable checkbox wrapper component.
 * @property displayName - Descriptive name for component to show in web
 * developer tools.
 * Dataflow:
 * 1. On-Render all states are merged with given properties into a normalized
 *    property object.
 * 2. Properties, corresponding state values and sub node instances are saved
 *    into a "ref" object (to make them accessible from the outside for example
 *    for wrapper like web-components).
 * 3. Event handler saves corresponding data modifications into state and
 *    normalized properties object.
 * 4. All state changes except selection changes trigger an "onChange" event
 *    which delivers the consolidated properties object (with latest
 *    modifications included).
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const FileInputInner = function<Type extends Value = Value>(
    props: Props<Type>, reference?: ForwardedRef<AdapterWithReferences<Type>>
): ReactElement {
    // region property aggregation
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     * @returns External properties object.
     */
    const getConsolidatedProperties = (properties: Props<Type>): Properties<
        Type
    > => {
        const result: DefaultProperties<Type> =
            mapPropertiesIntoModel<Props<Type>, DefaultProperties<Type>>(
                properties,
                FileInput.defaultProperties.model as Model<Type>
            )

        determineValidationState<Type>(
            result,
            // TODO not available
            false
            /*
            nameInputReference.current?.properties.invalid ??
                result.fileNameInputProperties.invalid ??
                result.model.fileName.invalid ??
                result.model!.state.invalidName
            */,
            result.model.state as ModelState
        )

        return getBaseConsolidatedProperties<Props<Type>, Properties<Type>>(
            result
        )
    }
    // endregion
    // region references
    const fileInputReference = useRef<HTMLInputElement | null>(null)
    const mediaCardReference = useRef<MediaCardReference>(null)
    const nameInputReference = useRef<TextInputAdapter<string>>(null)
    useImperativeHandle(
        reference,
        (): AdapterWithReferences<Type> => ({
            properties,
            references: {
                fileInput: fileInputReference,
                mediaCard: mediaCardReference,
                nameInput: nameInputReference
            },
            state: {
                modelState: properties.model.state as ModelState,
                ...(controlled ? {} : {value: properties.value})
            }
        })
    )
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     */
    const onBlur = (event: SyntheticEvent): void => {
        setValueState((
            oldValueState: ValueState<Type>
        ): ValueState<Type> => {
            let changed = false

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

                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            triggerCallbackIfExists<Properties<Type>>(
                properties, 'blur', controlled, event, properties
            )

            return changed ?
                {...oldValueState, modelState: properties.model.state} as
                    ValueState<Type> :
                oldValueState
        })
    }
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     */
    const onChange = (event?: SyntheticEvent) => {
        if (nameInputReference.current?.properties)
            properties.model.fileName =
                nameInputReference.current.properties.model

        const consolidatedProperties: Properties<Type> =
            getConsolidatedProperties(
                /*
                    Workaround since "Type" isn't identified as subset of
                    "RecursivePartial<Type>" yet.
                */
                properties as unknown as Props<Type>
            )
        // NOTE: Avoid recursive merging of deprecated value properties.
        delete properties.model.value
        delete properties.value
        // NOTE: Avoid trying to write into a readonly object.
        properties.styles = copy(properties.styles)

        extend(true, properties, consolidatedProperties)

        triggerCallbackIfExists<Properties<Type>>(
            properties, 'change', controlled, properties, event
        )
    }
    /**
     * Triggered when ever the value changes.
     * @param eventSourceOrName - Event object or new value.
     * @param event - Optional event object (if not provided as first
     * argument).
     * @param inputProperties - Current properties state.
     * @param attachBlobProperty - Indicates whether additional data is added
     * through post processed data properties.
     */
    const onChangeValue = (
        eventSourceOrName?: Partial<Type> | string | SyntheticEvent,
        event?: SyntheticEvent,
        inputProperties?: TextInputProperties<string>,
        attachBlobProperty = false
    ): void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        if (
            eventSourceOrName &&
            fileInputReference.current &&
            (eventSourceOrName as SyntheticEvent).target ===
                fileInputReference.current
        ) {
            event = eventSourceOrName as SyntheticEvent

            if (
                (event.target as unknown as {files: FileList | null})
                    .files?.length
            ) {
                const blob: File =
                    (event.target as unknown as {files: FileList}).files[0]

                properties.value = {blob, name: blob.name} as unknown as Type

                properties.value.name =
                    properties.generateFileNameInputProperties(
                        {
                            disabled: properties.disabled,
                            value: blob.name,
                            ...defaultFileNameInputProperties,
                            model: properties.model.fileName,
                            onChangeValue,
                            default: properties.value.name
                        },
                        properties as
                            Omit<Properties<Type>, 'value'> &
                            {value: Type & {name: string}}
                    )?.value ||
                    blob.name
            } else
                return
        }

        setValueState((oldValueState: ValueState<Type>): ValueState<Type> => {
            if (typeof eventSourceOrName === 'undefined')
                // NOTE: Mark file as deleted.
                properties.value = null
            else if (typeof eventSourceOrName === 'string')
                /*
                    NOTE: A name can only be changed if a blob is available
                    beforehand.
                */
                properties.value = {
                    ...oldValueState.value, name: eventSourceOrName
                } as Type
            else if (
                typeof (eventSourceOrName as Type).source === 'string' ||
                typeof (eventSourceOrName as Type).url === 'string'
            )
                if (attachBlobProperty)
                    properties.value = {
                        ...oldValueState.value, ...eventSourceOrName
                    } as Type
                else
                    properties.value = eventSourceOrName as Type

            if (equals(oldValueState.value, properties.value))
                return oldValueState

            let stateChanged = false

            const result: ValueState<Type> = {
                ...oldValueState, value: properties.value as null | Type
            }

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState<
                Type, DefaultProperties<Type>
            >(
                properties as DefaultProperties<Type>,
                nameInputReference.current?.properties?.invalid || false,
                oldValueState.modelState
            ))
                stateChanged = true

            triggerCallbackIfExists<Properties<Type>>(
                properties,
                'changeValue',
                controlled,
                properties.value,
                event,
                properties
            )

            if (stateChanged) {
                result.modelState =
                    properties.model.state as ModelState

                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            if (attachBlobProperty)
                result.attachBlobProperty = true

            return result
        })
    }
    /**
     * Triggered on click events.
     * @param event - Mouse event object.
     */
    const onClick = (event: ReactMouseEvent) => {
        triggerCallbackIfExists<Properties<Type>>(
            properties, 'click', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     */
    const onFocus = (event: ReactFocusEvent) => {
        triggerCallbackIfExists<Properties<Type>>(
            properties, 'focus', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     */
    const onTouch = (event: ReactFocusEvent | ReactMouseEvent): void => {
        setValueState((oldValueState: ValueState<Type>): ValueState<Type> => {
            let changedState = false

            if (!oldValueState.modelState.focused) {
                properties.focused = true
                changedState = true
            }

            if (oldValueState.modelState.untouched) {
                properties.touched = true
                properties.untouched = false
                changedState = true
            }

            let result: ValueState<Type> = oldValueState

            if (changedState) {
                onChange(event)

                result = {
                    ...oldValueState,
                    modelState: properties.model.state as ModelState
                }

                triggerCallbackIfExists<Properties<Type>>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            triggerCallbackIfExists<Properties<Type>>(
                properties, 'touch', controlled, event, properties
            )

            return result
        })
    }
    // endregion
    // region properties
    const givenProps: Props<Type> = translateKnownSymbols(props)

    const defaultValue =
        givenProps.default || givenProps.model?.default
    const firstDefaultFileName =
        defaultValue && Object.keys(defaultValue).length ?
            Object.keys(defaultValue)[0] :
            null
    const initialValue: null | Type = determineInitialValue<Type>(
        {
            ...givenProps,
            default: defaultValue && firstDefaultFileName ?
                defaultValue[firstDefaultFileName] :
                null
        },
        FileInput.defaultProperties.model.default &&
        Object.keys(FileInput.defaultProperties.model.default).length ?
            Object.values(FileInput.defaultProperties.model.default)[0] as
                Type :
            undefined
    )
    /*
        NOTE: Extend default properties with given properties while letting
        default property object untouched for unchanged usage in other
        instances.
    */
    const givenProperties: Props<Type> = extend(
        true,
        copy(FileInput.defaultProperties as DefaultProperties<Type>),
        givenProps
    )

    if (
        firstDefaultFileName &&
        givenProperties.model?.fileName &&
        !givenProperties.model.fileName.default
    )
        givenProperties.model.fileName.default = firstDefaultFileName
    /*
        NOTE: This values have to share the same state item since they have to
        be updated in one event loop (set state callback).
    */
    let [valueState, setValueState] = useState<ValueState<Type>>({
        attachBlobProperty: false,
        modelState: {...FileInput.defaultModelState},
        value: initialValue
    })

    const controlled: boolean =
        !givenProperties.enforceUncontrolled &&
        (
            givenProps.model?.value !== undefined ||
            givenProps.value !== undefined
        ) &&
        Boolean(givenProps.onChange || givenProps.onChangeValue)

    deriveMissingPropertiesFromState(givenProperties, valueState)

    const properties: Properties<Type> =
        getConsolidatedProperties(givenProperties)

    /*
        NOTE: We have to merge asynchronous determined missing value properties
        to avoid endless rendering loops when a value is provided via
        properties.
    */
    if (valueState.attachBlobProperty && valueState.value && properties.value)
        properties.value =
            extend<Type>(true, valueState.value, properties.value)

    /// region synchronize uncontrolled properties into state
    const currentValueState: ValueState<Type> = {
        attachBlobProperty: false,
        modelState: properties.model.state as ModelState,
        value: properties.value as null | Type
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        valueState.attachBlobProperty ||
        !(controlled || equals(properties.value, valueState.value)) ||
        !equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState =
            wrapStateSetter<ValueState<Type>>(setValueState, currentValueState)
    /// endregion
    // endregion
    const defaultID = useId()
    const id = properties.id ?? defaultID

    useEffect((): void => {
        (async (): Promise<void> => {
            const valueChanged: Partial<Type> = {}
            if (properties.value?.source) {
                if (!properties.value.blob) {
                    // Derive missing blob from given source.
                    if (properties.value.url?.startsWith('data:'))
                        valueChanged.blob =
                            dataURLToBlob(properties.value.url)
                    else if (properties.sourceToBlobOptions)
                        valueChanged.blob = new Blob(
                            [properties.value.source],
                            properties.sourceToBlobOptions
                        )
                } else if (!properties.value.url) {
                    const type = contentType || 'text/plain'
                    /*
                        Try to derive missing encoded base64 url from given
                        blob or plain source.
                    */
                    valueChanged.url =
                        `data:${type};charset=${properties.encoding};base64,` +
                        await deriveBase64String(properties.value)
                }

                if (!properties.value.hash)
                    valueChanged.hash =
                        properties.hashingConfiguration.prefix +
                        md5Hash(properties.value.source)
            } else {
                let blob: Blob | undefined
                if (
                    properties.value?.blob &&
                    properties.value.blob instanceof Blob
                ) {
                    blob = properties.value.blob
                    // Derive missing source from given blob.
                    valueChanged.source = await (
                        representationType === RepresentationType.TEXT ?
                            readBinaryDataIntoText(blob, properties.encoding) :
                            deriveBase64String(properties.value)
                    )
                } else if (properties.value?.url) {
                    blob = await (properties.value.url.startsWith('data:') ?
                        dataURLToBlob(properties.value.url) :
                        (await fetch(properties.value.url)).blob()
                    )

                    if (representationType === RepresentationType.TEXT)
                        // Derive missing source from given data url.
                        valueChanged.source = await readBinaryDataIntoText(
                            blob, properties.encoding
                        )
                }

                if (!properties.value?.hash && blob) {
                    /*
                        We have a blob but no hash so far, therefore we read
                        the file with reduced memory effort chunk by chunk
                        having the configured size.
                    */
                    let currentChunk = 0
                    const chunkSize =
                        properties.hashingConfiguration.readChunkSizeInByte
                    const chunks = Math.ceil(blob.size / chunkSize)
                    const buffer = new MD5ArrayBuffer()
                    const fileReader = new FileReader()

                    const hash = await new Promise<string>((
                        resolve, reject
                    ) => {
                        fileReader.onload = (event) => {
                            console.debug(
                                `Read chunk ${String(currentChunk + 1)} of ` +
                                `${String(chunks)}.`
                            )

                            buffer.append(event.target?.result as ArrayBuffer)
                            currentChunk++

                            if (currentChunk < chunks)
                                loadNext()
                            else
                                resolve(buffer.end(
                                    properties.hashingConfiguration
                                        .binaryString
                                ))
                        }

                        fileReader.onerror = reject

                        const loadNext = () => {
                            const start = currentChunk * chunkSize
                            const end = ((start + chunkSize) >= blob.size) ?
                                blob.size :
                                start + chunkSize

                            fileReader.readAsArrayBuffer(
                                blob.slice(start, end)
                            )
                        }

                        loadNext()
                    })

                    valueChanged.hash =
                        properties.hashingConfiguration.prefix + hash
                }
            }

            if (Object.keys(valueChanged).length > 0)
                onChangeValue(valueChanged, undefined, undefined, true)
        })()
            .catch((reason: unknown) => {
                console.warn(reason)
            })
    })
    useEffect(
        () => {
            if (properties.triggerInitialPropertiesConsolidation)
                onChange()
        },
        []
    )
    const contentType =
        determineContentType<Type>(properties) ?? 'application/binary'
    // region render
    const representationType: RepresentationType =
        contentType ?
            determineRepresentationType(contentType) :
            RepresentationType.BINARY
    const invalid: boolean = (
        properties.invalid &&
        properties.showValidationState &&
        (properties.showInitialValidationState || properties.visited)
    )

    const {triggerInitialPropertiesConsolidation} = properties

    return <WrapConfigurations
        strict={FileInput.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    >
        <MediaCard
            ref={mediaCardReference}

            id={props.id}

            classNames={
                [CSS_CLASS_NAMES.fileInput].concat(properties.className)
            }
            imageClassNames={properties.imageClassNames}

            styles={properties.styles}

            deleteButton={properties.deleteButton}
            downloadButton={properties.downloadButton}
            editButton={properties.editButton}
            newButton={properties.newButton}

            fileName={properties.value?.name}

            type={properties.value?.url ?
                representationType === RepresentationType.IMAGE ?
                    MediaCardRepresentationType.IMAGE :
                    representationType === RepresentationType.VIDEO ?
                        MediaCardRepresentationType.VIDEO :
                        representationType ===
                        RepresentationType.EMBEDABLE_TEXT ?
                            MediaCardRepresentationType.IFRAME :
                            representationType === RepresentationType.TEXT ?
                                MediaCardRepresentationType.TEXT :
                                undefined :
                properties.value?.blob &&
                properties.value.blob instanceof Blob ?
                    MediaCardRepresentationType.PENDING :
                    undefined
            }

            disabled={properties.disabled}
            invalid={invalid}
            empty={!properties.value}

            description={properties.description}
            name={properties.name}

            errorMessage={renderMessage<Properties<Type>>(
                properties.invalidContentTypePattern &&
                properties.contentTypePatternText ||

                properties.invalidInvertedContentTypePattern &&
                properties.invertedContentTypePatternText ||

                properties.invalidMaximumSize &&
                properties.maximumSizeText ||

                properties.invalidMinimumSize &&
                properties.minimumSizeText ||

                properties.invalidRequired &&
                properties.requiredText,

                properties
            )}

            url={properties.value?.url}
            contentType={contentType}
            content={properties.value?.source}

            onBlur={onBlur}
            onClick={onClick}
            onClickAddOrEdit={() => {
                fileInputReference.current?.click()
            }}
            onChange={onChangeValue}
            onFocus={onFocus}
        >
            <input
                accept={[].concat(
                    properties.acceptedContentTypes ?? []
                ).join(', ')}

                disabled={properties.disabled}

                className={
                    [CSS_CLASS_NAMES.fileInputNative]
                        .concat(properties.fileInputClassNames ?? [])
                        .join(' ')
                }
                id={id}

                name={properties.name}

                onChange={onChangeValue}

                ref={fileInputReference}

                type="file"
            />

            {properties.value ?
                <TextInput
                    ref={nameInputReference}

                    {...properties.generateFileNameInputProperties(
                        {
                            disabled: properties.disabled,
                            value: (properties.value as Value | null)?.name,

                            ...mask(
                                defaultFileNameInputProperties,
                                {
                                    exclude: Object.keys(
                                        properties.model.fileName
                                    )
                                }
                            ) as TextInputProps<string>,

                            default: properties.value.name,
                            model: properties.model.fileName,
                            onChangeValue: onChangeValue,
                            triggerInitialPropertiesConsolidation
                        },
                        properties as
                            Omit<Properties<Type>, 'value'> &
                            {value: Type & {name: string}}
                    )}
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
                ''
            }
        </MediaCard>
    </WrapConfigurations>
    // endregion
}
// NOTE: This is useful in react dev tools.
FileInputInner.displayName = 'FileInput'
/**
 * Wrapping web component compatible react component.
 * @property defaultModelState - Initial model state.
 * @property defaultProperties - Initial property configuration.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in reacts
 * strict component.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export const FileInput = memorize(forwardRef(FileInputInner)) as
    unknown as
    Component<typeof FileInputInner>
// region static properties
/// region web-component hints
FileInput.wrapped = FileInputInner
FileInput.webComponentAdapterWrapped = 'react'
/// endregion
FileInput.defaultModelState = defaultModelState
/*
    NOTE: We set values to "undefined" to identify whether these values where
    provided via "props" and should shadow a state saved valued.
*/
FileInput.defaultProperties = {
    ...defaultProperties,
    model: {
        ...defaultProperties.model,
        // Trigger initial determination.
        state: undefined as ModelState | undefined,
        value: undefined
    },
    value: undefined
}
FileInput.propTypes = propertyTypes as PropertiesValidationMap
FileInput.renderProperties = renderProperties
FileInput.strict = false
// endregion
export default FileInput
