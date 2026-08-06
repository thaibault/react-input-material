// -*- coding: utf-8 -*-
/** @module Icon */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stands under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import type {ForwardedRef, ReactElement} from 'react'

import type {IconSizeT} from '@rmwc/types'

import type {IconProperties} from '../type'

import {Icon as RMWCIcon} from '@rmwc/icon'

import {forwardRef} from 'react'
import {useMemorizedValue} from 'react-generic-tools'
// endregion
export const Icon = forwardRef((
    properties: IconProperties, reference?: ForwardedRef<HTMLElement | null>
): ReactElement => {
    const fallbackComponentProperties = useMemorizedValue({})

    return <RMWCIcon
        className={properties.classNames?.join(' ')}
        style={properties.styles}
        {...properties.componentProperties ?? fallbackComponentProperties}

        onClick={properties.onClick}

        onKeyDown={properties.onKeyDown}
        onKeyUp={properties.onKeyUp}

        onFocus={properties.onFocus}
        onBlur={properties.onBlur}

        icon={useMemorizedValue(
            {
                icon: properties.icon,
                size: properties.size?.replace('extra-small', 'xsmall')
                    .replace('extra-large', 'xlarge') as
                        IconSizeT,
                strategy: properties.strategy
            },
            properties.icon,
            properties.size,
            properties.strategy
        )}

        ref={reference}
    />
})

export default Icon
