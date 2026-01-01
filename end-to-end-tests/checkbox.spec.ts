import {expect, test} from '@playwright/test'

import checkbox from '../src/components/Checkbox/harness'

test.setTimeout(120_000)

test(
    'Checkbox can get state via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-checkbox').click()

        const checkboxHarness = checkbox(page.locator(
            '.playground__inputs__checkbox .checkbox'
        ).first())

        // when
        await checkboxHarness.check()

        // then
        expect(await checkboxHarness.isChecked()).toStrictEqual(true)
        await checkboxHarness.uncheck()
        expect(await checkboxHarness.isChecked()).toStrictEqual(false)
    }
)
