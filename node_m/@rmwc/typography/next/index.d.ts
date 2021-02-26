import * as RMWC from '@rmwc/types';
import React from 'react';
export declare type TypographyT = 'headline1' | 'headline2' | 'headline3' | 'headline4' | 'headline5' | 'headline6' | 'subtitle1' | 'subtitle2' | 'body1' | 'body2' | 'caption' | 'button' | 'overline';
/** The Typography Component */
export interface TypographyProps {
    /** The typography style.*/
    use: TypographyT;
}
export declare type TypographyHTMLProps = RMWC.HTMLProps<HTMLElement>;
/** The Typography Component */
export declare const Typography: {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<TypographyProps, RMWC.HTMLProps<HTMLElement, React.AllHTMLAttributes<HTMLElement>>, Tag>, ref: any): JSX.Element;
    displayName: string;
};
