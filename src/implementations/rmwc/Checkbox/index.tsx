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
    ForwardedRef, forwardRef, ReactElement, useImperativeHandle
} from 'react'
import {useReferenceState} from 'react-generic-tools'

import {CheckboxProperties, InputReference} from '../../type'
import cssClassNames from './style.module'
// endregion
const CSS_CLASS_NAMES = cssClassNames

export const Checkbox = forwardRef((
    properties: CheckboxProperties, reference?: ForwardedRef<InputReference>
): ReactElement => {
    const [baseReference, setBaseReference] =
        useReferenceState<HTMLInputElement | null>(null)
    const [foundationReference, setFoundationReference] =
        useReferenceState<MDCCheckboxFoundation | null>(null)
    const [inputReference, setInputReference] =
        useReferenceState<HTMLInputElement | null>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        }),
        [baseReference, foundationReference, inputReference]
    )

    return <div
        className={
            [...(properties.classNames ?? [])]
                .concat(properties.invalid ?
                    CSS_CLASS_NAMES.checkboxInvalid :
                    []
                )
                .join(' ')
        }
        style={properties.styles}
    >
        <RMWCCheckbox
            checked={properties.value}
            disabled={properties.disabled}

            indeterminate={properties.indeterminate}

            aria-invalid={properties.invalid ? true : undefined}

            id={properties.id}
            name={properties.name}

            onBlur={properties.onBlur}
            onChange={properties.onChange}
            onClick={properties.onClick}
            onFocus={properties.onFocus}

            value={String(properties.value as unknown)}

            ref={setBaseReference}
            foundationRef={setFoundationReference}
            inputRef={setInputReference}

            {...properties.componentProperties}
        >{properties.children}</RMWCCheckbox>
    </div>
})

export default Checkbox
