// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const textInput = (parent: Locator) => {
    const inputNode = parent.locator('input')

    return {
        main: parent,
        inputNode,

        fill: inputNode.fill.bind(inputNode),
        inputValue: inputNode.inputValue.bind(inputNode)
    }
}

export default textInput
