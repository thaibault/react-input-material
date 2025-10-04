// -*- coding: utf-8 -*-
/** @module IconButton */
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
import {MDCIconButtonToggleFoundation} from '@material/icon-button'
import {
    IconButton as RMWCIconButton, IconButtonOnChangeEventT
} from '@rmwc/icon-button'
import {IconSizeT} from '@rmwc/types'

import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'
import {useMemorizedValue} from 'react-generic-tools'

import {IconButtonProperties} from '../type'
// endregion
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

    const size = properties.size?.replace('extra-small', 'xsmall')
        .replace('extra-large', 'xlarge') as
        IconSizeT

    const fallbackComponentProperties = useMemorizedValue({})

    return <RMWCIconButton
        checked={properties.value}
        disabled={properties.disabled}

        className={properties.classNames?.join(' ')}
        style={properties.styles}

        icon={useMemorizedValue(
            {
                icon: properties.icon,
                size,
                strategy: properties.strategy
            },
            properties.icon,
            size,
            properties.strategy
        )}
        onIcon={useMemorizedValue(
            {
                icon: properties.onIcon || properties.icon,
                size,
                strategy: properties.strategy
            },
            properties.onIcon,
            properties.icon,
            size,
            properties.strategy
        )}

        onClick={properties.onClick}
        onChange={
            properties.onChange as
                unknown as
                ((event: IconButtonOnChangeEventT) => void)
        }

        ref={baseReference}
        foundationRef={foundationReference}

        {...properties.componentProperties ?? fallbackComponentProperties}
    />
})

export default IconButton
