import type { MDCTextFieldFoundation } from '@material/textfield';
import type { TextAreaProperties, TextAreaReference } from '../../type';
import { MDCTextField } from '@material/textfield';
export declare const CSS_CLASS_NAMES: Record<string, string>;
export interface Reference extends TextAreaReference {
    materialTextField: MDCTextField | null;
    foundation: MDCTextFieldFoundation | null;
}
export declare const OUTLINED = false;
export declare const TextArea: import("react").ForwardRefExoticComponent<Omit<TextAreaProperties, "ref"> & import("react").RefAttributes<TextAreaReference>>;
export default TextArea;
