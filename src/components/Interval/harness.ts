// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

import {textInput} from '../TextInput/harness'

export const intervalInput = (parent: Locator) => {
    const startInput = textInput(parent.locator('.interval__start'))
    const endInput = textInput(parent.locator('.interval__end'))

    return {
        main: parent,
        startInput,
        endInput,

        fillStart: startInput.fill.bind(startInput),
        startInputValue: startInput.inputValue.bind(startInput),

        fillEnd: endInput.fill.bind(endInput),
        endInputValue: endInput.inputValue.bind(endInput)
    }
}

export default intervalInput
