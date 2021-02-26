import React from 'react';
import { RippleProps } from './';
export declare const useRippleFoundation: (props: RippleProps & React.HTMLProps<any> & {
    domNode?: Element;
}) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    surfaceEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
};
