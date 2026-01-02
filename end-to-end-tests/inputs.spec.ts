import {expect, test} from '@playwright/test'

import inputs from '../src/components/Inputs/harness'

test.setTimeout(120_000)

test(
    'Inputs can get nested values via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-inputs').click()

        const inputsHarness = inputs(page.locator(
            '.playground__inputs__inputs .inputs'
        ).first())

        // when
        const numberOfInputs = await inputsHarness.inputs.count()
        await inputsHarness.remove()

        // then
        expect(await inputsHarness.inputs.count()).toEqual(numberOfInputs - 1)
    }
)
