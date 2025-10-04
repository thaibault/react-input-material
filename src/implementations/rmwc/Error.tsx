// -*- coding: utf-8 -*-
/** @module Error */
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
import {Theme} from '@rmwc/theme'

import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {ErrorProperties} from '../type'
// endregion
export const Error = forwardRef((
    {children, applyToChildren}: ErrorProperties,
    reference?: ForwardedRef<HTMLDivElement | null>
): ReactElement =>
    <Theme ref={reference} use="error" wrap={applyToChildren}>
        {children}
    </Theme>
)

export default Error
