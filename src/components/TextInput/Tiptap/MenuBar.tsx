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
import {useCurrentEditor} from '@tiptap/react'
// endregion
const Index = () => {
    const {editor} = useCurrentEditor()

    if (!editor)
        return null

    return <>
        <div className="history">
            <button
                onClick={() => {
                    editor.chain().focus().undo().run()
                }}
                disabled={!editor.can().chain().focus().undo().run()}
            >
                Undo
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().redo().run()
                }}
                disabled={!editor.can().chain().focus().redo().run()}
            >
                Redo
            </button>
        </div>

        <div className="marks">
            <button
                onClick={() => {
                    editor.chain().focus().unsetAllMarks().run()
                }}
            >
                Clear marks
            </button>

            <button
                onClick={() => {
                    editor.chain().focus().toggleBold().run()
                }}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={editor.isActive('bold') ? 'is-active' : ''}
            >
                Bold
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleItalic().run()
                }}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={editor.isActive('italic') ? 'is-active' : ''}
            >
                Italic
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleStrike().run()
                }}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={editor.isActive('strike') ? 'is-active' : ''}
            >
                Strike
            </button>
        </div>

        <div className="nodes">
            <button
                onClick={() => {
                    editor.chain().focus().clearNodes().run()
                }}
            >
                Clear nodes
            </button>

            <button
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={editor.isActive('paragraph') ? 'is-active' : ''}
            >
                Paragraph
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 1}).run()
                }}
                className={
                    editor.isActive('heading', {level: 1}) ? 'is-active' : ''
                }
            >
                H1
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 2}).run()
                }}
                className={
                    editor.isActive('heading', {level: 2}) ? 'is-active' : ''
                }
            >
                H2
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 3}).run()
                }}
                className={
                    editor.isActive('heading', {level: 3}) ? 'is-active' : ''
                }
            >
                H3
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 4}).run()
                }}
                className={
                    editor.isActive('heading', {level: 4}) ? 'is-active' : ''
                }
            >
                H4
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 5}).run()
                }}
                className={
                    editor.isActive('heading', {level: 5}) ? 'is-active' : ''
                }
            >
                H5
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleHeading({level: 6}).run()
                }}
                className={
                    editor.isActive('heading', {level: 6}) ? 'is-active' : ''
                }
            >
                H6
            </button>

            <button
                onClick={() => {
                    editor.chain().focus().toggleBulletList().run()
                }}
                className={editor.isActive('bulletList') ? 'is-active' : ''}
            >
                Bullet list
            </button>
            <button
                onClick={() => {
                    editor.chain().focus().toggleOrderedList().run()
                }}
                className={editor.isActive('orderedList') ? 'is-active' : ''}
            >
                Ordered list
            </button>

            <button
                onClick={() => {
                    editor.chain().focus().setHardBreak().run()
                }}
            >
                Hard break
            </button>
        </div>
    </>
}

export default Index
