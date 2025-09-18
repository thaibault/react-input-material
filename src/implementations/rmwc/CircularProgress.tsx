import {
    CircularProgress as RMWCCircularProgress
} from '@rmwc/circular-progress'
import {IconSizeT} from '@rmwc/types'
import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {CircularProgressProperties} from '../type'

export const CircularProgress = forwardRef((
    {size}: CircularProgressProperties,
    reference?: ForwardedRef<HTMLDivElement | null>
): ReactElement =>
    <RMWCCircularProgress
        ref={reference}
        size={
            size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT
        }
    />
)

export default CircularProgress
