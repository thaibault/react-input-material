import {MDCSelectFoundation} from '@material/select'
import {OptionsType, Select as RMWCSelect} from '@rmwc/select'
import {
    ForwardedRef,
    forwardRef, memo as memorize,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {InputReference, SelectProperties} from '../type'
import {useMemorizedValue} from 'react-generic-tools'

export const SelectInner = function<Type = unknown>(
    properties: SelectProperties<Type>,
    reference?: ForwardedRef<InputReference>
): ReactElement {
    const baseReference: RefObject<HTMLSelectElement | null> =
        useRef<HTMLSelectElement>(null)
    const foundationReference: RefObject<MDCSelectFoundation | null> =
        useRef<MDCSelectFoundation>(null)
    const inputReference: RefObject<HTMLSelectElement | null> =
        useRef<HTMLSelectElement>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        })
    )

    return <RMWCSelect
        rootProps={useMemorizedValue(
            {
                name: properties.name,
                onClick: properties.onClick,
                ...properties.elementProperties
            },
            properties.name,
            properties.onClick,
            properties.elementProperties
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
    />
}
export const Select =
    memorize(forwardRef(SelectInner)) as typeof SelectInner

export default Select
