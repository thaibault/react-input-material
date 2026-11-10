import type { ForwardedRef, ReactElement } from 'react';
import type { MDCMenuFoundation } from '@material/menu';
import type { MenuApi } from '@rmwc/menu';
import type { MenuProperties, MenuReference } from '../type';
export interface Reference extends MenuReference {
    surfaceAnchor: HTMLDivElement | null;
    suggestionMenuAPI: MenuApi | null;
    suggestionMenuFoundation: MDCMenuFoundation | null;
}
export declare const MenuInner: (properties: MenuProperties, reference?: ForwardedRef<MenuReference | null>) => ReactElement;
export declare const Menu: typeof MenuInner;
export default Menu;
