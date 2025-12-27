// region imports
import {expect, test} from '@playwright/test'
import fileInput from '../src/components/FileInput/harness'
// endregion
test.setTimeout(120_000)

test(
    'FileInput can get files via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-file-input').click()

        const fileInputHarness = fileInput(page.locator('.file-input').first())

        // when
        await fileInputHarness.fillFiles()

        // then
        expect(await fileInputHarness.getFiles()).toStrictEqual([])
    }
)
