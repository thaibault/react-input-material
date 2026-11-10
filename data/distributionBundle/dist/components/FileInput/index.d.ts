import type { ForwardedRef, ReactElement } from 'react';
import type { AdapterWithReferences, Component, Props, Value } from './type';
import { Logger } from 'clientnode';
export { CSS_CLASS_NAMES, IMAGE_CONTENT_TYPE_REGULAR_EXPRESSION, TEXT_CONTENT_TYPE_REGULAR_EXPRESSION, EMBEDABLE_TEXT_CONTENT_TYPE_REGULAR_EXPRESSION, VIDEO_CONTENT_TYPE_REGULAR_EXPRESSION, determineRepresentationType, determineValidationState, deriveBase64String, readBinaryDataIntoText, preserveStaticFileBaseNameInputGenerator } from './helper';
export declare const log: Logger;
export declare function FileInputInner<Type extends Value = Value>(props: Props<Type>, reference?: ForwardedRef<AdapterWithReferences<Type>>): ReactElement;
export declare namespace FileInputInner {
    var displayName: string;
}
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
export declare const FileInput: Component<typeof FileInputInner>;
export default FileInput;
