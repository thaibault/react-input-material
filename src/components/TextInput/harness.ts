// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const textInput = (parent: Locator) => {
    const input = parent.locator('input')

    return {
        main: parent,
        fill: input.fill.bind(input),
        inputValue: input.inputValue.bind(input)
    }
}

export default textInput
