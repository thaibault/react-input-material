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
import {EditorContent, EditorEvents, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {Mapping} from 'clientnode'

import {useRef} from 'react'
import Dummy from 'react-generic-dummy'

import EditorWrapper from '../EditorWrapper'
import cssClassNames from '../style.module'
import {TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping
export const VIEW_CONTENT_OFFSET_IN_PX = 8

export const Index = (props: TiptapProps) => {
    if (
        !(useEditor as typeof useEditor | undefined) ||
        (StarterKit as unknown as Partial<typeof Dummy>).isDummy
    )
        throw Error('Missing tiptap dependencies.')

    const value = props.value ?? ''

    const editorViewReference = useRef<HTMLDivElement | null>(null)
    const textareaReference = useRef<HTMLTextAreaElement | null>(null)

    const extensions =
        props.editor?.extensions ||
        [StarterKit.configure(props.editor?.starterKitOptions || {})]

    const editor = useEditor({
        extensions,

        editable: !props.disabled,
        content: String(value),
        onFocus: (editorEvent: EditorEvents['focus']) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('focus') as
                    Event & { detail: EditorEvents['focus'] }
                syntheticEvent.detail = editorEvent
                textareaReference.current.dispatchEvent(syntheticEvent)
            }

            if (props.onFocus)
                props.onFocus(editorEvent)
        },
        onBlur: (editorEvent: EditorEvents['focus']) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('blur') as
                    Event & { detail: EditorEvents['blur'] }
                syntheticEvent.detail = editorEvent
                textareaReference.current.dispatchEvent(syntheticEvent)
            }

            if (props.onBlur)
                props.onBlur(editorEvent)
        },
        onUpdate: (editorEvent) => {
            const syntheticEvent = new Event('input') as
                Event & { detail: EditorEvents['update'] }
            syntheticEvent.detail = editorEvent
            const html = editorEvent.editor.getHTML()
            if (textareaReference.current) {
                if (html === '<p></p>')
                    textareaReference.current.value = ''
                else
                    textareaReference.current.value = html
                textareaReference.current.dispatchEvent(syntheticEvent)
            }

            if (props.onChange)
                props.onChange(
                    html, {contentTree: editorEvent.editor.getJSON()}
                )
        },
        ...(props.editor?.options || {})
    })
    const htmlContent = editor?.getHTML()

    return <EditorWrapper
        editorViewReference={editorViewReference}
        textareaReference={textareaReference}

        barContentSlot={<MenuBar editor={editor}/>}

        value={htmlContent === '<p></p>' ? '' : htmlContent}

        classNamePrefix={CSS_CLASS_NAMES.richtextEditor}
        viewContentOffsetInPX={VIEW_CONTENT_OFFSET_IN_PX}

        onLabelClick={() => {
            editor?.chain().focus().run()
        }}

        {...props}
    >
        <EditorContent
            className={
                `${CSS_CLASS_NAMES.richtextEditorView} mdc-text-field__input`
            }
            editor={editor}
            innerRef={editorViewReference}
        />
    </EditorWrapper>
}

export default Index
