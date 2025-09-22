// -*- coding: utf-8 -*-
/** @module Menu */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {MDCMenuFoundation} from '@material/menu'
import {
    Menu as RMWCMenu,
    MenuApi,
    MenuItem,
    MenuSurface,
    MenuSurfaceAnchor,
    MenuProps as RMWCMenuProps
} from '@rmwc/menu'
import React, {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import CircularProgress from './CircularProgress'

import {MenuProperties, MenuReference} from '../type'
// endregion
export interface Reference extends MenuReference {
    surfaceAnchor: RefObject<HTMLDivElement | null>
    suggestionMenuAPI: RefObject<MenuApi | null>
    suggestionMenuFoundation: RefObject<MDCMenuFoundation | null>
}

export const MenuInner = function(
    properties: MenuProperties, reference?: ForwardedRef<MenuReference | null>
): ReactElement {
    const surfaceAnchorReference = useRef<HTMLDivElement | null>(null)
    const suggestionMenuAPIReference = useRef<MenuApi>(null)
    const suggestionMenuFoundationReference = useRef<MDCMenuFoundation>(null)

    useImperativeHandle(
        reference,
        () => ({
            surfaceAnchor: surfaceAnchorReference,
            suggestionMenuAPI: suggestionMenuAPIReference,
            suggestionMenuFoundation: suggestionMenuFoundationReference,
            focusItem: (index: number) => {
                suggestionMenuAPIReference.current?.focusItemAtIndex(index)
            }
        })
    )

    return <MenuSurfaceAnchor
        ref={surfaceAnchorReference}
        onKeyDown={properties.onKeyDown}
    >
        {properties.pending ?
            <MenuSurface
                anchorCorner="bottomLeft"
                className={
                    (properties.classNames ?? [])
                        .concat(properties.pendingClassNames ?? [])
                        .join(' ')
                }
                open
            >
                <CircularProgress size="large" />
            </MenuSurface> :
            <RMWCMenu
                anchorCorner="bottomLeft"

                apiRef={(instance: MenuApi | null) => {
                    // @ts-expect-error rmwc used old ref assigning way here.
                    suggestionMenuAPIReference.current = instance
                }}
                className={properties.classNames?.join(' ')}

                focusOnOpen={false}
                foundationRef={suggestionMenuFoundationReference}
                onFocus={properties.onFocus}
                onSelect={properties.onSelect as RMWCMenuProps['onSelect']}
                open={properties.open}
            >{properties.options.map((item, index: number) =>
                <MenuItem
                    className={properties.itemClassNames?.join(' ')}
                    key={index}
                >{item}</MenuItem>
            )}</RMWCMenu>
        }
    </MenuSurfaceAnchor>
}
export const Menu = memorize(forwardRef(MenuInner)) as typeof MenuInner

export default Menu
