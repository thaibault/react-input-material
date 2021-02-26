/**
 * A helper for when we have multiple requestion animation frames
 * Usage:
 *  raf(() => doSomething, 3);
 */
export declare const raf: (callback: () => void, frames?: number, _iteration?: number) => void;
