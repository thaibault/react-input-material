import React from 'react';
import * as RMWC from '@rmwc/types';
declare type TooltipActivationT = 'hover' | 'click' | 'focus';
declare type TooltipAlignT = 'left' | 'right' | 'top' | 'bottom' | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';
declare type TooltipOptions = {
    /** How to align the tooltip. Defaults to `top`. */
    align?: TooltipAlignT;
    /** Activate the tooltip through one or more interactions. Defaults to `['hover', 'focus']`. */
    activateOn?: TooltipActivationT | TooltipActivationT[];
    /** Whether or not to show an arrow on the Tooltip. Defaults to `false`. */
    showArrow?: boolean;
    /** Delay in milliseconds before showing the tooltip when interacting via touch or mouse. */
    enterDelay?: number;
    /** Delay in milliseconds before hiding the tooltip when interacting via touch or mouse. */
    leaveDelay?: number;
};
declare type TypographyOptions = {
    defaultTag?: string | React.ComponentType<any>;
    headline1?: string | React.ComponentType<any>;
    headline2?: string | React.ComponentType<any>;
    headline3?: string | React.ComponentType<any>;
    headline4?: string | React.ComponentType<any>;
    headline5?: string | React.ComponentType<any>;
    headline6?: string | React.ComponentType<any>;
    subtitle1?: string | React.ComponentType<any>;
    subtitle2?: string | React.ComponentType<any>;
    body1?: string | React.ComponentType<any>;
    body2?: string | React.ComponentType<any>;
    caption?: string | React.ComponentType<any>;
    button?: string | React.ComponentType<any>;
    overline?: string | React.ComponentType<any>;
};
/** A provider for setting global options in RMWC. */
export interface RMWCProviderProps {
    /** Enable / Disable interaction ripples globally */
    ripple?: boolean;
    /** Global options for icons */
    icon?: Partial<RMWC.IconOptions>;
    /** Global tooltip options */
    tooltip?: Partial<TooltipOptions>;
    /** Global typography options */
    typography?: Partial<TypographyOptions>;
    /** Children to render */
    children?: React.ReactNode;
}
export declare const ProviderContext: React.Context<RMWCProviderProps>;
export declare const useProviderContext: () => RMWCProviderProps;
/** A provider for setting global options in RMWC. */
export declare const RMWCProvider: ({ children, ...rest }: RMWCProviderProps) => JSX.Element;
export {};
