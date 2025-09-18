import {Icon as RMWCIcon} from '@rmwc/icon'
import {IconSizeT} from '@rmwc/types'
import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {IconProperties} from '../type'
import {useMemorizedValue} from 'react-generic-tools'

export const Icon = forwardRef((
    properties: IconProperties, reference?: ForwardedRef<HTMLElement | null>
): ReactElement => {
    const fallbackElementProperties = useMemorizedValue({})

    return <RMWCIcon
        className={properties.classNames?.join(' ')}
        style={properties.styles}
        {...properties.elementProperties ?? fallbackElementProperties}

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
