import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'
import {Icon as RMWCIcon} from '@rmwc/icon'

import {IconProperties} from '../../type'
import {IconSizeT} from '@rmwc/types'

export const Icon = forwardRef((
    properties: IconProperties, reference?: ForwardedRef<unknown>
): ReactElement =>
    <RMWCIcon
        className={properties.classNames?.join(' ')}
        style={properties.styles}
        {...properties.elementProperties}

        icon={{
            icon: properties.icon,
            size: properties.size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT,
            strategy: properties.strategy
        }}

        ref={reference as RefObject<HTMLElement> | null}
    />
)

export default Icon
