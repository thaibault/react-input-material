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
import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'
import {TextFieldHelperTextProps} from '@rmwc/textfield/lib/textfield'
import {EditorContent, EditorEvents, useEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import {MutableRefObject, RefObject, useEffect, useRef} from 'react'

import {TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const Index = (props: TiptapProps) => {
    const value = props.value || ''

    const extensions =
        props.editor?.extensions ||
        [StarterKit.configure(props.editor?.starterKitOptions || {})]

    const editor = useEditor({
        extensions,

        editable: !props.disabled,
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
                textareaReference.current.value = html
            textareaReference.current.dispatchEvent(syntheticEvent)

            if (props.onChange)
                props.onChange(html)
        },
        ...(props.editor?.options || {})
    })

    const mdcTextFieldReference =
        useRef<HTMLLabelElement>() as MutableRefObject<HTMLLabelElement>
    const textareaReference =
        useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>
    const contentViewReference =
        useRef<HTMLDivElement | null>(null)

    useEffect(
        () => {
            const textField = new MDCTextField(mdcTextFieldReference.current)
            if (props.foundationRef)
                (
                    props.foundationRef as {current: MDCTextFieldFoundation}
                ).current = textField.getDefaultFoundation()

            if (typeof props.value === 'string')
                textField.value = props.value
            if (typeof props.disabled === 'boolean')
                textField.disabled = props.disabled
            if (typeof props.invalid === 'boolean')
                textField.valid = !props.invalid
            if (typeof props.required === 'boolean')
                textField.required = props.required
            if (typeof props.minLength === 'number')
                textField.minLength = props.minLength
            if (typeof props.maxLength === 'number')
                textField.maxLength = props.maxLength

            textField.useNativeValidation = false

            return () => {
                textField.destroy()
            }
        },
        [
            mdcTextFieldReference.current,

            props.foundationRef,

            props.value,
            props.disabled,
            props.invalid,
            props.required,
            props.minLength,
            props.maxLength
        ]
    )

    useEffect(
        () => {
            if (contentViewReference.current)
                contentViewReference.current.style.height =
                    `${textareaReference.current.clientHeight}px`
        },
        [contentViewReference.current, textareaReference.current?.clientHeight]
    )

    const htmlContent = editor?.getHTML()

    const helpText: TextFieldHelperTextProps =
        typeof props.helpText === 'object' ?
            props.helpText as TextFieldHelperTextProps :
            {children: props.helpText}

    const editorContent = <>
        <textarea
            ref={textareaReference}

            className="mdc-text-field__input"
            style={{visibility: 'hidden', position: 'absolute'}}
            rows={props.rows}

            aria-labelledby={`${props.id}-label`}
            aria-controls={`${props.id}-helper`}
            aria-describedby={`${props.id}-helper`}

            readOnly

            value={htmlContent === '<p></p>' ? '' : htmlContent}

            minLength={props.minLength}
            maxLength={props.maxLength}
        ></textarea>

        <EditorContent
            className="mdc-text-field__input"
            editor={editor}
            innerRef={contentViewReference}
        />

        <div className="richtext-editor-bar">
            <MenuBar editor={editor}/>
            {props.characterCount ?
                <div className="mdc-text-field-character-counter">
                </div> :
                ''
            }
        </div>
    </>

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={() => {
                editor?.chain().focus().run()
            }}
            className={[
                'richtext-editor',
                'mdc-text-field',
                'mdc-text-field--textarea',
            ]
                .concat(props.disabled ? 'mdc-text-field--disabled' : [])
                .concat(props.outlined ?
                    'mdc-text-field--outlined' :
                    'mdc-text-field--filled'
                )
                .concat(
                    props.characterCount ?
                        'mdc-text-field--with-internal-counter' :
                        []
                )
                .join(' ')}
        >
            {props.ripple ?
                <span className="mdc-text-field__ripple"></span> :
                ''
            }
            <span className="mdc-floating-label" id={`${props.id}-label`}>
                {props.label}
            </span>

            {props.resizeable ?
                <span className="mdc-text-field__resizer">
                    {editorContent}
                </span> :
                editorContent
            }

            {props.ripple ?
                <span className="mdc-line-ripple"></span> :
                ''
            }
        </label>
        {helpText.children ?
            <div className="mdc-text-field-helper-line">
                <div
                    className={['mdc-text-field-helper-text']
                        .concat(
                            helpText.persistent ?
                                'mdc-text-field-helper-text--persistent' :
                                []
                        )
                        .join(' ')
                    }
                    id={`${props.id}-helper`}
                >
                    {(props.helpText as TextFieldHelperTextProps)?.children ?
                        (props.helpText as TextFieldHelperTextProps).children :
                        props.helpText as string
                    }
                </div>
            </div> :
            ''
        }
    </>
}

export default Index
