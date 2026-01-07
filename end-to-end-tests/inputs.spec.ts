import {expect, test} from '@playwright/test'

import inputs from '../src/components/Inputs/harness'

test(
    'Inputs can manage nested inputs via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-inputs').click()

        const inputsHarness = inputs(page.locator(
            '.playground__inputs__inputs .inputs'
        ).first())

        // when
        await inputsHarness.add()
        const numberOfInputs = await inputsHarness.items.count()
        await inputsHarness.remove()

        // then
        await expect(inputsHarness.items.count()).resolves
            .toStrictEqual(numberOfInputs - 1)
    }
)
