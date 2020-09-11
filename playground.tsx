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
    const [selectedState, setSelectedState] = useState()
    const onChange = (state) => setSelectedState(state)

    const [value2, setValue2] = useState('')

    return (<>
        <div className="inputs">

            <GenericInput onChange={onChange}/>

            <hr/>

            <GenericInput name="input1" onChange={onChange}/>
            <GenericInput model={{name: 'input1Model'}} onChange={onChange}/>

            <hr/>

            <GenericInput
                name="input2"
                onChange={onChange}
                onChangeValue={(value) => setValue2(value)}
                value={value2}
            />
            <GenericInput
                model={{name: 'input2Model', value: 'value2Model'}}
                onChange={onChange}
            />
            <hr/>

            <GenericInput
                declaration="Disabled"
                disabled
                name="input3"
                onChange={onChange}
                value="value3"
            />
            <GenericInput
                model={{
                    declaration: 'Disabled',
                    mutable: false,
                    name: 'input3Model',
                    value: 'value3Model'
                }}
                onChange={onChange}
            />

            <hr/>

            <GenericInput
                declaration="placeholder"
                name="input4"
                onChange={onChange}
                placeholder="input4"
                required
                trailingIcon="clear_preset"
            />
            <GenericInput
                icon="backup"
                model={{
                    declaration: 'placeholder',
                    name: 'input4Model',
                    nullable: false,
                    value: 'value4Model'
                }}
                onChange={onChange}
                placholder="input4Model"
                trailingIcon="clear_preset"
            />

            <hr/>

            <GenericInput
                declaration="pattern"
                description="input5Description"
                icon="search"
                name="input5"
                onChange={onChange}
                pattern="a+"
                placeholder="input5Placeholder"
                value="only a`s allowed"
            />
            <GenericInput
                model={{
                    declaration: 'pattern',
                    description: 'input5ModelDescription',
                    regularExpressionPattern: 'a+',
                    value: 'only a`s allowed'
                }}
                name="input5Model"
                onChange={onChange}
                placeholder="input5ModelPlaceholder"
                trailingIcon="search"
            />

            <hr/>

            <GenericInput
                declaration="password"
                description="input6Description"
                icon="search"
                name="passwordInput6"
                onChange={onChange}
                pattern="a+"
                placeholder="input6Placeholder"
                tooltip="Please type in your password."
                trailingIcon="password_preset"
                value="hans"
            />
            <GenericInput
                model={{
                    declaration: 'password',
                    description: 'input6ModelDescription',
                    regularExpressionPattern: 'a+',
                    value: 'hans'
                }}
                name="passwordInput6Model"
                onChange={onChange}
                placeholder="input6ModelPlaceholder"
                trailingIcon="password_preset"
            />

            <hr/>

            <GenericInput
                declaration="selection"
                description="input7Description"
                name="input7"
                onChange={onChange}
                placeholder="input7Placeholder"
                selection={['A', 'B', 'C']}
                required
                value="A"
            />
            <GenericInput
                model={{
                    declaration: 'selection',
                    description: 'input7ModelDescription',
                    name: 'input7Model',
                    mutable: false,
                    nullable: false,
                    selection: ['A', 'B', 'C'],
                    value: 'A'
                }}
                onChange={onChange}
                placeholder="input7ModelPlaceholder"
            />

            <GenericInput
                declaration="selection"
                description="input8Description"
                name="input8"
                onChange={onChange}
                selection={{a: 'A', b: 'B', c: 'C'}}
                required
                value="a"
            />
            <GenericInput
                model={{
                    declaration: 'selection',
                    description: 'input8ModelDescription',
                    name: 'input8Model',
                    nullable: false,
                    selection: {a: 'A', b: 'B', c: 'C'},
                    value: 'a'
                }}
                onChange={onChange}
            />

            <GenericInput
                declaration="text"
                description="input9Description"
                editor="text"
                name="input9"
                onChange={onChange}
                required
                rows={3}
                theme={{
                    primary: 'yellow',
                    secondary: 'blue'
                }}
                value="a"
            />
            <GenericInput
                model={{
                    declaration: 'text',
                    description: 'input9ModelDescription',
                    editor: 'text',
                    name: 'input9Model',
                    nullable: false,
                    value: 'a'
                }}
                onChange={onChange}
                rows={2}
            />

            <GenericInput
                declaration="code"
                description="input10Description"
                disabled
                editor="code"
                name="input10"
                onChange={onChange}
                rows={2}
                selectableEditor
                value="const value = 2"
            />
            <GenericInput
                model={{
                    declaration: 'code',
                    description: 'input10ModelDescription',
                    editor: 'code',
                    name: 'input10Model',
                    nullable: false,
                    value: 'const value = 2'
                }}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <GenericInput
                declaration="code"
                description="input11Description"
                editor="code"
                maximumLength={10}
                name="input11"
                onChange={onChange}
                required
                rows={2}
                selectableEditor
            />
            <GenericInput
                model={{
                    declaration: 'code',
                    description: 'input11ModelDescription',
                    editor: 'code',
                    name: 'input11Model',
                    nullable: false
                }}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

            <GenericInput
                declaration="richtext(raw)"
                description="input12Description"
                editor="richtext(raw)"
                name="input12"
                onChange={onChange}
                placeholder="Hello Mr. Smith,<br><br>this is a Placeholder."
                required
                rows={2}
                selectableEditor
            />
            <GenericInput
                model={{
                    declaration: 'richtext(simple)',
                    description: 'input12ModelDescription',
                    editor: 'richtext(simple)',
                    mutable: false,
                    name: 'input12Model',
                    nullable: false,
                    value: 'Hello Mr. Smith,<br><br>how are you?'
                }}
                onChange={onChange}
                rows={6}
                selectableEditor
            />

        </div>

        <pre className="outputs">{
            selectedState ?
                JSON.stringify(
                    selectedState,
                    Object.keys(selectedState).sort(),
                    4
                ) :
                ''
        }</pre>
    </>)
}
window.onload = ():Application =>
    ReactDOM.render(<Application />, document.querySelector('.app'))
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
