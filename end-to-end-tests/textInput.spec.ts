import {expect, test} from '@playwright/test'

import textInput from '../src/components/TextInput/harness'

test.setTimeout(120_000)

test(
    'TextInput can get value via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-simple').click()

        const simpleTextInput = textInput(page.locator(
            '.playground__inputs__simple-input .text-input'
        ).first())

        // when
        await simpleTextInput.fill('test-input')

        // then
        expect(await simpleTextInput.inputValue()).toStrictEqual('test-input')
    }
)

test(
    'TextInput can get value from selection via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-selection').click()

        const selectInput = textInput(page.locator(
            '.playground__inputs__selection-input .text-input'
        ).first())

        // when
        const lastOption = (await selectInput.getOptions()).pop()
        await selectInput.fill(lastOption as string)

        // then
        expect(await selectInput.inputValue()).toStrictEqual(lastOption)
    }
)
