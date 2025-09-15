// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput */
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
import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'
import {TextFieldHelperTextProps} from '@rmwc/textfield/lib/textfield'

import {useEffect, useId, useRef} from 'react'

import {EditorWrapperProps} from '../type'
// endregion
export const Index = (properties: EditorWrapperProps) => {
    const defaultID = useId()
    const id = properties.id ?? defaultID

    const materialTextField = useRef<MDCTextField | null>(null)
    const mdcTextFieldReference = useRef<HTMLLabelElement | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)

    /*
        The event mapper can be used by the consuming parent component to
        synchronize an instantiated editor with the native textarea element
        here.
    */
    properties.eventMapper.current = {
        blur: (event: object) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('blur') as
                    Event & { detail: object }
                syntheticEvent.detail = event
                textareaReference.current.dispatchEvent(syntheticEvent)
            }
        },
        focus: (event: object) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('focus') as
                    Event & { detail: object }
                syntheticEvent.detail = event
                textareaReference.current.dispatchEvent(syntheticEvent)
            }
        },
        input: (value: number | string, event: object) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('input') as
                    Event & { detail: object }
                syntheticEvent.detail = event

                textareaReference.current.value = String(value)
                textareaReference.current.dispatchEvent(syntheticEvent)
            }

            /*
                Since we do not operate on the native textarea element we need
                to make sure that we stay in focus state when do clearing the
                textarea's input value.
            */
            setTimeout(() => {
                materialTextField.current?.getDefaultFoundation()
                    .autoCompleteFocus()
            })
        }
    }

    useEffect(
        () => {
            if (mdcTextFieldReference.current) {
                materialTextField.current =
                    new MDCTextField(mdcTextFieldReference.current)
                if (properties.materialTextField)
                    properties.materialTextField.current = materialTextField.current

                if (properties.foundationRef)
                    (
                        properties.foundationRef as {
                            current: MDCTextFieldFoundation
                        }
                    ).current =
                        materialTextField.current.getDefaultFoundation()

                if (typeof properties.value === 'string')
                    materialTextField.current.value = properties.value
                if (typeof properties.disabled === 'boolean')
                    materialTextField.current.disabled = properties.disabled
                if (typeof properties.invalid === 'boolean')
                    materialTextField.current.valid = !properties.invalid
                if (typeof properties.required === 'boolean')
                    materialTextField.current.required = properties.required
                if (typeof properties.minLength === 'number')
                    materialTextField.current.minLength = properties.minLength
                if (typeof properties.maxLength === 'number')
                    materialTextField.current.maxLength = properties.maxLength

                materialTextField.current.useNativeValidation = false

                return () => {
                    materialTextField.current?.destroy()
                }
            }
        },
        [
            mdcTextFieldReference.current,

            properties.foundationRef,

            properties.value,
            properties.disabled,
            properties.invalid,
            properties.required,
            properties.minLength,
            properties.maxLength
        ]
    )

    for (const [target, source] of [
        [properties.textareaReference, textareaReference],
        [properties.mdcTextFieldReference, mdcTextFieldReference]
    ])
        useEffect(
            () => {
                if (target && source)
                    target.current = source.current
            },
            [target, source]
        )

    const editorContent = <>
        <textarea
            ref={textareaReference}

            className="mdc-text-field__input"
            style={{visibility: 'hidden', position: 'absolute'}}
            rows={properties.rows}

            aria-labelledby={`${id}-label`}
            aria-controls={`${id}-helper`}
            aria-describedby={`${id}-helper`}

            readOnly

            value={properties.value}

            minLength={properties.minLength}
            maxLength={properties.maxLength}
        ></textarea>

        {properties.children}

        {properties.barContentSlot ?
            <div className={`${properties.classNamePrefix}__bar`}>
                {properties.barContentSlot}

                {properties.characterCount ?
                    <div className="mdc-text-field-character-counter"></div> :
                    ''
                }
            </div> :
            properties.characterCount ?
                <div className="mdc-text-field-character-counter"></div> :
                ''
        }
    </>

    const helpText: TextFieldHelperTextProps =
        typeof properties.helpText === 'object' ?
            properties.helpText as TextFieldHelperTextProps :
            {children: properties.helpText}

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={(event) => {
                if (properties.onLabelClick)
                    properties.onLabelClick(event)
            }}
            className={[
                properties.classNamePrefix,
                'mdc-text-field',
                'mdc-text-field--textarea'
            ]
                .concat(properties.value === '' ?
                    'mdc-text-field--textarea' :
                    `${properties.classNamePrefix}--has-content`
                )
                .concat(properties.disabled ? 'mdc-text-field--disabled' : [])
                .concat(properties.outlined ?
                    'mdc-text-field--outlined' :
                    'mdc-text-field--filled'
                )
                .concat(
                    properties.characterCount ?
                        'mdc-text-field--with-internal-counter' :
                        []
                )
                .join(' ')}
        >
            {/*
                Optional:

                <span className="mdc-text-field__ripple"></span>
            */}
            <span className="mdc-floating-label" id={`${id}-label`}>
                {properties.label}
            </span>

            {properties.resizeable ?
                <span className="mdc-text-field__resizer">
                    {editorContent}
                </span> :
                editorContent
            }

            {/*
                Optional:

                <span className="mdc-line-ripple"></span>
            */}
        </label>
        {helpText.children ?
            <div className="mdc-text-field-helper-line">
                <div
                    className={['mdc-text-field-helper-text']
                        .concat(
                            helpText.persistent ?
                                'mdc-text-field-helper-text--persistent' :
                                []
                        )
                        .join(' ')
                    }
                    id={`${id}-helper`}
                >
                    {(
                        properties.helpText as TextFieldHelperTextProps | undefined
                    )?.children ?
                        (properties.helpText as TextFieldHelperTextProps).children :
                        properties.helpText as string
                    }
                </div>
            </div> :
            ''
        }
    </>
}

export default Index
