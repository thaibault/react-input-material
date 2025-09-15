import {
    CircularProgress as RMWCCircularProgress
} from '@rmwc/circular-progress'
import {IconSizeT} from '@rmwc/types'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'

import {CircularProgressProperties} from '../type'

export const CircularProgress = forwardRef((
    {size}: CircularProgressProperties, reference?: ForwardedRef<unknown>
): ReactElement =>
    <RMWCCircularProgress
        ref={reference as RefObject<HTMLDivElement | null>}
        size={
            size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT
        }
    />
)

export default CircularProgress
