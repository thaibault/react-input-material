// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module wrap-strict */
'use strict'
/* !
    region header
    [Project page](https://torben.website/react-material-input)

    Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

    License
    -------

    This library written by Torben Sickert stand under a creative commons
    naming 3.0 unported license.
    See https://creativecommons.org/licenses/by/3.0/deed.de
    endregion
*/
// region imports
import {FunctionComponent, ReactElement, ReactNode, StrictMode} from 'react'
// endregion
/**
 * Generic strict wrapper component.
 * @param properties - Provided component properties.
 * @param properties.children - Components to wrap.
 * @param properties.strict - Indicates whether to wrap with strict indicating
 * component.
 * @returns React component.
 */
export const WrapStrict:FunctionComponent<{
    children:ReactNode
    strict:boolean
}> = ({children, strict}):ReactElement =>
    strict ? <StrictMode>{children}</StrictMode> : <>{children}</>

export default WrapStrict
