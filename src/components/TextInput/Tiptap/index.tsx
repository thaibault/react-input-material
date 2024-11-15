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
import {EditorContent, EditorContentProps, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {useEffect, useRef} from 'react'

import {AdditionalContainerProps, TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const Index = (givenProps: TiptapProps) => {
    const props = {...givenProps}
    const value = props.value || ''

    const extensions =
        props.extensions ||
        [StarterKit.configure(props.starterKitOptions || {})]

    const editor = useEditor({
        extensions,
        content: value,
        onFocus: (editorEvent) => {
            const syntheticEvent = new Event('focus')
            syntheticEvent.detail = editorEvent
            textareaReference.current?.dispatchEvent(syntheticEvent)
        },
        onBlur: (editorEvent) => {
            const syntheticEvent = new Event('blur')
            syntheticEvent.detail = editorEvent
            textareaReference.current?.dispatchEvent(syntheticEvent)
        },
        onUpdate: (editorEvent) => {
            if (textareaReference.current) {
                const syntheticEvent = new Event('input')
                syntheticEvent.detail = editorEvent
                const html = editorEvent.editor.getHTML()
                if (html === '<p></p>')
                    textareaReference.current.value = ''
                else
                    textareaReference.current.value =
                        editorEvent.editor.getHTML()
                textareaReference.current.dispatchEvent(syntheticEvent)
            }
        }
    })

    const mdcTextFieldReference = useRef<HTMLLabelElement>()
    const textareaReference = useRef<HTMLTextAreaElement>()
    let materialTextFieldInstance: MDCTextField | null = null

    useEffect(
        () => {
            if (mdcTextFieldReference.current)
                materialTextFieldInstance =
                    new MDCTextField(mdcTextFieldReference.current)
        },
        [mdcTextFieldReference.current]
    )

    const htmlContent = editor?.getHTML()

    return <>
        <label
            ref={mdcTextFieldReference}
            className="richtext-editor mdc-text-field mdc-text-field--filled mdc-text-field--textarea mdc-text-field--with-internal-counter"
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
                    rows="8"
                    cols="40"
                    maxLength="140"
                    value={htmlContent === '<p></p>' ? '' : htmlContent}
                    style={{visibility: 'hidden', position: 'absolute'}}
                ></textarea>

                <EditorContent
                    className="mdc-text-field__input" editor={editor}
                />
                <MenuBar editor={editor} />

                <div className="mdc-text-field-character-counter">0 / 140</div>
            </span>
            <span className="mdc-line-ripple"></span>
        </label>
        <div className="mdc-text-field-helper-line">
        </div>
    </>
}

export default Index
