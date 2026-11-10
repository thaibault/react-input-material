import type { Locator } from 'playwright-core';
export declare const inputsInput: (parent: Locator) => {
    main: Locator;
    items: Locator;
    removeButtons: Locator;
    addButton: Locator;
    add: () => Promise<void>;
    remove: (index?: number) => Promise<void>;
    removeAll: () => Promise<void>;
};
export default inputsInput;
