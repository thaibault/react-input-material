import type { LanguageSupport } from '@codemirror/language';
import type { Extension } from '@codemirror/state';
import type { KeyBinding } from '@codemirror/view';
import type { EditorReference } from '../type';
import { EditorView } from '@codemirror/view';
export declare const BASIC_KEYMAPS: Array<KeyBinding>;
export declare const BASIC_EXTENSIONS: Extension;
export declare const CSS_CLASS_NAMES: Record<string, string>;
/**
 * Determines code language support for given mode name.
 * @param name - Mode name to determine language support for.
 * @returns Language support or "undefined" if not supported.
 */
export declare const determineMode: (name?: string) => LanguageSupport | undefined;
export interface Reference extends EditorReference {
    editorView: EditorView | null;
    editorViewReference: HTMLDivElement | null;
}
export declare const Index: import("react").ForwardRefExoticComponent<Omit<Partial<import("../type").CodeMirrorProperties>, "ref"> & import("react").RefAttributes<Reference>>;
export default Index;
