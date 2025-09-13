import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'
import {MDCIconButtonToggleFoundation} from '@material/icon-button'
import {IconButton as RMWCIconButton} from '@rmwc/icon-button'

import {IconButtonProperties} from '../../type'
import {IconSizeT} from '@rmwc/types'
import {IconButtonOnChangeEventT} from '@rmwc/icon-button/lib/icon-button'

export const IconButton = forwardRef((
    properties: IconButtonProperties, reference?: ForwardedRef<unknown>
): ReactElement => {
    const baseReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)
    const foundationReference: RefObject<MDCIconButtonToggleFoundation | null> =
        useRef<MDCIconButtonToggleFoundation>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference
        })
    )

    return <RMWCIconButton
        checked={properties.value}
        disabled={properties.disabled}

        className={properties.classNames?.join(' ')}
        style={properties.styles}

        icon={{
            icon: properties.icon,
            size: properties.size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT
        }}
        onIcon={{
            icon: properties.onIcon || properties.icon,
            size: properties.size?.replace('extra-small', 'xsmall')
                .replace('extra-large', 'xlarge') as
                    IconSizeT
        }}
        label={properties.ariaLabel}

        onClick={properties.onClick}
        onChange={
            properties.onChange as
                unknown as
                ((event: IconButtonOnChangeEventT) => void)
        }

        ref={baseReference}
        foundationRef={foundationReference}
    />
})

export default IconButton
