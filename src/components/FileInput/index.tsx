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
    MutableRefObject,
    ReactElement,
    SyntheticEvent,
    useEffect, useId,
    useImperativeHandle,
    useRef,
    useState
} from 'react'
import GenericAnimate from 'react-generic-animate'
import {ArrayBuffer as MD5ArrayBuffer, hash as md5Hash} from 'spark-md5'
import {
    Card,
    CardActionButton,
    CardActionButtons,
    CardActions,
    CardMedia,
    CardPrimaryAction
} from '@rmwc/card'
import {CircularProgress} from '@rmwc/circular-progress'
import {Theme} from '@rmwc/theme'
import {Typography} from '@rmwc/typography'

import TextInput from '../TextInput'
import {WrapConfigurations} from '../WrapConfigurations'
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
    defaultFileInputModelState as defaultModelState,
    DefaultFileInputProperties as DefaultProperties,
    defaultFileInputProperties as defaultProperties,
    defaultFileNameInputProperties,
    FileInputAdapter as Adapter,
    FileInputModelState as ModelState,
    FileInputProperties as Properties,
    FileInputProps as Props,
    FileValue,
    FileInputValueState as ValueState,
    fileInputPropertyTypes as propertyTypes,
    fileInputRenderProperties as renderProperties,
    InputAdapter,
    InputProperties,
    InputProps,
    FileRepresentationType as RepresentationType,
    FileInputComponent,
    FileInputModel,
    DefaultFileInputProperties, FileInputProperties
} from '../../type'

import {
    CSS_CLASS_NAMES,
    determineContentType,
    determineRepresentationType,
    determineValidationState,
    deriveBase64String,
    readBinaryDataIntoText
} from './helper'

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
export const FileInputInner = function<Type extends FileValue = FileValue>(
    props: Props<Type>, reference?: ForwardedRef<Adapter<Type>>
): ReactElement {
    const defaultID = useId()
    const id = props.id ?? defaultID
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
                FileInput.defaultProperties.model as FileInputModel<Type>
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
            result.model.state
        )

        return getBaseConsolidatedProperties<Props<Type>, Properties<Type>>(
            result
        )
    }
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     * @returns Current validation state.
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
                {...oldValueState, modelState: properties.model.state} :
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
        eventSourceOrName?: Partial<Type>|string|SyntheticEvent,
        event?: SyntheticEvent,
        inputProperties?: InputProperties<string>,
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
                (event.target as unknown as {files: FileList|null})
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
                ...oldValueState, value: properties.value as null|Type
            }

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState<
                Type, DefaultFileInputProperties<Type>
            >(
                properties as DefaultFileInputProperties<Type>,
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
                result.modelState = properties.model.state

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
    const onTouch = (event: ReactFocusEvent|ReactMouseEvent): void => {
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

                result = {...oldValueState, modelState: properties.model.state}

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
    /// region references
    const deleteButtonReference: MutableRefObject<HTMLButtonElement|null> =
        useRef<HTMLButtonElement>(null)
    const downloadLinkReference: MutableRefObject<HTMLAnchorElement|null> =
        useRef<HTMLAnchorElement>(null)
    const fileInputReference: MutableRefObject<HTMLInputElement|null> =
        useRef<HTMLInputElement>(null)
    const nameInputReference: MutableRefObject<InputAdapter<string>|null> =
        useRef<InputAdapter<string>>(null)
    const uploadButtonReference: MutableRefObject<HTMLDivElement|null> =
        useRef<HTMLDivElement>(null)
    const iFrameReference: MutableRefObject<HTMLIFrameElement|null> =
        useRef<HTMLIFrameElement>(null)
    /// endregion
    const givenProps: Props<Type> = translateKnownSymbols(props)

    const initialValue: null|Type = determineInitialValue<Type>(
        givenProps, FileInput.defaultProperties.model.default as Type
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
        modelState: properties.model.state,
        value: properties.value as null|Type
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
    useImperativeHandle(
        reference,
        (): Adapter<Type> & {
            references: {
                deleteButtonReference: MutableRefObject<HTMLButtonElement|null>
                downloadLinkReference: MutableRefObject<HTMLAnchorElement|null>
                fileInputReference: MutableRefObject<HTMLInputElement|null>
                iFrameReference: MutableRefObject<HTMLIFrameElement|null>
                nameInputReference: MutableRefObject<InputAdapter<string>|null>
                uploadButtonReference: MutableRefObject<HTMLDivElement|null>
            }
        } => ({
            properties,
            references: {
                deleteButtonReference,
                downloadLinkReference,
                fileInputReference,
                iFrameReference,
                nameInputReference,
                uploadButtonReference
            },
            state: {
                modelState: properties.model.state,
                ...(controlled ? {} : {value: properties.value})
            }
        })
    )
    // endregion
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
                        (properties.hashingConfiguration?.prefix ?? '') +
                        md5Hash(properties.value.source)
            } else {
                let blob: Blob|undefined
                if (
                    properties.value?.blob &&
                    properties.value.blob instanceof Blob
                ) {
                    blob = properties.value.blob
                    // Derive missing source from given blob.
                    valueChanged.source = await (
                        representationType === 'text' ?
                            readBinaryDataIntoText(blob, properties.encoding) :
                            deriveBase64String(properties.value)
                    )
                } else if (properties.value?.url) {
                    blob = await (properties.value.url.startsWith('data:') ?
                        dataURLToBlob(properties.value.url) :
                        (await fetch(properties.value.url)).blob()
                    )

                    if (representationType === 'text')
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
                        properties.hashingConfiguration?.readChunkSizeInByte ??
                        2097152
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
                                    properties
                                        .hashingConfiguration?.binaryString ??
                                    true
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
                        (properties.hashingConfiguration?.prefix ?? '') + hash
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
        contentType ? determineRepresentationType(contentType) : 'binary'
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
        <Card
            className={
                [CSS_CLASS_NAMES.fileInput]
                    .concat(properties.className)
                    .join(' ')
            }
            onBlur={onBlur}
            onClick={onClick}
            onFocus={onFocus}
            style={properties.styles}
        >
            <CardPrimaryAction>
                {properties.value?.url ?
                    representationType === 'image' ?
                        <CardMedia
                            {...properties.media}
                            style={{
                                backgroundImage: `url(${properties.value.url})`
                            }}
                        /> :
                        representationType === 'video' ?
                            <video autoPlay loop muted>
                                <source
                                    src={properties.value.url}
                                    type={contentType}
                                />
                            </video> :
                            representationType === 'embedableText' ?
                                <div className={
                                    [CSS_CLASS_NAMES.fileInputIframeWrapper]
                                        .concat(
                                            ['text/html', 'text/plain']
                                                .includes(contentType) ?
                                                CSS_CLASS_NAMES[
                                                    'fileInputIframeWrapper' +
                                                    'Padding'
                                                ] :
                                                []
                                        )
                                        .join(' ')
                                }>
                                    <iframe
                                        ref={iFrameReference}
                                        style={{border: 0, overflow: 'hidden'}}
                                        frameBorder="0"
                                        scrolling="no"
                                        src={properties.value.url}
                                    />
                                </div> :
                                (properties.value as FileValue|null)?.source &&
                                representationType === 'text' ?
                                    <pre
                                        className={
                                            CSS_CLASS_NAMES
                                                .fileInputTextRepresentation
                                        }
                                    >
                                        {properties.value.source}
                                    </pre> :
                                    '' :
                    properties.value?.blob &&
                    properties.value.blob instanceof Blob ?
                        // NOTE: Only blobs have to red asynchronously.
                        <CircularProgress size="large" /> :
                        ''
                }
                <div className={CSS_CLASS_NAMES.fileInputInfo}>
                    <Typography tag="h2" use="headline6">
                        {invalid ?
                            <Theme use="error">{
                                properties.description ?
                                    properties.description :
                                    properties.name
                            }</Theme> :
                            properties.description ?
                                properties.description :
                                properties.name
                        }
                    </Typography>
                    <GenericAnimate
                        in={invalid || Boolean(properties.declaration)}
                    >
                        <div className={CSS_CLASS_NAMES.fileInputInfoBody}>
                            {properties.declaration ?
                                <Typography
                                    style={{marginTop: '-1rem'}}
                                    tag="h3"
                                    theme="textSecondaryOnBackground"
                                    use="subtitle2"
                                >
                                    {invalid ?
                                        <Theme use="error">
                                            {properties.declaration}
                                        </Theme> :
                                        properties.declaration
                                    }
                                </Typography> :
                                ''
                            }
                            <Theme use="error" wrap={true}>
                                <span id={`${id}-error-message`}>
                                    {renderMessage<FileInputProperties<Type>>(
                                        properties.invalidContentTypePattern &&
                                        properties.contentTypePatternText ||

                                        properties[
                                            'invalidInvertedContentTypePattern'
                                        ] &&
                                        properties
                                            .invertedContentTypePatternText ||

                                        properties.invalidMaximumSize &&
                                        properties.maximumSizeText ||

                                        properties.invalidMinimumSize &&
                                        properties.minimumSizeText ||

                                        properties.invalidRequired &&
                                        properties.requiredText,

                                        properties
                                    )}
                                </span>
                            </Theme>
                        </div>
                    </GenericAnimate>
                    {properties.value ?
                        <TextInput
                            ref={nameInputReference}
                            {...properties.generateFileNameInputProperties(
                                {
                                    disabled: properties.disabled,
                                    value: (
                                        properties.value as FileValue|null
                                    )?.name,

                                    ...mask(
                                        defaultFileNameInputProperties,
                                        {
                                            exclude: Object.keys(
                                                properties.model.fileName
                                            )
                                        }
                                    ) as InputProps<string>,

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
                </div>
                {/* TODO use "accept" attribute for better validation. */}
                <input
                    disabled={properties.disabled}

                    className={CSS_CLASS_NAMES.fileInputNative}
                    id={id}

                    name={properties.name}

                    onChange={onChangeValue}

                    ref={fileInputReference}

                    type="file"
                />
            </CardPrimaryAction>
            {!properties.disabled || properties.value ?
                <CardActions>
                    <CardActionButtons>
                        {!properties.disabled ?
                            <CardActionButton
                                onClick={() => {
                                    fileInputReference.current?.click()
                                }}
                                ref={uploadButtonReference}
                                ripple={properties.ripple}
                            >
                                {properties.value ?
                                    properties.editButton :
                                    properties.newButton
                                }
                            </CardActionButton> :
                            ''
                        }
                        {properties.value ?
                            <>
                                {properties.disabled ?
                                    '' :
                                    <CardActionButton
                                        onClick={() => {
                                            onChangeValue()
                                        }}
                                        ref={deleteButtonReference}
                                        ripple={properties.ripple}
                                    >
                                        {properties.deleteButton}
                                    </CardActionButton>
                                }
                                {properties.value.url ?
                                    <CardActionButton
                                        onClick={() => {
                                            downloadLinkReference
                                                .current?.click()
                                        }}
                                        ripple={properties.ripple}
                                    >
                                        <a
                                            className={
                                                CSS_CLASS_NAMES
                                                    .fileInputDownload
                                            }
                                            download={properties.value.name}
                                            href={properties.value.url}
                                            ref={downloadLinkReference}
                                            target="_blank"
                                            {...(contentType ?
                                                {type: contentType} :
                                                {}
                                            )}
                                        >{properties.downloadButton}</a>
                                    </CardActionButton> :
                                    ''
                                }
                            </> :
                            ''
                        }
                    </CardActionButtons>
                </CardActions> :
                ''
            }
        </Card>
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
    FileInputComponent<typeof FileInputInner>
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
        state: undefined as unknown as ModelState,
        value: undefined
    },
    value: undefined
}
FileInput.propTypes = propertyTypes
FileInput.renderProperties = renderProperties
FileInput.strict = false
// endregion
export default FileInput
