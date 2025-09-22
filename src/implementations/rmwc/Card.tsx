// -*- coding: utf-8 -*-
/** @module Card */
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
import {
    Card as RMWCCard,
    CardActionButton,
    CardActionButtons,
    CardActions,
    CardMedia,
    CardPrimaryAction
} from '@rmwc/card'
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

import {CardProperties, CardReference} from '../type'
// endregion
export interface Reference extends CardReference {
}

export const CardInner = function(
    properties: CardProperties, reference?: ForwardedRef<CardReference | null>
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

    return <RMWCCard
        ref={surfaceAnchorReference}
    >

    </RMWCCard>
}
export const Card = memorize(forwardRef(CardInner)) as typeof CardInner

export default Card
