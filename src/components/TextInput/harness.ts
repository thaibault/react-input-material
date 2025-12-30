// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const textInput = (parent: Locator) => {
    const inputNode = parent.locator('input')
    const optionList = parent.locator('ul li')
    const selectedItem = parent.locator('.mdc-select__selected-text')

    return {
        main: parent,
        inputNode,

        getOptions: async () => {
            const result: Array<string> = []
            for (const listNode of await optionList.elementHandles())
                result.push(await listNode.textContent() ?? '')

            return result
        },

        fill: async (valueRepresentation: string) => {
            if (await inputNode.count() > 0) {
                await inputNode.fill(valueRepresentation)

                return
            }

            await selectedItem.click()
            for (const listNode of await optionList.elementHandles())
                if (await listNode.textContent() === valueRepresentation) {
                    await listNode.click()
                    break
                }
        },
        inputValue: async () => {
            if (await inputNode.count() > 0)
                return await inputNode.inputValue()

            return await selectedItem.textContent()
        }
    }
}

export default textInput
