import {expect, test} from '@playwright/test'

import textInput from '../src/components/TextInput/harness'

test.setTimeout(120_000)

test(
    'Simple TextInput can get value via harness.',
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

test.only(
    'Textarea TextInput can get value via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-text').click()

        const textareaTextInput = textInput(page.locator(
            '.playground__inputs__text-input .text-input'
        ).first())

        console.log('A', textareaTextInput.inputNode)
        // when
        await textareaTextInput.fill('test-input')

        // then
        expect(await textareaTextInput.inputValue()).toStrictEqual('test-input')
    }
)

test(
    'Richtext TextInput can get value via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-text').click()

        const richtextTextInput = textInput(page.locator(
            '.playground__inputs__text-input .text-input'
        ).first())

        // when
        await richtextTextInput.fill('test-input')

        // then
        expect(await richtextTextInput.inputValue()).toStrictEqual('test-input')
    }
)

test(
    'Code TextInput can get value via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-text').click()

        const codeTextInput = textInput(page.locator(
            '.playground__inputs__text-input .text-input'
        ).first())

        // when
        await codeTextInput.fill('test-input')

        // then
        expect(await codeTextInput.inputValue()).toStrictEqual('test-input')
    }
)

test(
    'TextInput can get date time via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-time').click()

        const simpleTextInput = textInput(page.locator(
            '.playground__inputs__time-input .text-input'
        ).first())

        // when
        const now = new Date()
        /*
            NOTE: Playwright does not work with the local date time string
            representation like it is visible in browser.
        */
        // const formattedDate = now.toLocaleDateString()
        const formattedDate =
            `${String(now.getFullYear())}-` +
            `${String(now.getMonth() + 1).padStart(2, '0')}-` +
            String(now.getDate()).padStart(2, '0')
        await simpleTextInput.fill(formattedDate)

        // then
        expect(await simpleTextInput.inputValue())
            .toStrictEqual(formattedDate)
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
        const lastOption: string = (await selectInput.getOptions()).pop() ?? ''
        await selectInput.fill(lastOption)

        // then
        expect(await selectInput.inputValue()).toStrictEqual(lastOption)
    }
)
