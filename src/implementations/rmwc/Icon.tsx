// -*- coding: utf-8 -*-
/** @module Icon */
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
import {Icon as RMWCIcon} from '@rmwc/icon'
import {IconSizeT} from '@rmwc/types'
import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {IconProperties} from '../type'
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
