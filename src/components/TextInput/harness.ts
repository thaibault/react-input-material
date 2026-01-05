// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const textInput = (parent: Locator) => {
    const inputNode = parent.locator('input, textarea')
    const richInputNode = parent.locator('[contenteditable]')

    const menuNode = parent.locator('.mdc-menu-surface')
    const optionListNode = parent.locator('ul li')
    const selectedItemNode = parent.locator('.mdc-select__selected-text')

    const codeEditorButton = parent.locator('.text-input__code-editor-button')
    const richtextEditorButton =
        parent.locator('.text-input__richtext-editor-button')

    const result = {
        main: parent,
        inputNode,
        richInputNode,

        activateCodeEditor: async () => {
            if (await richInputNode.count() === 0)
                await codeEditorButton.click()
        },
        activateRichtextEditor: async () => {
            if (await richInputNode.count() === 0)
                await richtextEditorButton.click()
        },

        getOptions: async () => {
            const result: Array<string> = []
            for (const listNode of await optionListNode.elementHandles())
                result.push(await listNode.textContent() ?? '')

            return result
        },
        isMenuOpen: async () =>
            (await menuNode
                    .and(parent.locator('.mdc-menu-surface--open'))
                    .count()
            ) > 0,

        fill: async (valueRepresentation: string) => {
            if (await richInputNode.count() > 0) {
                await richInputNode.fill(valueRepresentation)

                return
            }

            if (await inputNode.count() > 0) {
                await inputNode.fill(valueRepresentation)

                return
            }

            while (!(await result.isMenuOpen()))
                await selectedItemNode.click()
            for (const listNode of await optionListNode.elementHandles())
                if (await listNode.textContent() === valueRepresentation) {
                    if (await result.inputValue() !== valueRepresentation)
                        await listNode.click()
                    break
                }
        },
        inputValue: async () => {
            if (await inputNode.count() > 0)
                return await inputNode.inputValue()

            return await selectedItemNode.textContent()
        }
    }

    return result
}

export default textInput
