import {formatEndUserDate} from 'react-generic-tools'

import {expect, test} from '@playwright/test'

import interval from '../src/components/Interval/harness'

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
        const formattedStartTime = formatEndUserTime(now)
        const formattedEndTime = formatEndUserTime(later)

        await intervalHarness.fillStart(formattedStartTime)
        await intervalHarness.fillEnd(formattedEndTime)

        // then
        expect(await intervalHarness.startInputValue())
            .toStrictEqual(formattedStartTime)
        expect(await intervalHarness.endInputValue())
            .toStrictEqual(formattedEndTime)
    }
)
