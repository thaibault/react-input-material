import type { ElementType } from 'react';
import type { Props } from '../TextInput/type';
import type { DefaultProperties as DefaultProperties, ModelState as ModelState, Value, Properties } from './type';
import { RepresentationType as RepresentationType } from './type';
export declare const CSS_CLASS_NAMES: Record<string, string>;
export declare const IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION: RegExp;
export declare const TEXT_CONTENT_TYPE_REGULAR_EXPRESSION: RegExp;
export declare const EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION: RegExp;
export declare const VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION: RegExp;
/**
 * Generates properties for nested text input to edit file name.
 * @param prototype - Base properties to extend from.
 * @param properties - Actual properties to derive from.
 * @param properties.name - Name of filename input field.
 * @param properties.value - Current edited file value.
 * @returns Input properties.
 */
export declare const preserveStaticFileBaseNameInputGenerator: <Type extends Value = Value, MediaTag extends ElementType = 'div'>(prototype: Props<string>, { name, value }: Properties<Type, MediaTag>) => Props<string>;
/**
 * Determines files content type for given file input properties.
 * @param properties - File input properties to analyze.
 * @returns The determined content type.
 */
export declare const determineContentType: <Type extends Value = Value>(properties: Properties<Type>) => null | string;
/**
 * Determines which type of file we have to present.
 * @param contentType - File type to derive representation type from.
 * @returns Representative string for given content type.
 */
export declare const determineRepresentationType: (contentType: string) => RepresentationType;
/**
 * Derives validation state from provided properties and state.
 * @param properties - Current component properties.
 * @param invalidName - Determines if edited file name is invalid or not.
 * @param currentState - Current component state.
 * @returns Boolean indicating Whether component is in an aggregated valid or
 * invalid state.
 */
export declare const determineValidationState: <Type extends Value = Value, P extends DefaultProperties<Type> = DefaultProperties<Type>>(properties: P, invalidName: boolean, currentState: ModelState) => boolean;
/**
 * Derive base46 string from given file value.
 * @param value - File to derive string from.
 * @returns A promise holding base64 string.
 */
export declare const deriveBase64String: <Type extends Value = Value>(value: Type) => Promise<string>;
/**
 * Read text from given binary data with given encoding.
 * @param blob - Binary data object.
 * @param encoding - Encoding for reading file correctly.
 * @param registerAbortController - Callback to register an abort controller.
 * @returns A promise holding parsed text as string.
 */
export declare const readBinaryDataIntoText: (blob: Blob, encoding?: string, registerAbortController?: (callback: () => void) => void) => Promise<string>;
export declare const usePropertiesChangedIndicator: <Type extends Value = Value>(properties: Properties<Type>) => {};
