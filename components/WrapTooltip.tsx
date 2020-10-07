// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-tooltip */
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
import React, {FunctionComponent, ReactElement} from 'react'
import {Typography} from '@rmwc/typography'
import {Tooltip} from '@rmwc/tooltip'

import {Properties} from '../type'
// endregion
/**
  * Wraps given component with a tooltip component with given tooltip
  * configuration.
  * @param children - Component or string to wrap.
  * @param options - Tooltip options.
  * @returns Wrapped given content.
 */
export const WrapTooltip:FunctionComponent<{
    children:ReactElement
    options?:Properties['tooltip']
}> = ({children, options}):ReactElement => {
    if (typeof options === 'string')
        return <Tooltip
            content={<Typography use="caption">{options}</Typography>}
        >{children}</Tooltip>
    if (options !== null && typeof options === 'object')
        return <Tooltip {...options}>
            <Typography use="caption">{children}</Typography>
        </Tooltip>
    return <>{children}</>
}
export default WrapTooltip
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
