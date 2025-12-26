// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const intervalInput = (parent: Locator) => {
    const result = {
        main: parent
    }

    return result
}

export default intervalInput
