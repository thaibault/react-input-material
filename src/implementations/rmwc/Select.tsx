import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {SelectProperties} from '../../type'
import {Select as RMWCSelect} from '@rmwc/select'
import {MDCSelectFoundation} from '@material/select'
import {OptionsType} from '@rmwc/select/lib/select'

export const Select = forwardRef((
    properties: SelectProperties, reference?: ForwardedRef<unknown>
): ReactElement => {
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
        rootProps={{
            name: properties.name,
            onClick: properties.onClick,
            ...properties.elementProperties
        }}

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
    />
})

export default Select
