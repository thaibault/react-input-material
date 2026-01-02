import {expect, test} from '@playwright/test'

import inputs from '../src/components/Inputs/harness'

test.setTimeout(120_000)

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
        const numberOfInputs = await inputsHarness.inputs.count()
        await inputsHarness.remove()

        // then
        await expect(inputsHarness.inputs.count()).resolves
            .toStrictEqual(numberOfInputs - 1)
    }
)
