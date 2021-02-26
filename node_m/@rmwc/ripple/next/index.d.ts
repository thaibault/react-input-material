import * as RMWC from '@rmwc/types';
import React from 'react';
import { MDCRippleFoundation } from '@material/ripple';
export interface RippleSurfaceProps {
    className: string;
    style: React.CSSProperties;
}
/** A component for adding Ripples to other components. */
export interface RippleProps {
    /** Makes the ripple unbounded */
    unbounded?: boolean;
    /** Makes the ripple primary */
    primary?: boolean;
    /** Makes the ripple an accent color*/
    accent?: boolean;
    /** makes the ripple disabled */
    disabled?: boolean;
    /** For internal use */
    surface?: boolean;
    /** Advanced: A reference to the MDCFoundation. */
    foundationRef?: React.Ref<MDCRippleFoundation>;
}
export declare const Ripple: React.ComponentType<RippleProps & React.AllHTMLAttributes<HTMLElement> & React.ClassAttributes<HTMLElement> & {
    tag?: string | React.ComponentClass<any, any> | React.FunctionComponent<any> | undefined;
    theme?: RMWC.ThemePropT;
    ref?: string | ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement> | null | undefined;
} & {
    domNode?: Element | undefined;
} & {
    domNode?: Element | undefined;
}>;
export declare const RippleSurface: ({ className, ...rest }: React.HTMLAttributes<HTMLDivElement>) => JSX.Element;
interface WithRippleOpts {
    accent?: boolean;
    surface?: boolean;
    unbounded?: boolean;
}
/**
 * HOC that adds ripples to any component
 */
export declare const withRipple: ({ unbounded: defaultUnbounded, accent: defaultAccent, surface: defaultSurface }?: WithRippleOpts) => <P extends unknown, C extends React.ComponentType<P>>(Component: C) => C;
export {};
