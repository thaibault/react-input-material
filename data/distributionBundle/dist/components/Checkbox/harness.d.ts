import type { Locator } from 'playwright-core';
export declare const checkboxInput: (parent: Locator) => {
    main: Locator;
    inputNode: Locator;
    check: (options?: {
        force?: boolean;
        noWaitAfter?: boolean;
        position?: {
            x: number;
            y: number;
        };
        scroll?: "auto" | "none";
        signal?: AbortSignal;
        timeout?: number;
        trial?: boolean;
    }) => Promise<void>;
    uncheck: (options?: {
        force?: boolean;
        noWaitAfter?: boolean;
        position?: {
            x: number;
            y: number;
        };
        scroll?: "auto" | "none";
        signal?: AbortSignal;
        timeout?: number;
        trial?: boolean;
    }) => Promise<void>;
    setChecked: (checked: boolean, options?: {
        force?: boolean;
        noWaitAfter?: boolean;
        position?: {
            x: number;
            y: number;
        };
        scroll?: "auto" | "none";
        signal?: AbortSignal;
        timeout?: number;
        trial?: boolean;
    }) => Promise<void>;
    isChecked: () => Promise<boolean>;
};
export default checkboxInput;
