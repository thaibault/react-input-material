// -*- coding: utf-8 -*-
/** @module Select */
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
import {MDCSelectFoundation} from '@material/select'
import {OptionsType, Select as RMWCSelect} from '@rmwc/select'

import {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'
import {useMemorizedValue} from 'react-generic-tools'

import {InputReference, SelectProperties} from '../../type'
// endregion
export const SelectInner = function<Type = unknown>(
    properties: SelectProperties<Type>,
    reference?: ForwardedRef<InputReference>
): ReactElement {
    const baseReference = useRef<HTMLSelectElement>(null)
    const foundationReference = useRef<MDCSelectFoundation>(null)
    const inputReference = useRef<HTMLSelectElement>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        })
    )

    return <RMWCSelect
        disabled={properties.disabled}
        invalid={properties.invalid}

        rootProps={useMemorizedValue(
            {
                name: properties.name,
                onClick: properties.onClick,
                ...properties.domNodeProperties
            },
            properties.name,
            properties.onClick,
            properties.domNodeProperties
        )}

        enhanced

        ref={baseReference}
        foundationRef={foundationReference}
        inputRef={inputReference as
            unknown as
            (reference: HTMLSelectElement | null) => void
        }

        onChange={properties.onChange}
        onKeyDown={properties.onKeyDown}

        options={properties.options as OptionsType}

        value={String(properties.value)}

        label={properties.label as string}

        {...properties.componentProperties}
    />
}
export const Select = memorize(forwardRef(SelectInner)) as typeof SelectInner

export default Select
