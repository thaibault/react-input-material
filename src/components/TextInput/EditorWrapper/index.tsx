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
export const Index = (props: EditorWrapperProps) => {
    const defaultID = useId()
    const id = props.id ?? defaultID

    const materialTextField = useRef<MDCTextField | null>(null)
    const mdcTextFieldReference = useRef<HTMLLabelElement | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)

    props.eventMapper.current = {
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
                if (props.materialTextField)
                    props.materialTextField.current = materialTextField.current

                if (props.foundationRef)
                    (
                        props.foundationRef as {
                            current: MDCTextFieldFoundation
                        }
                    ).current =
                        materialTextField.current.getDefaultFoundation()

                if (typeof props.value === 'string')
                    materialTextField.current.value = props.value
                if (typeof props.disabled === 'boolean')
                    materialTextField.current.disabled = props.disabled
                if (typeof props.invalid === 'boolean')
                    materialTextField.current.valid = !props.invalid
                if (typeof props.required === 'boolean')
                    materialTextField.current.required = props.required
                if (typeof props.minLength === 'number')
                    materialTextField.current.minLength = props.minLength
                if (typeof props.maxLength === 'number')
                    materialTextField.current.maxLength = props.maxLength

                materialTextField.current.useNativeValidation = false

                return () => {
                    materialTextField.current?.destroy()
                }
            }
        },
        [
            mdcTextFieldReference.current,

            props.foundationRef,

            props.value,
            props.disabled,
            props.invalid,
            props.required,
            props.minLength,
            props.maxLength
        ]
    )

    for (const [target, source] of [
        [props.textareaReference, textareaReference],
        [props.mdcTextFieldReference, mdcTextFieldReference]
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
            rows={props.rows}

            aria-labelledby={`${id}-label`}
            aria-controls={`${id}-helper`}
            aria-describedby={`${id}-helper`}

            readOnly

            value={props.value}

            minLength={props.minLength}
            maxLength={props.maxLength}
        ></textarea>

        {props.children}

        {props.barContentSlot ?
            <div className={`${props.classNamePrefix}__bar`}>
                {props.barContentSlot}

                {props.characterCount ?
                    <div className="mdc-text-field-character-counter"></div> :
                    ''
                }
            </div> :
            props.characterCount ?
                <div className="mdc-text-field-character-counter"></div> :
                ''
        }
    </>

    const helpText: TextFieldHelperTextProps =
        typeof props.helpText === 'object' ?
            props.helpText as TextFieldHelperTextProps :
            {children: props.helpText}

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={(event) => {
                if (props.onLabelClick)
                    props.onLabelClick(event)
            }}
            className={[
                props.classNamePrefix,
                'mdc-text-field',
                'mdc-text-field--textarea'
            ]
                .concat(props.value === '' ?
                    'mdc-text-field--textarea' :
                    `${props.classNamePrefix}--has-content`
                )
                .concat(props.disabled ? 'mdc-text-field--disabled' : [])
                .concat(props.outlined ?
                    'mdc-text-field--outlined' :
                    'mdc-text-field--filled'
                )
                .concat(
                    props.characterCount ?
                        'mdc-text-field--with-internal-counter' :
                        []
                )
                .join(' ')}
        >
            {props.ripple ?
                <span className="mdc-text-field__ripple"></span> :
                ''
            }
            <span className="mdc-floating-label" id={`${id}-label`}>
                {props.label}
            </span>

            {props.resizeable ?
                <span className="mdc-text-field__resizer">
                    {editorContent}
                </span> :
                editorContent
            }

            {props.ripple ?
                <span className="mdc-line-ripple"></span> :
                ''
            }
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
                        props.helpText as TextFieldHelperTextProps | undefined
                    )?.children ?
                        (props.helpText as TextFieldHelperTextProps).children :
                        props.helpText as string
                    }
                </div>
            </div> :
            ''
        }
    </>
}

export default Index
