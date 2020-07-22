// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module simple-input */
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
import React, {Component} from 'react'
import {TextField} from '@rmwc/textfield'
// endregion
export class SimpleInput extends Component {
    constructor(properties) {
        super(properties)
        this.state = {
            value: ''
        }
    }
    onChange(event:Event):void {
        this.setState({value: event.target.value})
    }
    render():Component {
        return (
            <TextField
                label="Validate Pattern"
                onChange={this.onChange.bind(this)}
                pattern="[A-Za-z]{3}"
                value={this.state.value}
            />
        )
    }
}
export default SimpleInput
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
