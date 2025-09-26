// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module TextInput */
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
import {
    ForwardedRef, forwardRef, ReactElement, useImperativeHandle, useRef
} from 'react'

import TextArea from '#implementations/TextArea'

import {
    EventMapperWrapperReference, TextAreaProperties, TextAreaReference
} from '../../../implementations/type'
// endregion
export type Reference = EventMapperWrapperReference<Partial<TextAreaReference>>

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
                }
            }
        })
    )

    return <TextArea ref={inputReference} {...properties}>
        {properties.children}
    </TextArea>
})

export default Index
