import type { FunctionComponent, ReactNode } from 'react';
/**
 * Generic strict wrapper component.
 * @param properties - Provided component properties.
 * @param properties.children - Components to wrap.
 * @param properties.strict - Indicates whether to wrap with strict indicating
 * component.
 * @returns React component.
 */
export declare const WrapStrict: FunctionComponent<{
    children: ReactNode;
    strict: boolean;
}>;
export default WrapStrict;
