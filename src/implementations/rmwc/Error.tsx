import {Theme} from '@rmwc/theme'
import {ForwardedRef, forwardRef, ReactElement} from 'react'

import {ErrorProperties} from '../type'

export const Error = forwardRef((
    {children}: ErrorProperties,
    reference?: ForwardedRef<HTMLDivElement | null>
): ReactElement =>
    <Theme ref={reference} use="error">{children}</Theme>
)

export default Error
