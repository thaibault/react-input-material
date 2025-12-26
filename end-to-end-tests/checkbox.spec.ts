// region imports
import {expect, test} from '@playwright/test'
import textInput from '../src/components/Checkbox/harness'
// endregion
test.setTimeout(120_000)

test(
    'TODO',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-checkbox').click()
        // TODO optimize selector
        const checkbox = textInput(page.locator('.checkbox').first())

        // when
        await checkbox.check()

        // then
        expect(await checkbox.isChecked()).toStrictEqual(true)
    }
)
