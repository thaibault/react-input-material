import {
    ForwardedRef,
    forwardRef,
    // NOTE: can be "RefObject" directly when migrated to react19.
    MutableRefObject as RefObject,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import {TextAreaProperties} from '../../type'
import {TextFieldHelperTextProps} from '@rmwc/textfield/lib/textfield'
import {MDCTextFieldFoundation} from '@material/textfield'

export const TextArea = forwardRef((
    properties: TextAreaProperties, reference?: ForwardedRef<unknown>
): ReactElement => {
    const baseReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)
    const foundationReference: RefObject<MDCTextFieldFoundation | null> =
        useRef<MDCTextFieldFoundation>(null)
    const inputReference: RefObject<HTMLInputElement | null> =
        useRef<HTMLInputElement>(null)

    useImperativeHandle(
        reference,
        () => ({
            base: baseReference,
            foundation: foundationReference,
            input: inputReference
        })
    )

    const editorContent = <>
        <textarea
            ref={textareaReference}

            className="mdc-text-field__input"
            style={{visibility: 'hidden', position: 'absolute'}}
            rows={props.rows}

            aria-labelledby={`${id}-label`}
            aria-controls={`${id}-helper`}
            aria-describedby={`${id}-helper`}

            readOnly

            value={props.value}

            minLength={props.minLength}
            maxLength={props.maxLength}
        ></textarea>

        {props.children}

        {props.barContentSlot ?
            <div className={`${props.classNamePrefix}__bar`}>
                {props.barContentSlot}

                {props.characterCount ?
                    <div className="mdc-text-field-character-counter"></div> :
                    ''
                }
            </div> :
            props.characterCount ?
                <div className="mdc-text-field-character-counter"></div> :
                ''
        }
    </>

    const helpText: TextFieldHelperTextProps =
        typeof props.helpText === 'object' ?
            props.helpText as TextFieldHelperTextProps :
            {children: props.helpText}

    return <>
        <label
            ref={mdcTextFieldReference}
            onClick={(event) => {
                if (props.onLabelClick)
                    props.onLabelClick(event)
            }}
            className={[
                props.classNamePrefix,
                'mdc-text-field',
                'mdc-text-field--textarea'
            ]
                .concat(props.value === '' ?
                    'mdc-text-field--textarea' :
                    `${props.classNamePrefix}--has-content`
                )
                .concat(props.disabled ? 'mdc-text-field--disabled' : [])
                .concat(props.outlined ?
                    'mdc-text-field--outlined' :
                    'mdc-text-field--filled'
                )
                .concat(
                    props.characterCount ?
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
                {props.label}
            </span>

            {props.resizeable ?
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
                        props.helpText as TextFieldHelperTextProps | undefined
                    )?.children ?
                        (props.helpText as TextFieldHelperTextProps).children :
                        props.helpText as string
                    }
                </div>
            </div> :
            ''
        }
    </>
})

export default TextArea
