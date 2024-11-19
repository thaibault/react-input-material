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
import {javascript} from '@codemirror/lang-javascript'
import {EditorState} from '@codemirror/state'
import {EditorView, ViewUpdate} from '@codemirror/view'
import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'
import {TextFieldHelperTextProps} from '@rmwc/textfield/lib/textfield'
import {Mapping} from 'clientnode'

import {basicSetup} from 'codemirror'
import {FocusEvent, MutableRefObject, useEffect, useRef, useState} from 'react'

import cssClassNames from '../style.module'
import {VIEW_CONTENT_OFFSET_IN_PX} from '../Tiptap'
import {CodeMirrorProps} from '../type'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping

export const Index = (props: CodeMirrorProps) => {
    const [value, setValue] = useState(String(props.value) || '')

    const mdcTextFieldReference =
        useRef<HTMLLabelElement>() as MutableRefObject<HTMLLabelElement>
    const textareaReference =
        useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>
    const editorViewReference =
        useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

    useEffect(
        () => {
            const textField = new MDCTextField(mdcTextFieldReference.current)
            if (props.foundationRef)
                (
                    props.foundationRef as {current: MDCTextFieldFoundation}
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
            const state = EditorState.create({
                doc: value,
                extensions: [
                    EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
                        setValue((oldValue: string): string => {
                            const newValue = viewUpdate.state.doc.toString()
                            if (oldValue !== newValue) {
                                const syntheticEvent = new Event('input') as
                                    Event & { detail: ViewUpdate }
                                syntheticEvent.detail = viewUpdate
                                textareaReference.current.value = newValue
                                textareaReference.current.dispatchEvent(syntheticEvent)

                                if (props.onChange)
                                    props.onChange(newValue)

                                return newValue
                            }

                            return oldValue
                        })
                    }),
                    basicSetup,
                    props.editor?.mode ?? javascript()
                ]
            })

            const editorView = new EditorView({
                state,
                parent: editorViewReference.current
            })

            return () => {
                editorView.destroy()
            }
        },
        [editorViewReference.current]
    )

    useEffect(
        () => {
            if (editorViewReference.current)
                editorViewReference.current.style.height =
                    `${textareaReference.current.clientHeight + VIEW_CONTENT_OFFSET_IN_PX}px`
        },
        [editorViewReference.current, textareaReference.current?.clientHeight]
    )

    const editorContent = <>
        <textarea
            ref={textareaReference}

            className="mdc-text-field__input"
            style={{visibility: 'hidden', position: 'absolute'}}
            rows={props.rows}

            aria-labelledby={`${props.id}-label`}
            aria-controls={`${props.id}-helper`}
            aria-describedby={`${props.id}-helper`}

            readOnly

            value={value}

            minLength={props.minLength}
            maxLength={props.maxLength}
        ></textarea>

        <div
            ref={editorViewReference}

            onBlur={(event: FocusEvent<HTMLDivElement>) => {
                const syntheticEvent = new Event('blur') as
                    Event & { detail: FocusEvent<HTMLDivElement> }
                syntheticEvent.detail = event
                textareaReference.current.dispatchEvent(syntheticEvent)

                if (props.onBlur)
                    props.onBlur(event)
            }}
            onFocus={(event: FocusEvent<HTMLDivElement>) => {
                const syntheticEvent = new Event('focus') as
                    Event & { detail: FocusEvent<HTMLDivElement> }
                syntheticEvent.detail = event
                textareaReference.current.dispatchEvent(syntheticEvent)

                if (props.onFocus)
                    props.onFocus(event)
            }}

            className={
                CSS_CLASS_NAMES.codeEditorView + ' mdc-text-field__input'
            }
        ></div>

        {props.characterCount ?
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
            onClick={() => {
                editorViewReference.current.focus()
            }}
            className={[
                CSS_CLASS_NAMES.codeEditor,
                'mdc-text-field',
                'mdc-text-field--textarea',
            ]
                .concat(value ? CSS_CLASS_NAMES.codeEditorHasContent : [])
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
            <span className="mdc-floating-label" id={`${props.id}-label`}>
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
                    id={`${props.id}-helper`}
                >
                    {(props.helpText as TextFieldHelperTextProps)?.children ?
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
