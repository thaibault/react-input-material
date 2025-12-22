// region imports
import {expect, test} from '@playwright/test'
import textInput from '../src/components/TextInput/harness'
// endregion
test.setTimeout(120_000)

test(
    'TODO',
    async ({page}) => {
        // given
        await page.locator('tab-bar__tap-simple').click()
        const simpleTextInput = textInput(page.locator('[name="simpleInput1]'))

        // when
        simpleTextInput.fill('test-input')

        // then
        expect(simpleTextInput.inputValue).toBe('test-input')
    }
)
