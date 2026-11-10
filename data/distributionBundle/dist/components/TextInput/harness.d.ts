import type { Locator } from 'playwright-core';
export declare const textInput: (parent: Locator) => {
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
export default textInput;
