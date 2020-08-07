// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module react-input-material */
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
import React, {FunctionComponent, useState} from 'react'
import ReactDOM from 'react-dom'

import GenericInput from './components/GenericInput'
// endregion
const Application:FunctionComponent<{}> = () => {
    const [value2, setValue2] = useState('')

    return (<>
{/*
        <generic-input></generic-input>

        <hr/>

        <generic-input name="input1"></generic-input>
        <generic-input model="{name: 'input1Model'}"></generic-input>

        <hr/>
*/}
        <GenericInput
            name="input2"
            onChange={({value}) => setValue2(value)}
            value={value2}
        />
{/*
        <generic-input model="{name: 'input2Model', value: 'value2Model'}">
        </generic-input>

        <hr/>

        <generic-input
            declaration="Disabled"
            disabled
            name="input3"
            value="'value3'"
        ></generic-input>
        <generic-input
            model="{declaration: 'Disabled', mutable: false, name: 'input3Model', value: 'value3Model'}"
        ></generic-input>

        <hr/>

        <generic-input
            declaration="placeholder"
            name="input4"
            placeholder="input4"
            required
        ></generic-input>
        <generic-input
            icon="backup"
            model="{declaration: 'placeholder', name: 'input4Model', nullable: false, value: 'value4Model'}"
            placholder="input4Model"
            trailing-icon="{icon: 'clear', onClick: (event) => {event.preventDefault(); this.value = ''}}"
        ></generic-input>

        <hr/>

        <generic-input
            declaration="pattern"
            description="input5Description"
            icon="search"
            name="input5"
            pattern="a+"
            placeholder="input5Placeholder"
            value="'only a`s allowed'"
        ></generic-input>
        <generic-input
            model="{declaration: 'pattern', description: 'input5ModelDescription', regularExpressionPattern: 'a+', value: 'only a`s allowed'}"
            name="input5Model"
            placeholder="input5ModelPlaceholder"
            trailing-icon="'search'"
        ></generic-input>

        <hr/>

        <generic-input
            declaration="selection"
            description="input6Description"
            name="input6"
            placeholder="input6Placeholder"
            selection="['A', 'B', 'C']"
            required
            value="'A'"
        ></generic-input>
        <generic-input
            model="{declaration: 'selection', description: 'input6ModelDescription', name: 'input6Model', nullable: false, selection: ['A', 'B', 'C'], value: 'A'}"
            placeholder="input6ModelPlaceholder"
        ></generic-input>

        <generic-input
            declaration="selection"
            description="input7Description"
            name="input7"
            selection="{a: 'A', b: 'B', c: 'C'}"
            required
            value="'a'"
        ></generic-input>
        <generic-input
            model="{declaration: 'selection', description: 'input7ModelDescription', name: 'input7Model', nullable: false, selection: {a: 'A', b: 'B', c: 'C'}, value: 'a'}"
        ></generic-input>

        <generic-input
            declaration="text"
            description="input8Description"
            editor="text"
            name="input8"
            required
            rows="3"
            value="'a'"
        ></generic-input>
        <generic-input
            model="{declaration: 'text', description: 'input8ModelDescription', editor: 'text', name: 'input8Model', nullable: false, value: 'a'}"
            rows="2"
        ></generic-input>

        <generic-input
            declaration="code"
            description="input9Description"
            disabled
            editor="code"
            name="input9"
            rows="2"
            value="'const value = 2'"
        ></generic-input>
        <generic-input
            model="{declaration: 'code', description: 'input9ModelDescription', editor: 'code', name: 'input9Model', nullable: false, value: 'const value = 2'}"
            rows="6"
        ></generic-input>

        <generic-input
            declaration="code"
            description="input10Description"
            editor="code"
            maximum-length="10"
            name="input10"
            required
            rows="2"
        ></generic-input>
        <generic-input
            model="{declaration: 'code', description: 'input10ModelDescription', editor: 'code', name: 'input10Model', nullable: false}"
            rows="6"
        ></generic-input>

        <generic-input
            declaration="richtext(raw)"
            description="input11Description"
            editor="richtext(raw)"
            name="input11"
            required
            rows="2"
            value="'Hello Mr. Smith,<br><br>how are you?'"
        ></generic-input>
        <generic-input
            model="{declaration: 'richtext(simple)', description: 'input11ModelDescription', editor: 'richtext(simple)', mutable: false, name: 'input11Model', nullable: false, value: 'Hello Mr. Smith,<br><br>how are you?'}"
            rows="6"
        ></generic-input>
*/}
    </>)
}
window.onload = ():Application =>
    ReactDOM.render(<Application />, document.querySelector('.inputs'))
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
