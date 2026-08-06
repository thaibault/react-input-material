// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import type {FirstParameter} from 'clientnode'
import type {FileChooser, Locator, Page} from 'playwright-core'

import textInput from '../TextInput/harness'

export const fileInput = (parent: Locator) => {
    const inputNode = parent.locator('input[type=file]')
    const nameInput = textInput(parent.locator('.text-input'))

    const result = {
        main: parent,
        inputNode,
        nameInput,

        openFileChooser: () => result.main.locator('button').click(),
        getFileChooser: async (page: Page) => {
            const fileChooserPromise = page.waitForEvent('filechooser')
            void result.openFileChooser()
            return fileChooserPromise
        },

        fillFiles: async (
            page: Page, files: FirstParameter<FileChooser['setFiles']>
        ) => {
            const fileChooser = await result.getFileChooser(page)
            await fileChooser.setFiles(files)
        },
        getFiles: async () => inputNode.inputValue()
    }

    return result
}

export default fileInput
