// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'
import {formatEndUserTime} from 'react-generic-tools/endToEndTestHelper'

import {textInput} from '../TextInput/harness'

export const intervalInput = (parent: Locator) => {
    const startInput = textInput(parent.locator('.interval__start'))
    const endInput = textInput(parent.locator('.interval__end'))

    const result = {
        main: parent,
        startInput,
        endInput,

        fillStart: startInput.fill.bind(startInput),
        startInputValue: startInput.inputValue.bind(startInput),

        fillEnd: endInput.fill.bind(endInput),
        endInputValue: endInput.inputValue.bind(endInput),

        fill: async (
            start: Date | number | string, end: Date | number | string
        ) => {
            /*
                NOTE: End time should be set first to avoid having a race
                conditions between updates of end time based on start time.
            */
            await result.fillEnd(formatEndUserTime(new Date(end)))
            await result.fillStart(formatEndUserTime(new Date(start)))
        }
    }

    return result
}

export default intervalInput
