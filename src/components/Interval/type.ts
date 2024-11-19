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

import {defaultModelState, InputComponent, ModelState} from '../../type'
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

export interface IntervalValue {
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
export interface IntervalConfiguration {
    end: Partial<IntervalInputModel> | Partial<IntervalInputProps>
    start: Partial<IntervalInputModel> | Partial<IntervalInputProps>
}

export type IntervalModelState = ModelState
export interface IntervalModel {
    name: string
    state?: IntervalModelState
    value: {
        end: IntervalInputModel
        start: IntervalInputModel
    }
}

export interface IntervalProperties extends Omit<
    InputProperties<DateTimeRepresentation | null>,
    'icon' | 'model' | 'onChange' | 'onChangeValue' | 'value'
> {
    icon: IconOptions

    model: IntervalModel

    onChange: (properties: this, event?: GenericEvent) => void
    onChangeValue: (value: IntervalValue | null, event?: GenericEvent) => void

    value: IntervalConfiguration
}
type PartialIntervalValue =
    Partial<Omit<InputModel<DateTimeRepresentation | null>, 'value'>> &
    {value: DateTimeRepresentation | null}
export type PartialIntervalModel =
    Partial<Omit<IntervalProperties['model'], 'state' | 'value'>> &
    {
        value?: {
            end?: PartialIntervalValue
            start?: PartialIntervalValue
        }
        state?: Partial<IntervalModelState>
    }
export type IntervalProps =
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

        icon: IntervalProperties['icon'] | string

        model?: PartialIntervalModel

        onChange: IntervalProperties['onChange']
        onChangeValue: IntervalProperties['onChangeValue']

        value?: IntervalConfiguration | IntervalValue | null
    }>

export type DefaultIntervalProperties =
    Omit<IntervalProps, 'model'> & {model: IntervalModel}

export type IntervalPropertyTypes = {
    [key in keyof IntervalProperties]: ValueOf<typeof PropertyTypes>
}

export type IntervalAdapter =
    ComponentAdapter<IntervalProperties, {value?: IntervalValue | null}>
export interface IntervalAdapterWithReferences extends IntervalAdapter {
    references: {
        end: MutableRefObject<
            InputAdapterWithReferences<DateTimeRepresentation | null> | null
        >
        start: MutableRefObject<
            InputAdapterWithReferences<DateTimeRepresentation | null> | null
        >
    }
}

export type IntervalComponent<ComponentType> = InputComponent<
    IntervalConfiguration | IntervalValue | null,
    ComponentType,
    IntervalProps,
    IntervalModelState,
    DefaultIntervalProperties,
    IntervalAdapter
>
// region constants
export const intervalPropertyTypes: PropertiesValidationMap = {
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
export const defaultIntervalProperties: DefaultIntervalProperties = {
    icon: {icon: 'timelapse'},

    maximumText:
        'Please provide something earlier than ${formatValue(maximum)}.',
    minimumText: 'Please provide something later than ${formatValue(minimum)}.',
    requiredText: 'Please provide a range.',

    model: {
        name: 'NO_NAME_DEFINED',
        state: {...defaultModelState},
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
