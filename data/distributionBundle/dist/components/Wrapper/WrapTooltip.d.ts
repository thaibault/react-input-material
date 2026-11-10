import type { FunctionComponent, ReactElement } from 'react';
import type { Properties } from '../../type';
export declare const isDummy: boolean;
/**
 * Wraps given component with a tooltip component with given tooltip
 * configuration.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.value - Tooltip value.
 * @returns Wrapped given content.
 */
export declare const WrapTooltip: FunctionComponent<{
    children: ReactElement;
    value?: Properties['tooltip'] | null;
}>;
export default WrapTooltip;
