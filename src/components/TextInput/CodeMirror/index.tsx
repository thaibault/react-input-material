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

import {javascript} from '@codemirror/lang-javascript'
import {EditorView} from '@codemirror/view'
import {basicSetup} from 'codemirror'

import {MutableRefObject, useEffect, useRef} from 'react'

import {CodeMirrorProps} from '../type'
// endregion
export const Index = (props: CodeMirrorProps) => {
    const mdcTextFieldReference =
        useRef<HTMLLabelElement>() as MutableRefObject<HTMLLabelElement>
    const textareaReference =
        useRef<HTMLTextAreaElement>() as MutableRefObject<HTMLTextAreaElement>
    const editorViewReference =
        useRef<HTMLDivElement>() as MutableRefObject<HTMLDivElement>

    useEffect(
        () => {
            new MDCTextField(mdcTextFieldReference.current)
        },
        [mdcTextFieldReference.current]
    )

    let editor: EditorView | null = null

    useEffect(
        () => {
            // TODO apply
            console.log('TODO value', props.value)
            editor = new EditorView({
                extensions: [basicSetup, javascript()],
                parent: editorViewReference.current
            })
            textareaReference.current.value = editor.state.doc.toString()
        },
        [editorViewReference.current]
    )

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={() => {
                // TODO Do code mirror focus
            }}
            className={[
                'code-editor',
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
                    style={{visibility: 'hidden', position: 'absolute'}}
                ></textarea>

                <div
                    ref={editorViewReference}
                    className="code-editor__view mdc-text-field__input"
                ></div>

                <div className="mdc-text-field-character-counter"></div>
            </span>
            <span className="mdc-line-ripple"></span>
        </label>
        <div className="mdc-text-field-helper-line">
        </div>
    </>
}

export default Index
