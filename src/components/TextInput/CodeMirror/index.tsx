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
import {FocusEvent, useEffect, useRef} from 'react'

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

    const value = props.value ?? ''

    const editorViewReference = useRef<HTMLDivElement | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)
    const editorView = useRef<EditorView | null>(null)

    const onChange = (viewUpdate: ViewUpdate) => {
        if (props.disabled)
            return

        const value = viewUpdate.state.doc.toString()

        if (textareaReference.current) {
            const syntheticEvent = new Event('input') as
                Event & { detail: ViewUpdate }
            syntheticEvent.detail = viewUpdate

            textareaReference.current.value = value
            textareaReference.current.dispatchEvent(
                syntheticEvent
            )
        }

        if (props.onChange)
            props.onChange(value)
    }

    if (
        editorView.current &&
        props.value !== editorView.current.state.doc.toString()
    )
        // TODO
        editorView.current.state.update()

    useEffect(
        () => {
            if (!editorViewReference.current || editorView.current)
                return

            const state = EditorState.create({
                doc: String(value),
                extensions: [
                    EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
                        onChange(viewUpdate)
                    }),
                    basicSetup,
                    props.editor?.mode ?? javascript()
                ]
            })

            editorView.current = new EditorView({
                state,
                parent: editorViewReference.current
            })

            return () => {
                if (editorView.current) {
                    editorView.current.destroy()
                    editorView.current = null
                }
            }
        },
        [editorViewReference.current, props.editor?.mode?.language.name]
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
                `${CSS_CLASS_NAMES.codeEditorView} mdc-text-field__input`
            }
        ></div>
    </EditorWrapper>
}

export default Index
