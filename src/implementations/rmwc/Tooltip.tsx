// -*- coding: utf-8 -*-
/** @module Tooltip */
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
import {Tooltip as RMWCTooltip} from '@rmwc/tooltip'
import {Typography} from '@rmwc/typography'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'
import Dummy from 'react-generic-dummy'

import {TooltipProperties} from '../type'
// endregion
export const isDummy: boolean =
    !(RMWCTooltip as typeof Tooltip | undefined) ||
    Boolean((RMWCTooltip as unknown as Partial<typeof Dummy>).isDummy)

export const Tooltip = forwardRef((
    properties: TooltipProperties, reference?: ForwardedRef<unknown>
): ReactElement => {
    if (isDummy)
        return <div
            className="generic-tooltip"
            ref={reference as RefObject<HTMLDivElement>}
            title={properties.value}
        >{properties.children}</div>

    return <RMWCTooltip
        overlay={<Typography use="caption">{properties.value}</Typography>}
        ref={reference as RefObject<HTMLDivElement> | null}
        {...properties.componentProperties}
    >
        <div className="generic-tooltip">{properties.children}</div>
    </RMWCTooltip>
})

export default Tooltip
