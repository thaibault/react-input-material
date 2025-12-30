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

        check: () => inputNode.check(),
        uncheck: async () => inputNode.uncheck(),

        isChecked: () => inputNode.isChecked()
    }
}

export default checkboxInput
