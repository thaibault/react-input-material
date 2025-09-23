// -*- coding: utf-8 -*-
/** @module Checkbox */
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
import {MDCCheckboxFoundation} from '@material/checkbox'
import {Checkbox as RMWCCheckbox} from '@rmwc/checkbox'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {CheckboxProperties, InputReference} from '../type'
// endregion
export const Checkbox = forwardRef((
    properties: CheckboxProperties, reference?: ForwardedRef<InputReference>
): ReactElement => {
    const baseReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)
    const foundationReference: RefObject<MDCCheckboxFoundation | null> =
        useRef<MDCCheckboxFoundation>(null)
    const inputReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        })
    )

    return <div
        className={properties.classNames?.join(' ')}
        style={properties.styles}
    >
        <RMWCCheckbox
            checked={properties.value}
            disabled={properties.disabled}

            id={properties.name}
            indeterminate={properties.indeterminate}

            name={properties.name}

            onBlur={properties.onBlur}
            onChange={properties.onChange}
            onClick={properties.onClick}
            onFocus={properties.onFocus}

            value={String(properties.value as unknown)}

            ref={baseReference}
            inputRef={inputReference}
            foundationRef={foundationReference}

            {...properties.componentProperties}
        >{properties.children}</RMWCCheckbox>
    </div>
})

export default Checkbox
