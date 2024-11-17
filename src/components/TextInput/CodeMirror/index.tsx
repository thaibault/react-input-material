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

import {MDCTextField} from '@material/textfield'

import {basicSetup} from 'codemirror'
import {FocusEvent, MutableRefObject, useEffect, useRef, useState} from 'react'

import {CodeMirrorProps} from '../type'
// endregion
export const Index = (props: CodeMirrorProps) => {
    const mdcTextFieldReference =
        useRef<HTMLLabelElement>() as MutableRefObject<HTMLLabelElement>
    const textareaReference =
        useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>
    const editorViewReference =
        useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

    const [value, setValue] = useState(props.value || '')

    useEffect(
        () => {
            const textField = new MDCTextField(mdcTextFieldReference.current)
            return () => {
                textField.destroy()
            }
        },
        [mdcTextFieldReference.current]
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

                                return newValue
                            }

                            return oldValue
                        })
                    }),
                    basicSetup,
                    javascript()
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

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={() => {
                editorViewReference.current.focus()
            }}
            className={[
                'code-editor',
                'mdc-text-field',
                'mdc-text-field--filled',
                'mdc-text-field--textarea',
                'mdc-text-field--with-internal-counter'
            ].concat(value ? 'code-editor--has-content' : []).join(' ')}
        >
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
                Textarea Label
            </span>

            <span className="mdc-text-field__resizer">
                <textarea
                    ref={textareaReference}
                    className="mdc-text-field__input"
                    aria-labelledby="my-label-id"
                    readOnly
                    rows={8}
                    cols={40}
                    maxLength={140}
                    style={{visibility: 'hidden', position: 'absolute'}}
                    value={value}
                ></textarea>

                <div
                    ref={editorViewReference}
                    onFocus={(event: FocusEvent<HTMLDivElement>) => {
                        const syntheticEvent = new Event('focus') as
                            Event & {detail: FocusEvent<HTMLDivElement>}
                        syntheticEvent.detail = event
                        textareaReference.current.dispatchEvent(syntheticEvent)
                    }}
                    onBlur={(event: FocusEvent<HTMLDivElement>) => {
                        const syntheticEvent = new Event('blur') as
                            Event & {detail: FocusEvent<HTMLDivElement>}
                        syntheticEvent.detail = event
                        textareaReference.current.dispatchEvent(syntheticEvent)
                    }}
                    className="code-editor__view mdc-text-field__input"
                ></div>

                <div className="mdc-text-field-character-counter"></div>
            </span>
            <span className="mdc-line-ripple"></span>
        </label>
        <div className="mdc-text-field-helper-line">
        </div>
    </>
}

export default Index
