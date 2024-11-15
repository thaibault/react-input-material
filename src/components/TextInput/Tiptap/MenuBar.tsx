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
import {IconButton} from '@rmwc/icon-button'
import {ChainedCommands} from '@tiptap/core'
import {useCurrentEditor} from '@tiptap/react'

import WrapTooltip from '../../WrapTooltip'

import {RichTextEditorButtonProps} from '../type'
// endregion
const Button = ({
    action, activeIndicator, checkedIconName, enabledIndicator, iconName, label
}: RichTextEditorButtonProps) => {
    const {editor} = useCurrentEditor()

    if (!editor)
        return null

    let enabled = true
    if (enabledIndicator)
        enabled = enabledIndicator(editor.can().chain().focus()).run()
    else if (enabledIndicator !== null)
        enabled = action(editor.can().chain().focus()).run()

    return <WrapTooltip options={label}>
        <IconButton
            checked={
                Boolean(activeIndicator && editor.isActive(activeIndicator))
            }
            disabled={!enabled}
            onClick={(event) => {
                event.stopPropagation()
                action(editor.chain().focus()).run()
            }}
            icon={{icon: iconName, size: 'xsmall'}}
            onIcon={{icon: checkedIconName ?? iconName, size: 'xsmall'}}
            label={label ?? activeIndicator ?? iconName}
        />
    </WrapTooltip>
}

const Index = () => {
    const {editor} = useCurrentEditor()

    if (!editor)
        return null

    return <div className="richtext-editor-menu-bar">
        <div className="richtext-editor-menu-bar__history">
            <Button
                action={(command: ChainedCommands) => command.undo()}
                iconName="undo"
            />
            <Button
                action={(command: ChainedCommands) => command.redo()}
                iconName="redo"
            />
        </div>

        <div className="richtext-editor-menu-bar__marks">
            <Button
                action={(command: ChainedCommands) => command.unsetAllMarks()}
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
                action={(command: ChainedCommands) => command.toggleItalic()}
                activeIndicator="italic"
                iconName="format_italic"
            />
            <Button
                action={(command: ChainedCommands) => command.toggleStrike()}
                activeIndicator="strike"
                iconName="format_strikethrough"
                label="strikethrough"
            />
        </div>

        <div className="richtext-editor-menu-bar__nodes">
            <Button
                action={(command: ChainedCommands) => command.unsetAllMarks()}
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
                action={(command: ChainedCommands) => command.setParagraph()}
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
                action={(command: ChainedCommands) => command.setHardBreak()}
                enabledIndicator={null}
                iconName="insert_page_break"
                label="Hard break"
            />
        </div>
    </div>
}

export default Index
