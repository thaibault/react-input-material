// -*- coding: utf-8 -*-
/** @module TextField */
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
import {MDCTextFieldFoundation} from '@material/textfield'
import {TextField as RMWCTextField} from '@rmwc/textfield'

import {Mapping} from 'clientnode'
import React, {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'
import {useMemorizedValue} from 'react-generic-tools'

import {InputReference, TextFieldProperties} from '../../type'
import Icon from '../Icon'

import cssClassNames from './style.module'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping

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

    // NOTE: Character count is only supported if maximum length is given.
    const isMaximumLength =
        typeof properties.maximumLength === 'number' &&
        !isNaN(properties.maximumLength) &&
        properties.maximumLength !== Infinity &&
        properties.maximumLength >= 0

    return <div
        className={properties.classNames?.join(' ')}
        style={properties.styles}
    >
        <RMWCTextField
            characterCount={properties.characterCount && isMaximumLength}

            disabled={properties.disabled}
            invalid={properties.invalid}

            label={properties.label}
            name={properties.name}
            placeholder={properties.placeholder}

            helpText={properties.helpText}

            maxLength={isMaximumLength ? properties.maximumLength : undefined}

            ref={baseReference}
            foundationRef={foundationReference}
            inputRef={inputReference}

            onChange={properties.onChange}
            ripple
            rootProps={useMemorizedValue(
                {
                    name: properties.name,
                    onClick: properties.onClick,
                    onKeyUp: properties.onKeyUp,
                    /*
                        NOTE: Disabled input fields are not focusable via
                        keyboard which makes them unreachable for blind people
                        using e.g. screen readers. That's wgy the label gets a
                        tabindex to make the input focusable.
                    */
                    'tab-index': properties.disabled ? '0' : '-1',
                    ...properties.domNodeProperties
                },
                properties.name,
                properties.onClick,
                properties.onKeyUp,
                properties.domNodeProperties
            )}

            icon={properties.leadingIcon ?
                typeof properties.leadingIcon === 'string' ?
                    properties.leadingIcon :
                    <Icon {...properties.leadingIcon} /> :
                undefined
            }
            trailingIcon={properties.trailingIcon ?
                typeof properties.trailingIcon === 'string' ?
                    properties.trailingIcon :
                    <Icon {...properties.trailingIcon} /> :
                undefined
            }

            type={properties.type}
            value={properties.value}

            {...properties.componentProperties}
        />
    </div>
})

export default TextField
