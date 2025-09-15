import {MDCTextField, MDCTextFieldFoundation} from '@material/textfield'
import {TextFieldHelperTextProps} from '@rmwc/textfield'
import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement, useEffect, useId,
    useImperativeHandle,
    useRef
} from 'react'

import {TextAreaProperties, TextAreaReference} from '../type'

export interface Reference extends TextAreaReference {
    materialTextField: RefObject<MDCTextField | null>
    foundation: RefObject<MDCTextFieldFoundation | null>
}

export const OUTLINED = false

export const TextArea = forwardRef((
    properties: TextAreaProperties, reference?: ForwardedRef<TextAreaReference>
): ReactElement => {
    const defaultID = useId()
    const id = properties.id ?? defaultID
    const classNamePrefix = properties.classNamePrefix ?? 'text-area'

    const baseReference: RefObject<HTMLTextAreaElement | null> =
        useRef<HTMLTextAreaElement>(null)
    const materialTextFieldReference = useRef<MDCTextField | null>(null)
    const labelReference: RefObject<HTMLLabelElement | null> =
        useRef<HTMLLabelElement>(null)
    const inputReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)
    const foundationReference: RefObject<MDCTextFieldFoundation | null> =
        useRef<MDCTextFieldFoundation>(null)

    useImperativeHandle(
        reference,
        () => ({
            textarea: baseReference,
            foundation: foundationReference,
            input: inputReference,
            label: labelReference,
            materialTextField: materialTextFieldReference,
            /*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */
            eventMapper: {
                blur: (event: object) => {
                    if (baseReference.current) {
                        const syntheticEvent = new Event('blur') as
                            Event & { detail: object }
                        syntheticEvent.detail = event
                        baseReference.current.dispatchEvent(syntheticEvent)
                    }
                },
                focus: (event: object) => {
                    if (baseReference.current) {
                        const syntheticEvent = new Event('focus') as
                            Event & { detail: object }
                        syntheticEvent.detail = event
                        baseReference.current.dispatchEvent(syntheticEvent)
                    }
                },
                input: (value: number | string, event: object) => {
                    if (baseReference.current) {
                        const syntheticEvent = new Event('input') as
                            Event & { detail: object }
                        syntheticEvent.detail = event

                        baseReference.current.value = String(value)
                        baseReference.current.dispatchEvent(syntheticEvent)
                    }

                    /*
                        Since we do not operate on the native textarea element
                        we need to make sure that we stay in focus state when
                        do clearing the textarea's input value.
                    */
                    setTimeout(() => {
                        foundationReference.current?.autoCompleteFocus()
                    })
                }
            }
        })
    )

    useEffect(
        () => {
            if (labelReference.current) {
                materialTextFieldReference.current =
                    new MDCTextField(labelReference.current)

                foundationReference.current =
                    materialTextFieldReference.current.getDefaultFoundation()

                if (typeof properties.value === 'string')
                    materialTextFieldReference.current.value = properties.value
                if (typeof properties.disabled === 'boolean')
                    materialTextFieldReference.current.disabled =
                        properties.disabled
                if (typeof properties.invalid === 'boolean')
                    materialTextFieldReference.current.valid =
                        !properties.invalid
                if (typeof properties.required === 'boolean')
                    materialTextFieldReference.current.required =
                        properties.required
                if (typeof properties.minimumLength === 'number')
                    materialTextFieldReference.current.minLength =
                        properties.minimumLength
                if (typeof properties.maximumLength === 'number')
                    materialTextFieldReference.current.maxLength =
                        properties.maximumLength

                materialTextFieldReference.current.useNativeValidation = false

                return () => {
                    materialTextFieldReference.current?.destroy()
                }
            }
        },
        [
            labelReference.current,
            materialTextFieldReference.current,

            properties.value,
            properties.disabled,
            properties.invalid,
            properties.required,
            properties.minimumLength,
            properties.maximumLength
        ]
    )

    const editorContent = <>
        <textarea
            ref={baseReference}

            className="mdc-text-field__input"
            style={properties.children ?
                {
                    visibility: 'hidden',
                    position: 'absolute',
                    ...properties.styles
                } :
                properties.styles
            }
            rows={properties.rows}

            aria-labelledby={`${id}-label`}
            aria-controls={`${id}-helper`}
            aria-describedby={`${id}-helper`}

            readOnly={Boolean(properties.children)}

            value={properties.value}

            minLength={properties.minimumLength}
            maxLength={properties.maximumLength}
        ></textarea>

        {properties.children}

        {properties.barContentSlot ?
            <div className={`${classNamePrefix}__bar`}>
                {properties.barContentSlot}

                {properties.characterCount ?
                    <div className="mdc-text-field-character-counter"></div> :
                    ''
                }
            </div> :
            properties.characterCount ?
                <div className="mdc-text-field-character-counter"></div> :
                ''
        }
    </>

    const helpText: TextFieldHelperTextProps =
        typeof properties.helpText === 'object' ?
            properties.helpText as TextFieldHelperTextProps :
            {children: properties.helpText}

    return <>
        <label
            ref={labelReference}
            onClick={(event) => {
                if (properties.onLabelClick)
                    properties.onLabelClick(event)
            }}
            className={[
                classNamePrefix,
                'mdc-text-field',
                'mdc-text-field--textarea'
            ]
                .concat(properties.value === '' ?
                    'mdc-text-field--textarea' :
                    `${classNamePrefix}--has-content`
                )
                .concat(properties.disabled ? 'mdc-text-field--disabled' : [])
                /*
                    eslint-disable @typescript-eslint/no-unnecessary-condition
                */
                .concat(OUTLINED ?
                    'mdc-text-field--outlined' :
                    'mdc-text-field--filled'
                )
                /*
                    eslint-enable @typescript-eslint/no-unnecessary-condition
                */
                .concat(
                    properties.characterCount ?
                        'mdc-text-field--with-internal-counter' :
                        []
                )
                .join(' ')}
        >
            {/*
                Optional:

                <span className="mdc-text-field__ripple"></span>
            */}
            <span className="mdc-floating-label" id={`${id}-label`}>
                {properties.label}
            </span>

            {properties.resizeable ?
                <span className="mdc-text-field__resizer">
                    {editorContent}
                </span> :
                editorContent
            }

            {/*
                Optional:

                <span className="mdc-line-ripple"></span>
            */}
        </label>
        {helpText.children ?
            <div className="mdc-text-field-helper-line">
                <div
                    className={['mdc-text-field-helper-text']
                        .concat(
                            helpText.persistent ?
                                'mdc-text-field-helper-text--persistent' :
                                []
                        )
                        .join(' ')
                    }
                    id={`${id}-helper`}
                >
                    {(
                        properties.helpText as
                            TextFieldHelperTextProps | undefined
                    )?.children ?
                        (properties.helpText as
                            TextFieldHelperTextProps
                        ).children :
                        properties.helpText as string
                    }
                </div>
            </div> :
            ''
        }
    </>
})

export default TextArea
