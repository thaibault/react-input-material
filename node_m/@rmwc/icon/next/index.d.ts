import * as RMWC from '@rmwc/types';
import React from 'react';
/** An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info. */
export interface IconProps {
    /** The icon to use. This can be a string for a font icon, a url, or whatever the selected strategy needs. */
    icon?: RMWC.IconPropT;
}
export declare type IconHTMLProps = RMWC.HTMLProps<HTMLElement>;
/**
 * Get the actual icon strategy to use
 */
export declare const getIconStrategy: (content: React.ReactNode, strategy: string | null, providerStrategy: string | null) => string;
/** An Icon component. Most of these options can be set once globally, read the documentation on Provider for more info. */
export declare const Icon: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<IconProps, RMWC.HTMLProps<HTMLElement, React.AllHTMLAttributes<HTMLElement>>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
