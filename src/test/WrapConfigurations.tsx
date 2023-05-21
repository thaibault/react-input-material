// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
'use strict'
/* !
    region header
    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {afterEach, beforeEach, describe, expect, test} from '@jest/globals'
import prepareTestEnvironment from 'react-generic-tools/testHelper'

import WrapConfigurations from '../components/WrapConfigurations'
// endregion
const {render} = prepareTestEnvironment(beforeEach, afterEach)

describe('WrapConfigurations', ():void => {
    test('render', ():void => expect(
        render(
            <WrapConfigurations><div className="test"/></WrapConfigurations>
        )!.querySelector('.test')
    ).toBeDefined())
})
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
