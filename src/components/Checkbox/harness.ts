// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const checkboxInput = (parent: Locator) => {
    const result = {
        main: parent
    }

    return result
}

export default checkboxInput
