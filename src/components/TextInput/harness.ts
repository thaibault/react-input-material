// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {BaseLocator} from 'react-generic-tools/endToEndTestHelper'

export const textInput = (parent: BaseLocator) => {
    const input = parent.locator('input')

    return {
        main: parent,
        fill: input.fill.bind(input),
        inputValue: input.inputValue.bind(input)
    }
}

export default textInput
