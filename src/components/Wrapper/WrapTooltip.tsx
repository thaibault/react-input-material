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

import Tooltip from '#implementations/Tooltip'

import {Properties} from '../../type'
// endregion
export const isDummy: boolean =
    !(Tooltip as typeof Tooltip | undefined) ||
    Boolean((Tooltip as unknown as Partial<typeof Dummy>).isDummy)
/**
 * Wraps given component with a tooltip component with given tooltip
 * configuration.
 * @param properties - Component provided properties.
 * @param properties.children - Component or string to wrap.
 * @param properties.value - Tooltip value.
 * @returns Wrapped given content.
 */
export const WrapTooltip: FunctionComponent<{
    children: ReactElement
    value?: Properties['tooltip'] | null
}> = ({children, value}): ReactElement => {
    if (typeof value === 'string')
        return <Tooltip value={value}>{children}</Tooltip>

    return <>{children}</>
}

export default WrapTooltip
