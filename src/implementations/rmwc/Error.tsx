import {Theme} from '@rmwc/theme'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'

import {ErrorProperties} from '../type'

export const Error = forwardRef((
    {children}: ErrorProperties, reference?: ForwardedRef<unknown>
): ReactElement =>
    <Theme ref={reference as RefObject<HTMLDivElement | null>} use="error">
        {children}
    </Theme>
)

export default Error
