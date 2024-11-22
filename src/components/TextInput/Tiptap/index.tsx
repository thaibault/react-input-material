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
import {EditorWrapperEventWrapper, TiptapProps} from '../type'

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
    const eventMapper = useRef<EditorWrapperEventWrapper | null>(null)

    const extensions =
        props.editor?.extensions ||
        [StarterKit.configure(props.editor?.starterKitOptions || {})]

    const editor = useEditor({
        extensions,

        editable: !props.disabled,
        content: String(value),
        onBlur: (editorEvent: EditorEvents['focus']) => {
            eventMapper.current?.blur(editorEvent)

            if (props.onBlur)
                props.onBlur(editorEvent)
        },
        onFocus: (editorEvent: EditorEvents['focus']) => {
            eventMapper.current?.focus(editorEvent)

            if (props.onFocus)
                props.onFocus(editorEvent)
        },
        onUpdate: (editorEvent) => {
            const html = editorEvent.editor.getHTML()

            eventMapper.current?.input(
                html === '<p></p>' ? '' : html, editorEvent
            )

            if (props.onChange)
                props.onChange(
                    html, {contentTree: editorEvent.editor.getJSON()}
                )
        },
        ...(props.editor?.options || {})
    })
    const htmlContent = editor?.getHTML()

    return <EditorWrapper
        {...props}

        eventMapper={eventMapper}

        editorViewReference={editorViewReference}

        barContentSlot={<MenuBar editor={editor}/>}

        value={htmlContent === '<p></p>' ? '' : htmlContent}

        classNamePrefix={CSS_CLASS_NAMES.richtextEditor}
        viewContentOffsetInPX={VIEW_CONTENT_OFFSET_IN_PX}

        onLabelClick={() => {
            editor?.chain().focus().run()
        }}
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
