// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import type {Locator} from 'playwright-core'

import {timeout} from 'clientnode'

export const textInput = (parent: Locator) => {
    const inputNode = parent.locator('input, textarea')
    const richInputNode = parent.locator('[contenteditable]')

    const menuNode = parent.locator('.mdc-menu-surface')
    const optionListNode = parent.locator('ul li')
    const selectedItemNode = parent.locator('.mdc-select__selected-text')

    const codeEditorButton = parent.locator('.text-input__code-editor-button')
    const richtextEditorButton =
        parent.locator('.text-input__richtext-editor-button')

    /*
        NOTE: The plain input is animated out (and unmounted afterwards) while
        the editor (which brings its own hidden textarea) is already mounted.
        So wait until only one input node remains.
    */
    const waitForSingleInput = async () => {
        while (await inputNode.count() > 1)
            await timeout(20)
    }
    /*
        NOTE: Opening and closing the menu is animated. Clicking again before
        the animation has finished toggles the menu back, so wait until the
        requested state has settled before clicking again.
    */
    const animatingMenuNode = menuNode.and(parent.locator(
        '.mdc-menu-surface--animating-open, ' +
        '.mdc-menu-surface--animating-closed'
    ))
    const setMenuOpen = async (open: boolean) => {
        while (await result.isMenuOpen() !== open) {
            await selectedItemNode.click()

            let tries = 50
            while (
                tries-- > 0 &&
                (
                    await animatingMenuNode.count() > 0 ||
                    await result.isMenuOpen() !== open
                )
            )
                await timeout(20)
        }
    }

    const result = {
        main: parent,
        inputNode,
        richInputNode,

        activateCodeEditor: async () => {
            if (await richInputNode.count() === 0) {
                await codeEditorButton.click()
                await waitForSingleInput()
            }
        },
        activateRichtextEditor: async () => {
            if (await richInputNode.count() === 0) {
                await richtextEditorButton.click()
                await waitForSingleInput()
            }
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

            await setMenuOpen(true)
            for (const listNode of await optionListNode.elementHandles())
                if (await listNode.textContent() === valueRepresentation) {
                    while (await result.inputValue() !== valueRepresentation) {
                        await setMenuOpen(true)
                        await listNode.click()
                        await timeout(20)
                    }
                    break
                }
            await setMenuOpen(false)
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
