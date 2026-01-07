// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module harness */
'use strict'

import {Locator} from 'playwright-core'

export const inputsInput = (parent: Locator) => {
    const addButton = parent.locator('.inputs__add__button')
    const removeButtons = parent.locator('.inputs__item__remove')
    const items = parent.locator('.inputs__item')

    return {
        main: parent,

        items,
        removeButtons,

        addButton,

        add: () => addButton.click(),
        remove: (index?: number) => {
            if (typeof index === 'number')
                return removeButtons.nth(index).click()

            return removeButtons.last().click()
        }
    }
}

export default inputsInput
