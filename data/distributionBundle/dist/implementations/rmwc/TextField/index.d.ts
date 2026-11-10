import type { MDCTextFieldFoundation } from '@material/textfield';
import type { InputReference, TextFieldProperties } from '../../type';
export declare const CSS_CLASS_NAMES: Record<string, string>;
export interface Reference extends InputReference {
    foundation: MDCTextFieldFoundation | null;
    input: HTMLInputElement | null;
}
export declare const TextField: import("react").ForwardRefExoticComponent<Omit<TextFieldProperties, "ref"> & import("react").RefAttributes<InputReference>>;
export default TextField;
