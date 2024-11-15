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
import {EditorProvider, EditorProviderProps} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {HTMLAttributes, useEffect, useRef} from 'react'

import {AdditionalContainerProps, TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const Index = (givenProps: TiptapProps) => {
    const props = {...givenProps}
    const value = props.value || ''

    const extensions =
        props.extensions ||
        [StarterKit.configure(props.starterKitOptions || {})]

    const additionalContainerProps: AdditionalContainerProps = {
        className: ['mdc-text-field__input'],
        'aria-labelledby': 'my-label-id'
    }
    if (props.className && additionalContainerProps.className) {
        additionalContainerProps.className =
            additionalContainerProps.className.concat(
                props.className as string
            )
        delete props.className
    }
    if (props.id) {
        additionalContainerProps.id = props.id
        delete props.id
    }
    /* TODO
    if (props.name) {
        additionalContainerProps.name = props.name
        delete props.name
    }
    */

    if (Array.isArray(additionalContainerProps.className))
        additionalContainerProps.className =
            additionalContainerProps.className.join(' ')

    const editorProperties: EditorProviderProps = {
        ...props,
        editorContainerProps: {
            ...props.editorContainerProps || {},
            ...additionalContainerProps as HTMLAttributes<HTMLDivElement>
        },
        editable: !props.disabled,
        content: value,
        extensions: extensions,
        onFocus: (editorEvent) => {
            const syntheticEvent = new Event('focus')
            syntheticEvent.detail = editorEvent
            textareaReferemce.current?.dispatchEvent(syntheticEvent)
        },
        onBlur: (editorEvent) => {
            const syntheticEvent = new Event('blur')
            syntheticEvent.detail = editorEvent
            textareaReferemce.current?.dispatchEvent(syntheticEvent)
        },
        onUpdate: (editorEvent) => {
            if (textareaReferemce.current) {
                const syntheticEvent = new Event('input')
                syntheticEvent.detail = editorEvent
                textareaReferemce.current.value = editorEvent.editor.getHTML()
                textareaReferemce.current.dispatchEvent(syntheticEvent)
            }
        }
    }

    const mdcTextFieldReference = useRef<HTMLLabelElement>()
    const textareaReferemce = useRef<HTMLTextAreaElement>()

    useEffect(() => {
        if (mdcTextFieldReference.current) {
            console.log(mdcTextFieldReference.current)
            const textField = new MDCTextField(mdcTextFieldReference.current)
            console.log('A')
        }
    })

    return <>
        <label
            ref={mdcTextFieldReference}
            className="mdc-text-field mdc-text-field--filled mdc-text-field--textarea"
        >
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
                Textarea Label
            </span>

            <span className="mdc-text-field__resizer">
                <textarea
                    ref={textareaReferemce}
                    className="mdc-text-field__input"
                    aria-labelledby="my-label-id"
                    readOnly
                    rows="8"
                    cols="40"
                    maxLength="140"
                    value={value}
                    style={{visibility: 'hidden', position: 'absolute'}}
                ></textarea>

                <EditorProvider slotBefore={<MenuBar/>} {...editorProperties}>
                </EditorProvider>

            </span>
            <span className="mdc-line-ripple"></span>
        </label>
        <div className="mdc-text-field-helper-line">
            <div className="mdc-text-field-character-counter">0 / 140</div>
        </div>
    </>

    return <div>
        <EditorProvider slotBefore={<MenuBar/>} {...editorProperties}>
        </EditorProvider>
    </div>
}

export default Index
