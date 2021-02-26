import * as RMWC from '@rmwc/types';
import React from 'react';
/*********************************************************************
 * Button
 *********************************************************************/
/**
 * The Button component.
 */
export interface ButtonProps extends RMWC.WithRippleProps {
    /** Make the Button dense. */
    dense?: boolean;
    /** Make the Button raised. */
    raised?: boolean;
    /** Make the button unelevated. */
    unelevated?: boolean;
    /** Make the button outlined. */
    outlined?: boolean;
    /** Make the button disabled */
    disabled?: boolean;
    /** Used to indicate a dangerous action. */
    danger?: boolean;
    /** Content specified as a label prop. */
    label?: React.ReactNode | any;
    /** Content specified as children. */
    children?: React.ReactNode;
    /** An Icon for the Button */
    icon?: RMWC.IconPropT;
    /** A trailing icon for the Button */
    trailingIcon?: RMWC.IconPropT;
}
export declare type ButtonHTMLProps = RMWC.HTMLProps<HTMLButtonElement>;
/**
 * The Button component.
 */
export declare const Button: RMWC.ComponentType<ButtonProps, ButtonHTMLProps, 'button'>;
