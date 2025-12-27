// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {FirstParameter} from 'clientnode'
import {FileChooser, Locator, Page} from 'playwright-core'

export const fileInput = (parent: Locator) => {
    const result = {
        main: parent,
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
        getFiles: async () => result.main.locator('input').inputValue()
    }

    return result
}

export default fileInput
