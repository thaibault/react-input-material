import type { FirstParameter } from 'clientnode';
import type { FileChooser, Locator, Page } from 'playwright-core';
export declare const fileInput: (parent: Locator) => {
    main: Locator;
    inputNode: Locator;
    nameInput: {
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
    openFileChooser: () => Promise<void>;
    getFileChooser: (page: Page) => Promise<FileChooser>;
    fillFiles: (page: Page, files: FirstParameter<FileChooser['setFiles']>) => Promise<void>;
    getFiles: () => Promise<string>;
};
export default fileInput;
