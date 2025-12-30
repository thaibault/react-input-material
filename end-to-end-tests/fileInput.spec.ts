// region imports
import {resolve} from 'path'
import {expect, test} from '@playwright/test'

import fileInput from '../src/components/FileInput/harness'
// endregion
test.setTimeout(120_000)

test(
    'FileInput can get files via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-file').click()

        const fileInputHarness = fileInput(page.locator(
            '.playground__inputs__file-input .file-input'
        ).first())

        // when
        await fileInputHarness.fillFiles(
            page, resolve(__dirname, 'example.jpg')
        )

        // then
        expect(await fileInputHarness.getFiles()).toMatch(/example.jpg$/)
    }
)
