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
import {
    ForwardedRef, forwardRef,
    MutableRefObject as RefObject, ReactElement, useEffect, useRef
} from 'react'
import Dummy from 'react-generic-dummy'

import {TextAreaProperties} from '../../../implementations/type'
import EditorWrapper, {
    Reference as InputEventMapperReference
} from '../InputEventMapperWrapper'
import cssClassNames from '../style.module'
import {TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping
export const VIEW_CONTENT_OFFSET_IN_PX = 8

export const Index = forwardRef((
    properties: TiptapProps,
    givenReference?: ForwardedRef<InputEventMapperReference>
): ReactElement => {
    if (
        !(useEditor as typeof useEditor | undefined) ||
        (StarterKit as unknown as Partial<typeof Dummy>).isDummy
    )
        throw Error('Missing tiptap dependencies.')

    const value = properties.value ?? ''

    const localReference = useRef<InputEventMapperReference | null>(null)
    const reference: RefObject<InputEventMapperReference | null> =
        (
            givenReference as null | RefObject<InputEventMapperReference | null>
        ) ??
        localReference
    const editorViewReference = useRef<HTMLDivElement | null>(null)

    const extensions =
        properties.editor?.extensions ||
        [StarterKit.configure(properties.editor?.starterKitOptions || {})]

    const editor = useEditor({
        extensions,

        editable: !properties.disabled,
        content: String(value),
        onBlur: (editorEvent: EditorEvents['focus']) => {
            reference.current?.eventMapper.blur(editorEvent)

            if (properties.onBlur)
                properties.onBlur(editorEvent)
        },
        onFocus: (editorEvent: EditorEvents['focus']) => {
            reference.current?.eventMapper.focus(editorEvent)

            if (properties.onFocus)
                properties.onFocus(editorEvent)
        },
        onUpdate: (editorEvent) => {
            const html = editorEvent.editor.getHTML()

            reference.current?.eventMapper.input(
                html === '<p></p>' ? '' : html, editorEvent
            )

            if (properties.onChange)
                properties.onChange(
                    html, {contentTree: editorEvent.editor.getJSON()}
                )
        },
        ...(properties.editor?.options || {})
    })
    const htmlContent = editor.getHTML()

    useEffect(
        () => {
            if (
                editorViewReference.current &&
                reference.current?.input.current?.input.current?.clientHeight
            )
                editorViewReference.current.style.height =
                    String(
                        reference.current.input.current.input.current
                            .clientHeight +
                        VIEW_CONTENT_OFFSET_IN_PX
                    ) +
                    'px'
        },
        [
            editorViewReference.current,
            reference.current?.input.current?.input.current?.clientHeight
        ]
    )

    return <EditorWrapper
        {...(properties as TextAreaProperties)}

        ref={reference}

        barContentSlot={<MenuBar editor={editor}/>}

        value={htmlContent === '<p></p>' ? '' : htmlContent}

        classNamePrefix={CSS_CLASS_NAMES.richtextEditor}

        onLabelClick={() => {
            editor.chain().focus().run()
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
})

export default Index
