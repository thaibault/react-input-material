import {Tooltip as RMWCTooltip} from '@rmwc/tooltip'
import {Typography} from '@rmwc/typography'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement
} from 'react'
import Dummy from 'react-generic-dummy'

import {TooltipProperties} from '../type'

export const isDummy: boolean =
    !(RMWCTooltip as typeof Tooltip | undefined) ||
    Boolean((RMWCTooltip as unknown as Partial<typeof Dummy>).isDummy)

export const Tooltip = forwardRef((
    {children, value}: TooltipProperties, reference?: ForwardedRef<unknown>
): ReactElement => {
    if (isDummy)
        return <div
            className="generic-tooltip"
            ref={reference as RefObject<HTMLDivElement>}
            title={value}
        >{children}</div>

    return <RMWCTooltip
        overlay={<Typography use="caption">{value}</Typography>}
        ref={reference as RefObject<HTMLDivElement> | null}
    >
        <div className="generic-tooltip">{children}</div>
    </RMWCTooltip>
})

export default Tooltip
