// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module WrapTooltip */
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
import {FunctionComponent, ReactElement} from 'react'
import Dummy from 'react-generic-dummy'
import {Typography} from '@rmwc/typography'
import {Tooltip} from '@rmwc/tooltip'

import {Properties} from '../type'
// endregion
export const isDummy: boolean =
    !(Tooltip as typeof Tooltip | undefined) ||
    Boolean((Tooltip as unknown as Partial<typeof Dummy>).isDummy)
/**
 * Wraps given component with a tooltip component with given tooltip
 * configuration.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.options - Tooltip options.
 * @returns Wrapped given content.
 */
export const WrapTooltip: FunctionComponent<{
    children: ReactElement
    options?: Properties['tooltip'] | null
}> = ({children, options}): ReactElement => {
    if (typeof options === 'string') {
        if (isDummy)
            return <div className="generic-tooltip" title={options}>
                {children}
            </div>

        return <Tooltip
            overlay={<Typography use="caption">{options}</Typography>}
        >
            <div className="generic-tooltip">{children}</div>
        </Tooltip>
    }

    if (options !== null && typeof options === 'object') {
        if (typeof options.overlay === 'string') {
            if (isDummy)
                return <div
                    className="generic-tooltip" title={options.overlay}
                >
                    {children}
                </div>

            options = {
                ...options,
                overlay: <Typography use="caption">
                    {options.overlay}
                </Typography>
            }
        }

        if (isDummy)
            return <div className="generic-tooltip">{children}</div>

        return <Tooltip {...options}>
            <div className="generic-tooltip">{children}</div>
        </Tooltip>
    }

    return <>{children}</>
}

export default WrapTooltip
