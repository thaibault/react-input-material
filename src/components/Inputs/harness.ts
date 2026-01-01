// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const inputsInput = (parent: Locator) => {
    return {
        main: parent
    }
}

export default inputsInput
