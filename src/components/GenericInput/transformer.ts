// #!/usr/bin/env babel-node
// -*- coding: utf-8 -*-
/** @module transformer */
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
import {GenericInput} from '.'
import {
    DefaultInputProperties,
    DefaultInputProperties as DefaultProperties, InputDataTransformation
} from '../../type'
// endregion
export const TRANSFORMER:InputDataTransformation = {
    boolean: {
        parse: (value:boolean|number|string):boolean =>
            typeof value === 'boolean' ?
                value :
                new Map<number|string, boolean>([
                    ['false', false],
                    ['true', true],
                    [0, false],
                    [1, true]
                ]).get(value) ??
                    true,
        type: 'text'
    },
    currency: {
        format: {final: {
            options: {currency: 'USD'},
            transform: (
                value:number, {currency: {format}}:InputDataTransformation
            ):string => {
                const currency =
                    format?.final.options?.currency as string ?? 'USD'

                if (value === Infinity)
                    return `Infinity ${currency}`

                if (value === -Infinity)
                    return `- Infinity ${currency}`

                if (isNaN(value))
                    return 'unknown'

                return (new Intl.NumberFormat(
                    GenericInput.locales,
                    {style: 'currency', ...format?.final.options ?? {}}
                )).format(value)
            }
        }},
        parse: (
            value:string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number>
        ):number =>
            transformer.float.parse ?
                transformer.float.parse(value, transformer, configuration) :
                NaN,
        type: 'text'
    },

    datetime: {
        // Converts given utc date representation into iso date time string.
        format: {final: {transform: (
            value:Date|number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            if (typeof value !== 'number')
                value = transformer.datetime.parse!(
                    value,
                    {
                        ...transformer,
                        date: {...transformer.date, useISOString: false}
                    },
                    configuration
                )

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value as number))
                return ''

            const formattedValue:string =
                (new Date(Math.round(value as number * 1000))).toISOString()

            return formattedValue.substring(0, formattedValue.lastIndexOf('.'))
        }}},
        parse: (
            value:Date|number|string,
            {date: {useISOString}}:InputDataTransformation
        ):number|string => {
            if (value instanceof Date)
                value = value.getTime() / 1000

            if (typeof value === 'string') {
                let parsedDate = Date.parse(`${value}:00.000Z`)
                let modifiedParsing = isNaN(parsedDate)
                if (modifiedParsing) {
                    parsedDate = Date.parse(`${value}.000Z`)
                    modifiedParsing = isNaN(parsedDate)
                    if (modifiedParsing) {
                        parsedDate = Date.parse(value)
                        if (isNaN(parsedDate))
                            value = parseFloat(value)
                        else
                            value = parsedDate / 1000
                    }
                }
                if (!modifiedParsing)
                    value = parsedDate / 1000
            }

            if (isNaN(value as number))
                value = 0

            return useISOString ?
                new Date(value as number * 1000).toISOString() :
                value
        },
        type: 'datetime-local'
    },
    'datetime-local': {
        // Converts given utc date representation into iso date time string.
        format: {final: {transform: (
            value:number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            if (typeof value !== 'number')
                value = transformer['datetime-local'].parse!(
                    value,
                    {
                        ...transformer,
                        date: {...transformer.date, useISOString: false}
                    },
                    configuration
                ) as number

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string = new Date(
                (value + new Date().getTimezoneOffset() * 60) * 1000
            ).toISOString()

            return formattedValue.substring(0, formattedValue.lastIndexOf('.'))
        }}},
        parse: (
            value:Date|number|string, transformation:InputDataTransformation
        ):number|string => {
            if (value instanceof Date)
                value = value.getTime() / 1000

            if (typeof value === 'string') {
                let parsedDate = Date.parse(`${value}:00.000Z`)
                let modifiedParsing = isNaN(parsedDate)
                if (modifiedParsing) {
                    parsedDate = Date.parse(`${value}.000Z`)
                    modifiedParsing = isNaN(parsedDate)
                    if (modifiedParsing) {
                        parsedDate = Date.parse(value)
                        if (isNaN(parsedDate))
                            value = parseFloat(value)
                        else
                            value = parsedDate / 1000
                    }
                }
                /*
                    NOTE: If needed to adapt formatted date time
                    representation.
                */
                if (!modifiedParsing)
                    value =
                        (parsedDate / 1000) -
                        new Date().getTimezoneOffset() * 60
            }

            if (isNaN(value as number))
                value = 0

            return transformation.date.useISOString ?
                new Date(value as number * 1000).toISOString() :
                value
        }
    },

    date: {
        // Converts given date representation into utc iso date time string.
        format: {final: {transform: (
            value:number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            const formattedValue =
                transformer.datetime.format!.final.transform!(
                    value, transformer, configuration
                )

            const index = formattedValue.indexOf('T')
            if (index === -1)
                return formattedValue

            return formattedValue.substring(0, index)
        }}},
        /*
            Converts date or strings into unix timestamps (numbers will not be
            changed).
        */
        parse: (
            value:Date|number|string,
            transformation:InputDataTransformation,
            configuration:DefaultInputProperties<number|string>
        ):number|string =>
            transformation.datetime.parse!(
                value, transformation, configuration
            ),
        useISOString: true
    },
    'date-local': {
        format: {final: {transform: (
            value:number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            const formattedValue:string =
                transformer['datetime-local'].format!.final.transform!(
                    value,
                    {
                        ...transformer,
                        date: {...transformer.date, useISOString: false}
                    },
                    configuration
                )

            const index = formattedValue.indexOf('T')
            if (index === -1)
                return formattedValue

            return formattedValue.substring(0, index)
        }}},
        /*
            Converts date or strings into unix timestamps (numbers will not be
            changed).
        */
        parse: (
            value:Date|number|string,
            transformation:InputDataTransformation,
            configuration:DefaultInputProperties<number|string>
        ):number|string =>
            transformation['datetime-local'].parse!(
                value, transformation, configuration
            ),
        type: 'date'
    },

    time: {
        /*
            Converts given date representation into utc iso date time string on
            1/1/1970.
        */
        format: {final: {transform: (
            value:number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            let formattedValue =
                transformer.datetime.format!.final.transform!(
                    value, transformer, configuration
                )

            const index = formattedValue.indexOf('T')
            if (index === -1)
                return formattedValue

            formattedValue = formattedValue.substring(
                index + 1, formattedValue.length - 1
            )

            if (
                configuration.step &&
                configuration.step >= 60 &&
                (configuration.step % 60) === 0
            )
                return formattedValue.substring(
                    0, formattedValue.lastIndexOf(':')
                )

            return formattedValue
        }}},
        // Converts given date representation into unix time stamp.
        parse: (
            value:Date|number|string,
            {date: {useISOString}}:InputDataTransformation
        ):number|string => {
            if (value instanceof Date)
                value = value.getTime() / 1000

            if (typeof value === 'string') {
                const parsedDate:number = Date.parse(value)
                if (isNaN(parsedDate)) {
                    const parsedFloat:number = parseFloat(value.replace(
                        /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                        (
                            _match:string,
                            hours:string,
                            minutes:string,
                            secondsSuffix?:string,
                            seconds?:string,
                            _millisecondsSuffix?:string
                        ):string =>
                            String(
                                parseInt(hours) *
                                60 ** 2 +
                                parseInt(minutes) *
                                60 +
                                (secondsSuffix ? parseFloat(seconds!) : 0)
                            )
                    ))

                    value = isNaN(parsedFloat) ? 0 : parsedFloat
                } else
                    value = parsedDate / 1000
            }

            return isNaN(value) ?
                0 :
                useISOString ? new Date(value * 1000).toISOString() : value
        }
    },
    /*
        NOTE: Daylight saving time should not make a difference since times
        will always be based on zero unix timestamp (1/1/1970 where no daylight
        saving time rule existed.
    */
    'time-local': {
        /*
            Converts given date representation into local iso date time string
            on 1/1/1970.
        */
        format: {final: {transform: (
            value:number|string,
            transformer:InputDataTransformation,
            configuration:DefaultProperties<number|string>
        ):string => {
            if (typeof value !== 'number')
                value = transformer['time-local'].parse!(
                    value,
                    {
                        ...transformer,
                        date: {...transformer.date, useISOString: false}
                    },
                    configuration
                ) as number

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const dateTime = new Date(
                (value + new Date().getTimezoneOffset() * 60) * 1000
            )
            const hours:number = dateTime.getHours()
            const minutes:number = dateTime.getMinutes()

            const formattedValue:string = (
                `${hours < 10 ? '0' : ''}${String(hours)}:` +
                `${minutes < 10 ? '0' : ''}${String(minutes)}`
            )

            if (!(
                configuration.step &&
                configuration.step >= 60 &&
                (configuration.step % 60) === 0
            )) {
                const seconds:number = dateTime.getSeconds()

                return (
                    `${formattedValue}:${(seconds < 10) ? '0' : ''}` +
                    String(seconds)
                )
            }

            return formattedValue
        }}},
        /*
            Converts given date representation into unix time stamp while local
            time shift is taken into account.
        */
        parse: (
            value:Date|number|string, transformation:InputDataTransformation
        ):number|string => {
            if (value instanceof Date)
                return value.getTime() / 1000

            if (typeof value === 'string') {
                const parsedDate:number = Date.parse(value)
                if (isNaN(parsedDate)) {
                    const parsedFloat:number = parseFloat(value.replace(
                        /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                        (
                            _match:string,
                            hours:string,
                            minutes:string,
                            secondsSuffix?:string,
                            seconds?:string,
                            _millisecondsSuffix?:string
                        ):string => {
                            const zeroDateTime = new Date(0)

                            zeroDateTime.setHours(parseInt(hours))
                            zeroDateTime.setMinutes(parseInt(minutes))
                            if (secondsSuffix)
                                zeroDateTime.setSeconds(parseInt(seconds!))

                            return String(zeroDateTime.getTime() / 1000)
                        }
                    ))

                    value = isNaN(parsedFloat) ? 0 : parsedFloat
                } else
                    value = parsedDate / 1000
            }

            return transformation.date.useISOString ?
                new Date(value * 1000).toISOString() :
                value
        },
        type: 'time'
    },

    float: {
        format: {final: {transform: (
            value:number, {float: {format}}:InputDataTransformation
        ):string =>
            format ?
                value === Infinity ?
                    'Infinity' :
                    value === -Infinity ?
                        '- Infinity' :
                        (new Intl.NumberFormat(
                            GenericInput.locales, format.final.options || {}
                        )).format(value) :
                `${value}`
        }},
        parse: (
            value:number|string,
            transformer:InputDataTransformation,
            {maximum, minimum}:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseFloat(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/\./g, '').replace(/,/g, '.') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof minimum === 'number' && minimum >= 0 && value < 0 ||
                typeof maximum === 'number' && maximum <= 0 && value > 0
            )
                value *= -1

            return value
        },
        type: 'text'
    },
    integer: {
        format: {final: {transform: (
            value:number, {integer: {format}}:InputDataTransformation
        ):string => (
            new Intl.NumberFormat(
                GenericInput.locales,
                {
                    maximumFractionDigits: 0, ...(format?.final.options ?? {})
                }
            )).format(value)
        }},
        parse: (
            value:number|string,
            transformer:InputDataTransformation,
            {maximum, minimum}:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseInt(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/[,.]/g, '') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof minimum === 'number' && minimum >= 0 && value < 0 ||
                typeof maximum === 'number' && maximum <= 0 && value > 0
            )
                value *= -1

            return value
        },
        type: 'text'
    },
    number: {parse: (value:number|string):number =>
        typeof value === 'number' ? value : parseInt(value)
    }
}
// endregion
export default TRANSFORMER
// region vim modline
// vim: set tabstop=4 shiftwidth=4 expandtab:
// vim: foldmethod=marker foldmarker=region,endregion:
// endregion
