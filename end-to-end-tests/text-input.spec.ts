// region imports
import {expect, test} from '@playwright/test'
import textInput from '../src/components/TextInput/harness'
// endregion
test.setTimeout(120_000)

test(
    'TODO',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-simple').click()
        // TODO optimize selector
        const simpleTextInput = textInput(page.locator('.text-input').first())

        // when
        await simpleTextInput.fill('test-input')

        // then
        expect(await simpleTextInput.inputValue()).toStrictEqual('test-input')
    }
)
