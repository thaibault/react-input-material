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
import {blobToBase64String, dataURLToBlob} from 'blob-util'
import Tools from 'clientnode'
import {Mapping} from 'clientnode/type'
import {
    FocusEvent as ReactFocusEvent,
    ForwardedRef,
    forwardRef,
    memo as memorize,
    MouseEvent as ReactMouseEvent,
    MutableRefObject,
    ReactElement,
    SyntheticEvent,
    useEffect,
    useImperativeHandle,
    useRef,
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
import {CircularProgress} from '@rmwc/circular-progress'
import {Theme} from '@rmwc/theme'
import {Typography} from '@rmwc/typography'

/*
"namedExport" version of css-loader:

import {
    fileInputClassName,
    fileInputDownloadClassName,
    fileInputIframeWrapperPaddingClassName,
    fileInputNativeClassName,
    fileInputTextRepresentationClassName
} from './style.module'
*/
import cssClassNames from './style.module'
import GenericInput from '../GenericInput'
import {WrapConfigurations} from '../WrapConfigurations'
import {
    deriveMissingPropertiesFromState,
    determineInitialValue,
    determineValidationState as determineBaseValidationState,
    getConsolidatedProperties as getBaseConsolidatedProperties,
    mapPropertiesIntoModel,
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
    InputAdapter,
    InputProperties,
    InputProps,
    FileRepresentationType as RepresentationType,
    FileInputComponent
} from '../../type'
// endregion
// region constants
const CSS_CLASS_NAMES:Mapping = cssClassNames as Mapping
/*
    NOTE: Caused by a bug transpiling regular expression which ignores needed
    escape sequences for "/" when using the nativ regular expression type.
*/
const IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^image\\/(?:p?jpe?g|png|svg(?:\\+xml)?|vnd\\.microsoft\\.icon|gif|tiff|' +
    'webp|vnd\\.wap\\.wbmp|x-(?:icon|jng|ms-bmp))$',
    'i'
)
const TEXT_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^(?:application\\/xml)|(?:text\\/(?:plain|x-ndpb[wy]html|(?:x-)?csv' +
    '|x?html?|xml))$',
    'i'
)
const REPRESENTABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION =
    // Plain version:
    /^text\/plain$/i
    // Rendered version:
    // /^(application\/xml)|(text\/(plain|x?html?|xml))$/i
const VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^video\\/(?:(?:x-)?(?:x-)?webm|3gpp|mp2t|mp4|mpeg|quicktime|(?:x-)?flv' +
    '|(?:x-)?m4v|(?:x-)mng|x-ms-as|x-ms-wmv|x-msvideo)' +
    '|(?:application\\/(?:x-)?shockwave-flash)$',
    'i'
)
// endregion
// region helper
export const preserveStaticFileBaseNameInputGenerator:Properties[
    'generateFileNameInputProperties'
] = (
    prototype:InputProps<string>, {name, value: {name: fileName}}
):InputProps<string> => ({
    ...prototype,
    disabled: true,
    value:
        name +
        (fileName?.includes('.') ?
            fileName.substring(fileName.lastIndexOf('.')) :
            ''
        )
})
/**
 * Determines which type of file we have to present.
 * @param contentType - File type to derive representation type from.
 * @returns Nothing.
 */
export const determineRepresentationType = (
    contentType:string
):RepresentationType => {
    contentType = contentType.replace(/; *charset=.+$/, '')

    if (TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType)) {
        if (REPRESENTABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(
            contentType
        ))
            return 'renderableText'

        return 'text'
    }

    if (IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))
        return 'image'

    if (VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))
        return 'video'

    return 'binary'
}
export const determineValidationState = <P extends DefaultProperties>(
    properties:P, invalidName:boolean, currentState:ModelState
):boolean => determineBaseValidationState<P>(
    properties,
    currentState,
    {
        invalidMaximumSize: ():boolean => (
            typeof properties.model.maximumSize === 'number' &&
            properties.model.maximumSize <
                (properties.model.value?.blob?.size || 0)
        ),
        invalidMinimumSize: ():boolean => (
            typeof properties.model.minimumSize === 'number' &&
            properties.model.minimumSize >
                (properties.model.value?.blob?.size || 0)
        ),
        invalidName: ():boolean => invalidName,
        invalidContentTypePattern: ():boolean => (
            typeof properties.model.value?.blob?.type === 'string' &&
            ([] as Array<null|RegExp|string>)
                .concat(properties.model.contentTypeRegularExpressionPattern)
                .some((expression:null|RegExp|string):boolean =>
                    typeof expression === 'string' &&
                    !(new RegExp(expression))
                        .test(properties.model.value!.blob!.type!) ||
                    expression !== null &&
                    typeof expression === 'object' &&
                    !expression.test(properties.model.value!.blob!.type!)
                )
        ),
        invalidInvertedContentTypePattern: ():boolean => (
            typeof properties.model.value?.blob?.type === 'string' &&
            ([] as Array<null|RegExp|string>)
                .concat(
                    properties.model
                        .invertedContentTypeRegularExpressionPattern
                )
                .some((expression:null|RegExp|string):boolean =>
                    typeof expression === 'string' &&
                    (new RegExp(expression))
                        .test(properties.model.value!.blob!.type!) ||
                    expression !== null &&
                    typeof expression === 'object' &&
                    expression.test(properties.model.value!.blob!.type!)
                )
        )
    }
)
export const readBinaryDataIntoText = (
    blob:Blob, encoding = 'utf-8'
):Promise<string> =>
    new Promise<string>((
        resolve:(_value:string) => void, reject:(_reason:Error) => void
    ):void => {
        const fileReader:FileReader = new FileReader()

        fileReader.onload = (event:Event):void => {
            let content:string =
                (event.target as unknown as {result:string}).result
            // Remove preceding BOM.
            if (
                content.length &&
                encoding.endsWith('-sig') &&
                content.charCodeAt(0) === 0xFEFF
            )
                content = content.slice(1)
            // Normalize line endings to unix format.
            content = content.replace(/\r\n/g, '\n')
            resolve(content)
        }

        fileReader.onabort = ():void => reject(new Error('abort'))
        fileReader.onerror = ():void => reject(new Error())

        fileReader.readAsText(
            blob,
            encoding.endsWith('-sig') ?
                encoding.substring(0, encoding.length - '-sig'.length) :
                encoding
        )
    })
// endregion
/* eslint-disable jsdoc/require-description-complete-sentence */
/**
 * Validateable checkbox wrapper component.
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
 *
 * @returns React elements.
 */
export const FileInputInner = function(
    props:Props, reference?:ForwardedRef<Adapter>
):ReactElement {
    // region property aggregation
    /**
     * Calculate external properties (a set of all configurable properties).
     * @param properties - Properties to merge.
     *
     * @returns External properties object.
     */
    const getConsolidatedProperties = (properties:Props):Properties => {
        const result:DefaultProperties =
            mapPropertiesIntoModel<Props, DefaultProperties>(
                properties, FileInput.defaultProperties.model
            )

        determineValidationState(
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

        return getBaseConsolidatedProperties<Props, Properties>(result)
    }
    // endregion
    // region event handler
    /**
     * Triggered on blur events.
     * @param event - Event object.
     *
     * @returns Nothing.
     */
    const onBlur = (event:SyntheticEvent):void => setValueState((
        oldValueState:ValueState
    ):ValueState => {
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

            triggerCallbackIfExists<Properties>(
                properties,
                'changeState',
                controlled,
                properties.model.state,
                event,
                properties
            )
        }

        triggerCallbackIfExists<Properties>(
            properties, 'blur', controlled, event, properties
        )

        return changed ?
            {...oldValueState, modelState: properties.model.state} :
            oldValueState
    })
    /**
     * Triggered on any change events. Consolidates properties object and
     * triggers given on change callbacks.
     * @param event - Potential event object.
     *
     * @returns Nothing.
     */
    const onChange = (event?:SyntheticEvent):void => {
        if (nameInputReference.current?.properties)
            properties.model.fileName =
                nameInputReference.current.properties.model

        const consolidatedProperties:Properties = getConsolidatedProperties(
            /*
                Workaround since "Type" isn't identified as subset of
                "RecursivePartial<Type>" yet.
            */
            properties as unknown as Props
        )
        // NOTE: Avoid recursive merging of deprecated value properties.
        delete properties.model.value
        delete properties.value
        // NOTE: Avoid trying to write into a readonly object.
        properties.styles = Tools.copy(properties.styles)

        Tools.extend(true, properties, consolidatedProperties)

        triggerCallbackIfExists<Properties>(
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
     *
     * @returns Nothing.
     */
    const onChangeValue = (
        eventSourceOrName:FileValue|null|string|SyntheticEvent,
        event?:SyntheticEvent|undefined,
        inputProperties?:InputProperties<string>|undefined,
        attachBlobProperty = false
    ):void => {
        if (!(properties.model.mutable && properties.model.writable))
            return

        if (
            eventSourceOrName &&
            fileInputReference.current &&
            (eventSourceOrName as SyntheticEvent).target ===
                fileInputReference.current
        ) {
            event = eventSourceOrName as SyntheticEvent

            if ((event.target as unknown as {files:FileList}).files?.length) {
                const blob:File =
                    (event.target as unknown as {files:FileList}).files[0]

                properties.value = {blob, name: blob.name}

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
                            Omit<Properties, 'value'> &
                            {value:FileValue & {name:string}}
                    )?.value ||
                    blob.name
            } else
                return
        }

        setValueState((oldValueState:ValueState):ValueState => {
            if (eventSourceOrName === null)
                properties.value = eventSourceOrName
            else if (typeof eventSourceOrName === 'string')
                /*
                    NOTE: A name can only be changed if a blob is available
                    beforehand.
                */
                properties.value = {
                    ...oldValueState.value, name: eventSourceOrName
                }
            else if (
                typeof (eventSourceOrName as FileValue).source === 'string' ||
                typeof (eventSourceOrName as FileValue).url === 'string'
            )
                if (attachBlobProperty)
                    properties.value = {
                        ...oldValueState.value, ...eventSourceOrName
                    }
                else
                    properties.value = eventSourceOrName as FileValue

            if (Tools.equals(oldValueState.value, properties.value))
                return oldValueState

            let stateChanged = false

            const result:ValueState = {
                ...oldValueState, value: properties.value as FileValue|null
            }

            if (oldValueState.modelState.pristine) {
                properties.dirty = true
                properties.pristine = false
                stateChanged = true
            }

            onChange(event)

            if (determineValidationState(
                properties as unknown as DefaultProperties,
                nameInputReference.current?.properties?.invalid || false,
                oldValueState.modelState
            ))
                stateChanged = true

            triggerCallbackIfExists<Properties>(
                properties,
                'changeValue',
                controlled,
                properties.value,
                event,
                properties
            )

            if (stateChanged) {
                result.modelState = properties.model.state

                triggerCallbackIfExists<Properties>(
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
     *
     * @returns Nothing.
     */
    const onClick = (event:ReactMouseEvent):void => {
        triggerCallbackIfExists<Properties>(
            properties, 'click', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggered on focus events.
     * @param event - Focus event object.
     *
     * @returns Nothing.
     */
    const onFocus = (event:ReactFocusEvent):void => {
        triggerCallbackIfExists<Properties>(
            properties, 'focus', controlled, event, properties
        )

        onTouch(event)
    }
    /**
     * Triggers on start interacting with the input.
     * @param event - Event object which triggered interaction.
     *
     * @returns Nothing.
     */
    const onTouch = (event:ReactFocusEvent|ReactMouseEvent):void =>
        setValueState((oldValueState:ValueState):ValueState => {
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

            let result:ValueState = oldValueState

            if (changedState) {
                onChange(event)

                result = {...oldValueState, modelState: properties.model.state}

                triggerCallbackIfExists<Properties>(
                    properties,
                    'changeState',
                    controlled,
                    properties.model.state,
                    event,
                    properties
                )
            }

            triggerCallbackIfExists<Properties>(
                properties, 'touch', controlled, event, properties
            )

            return result
        })
    // endregion
    // region properties
    /// region references
    const deleteButtonReference:MutableRefObject<HTMLButtonElement|null> =
        useRef<HTMLButtonElement>(null)
    const downloadLinkReference:MutableRefObject<HTMLAnchorElement|null> =
        useRef<HTMLAnchorElement>(null)
    const fileInputReference:MutableRefObject<HTMLInputElement|null> =
        useRef<HTMLInputElement>(null)
    const nameInputReference:MutableRefObject<InputAdapter<string>|null> =
        useRef<InputAdapter<string>>(null)
    const uploadButtonReference:MutableRefObject<HTMLDivElement|null> =
        useRef<HTMLDivElement>(null)
    /// endregion
    const givenProps:Props = translateKnownSymbols(props)

    const initialValue:FileValue|null = determineInitialValue<FileValue>(
        givenProps, FileInput.defaultProperties.model.default
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
        attachBlobProperty: false,
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

    /*
        NOTE: We have to merge asynchronous determined missing value properties
        to avoid endless rendering loops when a value is provided via
        properties.
    */
    if (valueState.attachBlobProperty && valueState.value)
        properties.value =
            Tools.extend<FileValue>(true, valueState.value, properties.value!)

    /// region synchronize uncontrolled properties into state
    const currentValueState:ValueState = {
        attachBlobProperty: false,
        modelState: properties.model.state,
        value: properties.value as FileValue|null
    }
    /*
        NOTE: If value is controlled only trigger/save state changes when model
        state has changed.
    */
    if (
        valueState.attachBlobProperty ||
        !(controlled || Tools.equals(properties.value, valueState.value)) ||
        !Tools.equals(properties.model.state, valueState.modelState)
    )
        setValueState(currentValueState)
    if (controlled)
        setValueState =
            wrapStateSetter<ValueState>(setValueState, currentValueState)
    /// endregion
    useImperativeHandle(
        reference,
        ():Adapter & {
            references:{
                deleteButtonReference:MutableRefObject<HTMLButtonElement|null>,
                downloadLinkReference:MutableRefObject<HTMLAnchorElement|null>,
                fileInputReference:MutableRefObject<HTMLInputElement|null>,
                nameInputReference:MutableRefObject<InputAdapter<string>|null>,
                uploadButtonReference:MutableRefObject<HTMLDivElement|null>
            }
        } => ({
            properties,
            references: {
                deleteButtonReference,
                downloadLinkReference,
                fileInputReference,
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
    useEffect(():void => {
        (async ():Promise<void> => {
            let valueChanged:null|Partial<FileValue> = null
            if (
                properties.value?.blob &&
                properties.value.blob instanceof Blob &&
                !properties.value.source
            )
                valueChanged = {
                    source: TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(
                        properties.value.blob.type
                    ) ?
                        await readBinaryDataIntoText(
                            properties.value.blob
                        ) :
                        typeof Blob === 'undefined' ?
                            (properties.value.toString as
                                unknown as
                                (_encoding:string) => string
                            )('base64') :
                            await blobToBase64String(properties.value.blob)
                }

            if (properties.value?.source) {
                if (!properties.value.blob)
                    if (properties.value.url?.startsWith('data:'))
                        valueChanged = {
                            blob: dataURLToBlob(properties.value.source)
                        }
                    else if (properties.sourceToBlobOptions)
                        valueChanged = {
                            blob: new Blob(
                                [properties.value.source],
                                properties.sourceToBlobOptions
                            )
                        }

                if (!properties.value.url && properties.value.blob?.type) {
                    let source = properties.value.source
                    if (TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(
                        properties.value.blob.type
                    ))
                        try {
                            source = btoa(properties.value.source)
                        } catch (error) {
                            console.warn(error)
                        }

                    valueChanged = {
                        url:
                            `data:${properties.value.blob.type};base64,` +
                            source
                    }
                }
            }

            if (valueChanged)
                onChangeValue(valueChanged, undefined, undefined, true)
        })()
            .catch(console.error)
    })
    // region render
    const representationType:RepresentationType =
        properties.value?.blob?.type ?
            determineRepresentationType(properties.value.blob.type) :
            'binary'
    const invalid:boolean = (
        properties.invalid &&
        properties.showValidationState &&
        (properties.showInitialValidationState || properties.visited)
    )

    return <WrapConfigurations
        strict={FileInput.strict}
        themeConfiguration={properties.themeConfiguration}
        tooltip={properties.tooltip}
    >
        <Card
            className={
                [CSS_CLASS_NAMES['file-input']]
                    .concat(properties.className ?? [])
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
                                    type={properties.value.blob!.type}
                                />
                            </video> :
                            representationType === 'renderableText' ?
                                <div className={
                                    [CSS_CLASS_NAMES[
                                        'file-input__iframe-wrapper'
                                    ]]
                                        .concat(
                                            ['text/html', 'text/plain']
                                                .includes(
                                                    properties.value.blob!
                                                        .type!
                                                ) ?
                                                CSS_CLASS_NAMES[
                                                    'file-input__iframe-' +
                                                    'wrapper--padding'
                                                ] :
                                                []
                                        )
                                        .join(' ')
                                }>
                                    <iframe
                                        frameBorder="no"
                                        scrolling="no"
                                        src={properties.value.url}
                                    />
                                </div> :
                                properties.value?.source &&
                                representationType === 'text' ?
                                    <pre
                                        className={CSS_CLASS_NAMES[
                                            'file-input__text-representation'
                                        ]}
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
                <div>
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
                    {properties.value ?
                        <GenericInput
                            ref={nameInputReference}
                            {...properties.generateFileNameInputProperties(
                                {
                                    disabled: properties.disabled,
                                    value: properties.value?.name,
                                    ...defaultFileNameInputProperties,
                                    model: properties.model.fileName,
                                    onChangeValue: onChangeValue,
                                    default: properties.value.name
                                },
                                properties as
                                    Omit<Properties, 'value'> &
                                    {value:FileValue & {name:string}}
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
                    className={CSS_CLASS_NAMES['file-input__native']}
                    id={properties.id || properties.name}
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
                                onClick={():void =>
                                    fileInputReference.current?.click()
                                }
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
                                {!properties.disabled ?
                                    <CardActionButton
                                        onClick={
                                            ():void => onChangeValue(null)
                                        }
                                        ref={deleteButtonReference}
                                        ripple={properties.ripple}
                                    >
                                        {properties.deleteButton}
                                    </CardActionButton> :
                                    ''
                                }
                                {properties.value.url ?
                                    <CardActionButton
                                        onClick={():void =>
                                            downloadLinkReference
                                                .current?.click()
                                        }
                                        ripple={properties.ripple}
                                    >
                                        <a
                                            className={CSS_CLASS_NAMES[
                                                'file-input__download'
                                            ]}
                                            download={properties.value.name}
                                            href={properties.value.url}
                                            ref={downloadLinkReference}
                                            target="_blank"
                                            {...(properties.value.blob?.type ?
                                                {type:
                                                    properties.value.blob.type
                                                } :
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
/* eslint-enable jsdoc/require-description-complete-sentence */
// NOTE: This is useful in react dev tools.
FileInputInner.displayName = 'FileInput'
/**
 * Wrapping web component compatible react component.
 * @property static:defaultModelState - Initial model state.
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
export const FileInput:FileInputComponent<typeof FileInputInner> =
    memorize(forwardRef(FileInputInner)) as
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
FileInput.strict = false
// endregion
export default FileInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
