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
import {ChainedCommands, Editor} from '@tiptap/core'

import {createContext, useContext} from 'react'

import IconButton from '#implementations/IconButton'

import WrapTooltip from '../../Wrapper/WrapTooltip'

import {RichTextEditorButtonProps} from '../type'
// endregion
const EditorContext = createContext<Editor | null>(null)

const Button = ({
    action, activeIndicator, checkedIconName, enabledIndicator, iconName, label
}: RichTextEditorButtonProps) => {
    const editor = useContext(EditorContext)

    if (!editor)
        return null

    let enabled = true
    if (enabledIndicator)
        enabled = enabledIndicator(editor.can().chain().focus()).run()
    else if (enabledIndicator !== null)
        enabled = action(editor.can().chain().focus()).run()

    const checked =
        Boolean(activeIndicator && editor.isActive(activeIndicator))

    const description = label ?? activeIndicator ?? iconName

    return <WrapTooltip value={description}>
        <IconButton
            value={checked}
            disabled={!enabled}

            classNames={checked ? ['mdc-icon-button--checked'] : []}

            onClick={(event) => {
                event.stopPropagation()
                action(editor.chain().focus()).run()
            }}

            size="extra-small"

            icon={iconName}
            onIcon={checkedIconName ?? iconName}

            elementProperties={{'aria-label': description}}
        />
    </WrapTooltip>
}

const Index = ({editor}: {editor: Editor | null}) => {
    if (!editor)
        return null

    return <span className="richtext-editor-menu-bar">
        <EditorContext.Provider value={editor}>
            <span className="richtext-editor-menu-bar__history">
                <Button
                    action={(command: ChainedCommands) => command.undo()}
                    iconName="undo"
                />
                <Button
                    action={(command: ChainedCommands) => command.redo()}
                    iconName="redo"
                />
            </span>

            <span className="richtext-editor-menu-bar__marks">
                <Button
                    action={(command: ChainedCommands) =>
                        command.unsetAllMarks()
                    }
                    enabledIndicator={null}
                    iconName="format_clear"
                    label="clear formatting"
                />

                <Button
                    action={(command: ChainedCommands) => command.toggleBold()}
                    activeIndicator="bold"
                    iconName="format_bold"
                />
                <Button
                    action={(command: ChainedCommands) =>
                        command.toggleItalic()
                    }
                    activeIndicator="italic"
                    iconName="format_italic"
                />
                <Button
                    action={(command: ChainedCommands) =>
                        command.toggleStrike()
                    }
                    activeIndicator="strike"
                    iconName="format_strikethrough"
                    label="strikethrough"
                />
            </span>

            <span className="richtext-editor-menu-bar__nodes">
                <Button
                    action={(command: ChainedCommands) => command.clearNodes()}
                    enabledIndicator={null}
                    iconName="layers_clear"
                    label="clear markup"
                />

                <Button
                    action={(command: ChainedCommands) =>
                        command.toggleHeading({level: 2})
                    }
                    enabledIndicator={null}
                    activeIndicator="heading"
                    iconName="title"
                    label="headline"
                />
                <Button
                    action={(command: ChainedCommands) =>
                        command.setParagraph()
                    }
                    enabledIndicator={null}
                    activeIndicator="paragraph"
                    iconName="segment"
                />

                <Button
                    action={(command: ChainedCommands) =>
                        command.toggleBulletList()
                    }
                    enabledIndicator={null}
                    activeIndicator="bulletList"
                    iconName="format_list_bulleted"
                    label="Unordered List"
                />
                <Button
                    action={(command: ChainedCommands) =>
                        command.toggleOrderedList()
                    }
                    enabledIndicator={null}
                    activeIndicator="orderedList"
                    iconName="format_list_numbered"
                    label="Ordered List"
                />

                <Button
                    action={(command: ChainedCommands) =>
                        command.setHardBreak()
                    }
                    enabledIndicator={null}
                    iconName="insert_page_break"
                    label="Hard break"
                />
            </span>
        </EditorContext.Provider>
    </span>
}

export default Index
