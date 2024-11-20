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
import {Mapping} from 'clientnode'

import {basicSetup} from 'codemirror'
import {FocusEvent, useEffect, useRef, useState} from 'react'

import EditorWrapper from '../EditorWrapper'
import cssClassNames from '../style.module'
import {CodeMirrorProps} from '../type'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping

export const Index = (props: CodeMirrorProps) => {
    if (!(
        basicSetup as typeof basicSetup | undefined &&
        javascript as typeof javascript | undefined &&
        EditorState as typeof EditorState | undefined &&
        EditorView as typeof EditorView | undefined
    ))
        throw Error('Missing codemirror dependencies.')

    const [value, setValue] = useState(String(props.value) || '')

    const editorViewReference = useRef<HTMLDivElement | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)

    useEffect(
        () => {
            if (!editorViewReference.current)
                return

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
                                if (textareaReference.current) {
                                    textareaReference.current.value = newValue
                                    textareaReference.current.dispatchEvent(
                                        syntheticEvent
                                    )
                                }

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

    return <EditorWrapper
        editorViewReference={editorViewReference}
        textareaReference={textareaReference}

        value={value}

        classNamePrefix={CSS_CLASS_NAMES.codeEditor}

        onLabelClick={() => {
            editorViewReference.current?.focus()
        }}

        {...props}
    >
        <div
            ref={editorViewReference}

            onBlur={(event: FocusEvent<HTMLDivElement>) => {
                if (textareaReference.current) {
                    const syntheticEvent = new Event('blur') as
                        Event & { detail: FocusEvent<HTMLDivElement> }
                    syntheticEvent.detail = event
                    textareaReference.current.dispatchEvent(syntheticEvent)
                }

                if (props.onBlur)
                    props.onBlur(event)
            }}
            onFocus={(event: FocusEvent<HTMLDivElement>) => {
                if (textareaReference.current) {
                    const syntheticEvent = new Event('focus') as
                        Event & { detail: FocusEvent<HTMLDivElement> }
                    syntheticEvent.detail = event
                    textareaReference.current.dispatchEvent(syntheticEvent)
                }

                if (props.onFocus)
                    props.onFocus(event)
            }}

            className={
                CSS_CLASS_NAMES.codeEditorView + ' mdc-text-field__input'
            }
        ></div>
    </EditorWrapper>
}

export default Index
