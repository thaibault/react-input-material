import React from 'react';
import { MDCIconButtonToggleFoundation } from '@material/icon-button';
import { IconButtonProps } from '.';
export declare const useIconButtonFoundation: (props: IconButtonProps & React.HTMLProps<any>) => {
    rootEl: import("@rmwc/base").FoundationElement<any, HTMLElement>;
    isOn: boolean;
    foundation: MDCIconButtonToggleFoundation;
};
