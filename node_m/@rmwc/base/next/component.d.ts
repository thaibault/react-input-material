import * as RMWC from '@rmwc/types';
import React from 'react';
declare type ClassNamesInputT<Props> = undefined | ((props: Props) => Array<string | undefined | null | {
    [className: string]: boolean | undefined | string | number;
}>) | string[] | Array<string | undefined | null | {
    [className: string]: boolean | undefined | string | number;
}>;
export declare const Tag: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
export declare const useClassNames: <Props extends {
    [key: string]: any;
}>(props: Props, classNames: ClassNamesInputT<Props>) => string;
export declare const mergeRefs: (...refs: Array<React.Ref<any> | undefined | null>) => (el: any) => void;
export declare const handleRef: <T extends unknown>(ref: ((instance: T | null) => void) | React.RefObject<T> | null | undefined, value: T) => void;
export declare function createComponent<P extends {}, ElementP extends {} = React.HTMLProps<HTMLElement>>(Component: React.RefForwardingComponent<any, P & ElementP>): {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<P, ElementP, Tag>, ref: any): JSX.Element;
    displayName: string;
};
export declare function createMemoComponent<P extends {}, ElementP extends {} = React.HTMLProps<HTMLDivElement>>(Component: React.RefForwardingComponent<any, P & ElementP>): {
    <Tag extends React.ElementType<any> = "div">(props: RMWC.ComponentProps<P, ElementP, Tag>, ref: any): JSX.Element;
    displayName: string;
};
export {};
