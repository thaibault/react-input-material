import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'
import {TextField as RMWCTextField} from '@rmwc/textfield'
import {IconPropT} from '@rmwc/types'

import React, {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {InputReference, TextFieldProperties} from '../type'

export interface Reference extends InputReference {
    foundation: RefObject<MDCTextFieldFoundation | null>
    input: RefObject<HTMLInputElement | null>
}

export const TextField = forwardRef((
    properties: TextFieldProperties, reference?: ForwardedRef<InputReference>
): ReactElement => {
    const baseReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)
    const foundationReference: RefObject<MDCTextFieldFoundation | null> =
        useRef<MDCTextFieldFoundation>(null)
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
        <RMWCTextField
            characterCount={
                typeof properties.maximumLength === 'number' &&
                !isNaN(properties.maximumLength) &&
                properties.maximumLength >= 0
            }

            label={properties.name}
            placeholder={properties.placeholder}

            ref={baseReference}
            foundationRef={foundationReference}
            inputRef={inputReference}

            onChange={properties.onChange}
            ripple
            rootProps={{
                name: properties.name,
                onClick: properties.onClick,
                onKeyUp: properties.onKeyUp,
                /*
                    NOTE: Disabled input fields are not focusable via keyboard
                    which makes them unreachable for blind people using e.g.
                    screen readers. That's wgy the label gets a tabindex to
                    make the input focusable.
                */
                tabIndex: properties.disabled ? '0' : '-1',
                ...properties.elementProperties
            }}

            icon={properties.leadingIcon as IconPropT}
            trailingIcon={properties.trailingIcon as IconPropT}

            type={properties.type}
            value={properties.value}
        />
    </div>
})

export default TextField
