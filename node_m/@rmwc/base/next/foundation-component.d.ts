import { SpecificEventListener } from '@material/base/types';
import React from 'react';
import { MDCFoundation } from '@material/base';
export declare class FoundationElement<Props extends {}, ElementType = HTMLElement> {
    private _classes;
    private _events;
    private _style;
    private _props;
    private _ref;
    _onChange: (() => void) | null;
    constructor(onChange: () => void);
    onChange(): void;
    destroy(): void;
    /**************************************************
     * Classes
     **************************************************/
    addClass(className: string): void;
    removeClass(className: string): void;
    hasClass(className: string): boolean;
    /**************************************************
     * Props
     **************************************************/
    setProp(propName: keyof Props, value: any, silent?: boolean): void;
    getProp(propName: keyof Props): Partial<Props>[keyof Props];
    removeProp(propName: keyof Props): void;
    props(propsToMerge: {
        [key: string]: any;
    }): any;
    /**************************************************
     * Styles
     **************************************************/
    setStyle(propertyName: string, value: number | string | null): void;
    /**************************************************
     * Events
     **************************************************/
    addEventListener(evtName: string, callback: SpecificEventListener<any>): void;
    removeEventListener(evtName: string, callback: SpecificEventListener<any>): void;
    /**************************************************
     * Refs
     **************************************************/
    setRef(el: any): void;
    get ref(): ElementType | null;
}
export declare const useFoundation: <Foundation extends MDCFoundation<any>, Elements extends {
    [key: string]: true;
}, Api extends (params: { [key in keyof Elements]: FoundationElement<Props, HTMLElement>; } & {
    foundation: any;
}) => any, Props extends {
    [key: string]: any;
    foundationRef?: ((instance: Foundation | null) => void) | React.RefObject<Foundation | null> | null | undefined;
    apiRef?: ((ref: ReturnType<Api> | null) => void) | undefined;
}>({ foundation: foundationFactory, props: inputProps, elements: elementsInput, api }: {
    foundation: (elements: { [key_1 in keyof Elements]: FoundationElement<Props, HTMLElement>; } & {
        getProps: () => Props;
        emit: (evtType: string, evtData: any, shouldBubble?: boolean | undefined) => CustomEvent<any>;
    }) => Foundation;
    props: Props;
    elements: Elements;
    api?: Api | undefined;
}) => {
    foundation: Foundation;
} & { [key_2 in keyof Elements]: FoundationElement<any, HTMLElement>; };
