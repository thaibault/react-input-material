<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]torben.website) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
3.0 unported license. See https://creativecommons.org/licenses/by/3.0/deed.de
endregion -->

Project status
--------------

[![npm](https://img.shields.io/npm/v/react-input-material?color=%23d55e5d&label=npm%20package%20version&logoColor=%23d55e5d&style=for-the-badge)](https://www.npmjs.com/package/react-input-material)
[![npm downloads](https://img.shields.io/npm/dy/react-input-material.svg?style=for-the-badge)](https://www.npmjs.com/package/react-input-material)

[![build](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/build.yaml?style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/build.yaml)
[![build push package](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/build-package-and-push.yaml?label=build%20push%20package&style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/build-package-and-push.yaml)

[![check types](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/check-types.yaml?label=check%20types&style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/check-types.yaml)
[![lint](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/lint.yaml?label=lint&style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/lint.yaml)
[![test](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/test-coverage-report.yaml?label=test&style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/test-coverage-report.yaml)

[![code coverage](https://img.shields.io/coverallsCoverage/github/thaibault/react-input-material?label=code%20coverage&style=for-the-badge)](https://coveralls.io/github/thaibault/react-input-material)

[![deploy web documentation](https://img.shields.io/github/actions/workflow/status/thaibault/react-input-material/deploy-web-documentation.yaml?label=deploy%20web%20documentation&style=for-the-badge)](https://github.com/thaibault/react-input-material/actions/workflows/deploy-web-documentation.yaml)
[![web documentation](https://img.shields.io/website-up-down-green-red/https/torben.website/react-input-material.svg?label=web-documentation&style=for-the-badge)](https://torben.website/react-input-material)

Use case
--------

Reusable material design based input field with support for (richt-)text, code,
selections, numbers, dates and so on.

<!--|deDE:Installation-->
Installation
------------

You can install via package manager, simply download the compiled version as
zip file here and inject or request via cdn in HTML:
<!--deDE:
    Sie können das Paket über den Paketmanager installieren oder einfach die
    kompilierte Version als ZIP-Datei hier herunterladen und in HTML einbinden
    oder über ein CDN abrufen:
-->

```bash
npm install react-input-material
```

Examples
--------

### Simple uncontrolled input

```TypeScript
const Application = () =>
    <TextInput<string>
        name="simpleInput"
        onChange={({value, invalid}) => {
            console.log('Set value', value)
            if (invalid)
                console.log('Value is invalid!')
        }}
    />
```

### Simple controlled one

```TypeScript
const Application = () => {
    const [value, setValue] = useState<null | string>(null)

    return <TextInput<null | string>
        name = "simpleInputControlled"
        onChangeValue = {setValue}
        value = {value}
    />
}
```

### Complex rich text input

```TypeScript
const Application = () =>
    <TextInput<string>
        className="text-input--richtext-editor"

        declaration="richtext"
        description="Please your styled text here."
        name="RichText"
        placeholder="Hello Mr. Smith,<br><br>this is a Placeholder."
        
        editor="richtext"
        rows={6}
        selectableEditor
        
        initialValue="Hello Mr. Smith,<br><br>how are you?"
        minimumLength={10}
        maximumLength={100}
        required

        onChangeValue={(value) => {
            console.log('Current value is', value)
        }}
    />
```
