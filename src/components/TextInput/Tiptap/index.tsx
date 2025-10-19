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

import {
    ForwardedRef, forwardRef,
    MutableRefObject as RefObject, ReactElement, useEffect,
    useImperativeHandle, useRef
} from 'react'
import Dummy from 'react-generic-dummy'

import {TextAreaProperties} from '../../../implementations/type'
import InputEventMapper, {
    Reference as InputEventMapperReference
} from '../InputEventMapperWrapper'
import cssClassNames from '../style.module'
import {EditorReference, TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const CSS_CLASS_NAMES = cssClassNames
export const VIEW_CONTENT_OFFSET_IN_PX = 8

export interface Reference extends EditorReference {
    editorViewReference: RefObject<HTMLDivElement | null>
}

export const Index = forwardRef((
    properties: TiptapProps, reference?: ForwardedRef<Reference>
): ReactElement => {
    if (
        !(useEditor as typeof useEditor | undefined) ||
        (StarterKit as unknown as Partial<typeof Dummy>).isDummy
    )
        throw Error('Missing tiptap dependencies.')

    const value = properties.value ?? ''

    const inputEventMapperReference =
        useRef<InputEventMapperReference | null>(null)
    const editorViewReference = useRef<HTMLDivElement | null>(null)

    useImperativeHandle(
        reference,
        () => ({
            input: inputEventMapperReference,
            editorViewReference
        })
    )

    const extensions =
        properties.editor?.extensions ||
        [StarterKit.configure(properties.editor?.starterKitOptions || {})]

    const editor = useEditor({
        extensions,

        editable: !properties.disabled,
        content: String(value),
        onBlur: (editorEvent: EditorEvents['focus']) => {
            inputEventMapperReference.current?.eventMapper.blur(editorEvent)

            if (properties.onBlur)
                properties.onBlur(editorEvent)
        },
        onFocus: (editorEvent: EditorEvents['focus']) => {
            inputEventMapperReference.current?.eventMapper.focus(editorEvent)

            if (properties.onFocus)
                properties.onFocus(editorEvent)
        },
        onUpdate: (editorEvent) => {
            const html = editorEvent.editor.getHTML()

            inputEventMapperReference.current?.eventMapper.input(
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

    const clientHeight =
        inputEventMapperReference
            .current?.input?.current?.input?.current?.clientHeight
    useEffect(
        () => {
            if (editorViewReference.current && clientHeight)
                editorViewReference.current.style.height =
                    String(clientHeight + VIEW_CONTENT_OFFSET_IN_PX) + 'px'
        },
        [editorViewReference.current, clientHeight]
    )

    return <InputEventMapper
        {...(properties as TextAreaProperties)}

        ref={inputEventMapperReference}

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
    </InputEventMapper>
})

export default Index
