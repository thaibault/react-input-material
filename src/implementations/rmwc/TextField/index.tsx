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

import {
    ForwardedRef, forwardRef, ReactElement, useImperativeHandle
} from 'react'
import {useMemorizedValue, useReferenceState} from 'react-generic-tools'

import {InputReference, TextFieldProperties} from '../../type'
import Icon from '../Icon'

import cssClassNames from './style.module'
// endregion
export const CSS_CLASS_NAMES = cssClassNames

export interface Reference extends InputReference {
    foundation: MDCTextFieldFoundation | null
    input: HTMLInputElement | null
}

export const TextField = forwardRef((
    properties: TextFieldProperties, reference?: ForwardedRef<InputReference>
): ReactElement => {
    const [baseReference, setBaseReference] =
        useReferenceState<HTMLInputElement | null>(null)
    const [foundationReference, setFoundationReference] =
        useReferenceState<MDCTextFieldFoundation | null>(null)
    const [inputReference, setInputReference] =
        useReferenceState<HTMLInputElement | HTMLTextAreaElement | null>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        }),
        [baseReference, foundationReference, inputReference]
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

            ref={setBaseReference}
            foundationRef={setFoundationReference}
            inputRef={setInputReference}

            onChange={properties.onChange}
            ripple
            rootProps={useMemorizedValue(
                {
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
// NOTE: We need to refer classes to avoid loosing them due to tree shacking.
;(TextField as unknown as Mapping<unknown>).CSS_CLASS_NAMES = CSS_CLASS_NAMES

export default TextField
