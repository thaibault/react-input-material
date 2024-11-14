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
import {EditorProvider} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {EditorProviderProps} from '@tiptap/react/dist/Context'

import {AdditionalContainerProps, TiptapProps} from '../type'

import MenuBar from './MenuBar'
// endregion
export const Index = (givenProps: TiptapProps) => {
    const props = {...givenProps}
    const value = props.value || ''

    const extensions =
        props.extensions ||
        [StarterKit.configure(props.starterKitOptions || {})]

    const additionalContainerProps: AdditionalContainerProps = {}
    if (props.className) {
        additionalContainerProps.className = props.className
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

    const editorProperties: EditorProviderProps = {
        ...props,
        editorContainerProps: {
            ...props.editorContainerProps || {},
            ...additionalContainerProps
        },
        editable: !props.disabled,
        content: value,
        extensions: extensions
    }

    return <EditorProvider slotBefore={<MenuBar />} {...editorProperties}>
    </EditorProvider>
}

export default Index
