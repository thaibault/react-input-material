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

import {
    FocusEvent,
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useEffect,
    useRef
} from 'react'

import {TextAreaProperties} from '../../../implementations/type'
import EditorWrapper, {
    Reference as InputEventMapperReference
} from '../InputEventMapperWrapper'
import cssClassNames from '../style.module'
import {CodeMirrorProps} from '../type'
// endregion
export const BASIC_KEYMAPS: Array<KeyBinding> =
    autocompletion as typeof autocompletion | undefined ?
        [
            ...closeBracketsKeymap,
            ...defaultKeymap,
            ...searchKeymap,
            ...historyKeymap,
            ...foldKeymap,
            ...completionKeymap,
            ...lintKeymap
        ] as Array<KeyBinding> :
        []
export const BASIC_EXTENSIONS: Extension =
    EditorView as typeof EditorView | undefined ?
        [
            lineNumbers(),
            highlightActiveLineGutter(),
            highlightSpecialChars(),
            history(),
            foldGutter(),
            drawSelection(),
            dropCursor(),
            EditorState.allowMultipleSelections.of(true),
            indentOnInput(),
            syntaxHighlighting(defaultHighlightStyle, {fallback: true}),
            bracketMatching(),
            closeBrackets(),
            autocompletion(),
            rectangularSelection(),
            crosshairCursor(),
            highlightActiveLine(),
            highlightSelectionMatches(),
            keymap.of(BASIC_KEYMAPS)
        ] as const :
        []
export const CSS_CLASS_NAMES = cssClassNames as Mapping

export const Index = forwardRef((
    properties: CodeMirrorProps,
    givenReference?: ForwardedRef<InputEventMapperReference>
): ReactElement => {
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

    const value = properties.value ?? ''

    const localReference = useRef<InputEventMapperReference | null>(null)
    const reference: RefObject<InputEventMapperReference | null> =
        (
            givenReference as
                null | RefObject<InputEventMapperReference | null>
        ) ??
        localReference
    const editorViewReference = useRef<HTMLDivElement | null>(null)
    const editorView = useRef<EditorView | null>(null)

    const onChange = (viewUpdate: ViewUpdate) => {
        if (properties.disabled)
            return

        const newValue = viewUpdate.state.doc.toString()

        reference.current?.eventMapper.input(newValue, viewUpdate)

        if (properties.onChange)
            properties.onChange(newValue)
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
                        // TODO prevent update if given string is longer than
                        // "properties.maximumLength"
                        if (
                            viewUpdate.startState.doc.toString() !==
                            viewUpdate.state.doc.toString()
                        )
                            onChange(viewUpdate)
                    }),
                    properties.editor?.mode ? properties.editor.mode : []
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
        [editorViewReference.current, properties.editor?.mode?.language.name]
    )

    useEffect(
        () => {
            if (
                editorView.current &&
                properties.value !== editorView.current.state.doc.toString()
            )
                editorView.current.state.update(
                    {changes: {from: 0, insert: Text.empty}},
                    {changes: {from: 0, insert: String(properties.value)}}
                )
        },
        [editorView.current, properties.value]
    )

    const clientHeight =
        reference.current?.input?.current?.input?.current?.clientHeight
    useEffect(
        () => {
            let id: null | ReturnType<typeof setTimeout> = null
            const syncHeight = () => {
                if (editorViewReference.current && clientHeight) {
                    const scrollableViewNode: HTMLDivElement | null =
                        editorViewReference.current
                            .querySelector('.cm-scroller')
                    if (scrollableViewNode) {
                        const newHeightValue = String(clientHeight) + 'px'
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
        [editorViewReference.current, clientHeight]
    )

    return <EditorWrapper
        {...(properties as TextAreaProperties)}

        ref={reference}

        value={value as string | undefined}

        classNamePrefix={CSS_CLASS_NAMES.codeEditor}

        onLabelClick={() => {
            editorViewReference.current?.focus()
        }}
    >
        <div
            ref={editorViewReference}

            onBlur={(event: FocusEvent<HTMLDivElement>) => {
                reference.current?.eventMapper.blur(event)

                if (properties.onBlur)
                    properties.onBlur(event)
            }}
            onFocus={(event: FocusEvent<HTMLDivElement>) => {
                reference.current?.eventMapper.focus(event)

                if (properties.onFocus)
                    properties.onFocus(event)
            }}

            className={
                `${CSS_CLASS_NAMES.codeEditorView} mdc-text-field__input`
            }
        ></div>
    </EditorWrapper>
})

export default Index
