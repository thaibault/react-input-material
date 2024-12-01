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
import {TextInput} from '.'
import {DefaultProperties, DataTransformation} from './type'
// endregion
const convertEdgeValueToString = (
    value: Date | number | string
): null | string => {
    if (value === Infinity)
        return 'Infinitely far in the future'

    if (value === -Infinity)
        return 'Infinitely early in the past'

    if (!isFinite(value as number))
        return ''

    return null
}
const utcSecondsToISOString = (value: number): string =>
    (new Date(Math.round(value * 1000))).toISOString()
const normalizeDateRepresentation = (
    value: Date | number | string
): number | string => {
    if (value instanceof Date)
        return value.getTime() / 1000

    return value
}

export const TRANSFORMER: DataTransformation = {
    boolean: {
        parse: (value: boolean | number | string): boolean =>
            typeof value === 'boolean' ?
                value :
                new Map<number | string, boolean>([
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
                value: number, {currency: {format}}: DataTransformation
            ): string => {
                const currency =
                    format?.final.options?.currency as null | string ?? 'USD'

                if (value === Infinity)
                    return `Infinity ${currency}`

                if (value === -Infinity)
                    return `- Infinity ${currency}`

                if (isNaN(value))
                    return 'unknown'

                return (new Intl.NumberFormat(
                    TextInput.locales,
                    {style: 'currency', ...format?.final.options ?? {}}
                )).format(value)
            }
        }},
        parse: (
            value: string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number>
        ): number =>
            transformation.float.parse ?
                transformation.float.parse(
                    value, transformation, configuration
                ) :
                NaN,
        type: 'text'
    },

    datetime: {
        // Converts given utc date representation into iso date time string.
        format: {final: {transform: (
            value: Date | number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (typeof value !== 'number') {
                if (!transformation.datetime.parse)
                    throw new Error(
                        'Missing datetime parse transformation configured. ' +
                        'Datetime formatting depends on it.'
                    )

                value = transformation.datetime.parse(
                    value,
                    {
                        ...transformation,
                        date: {...transformation.date, useISOString: false}
                    },
                    configuration
                ) as number
            }

            const edgeValueDescription = convertEdgeValueToString(value)
            if (typeof edgeValueDescription === 'string')
                return edgeValueDescription

            const formattedValue = utcSecondsToISOString(value)
            /*
                NOTE: This is only needed since the browser input support does
                not expect to adapt more specific than seconds.
            */
            return formattedValue.substring(0, formattedValue.lastIndexOf('.'))
        }}},
        parse: (
            value: Date | number | string,
            {date: {useISOString}}: DataTransformation
        ): number | string => {
            value = normalizeDateRepresentation(value)

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
                utcSecondsToISOString(value as number) :
                value
        },
        type: 'datetime-local'
    },
    'datetime-local': {
        // Converts given utc date representation into iso date time string.
        format: {final: {transform: (
            value: number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (typeof value !== 'number') {
                if (!transformation['datetime-local'].parse)
                    throw new Error(
                        'Missing datetime local parse transformation ' +
                        'configured. Datetime local formatting depends on.'
                    )

                value = transformation['datetime-local'].parse(
                    value,
                    {
                        ...transformation,
                        date: {...transformation.date, useISOString: false}
                    },
                    configuration
                ) as number
            }

            const edgeValueDescription = convertEdgeValueToString(value)
            if (typeof edgeValueDescription === 'string')
                return edgeValueDescription

            const formattedValue: string = utcSecondsToISOString(
                value - new Date(value * 1000).getTimezoneOffset() * 60
            )

            return formattedValue.substring(0, formattedValue.lastIndexOf('.'))
        }}},
        parse: (
            value: Date | number | string,
            {date: {useISOString}}: DataTransformation
        ): number | string => {
            value = normalizeDateRepresentation(value)

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
                        (parsedDate / 1000) +
                        new Date(parsedDate).getTimezoneOffset() * 60
            }

            if (isNaN(value as number))
                value = 0

            return useISOString ?
                utcSecondsToISOString(value as number) :
                value
        }
    },

    date: {
        // Converts given date representation into utc iso date time string.
        format: {final: {transform: (
            value: number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (!transformation.datetime.format?.final.transform)
                throw new Error(
                    'Missing datetime final format transformation ' +
                    'configured. Date formatting depends on it.'
                )

            const formattedValue =
                transformation.datetime.format.final.transform(
                    value, transformation, configuration
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
            value: Date | number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): number | string => {
            if (!transformation.datetime.parse)
                throw new Error(
                    'Missing datetime parse transformation configured. ' +
                    'Date parsing depends on it.'
                )

            return transformation.datetime.parse(
                value, transformation, configuration
            )
        },
        useISOString: true
    },
    'date-local': {
        format: {final: {transform: (
            value: number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (typeof value !== 'number') {
                if (!transformation['datetime-local'].parse)
                    throw new Error(
                        'Missing datetime local parse transformation ' +
                        'configured. Date local formatting depends on it.'
                    )

                value = transformation['datetime-local'].parse(
                    value,
                    {
                        ...transformation,
                        date: {...transformation.date, useISOString: false}
                    },
                    configuration
                ) as number
            }

            const edgeValueDescription = convertEdgeValueToString(value)
            if (typeof edgeValueDescription === 'string')
                return edgeValueDescription

            /*
                NOTE: We need to add timezone offset since we slice time
                afterward (rounding to day).
            */
            value -= new Date(value * 1000).getTimezoneOffset() * 60

            const formattedValue: string = utcSecondsToISOString(value)
            return formattedValue.substring(0, formattedValue.lastIndexOf('T'))
        }}},
        /*
            Converts date or strings into unix timestamps (numbers will not be
            changed) or iso string.
        */
        parse: (
            value: Date | number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): number | string => {
            if (!transformation.datetime.parse)
                throw new Error(
                    'Missing datetime parse transformation configured. ' +
                    'Date local parsing depends on.'
                )

            value = transformation.datetime.parse(
                value,
                {
                    ...transformation,
                    date: {...transformation.date, useISOString: false}
                },
                configuration
            ) as number

            const isRoundedToDay = (value % (24 * 60 ** 2)) === 0
            // NOTE: We need to re-apply sliced time for formatting.
            if (isRoundedToDay)
                value += new Date(value * 1000).getTimezoneOffset() * 60

            return transformation.date.useISOString ?
                utcSecondsToISOString(value) :
                value
        },
        type: 'date'
    },

    time: {
        /*
            Converts given date representation into utc iso date time string on
            1/1/1970.
        */
        format: {final: {transform: (
            value: number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (typeof value !== 'number') {
                if (!transformation.datetime.parse)
                    throw new Error(
                        'Missing datetime parse transformation configured. ' +
                        'Time formatting depends on it.'
                    )

                value = transformation.datetime.parse(
                    value,
                    {
                        ...transformation,
                        date: {...transformation.date, useISOString: false}
                    },
                    configuration
                ) as number
            }

            const edgeValueDescription = convertEdgeValueToString(value)
            if (typeof edgeValueDescription === 'string')
                return edgeValueDescription

            let formattedValue = utcSecondsToISOString(value)

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
            value: Date | number | string,
            {date: {useISOString}}: DataTransformation
        ): number | string => {
            value = normalizeDateRepresentation(value)

            if (typeof value === 'string') {
                const parsedDate: number = Date.parse(value)
                if (isNaN(parsedDate)) {
                    const parsedFloat: number = parseFloat(value.replace(
                        /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                        (
                            _match: string,
                            hours: string,
                            minutes: string,
                            secondsSuffix?: string,
                            seconds?: string // ,
                            // _millisecondsSuffix?: string
                        ): string =>
                            String(
                                parseInt(hours) *
                                60 ** 2 +
                                parseInt(minutes) *
                                60 +
                                (
                                    secondsSuffix &&
                                    typeof seconds !== 'undefined' ?
                                        parseFloat(seconds) :
                                        0
                                )
                            )
                    ))

                    value = isNaN(parsedFloat) ? 0 : parsedFloat
                } else
                    value = parsedDate / 1000
            }

            if (isNaN(value))
                value = 0

            return useISOString ? utcSecondsToISOString(value) : value
        }
    },
    /*
        NOTE: Daylight saving time should not make a difference since times
        will always be based on zero unix timestamp (1/1/1970) where no
        daylight saving time rule exist.
    */
    'time-local': {
        /*
            Converts given date representation into local iso date time string
            on 1/1/1970.
        */
        format: {final: {transform: (
            value: number | string,
            transformation: DataTransformation,
            configuration: DefaultProperties<number | string>
        ): string => {
            if (typeof value !== 'number') {
                if (!transformation['time-local'].parse)
                    throw new Error(
                        'Missing time local parse transformation ' +
                        'configured. Time local formatting depends on it.'
                    )

                value = transformation['time-local'].parse(
                    value,
                    {
                        ...transformation,
                        date: {...transformation.date, useISOString: false}
                    },
                    configuration
                ) as number
            }

            const edgeValueDescription = convertEdgeValueToString(value)
            if (typeof edgeValueDescription === 'string')
                return edgeValueDescription

            /*
                NOTE: For time without any date information we cannot determine
                a time zone shift since it depends on connected date because of
                political changes and daylight saving periods.

                When transforming time into local time we would have to add
                the local timezone offset like:

                + CURRENT_DATE.getTimezoneOffset() * 60
            */
            const dateTime = new Date(value * 1000)

            const hours: number = dateTime.getHours()
            const minutes: number = dateTime.getMinutes()

            const formattedValue: string = (
                `${hours < 10 ? '0' : ''}${String(hours)}:` +
                `${minutes < 10 ? '0' : ''}${String(minutes)}`
            )

            if (!(
                configuration.step &&
                configuration.step >= 60 &&
                (configuration.step % 60) === 0
            )) {
                const seconds: number = dateTime.getSeconds()

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
            value: Date | number | string,
            {date: {useISOString}}: DataTransformation
        ): number | string => {
            value = normalizeDateRepresentation(value)

            if (typeof value === 'string') {
                const parsedDate: number = Date.parse(value)
                if (isNaN(parsedDate)) {
                    const parsedFloat: number = parseFloat(value.replace(
                        /^([0-9]{2}):([0-9]{2})(:([0-9]{2}(\.[0-9]+)?))?$/,
                        (
                            _match: string,
                            hours: string,
                            minutes: string,
                            secondsSuffix?: string,
                            seconds?: string // ,
                            // _millisecondsSuffix?: string
                        ): string => {
                            const zeroDateTime = new Date(0)

                            zeroDateTime.setHours(parseInt(hours))
                            zeroDateTime.setMinutes(parseInt(minutes))
                            if (
                                secondsSuffix && typeof seconds !== 'undefined'
                            )
                                zeroDateTime.setSeconds(parseInt(seconds))

                            return String(zeroDateTime.getTime() / 1000)
                        }
                    ))

                    value = isNaN(parsedFloat) ? 0 : parsedFloat
                } else
                    value = parsedDate / 1000
            }

            if (isNaN(value))
                value = 0

            return useISOString ? utcSecondsToISOString(value) : value
        },
        type: 'time'
    },

    float: {
        format: {final: {transform: (
            value: number, {float: {format}}: DataTransformation
        ): string =>
            format ?
                value === Infinity ?
                    'Infinity' :
                    value === -Infinity ?
                        '- Infinity' :
                        (new Intl.NumberFormat(
                            TextInput.locales, format.final.options || {}
                        )).format(value) :
                String(value)
        }},
        parse: (
            value: number | string,
            _transformation: DataTransformation,
            {maximum, minimum}: DefaultProperties<number>
        ): number => {
            if (typeof value === 'string')
                value = parseFloat(
                    TextInput.locales[0] === 'de-DE' ?
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
            value: number, {integer: {format}}: DataTransformation
        ): string => (
            new Intl.NumberFormat(
                TextInput.locales,
                {
                    maximumFractionDigits: 0, ...(format?.final.options ?? {})
                }
            )).format(value)
        }},
        parse: (
            value: number | string,
            _transformation: DataTransformation,
            {maximum, minimum}: DefaultProperties<number>
        ): number => {
            if (typeof value === 'string')
                value = parseInt(
                    TextInput.locales[0] === 'de-DE' ?
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
    number: {parse: (value: number | string): number =>
        typeof value === 'number' ? value : parseInt(value)
    }
}
// endregion
export default TRANSFORMER
