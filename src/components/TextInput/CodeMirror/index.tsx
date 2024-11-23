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
import {
    autocompletion, completionKeymap, closeBrackets, closeBracketsKeymap
} from '@codemirror/autocomplete'
import {defaultKeymap, history, historyKeymap} from '@codemirror/commands'
import {
    bracketMatching,
    defaultHighlightStyle,
    foldGutter,
    foldKeymap,
    indentOnInput,
    syntaxHighlighting
} from '@codemirror/language'
import {lintKeymap} from '@codemirror/lint'
import {searchKeymap, highlightSelectionMatches} from '@codemirror/search'
import {EditorState, Extension, Text} from '@codemirror/state'
import {
    crosshairCursor,
    drawSelection,
    dropCursor,
    EditorView,
    highlightActiveLine,
    highlightActiveLineGutter,
    highlightSpecialChars,
    KeyBinding,
    keymap,
    lineNumbers,
    rectangularSelection,
    ViewUpdate
} from '@codemirror/view'

import {Mapping} from 'clientnode'

import {FocusEvent, useEffect, useRef} from 'react'

import EditorWrapper from '../EditorWrapper'
import cssClassNames from '../style.module'
import {CodeMirrorProps, EditorWrapperEventWrapper} from '../type'
// endregion
export const BASIC_KEYMAPS = [
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap
] as Array<KeyBinding>
export const BASIC_EXTENSIONS: Extension = [
    lineNumbers(),
    highlightActiveLineGutter(),
    highlightSpecialChars(),
    history(),
    foldGutter(),
    drawSelection(),
    dropCursor(),
    EditorState.allowMultipleSelections.of(true),
    indentOnInput(),
    syntaxHighlighting(
        defaultHighlightStyle, {fallback: true}
    ),
    bracketMatching(),
    closeBrackets(),
    autocompletion(),
    rectangularSelection(),
    crosshairCursor(),
    highlightActiveLine(),
    highlightSelectionMatches(),
    keymap.of(BASIC_KEYMAPS)
] as const
export const CSS_CLASS_NAMES = cssClassNames as Mapping

export const Index = (props: CodeMirrorProps) => {
    if (!(
        autocompletion as typeof autocompletion | undefined &&
        history as typeof history | undefined &&
        syntaxHighlighting as typeof syntaxHighlighting | undefined &&
        lintKeymap as typeof lintKeymap | undefined &&
        searchKeymap as typeof searchKeymap | undefined &&
        EditorState as typeof EditorState | undefined &&
        EditorView as typeof EditorView | undefined
    ))
        throw Error('Missing codemirror dependencies.')

    const value = props.value ?? ''

    const editorViewReference = useRef<HTMLDivElement | null>(null)
    const eventMapper = useRef<EditorWrapperEventWrapper | null>(null)
    const editorView = useRef<EditorView | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)

    const onChange = (viewUpdate: ViewUpdate) => {
        if (props.disabled)
            return

        const newValue = viewUpdate.state.doc.toString()

        eventMapper.current?.input(newValue, viewUpdate)

        if (props.onChange)
            props.onChange(newValue)
    }

    useEffect(
        () => {
            if (!editorViewReference.current)
                return

            const state = EditorState.create({
                doc: String(value),
                extensions: [
                    BASIC_EXTENSIONS,
                    EditorView.updateListener.of((viewUpdate: ViewUpdate) => {
                        if (
                            viewUpdate.startState.doc.toString() !==
                            viewUpdate.state.doc.toString()
                        )
                            onChange(viewUpdate)
                    }),
                    props.editor?.mode ? props.editor.mode : []
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

    useEffect(
        () => {
            if (
                editorView.current &&
                props.value !== editorView.current.state.doc.toString()
            )
                editorView.current.state.update(
                    {changes: {from: 0, insert: Text.empty}},
                    {changes: {from: 0, insert: String(props.value)}}
                )
        },
        [editorView.current, props.value]
    )

    useEffect(
        () => {
            let id: null | ReturnType<typeof setTimeout> = null
            const syncHeight = () => {
                if (
                    editorViewReference.current &&
                    textareaReference.current?.clientHeight
                ) {
                    const scrollableViewNode: HTMLDivElement | null =
                        editorViewReference.current
                            .querySelector('.cm-scroller')
                    if (scrollableViewNode) {
                        const newHeightValue =
                            String(textareaReference.current.clientHeight) +
                            'px'
                        editorViewReference.current.style.height =
                            newHeightValue
                        scrollableViewNode.style.height = newHeightValue

                        return
                    }
                }

                id = setTimeout(() => {
                    syncHeight()
                })
            }

            syncHeight()

            return () => {
                if (id !== null)
                    clearTimeout(id)
            }
        },
        [editorViewReference.current, textareaReference.current?.clientHeight]
    )

    return <EditorWrapper
        {...props}

        eventMapper={eventMapper}
        textareaReference={textareaReference}

        value={value}

        classNamePrefix={CSS_CLASS_NAMES.codeEditor}

        onLabelClick={() => {
            editorViewReference.current?.focus()
        }}
    >
        <div
            ref={editorViewReference}

            onBlur={(event: FocusEvent<HTMLDivElement>) => {
                eventMapper.current?.blur(event)

                if (props.onBlur)
                    props.onBlur(event)
            }}
            onFocus={(event: FocusEvent<HTMLDivElement>) => {
                eventMapper.current?.focus(event)

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
