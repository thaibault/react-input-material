import {
    ForwardedRef,
    forwardRef,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'

import TextArea from '#implementations/TextArea'

import {
    EventMapperWrapperReference,
    TextAreaProperties,
    TextAreaReference
} from '../../../implementations/type'

export type Reference = EventMapperWrapperReference<TextAreaReference>

export const Index = forwardRef((
    properties: TextAreaProperties, reference?: ForwardedRef<Reference>
): ReactElement => {
    const inputReference = useRef<TextAreaReference | null>(null)
    useImperativeHandle(
        reference,
        () => ({
            input: inputReference,
            /*
                The event mapper can be used by the consuming parent component
                to synchronize an instantiated editor with the native textarea
                element here.
            */
            eventMapper: {
                blur: (event: object) => {
                    if (inputReference.current?.input.current) {
                        const syntheticEvent = new Event('blur') as
                            Event & { detail: object }
                        syntheticEvent.detail = event
                        inputReference.current.input.current
                            .dispatchEvent(syntheticEvent)
                    }
                },
                focus: (event: object) => {
                    if (inputReference.current?.input.current) {
                        const syntheticEvent = new Event('focus') as
                            Event & { detail: object }
                        syntheticEvent.detail = event
                        inputReference.current.input.current
                            .dispatchEvent(syntheticEvent)
                    }
                },
                input: (value: number | string, event: object) => {
                    if (inputReference.current?.input.current) {
                        const syntheticEvent = new Event('input') as
                            Event & { detail: object }
                        syntheticEvent.detail = event

                        inputReference.current.input.current.value =
                            String(value)
                        inputReference.current.input.current
                            .dispatchEvent(syntheticEvent)
                    }

                    /*
                        Since we do not operate on the native textarea element
                        we need to make sure that we stay in focus state when
                        do clearing the textarea's input value.
                    */
                    setTimeout(() => {
                        // TODO foundationReference.current?.autoCompleteFocus()
                    })
                }
            }
        })
    )

    return <TextArea ref={inputReference} {...properties}>
        {properties.children}
    </TextArea>
})

export default Index
