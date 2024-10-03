// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module helper */
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
import {blobToBase64String} from 'blob-util'
import {Mapping} from 'clientnode'
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
import {
    determineValidationState as determineBaseValidationState
} from '../../helper'
import {
    DefaultProperties as DefaultBaseProperties,
    DefaultFileInputProperties as DefaultProperties,
    FileInputModelState as ModelState,
    FileValue,
    InputProps,
    FileRepresentationType as RepresentationType,
    FileInputProperties
} from '../../type'
import {ElementType} from 'react'
// endregion
// region constants
export const CSS_CLASS_NAMES = cssClassNames as Mapping
/*
    NOTE: Caused by a bug transpiling regular expression which ignores needed
    escape sequences for "/" when using the nativ regular expression type.
*/
export const IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^image\\/(?:p?jpe?g|png|svg(?:\\+xml)?|vnd\\.microsoft\\.icon|gif|tiff|' +
    'webp|vnd\\.wap\\.wbmp|x-(?:icon|jng|ms-bmp))$',
    'i'
)
export const TEXT_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^' +
    '(?:application\\/(?:json|xml))|' +
    '(?:text\\/(?:' + (
        'plain|x-ndpb[wy]html|javascript|x?html?|xml|(?:(?:x-)?(?:' + (
            'csv|python-script'
        ) + '))'
    ) + '))' +
    '$',
    'i'
)
export const EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION =
    // Plain version:
    /^text\/plain$/i
    // Rendered version:
    // /^(application\/xml)|(text\/(plain|x?html?|xml))$/i
export const VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION = new RegExp(
    '^video\\/(?:(?:x-)?(?:x-)?webm|3gpp|mp2t|mp4|mpeg|quicktime|(?:x-)?flv' +
    '|(?:x-)?m4v|(?:x-)mng|x-ms-as|x-ms-wmv|x-msvideo)' +
    '|(?:application\\/(?:x-)?shockwave-flash)$',
    'i'
)
// endregion
// region functions
/**
 * Generates properties for nested text input to edit file name.
 * @param prototype - Base properties to extend from.
 * @param properties - Actual properties to derive from.
 * @param properties.name - Name of filename input field.
 * @param properties.value - Current edited file value.
 * @returns Input properties.
 */
export const preserveStaticFileBaseNameInputGenerator = <
    Type extends FileValue = FileValue, MediaTag extends ElementType = 'div'
>(
        prototype: InputProps<string>,
        {name, value}: FileInputProperties<Type, MediaTag>
    ): InputProps<string> => ({
        ...prototype,
        disabled: true,
        value:
            name +
            (value?.name?.includes('.') ?
                value.name.substring(value.name.lastIndexOf('.'))
                    .toLowerCase() :
                ''
            )
    })
/**
 * Determines files content type for given file input properties.
 * @param properties - File input properties to analyze.
 * @returns The determined content type.
 */
export const determineContentType = <Type extends FileValue = FileValue>(
    properties: FileInputProperties<Type>
): null|string => {
    if (properties.value) {
        if ((properties.value.blob as Blob|null)?.type)
            return (properties.value.blob as Blob).type

        if (properties.value.url?.startsWith('data:')) {
            const contentTypeMatch =
                properties.value.url.match(/^data:([^/]+\/[^;]+).*$/)
            if (contentTypeMatch)
                return contentTypeMatch[1]
        }
    }

    return null
}
/**
 * Determines which type of file we have to present.
 * @param contentType - File type to derive representation type from.
 * @returns Representative string for given content type.
 */
export const determineRepresentationType = (
    contentType: string
): RepresentationType => {
    contentType = contentType.replace(/; *charset=.+$/, '')

    if (TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))
        return 'text'

    if (EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION.test(
        contentType
    ))
        return 'embedableText'

    if (IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))
        return 'image'

    if (VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION.test(contentType))
        return 'video'

    return 'binary'
}
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param invalidName - Determines if edited file name is invalid or not.
 * @param currentState - Current component state.
 * @returns Boolean indicating Whether component is in an aggregated valid or
 * invalid state.
 */
export const determineValidationState = <
    Type extends FileValue = FileValue,
    P extends DefaultProperties<Type> = DefaultProperties<Type>
>(properties: P, invalidName: boolean, currentState: ModelState): boolean => {
    const invalidMaximumSize = (): boolean => (
        typeof properties.model.maximumSize === 'number' &&
        properties.model.maximumSize <
        ((properties.model.value?.blob as Blob|null)?.size || 0)
    )
    const invalidMinimumSize = (): boolean => (
        typeof properties.model.minimumSize === 'number' &&
        properties.model.minimumSize >
        ((properties.model.value?.blob as Blob|null)?.size || 0)
    )
    const invalidContentTypePattern = (): boolean => (
        Boolean(properties.model.contentTypePattern) &&
        typeof (properties.model.value?.blob as Blob|null)?.type === 'string' &&
        ([] as Array<RegExp|string>)
            .concat(properties.model.contentTypePattern ?? [])
            .some((expression: RegExp|string): boolean =>
                typeof expression === 'string' &&
                !(new RegExp(expression))
                    .test((properties.model.value?.blob as Blob).type) ||
                typeof expression === 'object' &&
                !expression.test(
                    (properties.model.value?.blob as Blob).type
                )
            )
    )
    const invalidInvertedContentTypePattern = (): boolean => (
        Boolean(
            properties.model.invertedContentTypePattern
        ) &&
        typeof (properties.model.value?.blob as Blob|undefined)?.type ===
            'string' &&
        ([] as Array<RegExp|string>)
            .concat(properties.model.invertedContentTypePattern ?? [])
            .some((expression: RegExp|string): boolean =>
                typeof expression === 'string' &&
                (new RegExp(expression))
                    .test((properties.model.value?.blob as Blob).type) ||
                typeof expression === 'object' &&
                expression.test((properties.model.value?.blob as Blob).type)
            )
    )

    return determineBaseValidationState<Type>(
        properties as DefaultBaseProperties<Type>,
        currentState,
        {
            invalidMaximumSize,
            invalidMinimumSize,
            invalidName: (): boolean => invalidName,
            invalidContentTypePattern,
            invalidInvertedContentTypePattern
        }
    )
}
/// region data transformer
/**
 * Derive base46 string from given file value.
 * @param value - File to derive string from.
 * @returns A promise holding base64 string.
 */
export const deriveBase64String = <Type extends FileValue = FileValue>(
    value: Type
): Promise<string> =>
        value.blob ?
            blobToBase64String(value.blob as Blob) :
            value.source ?
                Promise.resolve(
                    Buffer.from(value.source).toString('base64')
                ) :
                Promise.reject(
                    new Error('Base 64 string could not be determined.')
                )

/**
 * Read text from given binary data with given encoding.
 * @param blob - Binary data object.
 * @param encoding - Encoding for reading file correctly.
 * @returns A promise holding parsed text as string.
 */
export const readBinaryDataIntoText = (
    blob: Blob, encoding = 'utf-8'
): Promise<string> =>
    new Promise<string>((
        resolve: (value: string) => void, reject: (reason: Error) => void
    ) => {
        const fileReader = new FileReader()

        fileReader.onload = (event: Event) => {
            let content: string =
                (event.target as unknown as {result: string}).result
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

        fileReader.onabort = () => {
            reject(new Error('abort'))
        }
        fileReader.onerror = () => {
            reject(new Error())
        }

        fileReader.readAsText(
            blob,
            encoding.endsWith('-sig') ?
                encoding.substring(0, encoding.length - '-sig'.length) :
                encoding
        )
    })
/// endregion
// endregion
