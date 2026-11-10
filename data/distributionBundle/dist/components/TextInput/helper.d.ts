import type { KeyboardEvent } from 'react';
import type { EditorOptions } from '@tiptap/core';
import type { DefaultProperties as DefaultProperties, ModelState as ModelState, Properties } from './type';
import Dummy from 'react-generic-dummy';
import ReactUseAnimations from 'react-useanimations';
import ReactUseAnimationsLockAnimation from 'react-useanimations/lib/lock';
import ReactUseAnimationsPlusToXAnimation from 'react-useanimations/lib/plusToX';
export declare const IS_BROWSER: boolean;
export declare const UseAnimations: (null | typeof Dummy | typeof ReactUseAnimations | undefined);
export declare const lockAnimation: (null | typeof ReactUseAnimationsLockAnimation | undefined);
export declare const plusToXAnimation: (null | typeof ReactUseAnimationsPlusToXAnimation | undefined);
export declare const CSS_CLASS_NAMES: Record<string, string>;
export declare const CODE_EDITOR_OPTIONS: {};
export declare const CURRENT_UTC_BUILD_TIMESTAMP: number;
export declare const TIPTAP_DEFAULT_OPTIONS: Partial<EditorOptions>;
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param currentState - Current component state.
 * @returns Boolean indicating whether component is in an aggregated valid or
 * invalid state.
 */
export declare const determineValidationState: <T>(properties: DefaultProperties<T>, currentState: Partial<ModelState>) => boolean;
/**
 * Avoid propagating the enter key event since this usually sends a form which
 * is not intended when working in a text field.
 * @param event - Keyboard event.
 */
export declare function preventEnterKeyPropagation(event: KeyboardEvent): void;
/**
 * Indicates whether a provided query is matching currently provided
 * suggestion.
 * @param suggestion - Candidate to match again.
 * @param query - Search query to check for matching.
 * @returns Boolean result whether provided suggestion matches given query or
 * not.
 */
export declare function suggestionMatches(suggestion: string, query?: null | string): boolean;
export declare const usePropertiesChangedIndicator: <Type = unknown>(properties: Properties<Type>) => {};
