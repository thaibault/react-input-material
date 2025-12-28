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

        getOptions: async () => {
            const result = []
            for (const listNode of await parent.locator(
                'ul li'
            ).elementHandles())
                result.push(await listNode.textContent())

            return result
        },

        fill: inputNode.fill.bind(inputNode),
        inputValue: inputNode.inputValue.bind(inputNode)
    }
}

export default textInput
