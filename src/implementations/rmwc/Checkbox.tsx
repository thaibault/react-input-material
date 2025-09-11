import {Checkbox as RMWCCheckbox} from '@rmwc/checkbox'
import {
    ForwardRefRenderFunction,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {CheckboxProperties} from '../../type'
import {MDCCheckboxFoundation} from '@material/checkbox'

export const Checkbox = function(
    properties: CheckboxProperties, reference?: RefObject<unknown>
): ReactElement {
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

    return <RMWCCheckbox
        checked={properties.value}
        disabled={properties.disabled}

        id={properties.name}
        indeterminate={properties.indeterminate}

        name={properties.name}

        onBlur={properties.onBlur}
        onChange={properties.onChange}
        onClick={properties.onClick}
        onFocus={properties.onFocus}

        ripple={true}
        value={String(properties.value as unknown)}

        ref={baseReference}
        inputRef={inputReference}
        foundationRef={foundationReference}
    />
} as ForwardRefRenderFunction<RefObject<unknown>, CheckboxProperties>

export default Checkbox
