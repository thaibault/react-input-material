import type { Locator } from 'playwright-core';
export declare const intervalInput: (parent: Locator) => {
    main: Locator;
    startInput: {
        main: Locator;
        inputNode: Locator;
        richInputNode: Locator;
        activateCodeEditor: () => Promise<void>;
        activateRichtextEditor: () => Promise<void>;
        getOptions: () => Promise<string[]>;
        isMenuOpen: () => Promise<boolean>;
        fill: (valueRepresentation: string) => Promise<void>;
        inputValue: () => Promise<string | null>;
    };
    endInput: {
        main: Locator;
        inputNode: Locator;
        richInputNode: Locator;
        activateCodeEditor: () => Promise<void>;
        activateRichtextEditor: () => Promise<void>;
        getOptions: () => Promise<string[]>;
        isMenuOpen: () => Promise<boolean>;
        fill: (valueRepresentation: string) => Promise<void>;
        inputValue: () => Promise<string | null>;
    };
    fillStart: (valueRepresentation: string) => Promise<void>;
    startInputValue: () => Promise<string | null>;
    fillEnd: (valueRepresentation: string) => Promise<void>;
    endInputValue: () => Promise<string | null>;
    fill: (start: Date | number | string, end: Date | number | string) => Promise<void>;
};
export default intervalInput;
