import type { ForwardedRef, ReactElement } from 'react';
import type { AdapterWithReferences, Component, DataTransformation, Props } from './type';
export { CODE_EDITOR_OPTIONS, CSS_CLASS_NAMES, determineValidationState, preventEnterKeyPropagation, suggestionMatches, TIPTAP_DEFAULT_OPTIONS } from './helper';
export declare const INPUT_TRANSFORMER: DataTransformation;
export declare function TextInputInner<Type = unknown>(props: Props<Type>, reference?: ForwardedRef<AdapterWithReferences<Type>>): ReactElement;
export declare namespace TextInputInner {
    var displayName: string;
}
/**
 * Wrapping web component compatible react component.
 * @property defaultModelState - Initial model state.
 * @property defaultProperties - Initial property configuration.
 * @property locales - Defines input formatting locales.
 * @property propTypes - Triggers reacts runtime property value checks.
 * @property strict - Indicates whether we should wrap render output in react's
 * strict component.
 * @property transformer - Text input data transformation specifications.
 * @property wrapped - Wrapped component.
 * @param props - Given components properties.
 * @param reference - Reference object to forward internal state.
 * @returns React elements.
 */
export declare const TextInput: Component<typeof TextInputInner>;
export default TextInput;
