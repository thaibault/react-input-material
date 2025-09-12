import {Theme} from '@rmwc/theme'
import {
    ForwardRefRenderFunction,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'

import {ErrorProperties} from '../../type'

export const Error = function(
    properties: ErrorProperties, reference?: RefObject<unknown>
): ReactElement {
    return <Theme
        ref={reference as RefObject<HTMLDivElement | null>}
        use="error"
    >{properties.children}</Theme>
} as ForwardRefRenderFunction<RefObject<unknown>, ErrorProperties>

export default Error
