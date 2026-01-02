import {expect, test} from '@playwright/test'

import interval from '../src/components/Interval/harness'

test.setTimeout(120_000)

test(
    'Interval can get start and end values via harness.',
    async ({page}) => {
        // given
        await page.goto('/')
        await page.locator('.tab-bar__tap-interval').click()

        const intervalHarness = interval(page.locator(
            '.playground__inputs__interval .interval'
        ).first())

        // when
        const now = new Date()
        const later = new Date(now)
        later.setHours(later.getHours() + 1)
        /*
            NOTE: Playwright does not work with the local date time string
            representation like it is visible in browser.
        */
        // const formattedStartTime = now.toLocaleTimeString()
        // const formattedEndTime = later.toLocaleTimeString()
        const formattedStartTime =
            `${String(now.getHours()).padStart(2, '0')}:` +
            String(now.getMinutes()).padStart(2, '0')
        const formattedEndTime =
            `${String(later.getHours()).padStart(2, '0')}:` +
            String(later.getMinutes()).padStart(2, '0')

        await intervalHarness.fillStart(formattedStartTime)
        await intervalHarness.fillEnd(formattedEndTime)

        // then
        expect(await intervalHarness.startInputValue())
            .toStrictEqual(formattedStartTime)
        expect(await intervalHarness.endInputValue())
            .toStrictEqual(formattedEndTime)
    }
)
