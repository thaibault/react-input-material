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
import {Ripple} from '@rmwc/ripple'
import {EditorProvider} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import {EditorProviderProps} from '@tiptap/react/dist/Context'
import {HTMLAttributes} from 'react'

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
        className: ['richtext-editor']
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
        extensions: extensions
    }

    return <Ripple>
        <div>
            <EditorProvider slotBefore={<MenuBar />} {...editorProperties}>
            </EditorProvider>
        </div>
    </Ripple>
}

export default Index
