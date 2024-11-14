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
import {EditorProvider, FloatingMenu, BubbleMenu} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {EditorProviderProps} from '@tiptap/react/dist/Context'

import {TiptapProps} from './type'
// endregion
export const Tiptap = (props: TiptapProps) => {
    const value = props.value || ''

    const extensions =
        props.extensions ||
        [StarterKit.configure(props.starterKitOptions || {})]

    const className = props.className
    const id = props.id
    // TODO const name = props.name

    delete props.className
    delete props.id
    delete props.name

    const editorOptions: EditorProviderProps = {
        ...props,
        editorContainerProps: {
            ...props.editorContainerProps || {},
            className,
            id
            // TODO name
        },
        editable: !props.disabled,
        content: value,
        extensions: extensions
    }

    return <EditorProvider {...editorOptions}>
        <FloatingMenu editor={null}>This is the floating menu</FloatingMenu>
        <BubbleMenu editor={null}>This is the bubble menu</BubbleMenu>
    </EditorProvider>
}

export default Tiptap
