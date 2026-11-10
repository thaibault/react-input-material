import type { ForwardedRef, ReactElement } from 'react';
import type { InputReference, SelectProperties } from '../../type';
export declare const SelectInner: <Type = unknown>(properties: SelectProperties<Type>, reference?: ForwardedRef<InputReference>) => ReactElement;
export declare const Select: typeof SelectInner;
export default Select;
