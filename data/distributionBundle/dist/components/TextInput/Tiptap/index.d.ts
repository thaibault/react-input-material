import type { EditorReference } from '../type';
export declare const CSS_CLASS_NAMES: Record<string, string>;
export declare const VIEW_CONTENT_OFFSET_IN_PX = 8;
export interface Reference extends EditorReference {
    editorViewReference: HTMLDivElement | null;
}
export declare const Index: import("react").ForwardRefExoticComponent<Omit<Partial<import("../type").TiptapProperties>, "ref"> & import("react").RefAttributes<Reference>>;
export default Index;
