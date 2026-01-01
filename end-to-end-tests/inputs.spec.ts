import {expect, test} from '@playwright/test'

import interval from '../src/components/Interval/harness'

test.setTimeout(120_000)

test(
    'Inputs can get nested values via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-inputs').click()

        const intervalHarness = interval(page.locator(
            '.playground__inputs__inputs .inputs'
        ).first())

        // when

        // then

    }
)
