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
    FocusEvent,
    ForwardedRef,
    forwardRef,
    ReactElement,
    useEffect,
    useImperativeHandle,
    useState
} from 'react'
import {useMemorizedValue} from 'react-generic-tools'

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
import {EditorState, Extension, Text, Transaction} from '@codemirror/state'
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
    rectangularSelection
} from '@codemirror/view'

import {TextAreaProperties} from '../../../implementations/type'
import InputEventMapper, {
    Reference as InputEventMapperReference
} from '../InputEventMapperWrapper'
import cssClassNames from '../style.module'
import {CodeMirrorProps, EditorReference} from '../type'
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
export const CSS_CLASS_NAMES = cssClassNames

export interface Reference extends EditorReference {
    editorView: EditorView | null
    editorViewReference: HTMLDivElement | null
}

export const Index = forwardRef((
    properties: CodeMirrorProps, reference?: ForwardedRef<Reference>
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

    const [inputEventMapperReference, setInputEventMapperReference] =
        useState<InputEventMapperReference | null>(null)
    const [editorView, setEditorView] =
        useState<EditorView | null>(null)
    const [editorViewReference, setEditorViewReference] =
        useState<HTMLDivElement | null>(null)

    useImperativeHandle(
        reference,
        () => ({
            input: inputEventMapperReference,
            editorView,
            editorViewReference
        }),
        [inputEventMapperReference, editorView, editorViewReference]
    )

    const onChange = (transaction: Transaction) => {
        if (properties.disabled)
            return

        const newValue = transaction.state.doc.toString()

        inputEventMapperReference?.eventMapper.input(newValue, transaction)

        if (properties.onChange)
            properties.onChange(newValue)
    }

    useEffect(
        () => {
            if (!editorViewReference)
                return

            const state = EditorState.create({
                doc: String(value),
                extensions: [
                    BASIC_EXTENSIONS,
                    EditorState.changeFilter.of((transaction: Transaction) => {
                        const newValue = transaction.state.doc.toString()
                        if (
                            transaction.startState.doc.toString() !== newValue
                        ) {
                            if (
                                properties.maximumLength !== undefined &&
                                newValue.length > properties.maximumLength
                            )
                                return false

                            onChange(transaction)
                        }

                        return true
                    }),
                    properties.editor?.mode ? properties.editor.mode : []
                ]
            })

            setEditorView(new EditorView({
                state,
                parent: editorViewReference
            }))

            return () => {
                if (editorView) {
                    editorView.destroy()
                    setEditorView(null)
                }
            }
        },
        [editorViewReference, properties.editor?.mode?.language.name]
    )

    useEffect(
        () => {
            if (
                editorView &&
                properties.value !== editorView.state.doc.toString()
            )
                editorView.state.update(
                    {changes: {from: 0, insert: Text.empty}},
                    {changes: {from: 0, insert: String(properties.value)}}
                )
        },
        [editorView, properties.value]
    )

    const textAreaDomNode =
        inputEventMapperReference?.input?.input
    useEffect(
        () => {
            const resizeObserver = new ResizeObserver(() => {
                const clientHeight = textAreaDomNode?.clientHeight

                if (editorViewReference && clientHeight) {
                    const scrollableViewNode: HTMLDivElement | null =
                        editorViewReference.querySelector('.cm-scroller')
                    if (scrollableViewNode) {
                        const newHeightValue = String(clientHeight) + 'px'
                        editorViewReference.style.height = newHeightValue
                        scrollableViewNode.style.height = newHeightValue

                        return
                    }
                }
            })
            if (textAreaDomNode)
                resizeObserver.observe(textAreaDomNode)

            return () => {
                resizeObserver.disconnect()
            }
        },
        [editorViewReference, textAreaDomNode]
    )

    return <InputEventMapper
        {...(properties as TextAreaProperties)}

        ref={setInputEventMapperReference}

        value={value as string | undefined}

        classNamePrefix={CSS_CLASS_NAMES.codeEditor}

        onLabelClick={useMemorizedValue(
            () => {
                editorViewReference?.focus()
            },
            editorViewReference
        )}
    >
        <div
            ref={setEditorViewReference}

            onBlur={useMemorizedValue(
                (event: FocusEvent<HTMLDivElement>) => {
                    inputEventMapperReference?.eventMapper.blur(event)

                    if (properties.onBlur)
                        properties.onBlur(event)
                },
                inputEventMapperReference?.eventMapper,
                properties.onBlur
            )}
            onFocus={useMemorizedValue(
                (event: FocusEvent<HTMLDivElement>) => {
                    inputEventMapperReference?.eventMapper.focus(event)

                    if (properties.onFocus)
                        properties.onFocus(event)
                },
                inputEventMapperReference?.eventMapper,
                properties.onFocus
            )}

            className={
                `${CSS_CLASS_NAMES.codeEditorView} mdc-text-field__input`
            }
        ></div>
    </InputEventMapper>
})

export default Index
