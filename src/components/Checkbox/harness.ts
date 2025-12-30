// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const checkboxInput = (parent: Locator) => {
    const inputNode = parent.locator('input')

    return {
        main: parent,
        inputNode,

        check: inputNode.check.bind(inputNode),
        uncheck: inputNode.uncheck.bind(inputNode),
        setChecked: inputNode.setChecked.bind(inputNode),

        isChecked: () => inputNode.isChecked()
    }
}

export default checkboxInput
