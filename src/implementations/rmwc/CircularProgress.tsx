// -*- coding: utf-8 -*-
/** @module CircularProgress */
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
    CircularProgress as RMWCCircularProgress
} from '@rmwc/circular-progress'
import {IconSizeT} from '@rmwc/types'

import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {CircularProgressProperties} from '../type'
// endregion
export const CircularProgress = forwardRef((
    {componentProperties, size}: CircularProgressProperties,
    reference?: ForwardedRef<HTMLDivElement | null>
): ReactElement =>
    <RMWCCircularProgress
        ref={reference}
        size={
            size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT
        }
        {...componentProperties}
    />
)

export default CircularProgress
