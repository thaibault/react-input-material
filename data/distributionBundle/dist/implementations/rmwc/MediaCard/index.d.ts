import type { ForwardedRef, ReactElement } from 'react';
import type { MediaCardProperties, MediaCardReference } from '../../type';
export declare const CSS_CLASS_NAMES: Record<string, string>;
export declare const MediaCardInner: (properties: MediaCardProperties, reference?: ForwardedRef<MediaCardReference | null>) => ReactElement;
export declare const MediaCard: typeof MediaCardInner;
export default MediaCard;
