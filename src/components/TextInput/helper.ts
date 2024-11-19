// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module helper */
'use strict'
import type {EditorOptions} from '@tiptap/core'
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
import {KeyboardEvent} from 'react'
import Dummy from 'react-generic-dummy'
import UseAnimationsType from 'react-useanimations'
import LockAnimation from 'react-useanimations/lib/lock'
import PlusToXAnimation from 'react-useanimations/lib/plusToX'

import {
    determineValidationState as determineBaseValidationState
} from '../../helper'
import {DefaultProperties as DefaultBaseProperties} from '../../type'
import {
    DefaultInputProperties as DefaultProperties,
    InputModelState as ModelState
} from './type'

import RichTextEditorComponent from './Tiptap'
import CodeEditorComponent from './CodeMirror'

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
export const GivenCodeEditorComponent: typeof CodeEditorComponent =
    IS_BROWSER && CodeEditorComponent as unknown ?
        CodeEditorComponent :
        Dummy as unknown as typeof CodeEditorComponent
export const UseAnimations: (
    null | typeof Dummy | typeof UseAnimationsType | undefined
) = IS_BROWSER ?
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    (require('react-useanimations') as
        {default: null | typeof Dummy | typeof UseAnimationsType} | null
    )?.default :
    null
export const lockAnimation: null | typeof LockAnimation | undefined =
    IS_BROWSER ?
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        (require('react-useanimations/lib/lock') as
            {default: null | typeof LockAnimation} | null
        )?.default : null
export const plusToXAnimation: null | typeof PlusToXAnimation | undefined =
    IS_BROWSER ?
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        (require('react-useanimations/lib/plusToX') as
            {default: null | typeof PlusToXAnimation} | null
        )?.default : null
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping
// region code editor configuration
export const CODE_EDITOR_OPTIONS = {}
/// region rich text editor configuration
declare const UTC_BUILD_TIMESTAMP: number | undefined
// NOTE: Could be set via module bundler environment variables.
export const CURRENT_UTC_BUILD_TIMESTAMP =
    typeof UTC_BUILD_TIMESTAMP === 'undefined' ? 1 : UTC_BUILD_TIMESTAMP
export const TIPTAP_DEFAULT_OPTIONS: Partial<EditorOptions> = {
    injectCSS: true,
    enableContentCheck: true
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
export const determineValidationState = <T>(
    properties: DefaultProperties<T>, currentState: Partial<ModelState>
): boolean => determineBaseValidationState<
    T, DefaultBaseProperties<T>, Partial<ModelState>
>(
    properties as DefaultBaseProperties<T>,
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
            ([] as Array<RegExp | string>)
                .concat(properties.model.invertedPattern)
                .some((expression: RegExp | string): boolean =>
                    (new RegExp(expression)).test(
                        properties.model.value as unknown as string
                    )
                )
        ),
        invalidPattern: (): boolean => (
            typeof properties.model.value === 'string' &&
            typeof properties.model.pattern !== 'undefined' &&
            Boolean(properties.model.pattern) &&
            ([] as Array<RegExp | string>)
                .concat(properties.model.pattern)
                .some((expression: RegExp | string): boolean =>
                    !(new RegExp(expression)).test(
                        properties.model.value as unknown as string
                    )
                )
        )
    }
)
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
    suggestion: string, query?: null | string
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
