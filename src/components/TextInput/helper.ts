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
import {Mapping} from 'clientnode'
import {lazy, KeyboardEvent} from 'react'
import CodeEditorType from 'react-ace'
import Dummy from 'react-generic-dummy'
import UseAnimationsType from 'react-useanimations'
import LockAnimation from 'react-useanimations/lib/lock'
import PlusToXAnimation from 'react-useanimations/lib/plusToX'
import {Editor as RichTextEditorComponent} from '@tinymce/tinymce-react'

import {
    determineValidationState as determineBaseValidationState
} from '../../helper'
import {
    DefaultInputProperties as DefaultProperties,
    InputModelState as ModelState,
    TinyMCEOptions
} from '../../type'

/*
"namedExport" version of css-loader:

import {
    textInputSuggestionsSuggestionClassName,
    textInputSuggestionsSuggestionMarkClassName,
    textInputClassName,
    textInputCustomClassName,
    textInputEditorLabelClassName,
    textInputSuggestionsClassName,
    textInputSuggestionsPendingClassName
} from './style.module'
 */
import cssClassNames from './style.module'
// endregion
// region constants
declare const TARGET_TECHNOLOGY: string

export const IS_BROWSER = !(
    typeof TARGET_TECHNOLOGY !== 'undefined' && TARGET_TECHNOLOGY === 'node' ||
    typeof window === 'undefined'
)
export const GivenRichTextEditorComponent: typeof RichTextEditorComponent =
    IS_BROWSER && RichTextEditorComponent as unknown ?
        RichTextEditorComponent :
        Dummy as unknown as typeof RichTextEditorComponent
export const UseAnimations: (
    null|typeof Dummy|typeof UseAnimationsType|undefined
) = IS_BROWSER ?
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    (require('react-useanimations') as
        {default: null|typeof Dummy|typeof UseAnimationsType}|null
    )?.default :
    null
export const lockAnimation: null|typeof LockAnimation|undefined = IS_BROWSER ?
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    (require('react-useanimations/lib/lock') as
        {default: null|typeof LockAnimation}|null
    )?.default : null
export const plusToXAnimation: null|typeof PlusToXAnimation|undefined =
    IS_BROWSER ?
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        (require('react-useanimations/lib/plusToX') as
            {default: null|typeof PlusToXAnimation}|null
        )?.default : null
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping
// region code editor configuration
export const ACE_BASE_PATH = '/ace-builds/src-min-noconflict/'
export const ACE_EDITOR_OPTIONS = {
    basePath: ACE_BASE_PATH,
    modePath: ACE_BASE_PATH,
    themePath: ACE_BASE_PATH,
    workerPath: ACE_BASE_PATH,
    useWorker: false
}
export const CodeEditor = lazy<typeof CodeEditorType>(
    async (): Promise<{default: typeof CodeEditorType}> => {
        const {config} = await import('ace-builds')
        for (const [name, value] of Object.entries(ACE_EDITOR_OPTIONS))
            config.set(name, value)

        return await import('react-ace')
    }
)
/// region rich text editor configuration
declare const UTC_BUILD_TIMESTAMP: number|undefined
// NOTE: Could be set via module bundler environment variables.
export const CURRENT_UTC_BUILD_TIMESTAMP =
    typeof UTC_BUILD_TIMESTAMP === 'undefined' ? 1 : UTC_BUILD_TIMESTAMP
export const TINYMCE_BASE_PATH = '/tinymce/'
export const TINYMCE_DEFAULT_OPTIONS: Partial<TinyMCEOptions> = {
    /* eslint-disable camelcase */
    // region paths
    base_url: TINYMCE_BASE_PATH,
    skin_url: `${TINYMCE_BASE_PATH}skins/ui/oxide`,
    theme_url: `${TINYMCE_BASE_PATH}themes/silver/theme.min.js`,
    // endregion
    allow_conditional_comments: false,
    allow_script_urls: false,
    body_class: 'mdc-text-field__input',
    branding: false,
    cache_suffix: `?version=${String(CURRENT_UTC_BUILD_TIMESTAMP)}`,
    contextmenu: [],
    document_base_url: '/',
    element_format: 'xhtml',
    entity_encoding: 'raw',
    fix_list_elements: true,
    hidden_input: false,
    icon: 'material',
    invalid_elements: 'em',
    invalid_styles: 'color font-size line-height',
    keep_styles: false,
    menubar: false,
    plugins: [
        'fullscreen',
        'link',
        'code',
        'nonbreaking',
        'searchreplace',
        'visualblocks'
    ],
    relative_urls: false,
    remove_script_host: false,
    remove_trailing_brs: true,
    schema: 'html5',
    toolbar1: `
        cut copy paste |
        undo redo removeformat |
        styleselect formatselect fontselect fontsizeselect |
        searchreplace visualblocks fullscreen code
    `.trim(),
    toolbar2: `
        alignleft aligncenter alignright alignjustify outdent indent |
        link nonbreaking bullist numlist bold italic underline strikethrough
    `.trim(),
    trim: true
    /* eslint-enable camelcase */
}
/// endregion
// endregion
// region functions
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param currentState - Current component state.
 * @returns Boolean indicating whether component is in an aggregated valid or
 * invalid state.
 */
export function determineValidationState<T>(
    properties: DefaultProperties<T>, currentState: Partial<ModelState>
): boolean {
    return determineBaseValidationState<
        DefaultProperties<T>, Partial<ModelState>
    >(
        properties,
        currentState,
        {
            invalidMaximum: (): boolean => (
                typeof properties.model.maximum === 'number' &&
                typeof properties.model.value === 'number' &&
                !isNaN(properties.model.value) &&
                properties.model.maximum >= 0 &&
                properties.model.maximum < properties.model.value
            ),
            invalidMinimum: (): boolean => (
                typeof properties.model.minimum === 'number' &&
                typeof properties.model.value === 'number' &&
                !isNaN(properties.model.value) &&
                properties.model.value < properties.model.minimum
            ),

            invalidMaximumLength: (): boolean => (
                typeof properties.model.maximumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.maximumLength >= 0 &&
                properties.model.maximumLength < properties.model.value.length
            ),
            invalidMinimumLength: (): boolean => (
                typeof properties.model.minimumLength === 'number' &&
                typeof properties.model.value === 'string' &&
                properties.model.value.length < properties.model.minimumLength
            ),

            invalidInvertedPattern: (): boolean => (
                typeof properties.model.value === 'string' &&
                typeof properties.model.invertedPattern !== 'undefined' &&
                Boolean(properties.model.invertedPattern) &&
                ([] as Array<RegExp|string>)
                    .concat(properties.model.invertedPattern)
                    .some((expression: RegExp|string): boolean =>
                        (new RegExp(expression)).test(
                            properties.model.value as unknown as string
                        )
                    )
            ),
            invalidPattern: (): boolean => (
                typeof properties.model.value === 'string' &&
                typeof properties.model.pattern !== 'undefined' &&
                Boolean(properties.model.pattern) &&
                ([] as Array<RegExp|string>)
                    .concat(properties.model.pattern)
                    .some((expression: RegExp|string): boolean =>
                        !(new RegExp(expression)).test(
                            properties.model.value as unknown as string
                        )
                    )
            )
        }
    )
}
/**
 * Avoid propagating the enter key event since this usually sends a form which
 * is not intended when working in a text field.
 * @param event - Keyboard event.
 */
export function preventEnterKeyPropagation(event: KeyboardEvent) {
    if (event.code === 'Enter')
        event.stopPropagation()
}
/**
 * Indicates whether a provided query is matching currently provided
 * suggestion.
 * @param suggestion - Candidate to match again.
 * @param query - Search query to check for matching.
 * @returns Boolean result whether provided suggestion matches given query or
 * not.
 */
export function suggestionMatches(
    suggestion: string, query?: null|string
): boolean {
    if (query) {
        suggestion = suggestion.toLowerCase()

        return query
            .replace(/  +/g, ' ')
            .toLowerCase()
            .split(' ')
            .every((part: string): boolean => suggestion.includes(part))
    }

    return false
}
