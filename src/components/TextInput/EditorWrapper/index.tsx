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

    const mdcTextFieldReference = useRef<HTMLLabelElement | null>(null)

    useEffect(
        () => {
            if (mdcTextFieldReference.current) {
                const textField =
                    new MDCTextField(mdcTextFieldReference.current)
                if (props.foundationRef)
                    (
                        props.foundationRef as {
                            current: MDCTextFieldFoundation
                        }
                    ).current = textField.getDefaultFoundation()

                if (typeof props.value === 'string')
                    textField.value = props.value
                if (typeof props.disabled === 'boolean')
                    textField.disabled = props.disabled
                if (typeof props.invalid === 'boolean')
                    textField.valid = !props.invalid
                if (typeof props.required === 'boolean')
                    textField.required = props.required
                if (typeof props.minLength === 'number')
                    textField.minLength = props.minLength
                if (typeof props.maxLength === 'number')
                    textField.maxLength = props.maxLength

                textField.useNativeValidation = false

                return () => {
                    textField.destroy()
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

    useEffect(
        () => {
            if (
                props.editorViewReference.current &&
                props.textareaReference.current
            )
                props.editorViewReference.current.style.height =
                    String(
                        props.textareaReference.current.clientHeight +
                        (props.viewContentOffsetInPX || 0)
                    ) +
                    'px'
        },
        [
            props.editorViewReference.current,
            props.textareaReference.current?.clientHeight
        ]
    )

    const editorContent = <>
        <textarea
            ref={props.textareaReference}

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
                .concat(props.value ?
                    `${props.classNamePrefix}--has-content` :
                    'mdc-text-field--textarea'
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
