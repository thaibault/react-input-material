<!-- !/usr/bin/env markdown
-*- coding: utf-8 -*-
region header
Copyright Torben Sickert (info["~at~"]tsickert.com) 16.12.2012

License
-------

This library written by Torben Sickert stands under a creative commons naming
4.0 international license.
See https://creativecommons.org/licenses/by/4.0/deed.de
endregion -->

<!--|deDE:Projektstatus-->
<!--|frFR:Statut du projet-->
Project Status
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
[![web documentation](https://img.shields.io/website-up-down-green-red/https/tsickert.com/react-input-material.svg?label=web-documentation&style=for-the-badge)](https://tsickert.com/react-input-material)


<!--|deDE:Einsatzmöglichkeiten-->
<!--|frFR:Cas d'utilisation-->
Use case
--------

Form inputs for React in Material Design, built on
[RMWC](https://rmwc.io). One "TextInput" component covers plain and multiline
text, numbers, currencies, dates and times, selections with search and
suggestions, a code editor and a rich text editor. Further components handle
checkboxes, files, time intervals and lists of inputs. All of them share the
same model: declare constraints like "required", "minimum" or "pattern" and
the component validates, shows messages and reports value and validation
state to you.
<!--deDE:
    Formulareingaben für React im Material Design, aufgebaut auf
    [RMWC](https://rmwc.io). Eine einzige Komponente "TextInput" deckt
    einfachen und mehrzeiligen Text, Zahlen, Währungen, Datums- und
    Zeitangaben, Auswahlen mit Suche und Vorschlägen, einen Code-Editor und
    einen Rich-Text-Editor ab. Weitere Komponenten behandeln Checkboxen,
    Dateien, Zeitintervalle und Listen von Eingaben. Alle teilen dasselbe
    Modell: Sie deklarieren Bedingungen wie "required", "minimum" oder
    "pattern", und die Komponente validiert, zeigt Meldungen an und meldet
    Ihnen Wert und Validierungszustand.
-->
<!--frFR:
    Des champs de formulaire pour React en Material Design, basés sur
    [RMWC](https://rmwc.io). Un seul composant "TextInput" couvre le texte
    simple et multiligne, les nombres, les devises, les dates et heures, les
    sélections avec recherche et suggestions, un éditeur de code et un éditeur
    de texte enrichi. D'autres composants gèrent les cases à cocher, les
    fichiers, les intervalles de temps et les listes de champs. Tous partagent
    le même modèle: déclarez des contraintes comme "required", "minimum" ou
    "pattern" et le composant valide, affiche des messages et vous transmet la
    valeur et l'état de validation.
-->

Features included:
<!--deDE:Enthaltene Funktionen:-->
<!--frFR:Fonctionnalités incluses:-->

- "TextInput": Text, numbers, currencies, dates, times, selections, code and
  rich text.<!--deDE:"TextInput": Text, Zahlen, Währungen, Datum, Uhrzeit, Auswahlen, Code und Rich Text.--><!--frFR:"TextInput": Texte, nombres, devises, dates, heures, sélections, code et texte enrichi.-->
- "Checkbox", "FileInput" with preview, "Interval" for time ranges and
  "Inputs" for dynamic lists of any input.<!--deDE:"Checkbox", "FileInput" mit Vorschau, "Interval" für Zeiträume und "Inputs" für dynamische Listen beliebiger Eingaben.--><!--frFR:"Checkbox", "FileInput" avec aperçu, "Interval" pour les plages horaires et "Inputs" pour des listes dynamiques de champs quelconques.-->
- Declarative validation with customizable messages.<!--deDE:Deklarative Validierung mit anpassbaren Meldungen.--><!--frFR:Validation déclarative avec messages personnalisables.-->
- Controlled and uncontrolled usage.<!--deDE:Kontrollierte und unkontrollierte Verwendung.--><!--frFR:Utilisation contrôlée et non contrôlée.-->
- Editors are loaded lazily on first use.<!--deDE:Editoren werden erst bei der ersten Verwendung geladen.--><!--frFR:Les éditeurs ne sont chargés qu'à la première utilisation.-->
- Theming, tooltips and Playwright harnesses for end-to-end tests.<!--deDE:Theming, Tooltips und Playwright-Harnesses für End-to-End-Tests.--><!--frFR:Thèmes, infobulles et harnais Playwright pour les tests de bout en bout.-->

<div class="wd-table-of-contents">
    <h2 id="content">Content<!--deDE:Inhalt--><!--frFR:Contenu--></h2>
    <!--wd-table-of-contents-->
</div>

Installation
------------

Install the package together with the libraries it builds on:
<!--deDE:
    Installieren Sie das Paket zusammen mit den Bibliotheken, auf denen es
    aufbaut:
-->
<!--frFR:
    Installez le paquet avec les bibliothèques sur lesquelles il repose:
-->

```bash
npm install \
    react-input-material \
    clientnode core-js prop-types react react-dom \
    react-generic-animate react-generic-dummy react-generic-tools \
    react-transition-group react-useanimations blob-util spark-md5 \
    material-icons \
    @rmwc/card @rmwc/checkbox @rmwc/circular-progress @rmwc/icon \
    @rmwc/icon-button @rmwc/menu @rmwc/select @rmwc/textfield @rmwc/theme \
    @rmwc/typography
```

Include the styles and the icon font once, e.g. in your main stylesheet:
<!--deDE:
    Binden Sie die Styles und die Icon-Schrift einmal ein, z. B. in Ihrem
    Haupt-Stylesheet:
-->
<!--frFR:
    Intégrez les styles et la police d'icônes une fois, par exemple dans
    votre feuille de style principale:
-->

```CSS
@import "material-icons/iconfont/material-icons.css";
@import "react-input-material/index.css";
```

Then use the components:
<!--deDE:Danach verwenden Sie die Komponenten:-->
<!--frFR:Utilisez ensuite les composants:-->

```TypeScript
import {
    Checkbox, FileInput, Inputs, Interval, TextInput
} from 'react-input-material'
```

<!--|deDE:Optionale Funktionen-->
<!--|frFR:Fonctionnalités optionnelles-->
### Optional features

Some features need additional packages:
<!--deDE:Einige Funktionen benötigen zusätzliche Pakete:-->
<!--frFR:Certaines fonctionnalités nécessitent des paquets supplémentaires:-->

- Tooltips: "@rmwc/tooltip".<!--deDE:Tooltips: "@rmwc/tooltip".--><!--frFR:Infobulles: "@rmwc/tooltip".-->
- Code editor: "@codemirror/autocomplete", "@codemirror/commands",
  "@codemirror/lang-css", "@codemirror/lang-javascript",
  "@codemirror/language", "@codemirror/lint", "@codemirror/search",
  "@codemirror/state" and "@codemirror/view".<!--deDE:Code-Editor: "@codemirror/autocomplete", "@codemirror/commands", "@codemirror/lang-css", "@codemirror/lang-javascript", "@codemirror/language", "@codemirror/lint", "@codemirror/search", "@codemirror/state" und "@codemirror/view".--><!--frFR:Éditeur de code: "@codemirror/autocomplete", "@codemirror/commands", "@codemirror/lang-css", "@codemirror/lang-javascript", "@codemirror/language", "@codemirror/lint", "@codemirror/search", "@codemirror/state" et "@codemirror/view".-->
- Rich text editor: "@tiptap/core", "@tiptap/extensions", "@tiptap/react" and
  "@tiptap/starter-kit".<!--deDE:Rich-Text-Editor: "@tiptap/core", "@tiptap/extensions", "@tiptap/react" und "@tiptap/starter-kit".--><!--frFR:Éditeur de texte enrichi: "@tiptap/core", "@tiptap/extensions", "@tiptap/react" et "@tiptap/starter-kit".-->

If you do not install the packages of a feature, point them to the included
empty shim so that your bundler can still resolve them. The feature is then
left out. Example for the rich text editor with webpack, the code editor and
tooltip packages work the same way:
<!--deDE:
    Installieren Sie die Pakete einer Funktion nicht, verweisen Sie sie auf
    den enthaltenen leeren Platzhalter, damit Ihr Bundler sie trotzdem
    auflösen kann. Die Funktion wird dann weggelassen. Beispiel für den
    Rich-Text-Editor mit webpack, die Pakete des Code-Editors und der
    Tooltips funktionieren genauso:
-->
<!--frFR:
    Si vous n'installez pas les paquets d'une fonctionnalité, faites-les
    pointer vers le substitut vide inclus afin que votre bundler puisse
    toujours les résoudre. La fonctionnalité est alors omise. Exemple pour
    l'éditeur de texte enrichi avec webpack, les paquets de l'éditeur de code
    et des infobulles fonctionnent de la même manière:
-->

```JavaScript
export default {
    resolve: {
        alias: {
            '@tiptap/core$': 'react-input-material/shims/optionals',
            '@tiptap/extensions$': 'react-input-material/shims/optionals',
            '@tiptap/react$': 'react-input-material/shims/optionals',
            '@tiptap/starter-kit$': 'react-generic-dummy'
        }
    }
}
```

<!--|deDE:Grundlagen-->
<!--|frFR:Notions de base-->
Basics
------

Each input reports its state via callbacks. "onChangeValue" receives the new
value, "onChange" receives all current properties including "value", "valid",
"invalid", "dirty" and "touched":
<!--deDE:
    Jede Eingabe meldet ihren Zustand über Callbacks. "onChangeValue" erhält
    den neuen Wert, "onChange" alle aktuellen Eigenschaften einschließlich
    "value", "valid", "invalid", "dirty" und "touched":
-->
<!--frFR:
    Chaque champ signale son état via des callbacks. "onChangeValue" reçoit
    la nouvelle valeur, "onChange" toutes les propriétés actuelles, y compris
    "value", "valid", "invalid", "dirty" et "touched":
-->

<!--|deDE:Einfache, unkontrollierte Eingabe-->
<!--|frFR:Champ simple non contrôlé-->
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

<!--|deDE:Einfache kontrollierte Eingabe-->
<!--|frFR:Champ simple contrôlé-->
### Simple controlled input

Pass "value" to control the input yourself. Use "initialValue" or "default"
to only set a starting value:
<!--deDE:
    Übergeben Sie "value", um die Eingabe selbst zu kontrollieren. Mit
    "initialValue" oder "default" setzen Sie nur einen Startwert:
-->
<!--frFR:
    Passez "value" pour contrôler le champ vous-même. Utilisez
    "initialValue" ou "default" pour ne définir qu'une valeur de départ:
-->

```TypeScript
const Application = () => {
    const [value, setValue] = useState<null | string>(null)

    return <TextInput<null | string>
        name="simpleInputControlled"
        onChangeValue={setValue}
        value={value}
    />
}
```

<!--|deDE:Gemeinsame Eigenschaften-->
<!--|frFR:Propriétés communes-->
### Common properties

- "name", "declaration" (label), "description" and "placeholder".<!--deDE:"name", "declaration" (Beschriftung), "description" und "placeholder".--><!--frFR:"name", "declaration" (libellé), "description" et "placeholder".-->
- "required", "minimum", "maximum", "minimumLength", "maximumLength",
  "pattern" and "invertedPattern" for validation, each with a matching
  "...Text" property to customize the message.<!--deDE:"required", "minimum", "maximum", "minimumLength", "maximumLength", "pattern" und "invertedPattern" zur Validierung, jeweils mit einer passenden Eigenschaft "...Text", um die Meldung anzupassen.--><!--frFR:"required", "minimum", "maximum", "minimumLength", "maximumLength", "pattern" et "invertedPattern" pour la validation, chacune avec une propriété "...Text" correspondante pour personnaliser le message.-->
- "showInitialValidationState": Shows validation errors before the user
  touched the input.<!--deDE:"showInitialValidationState": Zeigt Validierungsfehler, bevor der Benutzer die Eingabe berührt hat.--><!--frFR:"showInitialValidationState": Affiche les erreurs de validation avant que l'utilisateur n'ait touché le champ.-->
- "disabled", "tooltip", "leadingIcon" and "trailingIcon".<!--deDE:"disabled", "tooltip", "leadingIcon" und "trailingIcon".--><!--frFR:"disabled", "tooltip", "leadingIcon" et "trailingIcon".-->
- "type": "string" (default), "number", "integer", "float", "currency",
  "boolean", "date", "date-local", "datetime", "datetime-local", "time",
  "time-local", "week", "month" or "range".<!--deDE:"type": "string" (Standard), "number", "integer", "float", "currency", "boolean", "date", "date-local", "datetime", "datetime-local", "time", "time-local", "week", "month" oder "range".--><!--frFR:"type": "string" (par défaut), "number", "integer", "float", "currency", "boolean", "date", "date-local", "datetime", "datetime-local", "time", "time-local", "week", "month" ou "range".-->
- "model": All of the above as one object, e.g. generated from a backend
  schema.<!--deDE:"model": All das oben Genannte als ein Objekt, z. B. aus einem Backend-Schema erzeugt.--><!--frFR:"model": Tout ce qui précède sous forme d'un seul objet, par exemple généré à partir d'un schéma backend.-->

<!--|deDE:Beispiele-->
<!--|frFR:Exemples-->
Examples
--------

<!--|deDE:Zahlen-->
<!--|frFR:Nombres-->
### Numbers

```TypeScript
const Application = () =>
    <TextInput<number>
        declaration="Number"
        description="Place a number please."
        name="number"
        placeholder="100000"

        maximum={200000}
        minimum={10}
        required
        type="number"
    />
```

<!--|deDE:Universelle Datums-Eingabe-->
<!--|frFR:Saisie de date universelle-->
### Universal date input

Dates are handled as seconds since 1970 in UTC:
<!--deDE:Datumsangaben werden als Sekunden seit 1970 in UTC behandelt:-->
<!--frFR:Les dates sont traitées en secondes depuis 1970 en UTC:-->

```TypeScript
const Application = () =>
    <TextInput<number>
        default={
            new Date('2025-01-01T00:00:00.000Z')
                .getTime() / 1000
        }
        name="timeInput"
        type="date"
    />
```

<!--|deDE:Eingabe des lokalen Datums-->
<!--|frFR:Saisie de la date locale-->
### Local date input

```TypeScript
const Application = () =>
    <TextInput<string>
        default="2025-01-01T23:00:00.000Z"
        name="timeInput"
        type="date-local"
    />
```

<!--|deDE:Auswahl-->
<!--|frFR:Sélection-->
### Selection

```TypeScript
const Application = () =>
    <TextInput<string>
        declaration="Selection Example"
        name="Example selection"
        selection={['A', 'B', 'C']}
    />
```

<!--|deDE:Auswahl mit zugeordneten Beschriftungen-->
<!--|frFR:Sélection avec libellés associés-->
### Selection with mapped labels

```TypeScript
const Application = () =>
    <TextInput<string>
        name="Another selection example"
        required
        selection={[
            {value: 'A', label: 'a'},
            {value: 'B', label: 'b'},
            {value: 'C', label: 'c'}
        ]}
    />
```

<!--|deDE:Suche mit Vorschlägen-->
<!--|frFR:Recherche avec suggestions-->
### Search with suggestions

"suggestionCreator" may return suggestions directly or as promise, e.g. from a
server. Running requests are aborted via the given "abortController" when the
query changes:
<!--deDE:
    "suggestionCreator" kann Vorschläge direkt oder als Promise liefern, z. B.
    von einem Server. Laufende Anfragen werden über den übergebenen
    "abortController" abgebrochen, wenn sich die Suche ändert:
-->
<!--frFR:
    "suggestionCreator" peut retourner des suggestions directement ou sous
    forme de promesse, par exemple depuis un serveur. Les requêtes en cours
    sont annulées via l'"abortController" fourni lorsque la recherche change:
-->

```TypeScript
const Application = () =>
    <TextInput<string>
        name="person"
        searchSelection
        suggestionCreator={async ({abortController, query}) =>
            query.length < 3 ?
                [] :
                (await fetch(
                    `/api/people?query=${encodeURIComponent(query)}`,
                    {signal: abortController.signal}
                )).json()
        }
    />
```

<!--|deDE:Code-Editor-->
<!--|frFR:Éditeur de code-->
### Code editor

```TypeScript
const Application = () =>
    <TextInput<string>
        className="text-input--code-editor"

        editor="code(js)"
        rows={6}

        initialValue="const value = 2"
    />
```

<!--|deDE:Rich-Text-Eingabe-->
<!--|frFR:Saisie de texte enrichi-->
### Rich text input

With "selectableEditor" the user can switch between the editor and a plain
text area:
<!--deDE:
    Mit "selectableEditor" kann der Benutzer zwischen dem Editor und einem
    einfachen Textfeld wechseln:
-->
<!--frFR:
    Avec "selectableEditor", l'utilisateur peut basculer entre l'éditeur et
    une simple zone de texte:
-->

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

<!--|deDE:Dateien auswählen und hochladen-->
<!--|frFR:Sélectionner et téléverser des fichiers-->
### Selecting and uploading files

```TypeScript
const Application = () =>
    <FileInput name="fileInput" />
```

<!--|deDE:Checkbox-->
<!--|frFR:Case à cocher-->
### Checkbox

```TypeScript
const Application = () => <Checkbox name="accepted" required />
```

<!--|deDE:Listen beliebiger Eingaben-->
<!--|frFR:Listes de champs quelconques-->
### Lists of any inputs

"Inputs" renders a list where the user adds and removes entries. The child
function renders each entry:
<!--deDE:
    "Inputs" stellt eine Liste dar, in der der Benutzer Einträge hinzufügt
    und entfernt. Die Kindfunktion stellt jeden Eintrag dar:
-->
<!--frFR:
    "Inputs" affiche une liste dans laquelle l'utilisateur ajoute et retire
    des entrées. La fonction enfant affiche chaque entrée:
-->

```TypeScript
import type {CheckboxTypes, InputsTypes} from 'react-input-material'

import {Checkbox, Inputs} from 'react-input-material'
import {useMemorizedValue} from 'react-generic-tools'

const Application = () =>
    <Inputs<boolean | null, CheckboxTypes.Props>
        model={useMemorizedValue({
            default: [{
                type: 'boolean',
                value: false,
                required: true,
                showInitialValidationState: true
            }],
            name: 'checkboxInputs'
        })}

        createItem={useMemorizedValue(({
            index, item, properties: {name}
        }: InputsTypes.CreateItemOptions<
            boolean | null,
            CheckboxTypes.Props,
            InputsTypes.Properties<boolean | null, CheckboxTypes.Props>
        >): CheckboxTypes.Props => ({
            ...item,
            name: `${name}-${String(index + 1)}`
        }))}

        maximumNumber={2}
        minimumNumber={2}

        showInitialValidationState
    >
        {({properties}) => <Checkbox {...properties} />}
    </Inputs>
```

<!--|deDE:Intervall-->
<!--|frFR:Intervalle-->
### Interval

Start and end are times of day in seconds since midnight:
<!--deDE:Start und Ende sind Uhrzeiten in Sekunden seit Mitternacht:-->
<!--frFR:
    Le début et la fin sont des heures exprimées en secondes depuis minuit:
-->

```TypeScript
const Application = () =>
    <Interval
        name="Interval example"
        required
        step={60}
        value={{
            start: {default: 120, maximum: 3600},
            end: {default: 240, minimum: 120}
        }}
    />
```

<!--|deDE:Theming und Tooltips-->
<!--|frFR:Thèmes et infobulles-->
Theming and tooltips
--------------------

Every component accepts "themeConfiguration" with
[RMWC theme options](https://rmwc.io/theme) and "tooltip" with a text to show
on hover. "WrapConfigurations" applies both to any other content:
<!--deDE:
    Jede Komponente akzeptiert "themeConfiguration" mit
    [RMWC-Theme-Optionen](https://rmwc.io/theme) und "tooltip" mit einem
    Text, der beim Überfahren angezeigt wird. "WrapConfigurations" wendet
    beides auf beliebigen anderen Inhalt an:
-->
<!--frFR:
    Chaque composant accepte "themeConfiguration" avec les
    [options de thème RMWC](https://rmwc.io/theme) et "tooltip" avec un texte
    affiché au survol. "WrapConfigurations" applique les deux à n'importe
    quel autre contenu:
-->

```TypeScript
<TextInput
    name="email"
    themeConfiguration={{primary: '#d55e5d'}}
    tooltip="We never share your address."
/>
```

<!--|deDE:End-to-End-Tests-->
<!--|frFR:Tests de bout en bout-->
End-to-end tests
----------------

Each component comes with a [Playwright](https://playwright.dev) harness
which hides its internal structure from your tests:
<!--deDE:
    Jede Komponente bringt ein [Playwright](https://playwright.dev)-Harness
    mit, das ihre interne Struktur vor Ihren Tests verbirgt:
-->
<!--frFR:
    Chaque composant est accompagné d'un harnais
    [Playwright](https://playwright.dev) qui masque sa structure interne à
    vos tests:
-->

```TypeScript
import textInput from 'react-input-material/components/TextInput/harness'

const email = textInput(page.locator('.email'))

await email.fill('mail@example.com')
expect(await email.inputValue()).toBe('mail@example.com')
```

<!--|deDE:Entwicklung-->
<!--|frFR:Développement-->
Development
-----------

```bash
yarn install
yarn start
yarn test
yarn test:end-to-end
```

"yarn start" serves a playground with all components. The end-to-end tests
expect it to be running.
<!--deDE:
    "yarn start" stellt eine Spielwiese mit allen Komponenten bereit. Die
    End-to-End-Tests setzen voraus, dass sie läuft.
-->
<!--frFR:
    "yarn start" sert un terrain de jeu avec tous les composants. Les tests
    de bout en bout supposent qu'il est lancé.
-->
