// -*- coding: utf-8 -*-
/** @module type */
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
import {Mapping, ValueOf} from 'clientnode'
import PropertyTypes, {
    number, oneOfType, shape, string, ValidationMap, Validator
} from 'clientnode/dist/property-types'
import {MutableRefObject} from 'react'
import {GenericEvent} from 'react-generic-tools/type'
import {
    ComponentAdapter, PropertiesValidationMap
} from 'web-component-wrapper/type'
import {IconOptions} from '@rmwc/types'

import {
    defaultModelState as baseDefaultModelState,
    InputComponent,
    ModelState as BaseModelState
} from '../../type'
import {
    defaultInputModel,
    InputAdapterWithReferences,
    InputModel,
    InputProperties,
    InputProps,
    inputPropertyTypes
} from '../TextInput/type'
// endregion
export type DateTimeRepresentation = number | string

export interface Value {
    end?: DateTimeRepresentation | null
    start?: DateTimeRepresentation | null
}

export type IntervalInputModel =
    Omit<InputModel<DateTimeRepresentation | null>, 'maximum' | 'minimum'> &
    {
        maximum: DateTimeRepresentation
        minimum: DateTimeRepresentation
    }
export type IntervalInputProps =
    Omit<InputProps<DateTimeRepresentation | null>, 'maximum' | 'minimum'> &
    {
        maximum: DateTimeRepresentation
        minimum: DateTimeRepresentation
    }
export interface Configuration {
    end: Partial<IntervalInputModel> | Partial<IntervalInputProps>
    start: Partial<IntervalInputModel> | Partial<IntervalInputProps>
}

export type ModelState = BaseModelState
export interface Model {
    name: string
    state?: ModelState
    value: {
        end: IntervalInputModel
        start: IntervalInputModel
    }
}

export interface Properties extends Omit<
    InputProperties<DateTimeRepresentation | null>,
    'icon' | 'model' | 'onChange' | 'onChangeValue' | 'value'
> {
    icon: IconOptions

    model: Model

    onChange: (properties: this, event?: GenericEvent) => void
    onChangeValue: (value: Value | null, event?: GenericEvent) => void

    value: Configuration
}
type PartialValue =
    Partial<Omit<InputModel<DateTimeRepresentation | null>, 'value'>> &
    {value: DateTimeRepresentation | null}
export type PartialModel =
    Partial<Omit<Properties['model'], 'state' | 'value'>> &
    {
        value?: {
            end?: PartialValue
            start?: PartialValue
        }
        state?: Partial<ModelState>
    }
export type Props =
    Omit<
        InputProps<DateTimeRepresentation | null>,
          'icon' | 'model' | 'onChange' | 'onChangeValue' | 'value'
    > &
    Partial<{
        end: Partial<
            Omit<
                InputProps<DateTimeRepresentation | null>, 'maximum' | 'minimum'
            > &
            {
                maximum: DateTimeRepresentation
                minimum: DateTimeRepresentation
            }
        >
        start: Partial<
            Omit<
                InputProps<DateTimeRepresentation | null>, 'maximum' | 'minimum'
            > &
            {
                maximum: DateTimeRepresentation
                minimum: DateTimeRepresentation
            }
        >

        icon: Properties['icon'] | string

        model?: PartialModel

        onChange: Properties['onChange']
        onChangeValue: Properties['onChangeValue']

        value?: Configuration | Value | null
    }>

export type DefaultProperties =
    Omit<Props, 'model'> & {model: Model}

export type IntervalPropertyTypes = {
    [key in keyof Properties]: ValueOf<typeof PropertyTypes>
}

export type Adapter = ComponentAdapter<Properties, {value?: Value | null}>
export interface AdapterWithReferences extends Adapter {
    references: {
        end: MutableRefObject<
            InputAdapterWithReferences<DateTimeRepresentation | null> | null
        >
        start: MutableRefObject<
            InputAdapterWithReferences<DateTimeRepresentation | null> | null
        >
    }
}

export type Component<ComponentType> = InputComponent<
    Configuration | Value | null,
    ComponentType,
    Props,
    ModelState,
    DefaultProperties,
    Adapter
>
// region constants
export const propertyTypes: PropertiesValidationMap = {
    ...inputPropertyTypes as Mapping<ValueOf<PropertiesValidationMap>>,
    value: shape<ValidationMap<{
        end: unknown
        start: unknown
    }>>({
        end: oneOfType<Validator<unknown>>([
            number,
            string,
            shape<ValidationMap<ValueOf<typeof PropertyTypes>>>(
                inputPropertyTypes
            )
        ]),
        start: oneOfType<Validator<unknown>>([
            number,
            string,
            shape<ValidationMap<ValueOf<typeof PropertyTypes>>>(
                inputPropertyTypes
            )
        ])
    })
} as const
export const defaultProperties: DefaultProperties = {
    icon: {icon: 'timelapse'},

    maximumText:
        'Please provide something earlier than ${formatValue(maximum)}.',
    minimumText: 'Please provide something later than ${formatValue(minimum)}.',
    requiredText: 'Please provide a range.',

    model: {
        name: 'NO_NAME_DEFINED',
        state: {...baseDefaultModelState},
        value: {
            end: {
                ...defaultInputModel as unknown as InputModel<number>,
                description: 'End',
                name: 'end'
            },
            start: {
                ...defaultInputModel as unknown as InputModel<number>,
                description: 'Start',
                name: 'start'
            }
        }
    },

    type: 'time'
} as const
// endregion
