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
import {MDCTextField} from '@material/textfield'
import {EditorContent, EditorEvents, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {MutableRefObject, useEffect, useRef} from 'react'

import {TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const Index = (props: TiptapProps) => {
    const value = props.value || ''

    const extensions =
        props.extensions ||
        [StarterKit.configure(props.starterKitOptions || {})]

    const editor = useEditor({
        extensions,
        content: value,
        onFocus: (editorEvent) => {
            const syntheticEvent =
                new Event('focus') as Event & {detail: EditorEvents['focus']}
            syntheticEvent.detail = editorEvent
            textareaReference.current.dispatchEvent(syntheticEvent)
        },
        onBlur: (editorEvent) => {
            const syntheticEvent =
                new Event('blur') as Event & {detail: EditorEvents['blur']}
            syntheticEvent.detail = editorEvent
            textareaReference.current.dispatchEvent(syntheticEvent)
        },
        onUpdate: (editorEvent) => {
            const syntheticEvent = new Event('input') as
                Event & {detail: EditorEvents['update']}
            syntheticEvent.detail = editorEvent
            const html = editorEvent.editor.getHTML()
            if (html === '<p></p>')
                textareaReference.current.value = ''
            else
                textareaReference.current.value =
                    editorEvent.editor.getHTML()
            textareaReference.current.dispatchEvent(syntheticEvent)
        }
    })

    const mdcTextFieldReference =
        useRef<HTMLLabelElement>() as MutableRefObject<HTMLLabelElement>
    const textareaReference =
        useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>

    useEffect(
        () => {
            const textField = new MDCTextField(mdcTextFieldReference.current)
            return () => {
                textField.destroy()
            }
        },
        [mdcTextFieldReference.current]
    )

    const htmlContent = editor?.getHTML()

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={() => {
                editor?.chain().focus().run()
            }}
            className={[
                'richtext-editor',
                'mdc-text-field',
                'mdc-text-field--filled',
                'mdc-text-field--textarea',
                'mdc-text-field--with-internal-counter'
            ].join(' ')}
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
                    value={htmlContent === '<p></p>' ? '' : htmlContent}
                    style={{visibility: 'hidden', position: 'absolute'}}
                ></textarea>

                <EditorContent
                    className="mdc-text-field__input" editor={editor}
                />

                <div className="richtext-editor-bar">
                    <MenuBar editor={editor} />
                    <div className="mdc-text-field-character-counter"></div>
                </div>
            </span>
            <span className="mdc-line-ripple"></span>
        </label>
        <div className="mdc-text-field-helper-line">
        </div>
    </>
}

export default Index
