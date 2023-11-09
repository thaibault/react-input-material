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
                value:number,
                configuration:DefaultProperties<number>,
                transformer:InputDataTransformation
            ):string => {
                const currency:string =
                    transformer.currency.format?.final.options?.currency as
                        string ??
                    'USD'

                if (value === Infinity)
                    return `Infinity ${currency}`

                if (value === -Infinity)
                    return `- Infinity ${currency}`

                if (isNaN(value))
                    return 'unknown'

                return (new Intl.NumberFormat(
                    GenericInput.locales,
                    {
                        style: 'currency',
                        ...transformer.currency.format?.final.options ?? {}
                    }
                )).format(value)
            }
        }},
        parse: (
            value:string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):number =>
            transformer.float.parse ?
                transformer.float.parse(value, configuration, transformer) :
                NaN,
        type: 'text'
    },

    date: {
        // Converts given date representation into utc iso date time string.
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer.date.parse)
                    value = transformer.date.parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string =
                (new Date(Math.round(value * 1000))).toISOString()

            return formattedValue.substring(0, formattedValue.indexOf('T'))
        }}},
        /*
            Converts date or strings into unix timestamps (numbers will not be
            changed).
        */
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value)
                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        }
    },
    // TODO respect local to utc conversion
    'date-local': {
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer['date-local'].parse)
                    value = transformer['date-local'].parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string =
                (new Date(Math.round(value * 1000))).toISOString()

            return formattedValue.substring(0, formattedValue.indexOf('T'))
        }}},
        /*
            Converts date or strings into unix timestamps (numbers will not be
            changed).
        */
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value)
                if (isNaN(parsedFloat))
                    return 0

                // TODO respect time shift for utc
                return parsedFloat + new Date().getTimezoneOffset() * 60 * 1000
            }

            return parsedDate / 1000
        }
    },
    // TODO respect local to utc conversion.
    'datetime-local': {
        // Converts given date representation into iso date time string.
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer['datetime-local'].parse)
                    value = transformer['datetime-local'].parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const formattedValue:string =
                (new Date(
                    Math.round(value * 1000) +
                    new Date().getTimezoneOffset() * 60 * 1000
                )).toISOString()

            return formattedValue.substring(0, formattedValue.length - 1)
        }}},
        parse: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):number => {
            if (transformer.date.parse)
                return transformer.date.parse(
                    value, configuration, transformer
                )

            if (value instanceof Date)
                return value.getTime() / 1000

            const parsedDate:number = Date.parse(value as string)
            if (isNaN(parsedDate)) {
                const parsedFloat:number = parseFloat(value as string)
                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        },
        type: 'date'
    },
    time: {
        /*
            Converts given date representation into utc iso date time string on
            1/1/1970.
        */
        format: {final: {transform: (
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer.time.parse)
                    value = transformer.time.parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number = parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            // NOTE: The string is always UTC, as denoted by the suffix Z.
            let formattedValue:string =
                (new Date(Math.round(value * 1000))).toISOString()

            formattedValue = formattedValue.substring(
                formattedValue.indexOf('T') + 1, formattedValue.length - 1
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
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

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

                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
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
            value:Date|number|string,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => {
            if (typeof value !== 'number')
                if (transformer['time-local'].parse)
                    value = transformer['time-local'].parse(
                        value, configuration, transformer
                    )
                else {
                    const parsedDate:number = value instanceof Date ?
                        value.getTime() / 1000 :
                        Date.parse(value)
                    if (isNaN(parsedDate)) {
                        const parsedFloat:number =
                            parseFloat(value as string)
                        value = isNaN(parsedFloat) ? 0 : parsedFloat
                    } else
                        value = parsedDate / 1000
                }

            if (value === Infinity)
                return 'Infinitely far in the future'
            if (value === -Infinity)
                return 'Infinitely early in the past'
            if (!isFinite(value))
                return ''

            const dateTime = new Date(Math.round(value * 1000))
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
        parse: (value:Date|number|string):number => {
            if (typeof value === 'number')
                return value

            if (value instanceof Date)
                return value.getTime() / 1000

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

                if (isNaN(parsedFloat))
                    return 0

                return parsedFloat
            }

            return parsedDate / 1000
        },
        type: 'time'
    },

    float: {
        format: {final: {transform: (
            value:number,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string =>
            transformer.float.format ?
                value === Infinity ?
                    'Infinity' :
                    value === -Infinity ?
                        '- Infinity' :
                        (new Intl.NumberFormat(
                            GenericInput.locales,
                            transformer.float.format.final.options || {}
                        )).format(value) :
                `${value}`
        }},
        parse: (
            value:number|string, configuration:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseFloat(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/\./g, '').replace(/,/g, '.') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof value === 'number' &&
                (
                    typeof configuration.minimum === 'number' &&
                    configuration.minimum >= 0 &&
                    value < 0 ||
                    typeof configuration.maximum === 'number' &&
                    configuration.maximum <= 0 &&
                    value > 0
                )
            )
                value *= -1

            return value
        },
        type: 'text'
    },
    integer: {
        format: {final: {transform: (
            value:number,
            configuration:DefaultProperties<number>,
            transformer:InputDataTransformation
        ):string => (
            new Intl.NumberFormat(
                GenericInput.locales,
                {
                    maximumFractionDigits: 0,
                    ...(transformer.integer.format?.final.options ?? {})
                }
            )).format(value)
        }},
        parse: (
            value:number|string, configuration:DefaultProperties<number>
        ):number => {
            if (typeof value === 'string')
                value = parseInt(
                    GenericInput.locales[0] === 'de-DE' ?
                        value.replace(/[,.]/g, '') :
                        value
                )

            // Fix sign if possible.
            if (
                typeof value === 'number' &&
                (
                    typeof configuration.minimum === 'number' &&
                    configuration.minimum >= 0 &&
                    value < 0 ||
                    typeof configuration.maximum === 'number' &&
                    configuration.maximum <= 0 &&
                    value > 0
                )
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
