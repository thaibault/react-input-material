import {expect, test} from '@playwright/test'
import interval from '../src/components/Interval/harness'

test.setTimeout(120_000)

test(
    'Interval can get start and end values via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-checkbox').click()

        const intervalHarness = interval(page.locator(
            '.playground__inputs__checkbox .checkbox'
        ).first())

        // when
        await intervalHarness.fill()

        // then

    }
)
