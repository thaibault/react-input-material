import React from 'react';
export declare type PortalPropT = Element | string | boolean | undefined | null;
export declare function Portal(): JSX.Element;
export declare function PortalChild({ children, renderTo }: {
    children: React.ReactNode;
    renderTo?: PortalPropT;
}): JSX.Element;
