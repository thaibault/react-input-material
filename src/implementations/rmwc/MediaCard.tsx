// -*- coding: utf-8 -*-
/** @module Card */
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
import {Typography} from '@rmwc/typography'
import {Theme} from '@rmwc/theme'
import {
    Card,
    CardActionButton,
    CardActionButtons,
    CardActions,
    CardMedia,
    CardPrimaryAction
} from '@rmwc/card'
import {mask} from 'clientnode'
import React, {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    useImperativeHandle,
    useRef
} from 'react'
import GenericAnimate from 'react-generic-animate'

import CircularProgress from './CircularProgress'

import {
    MediaCardProperties,
    MediaCardReference,
    MediaCardRepresentationType
} from '../type'
import {
    defaultFileNameInputProperties,
    Properties,
    Value
} from '../../components/FileInput/type'
import {renderMessage} from '../../helper'
import TextInput from '../../components/TextInput'
import {Props as TextInputProps} from '../../components/TextInput/type'

// endregion
export interface Reference extends MediaCardReference {
}

export const MediaCardInner = function(
    {content, contentType, type, url}: MediaCardProperties,
    reference?: ForwardedRef<MediaCardReference | null>
): ReactElement {
    const cardReference = useRef<HTMLDivElement | null>(null)
    const iFrameReference = useRef<HTMLIFrameElement | null>(null)

    useImperativeHandle(
        reference,
        () => ({
            card: cardReference,
            iFrame: iFrameReference
        })
    )

    return <Card
        ref={cardReference}
    >
        <CardPrimaryAction>
            {type === MediaCardRepresentationType.PENDING ?
                <CircularProgress size="large" /> :
                type === MediaCardRepresentationType.IMAGE ?
                    <CardMedia
                        {...properties.media}
                        style={{backgroundImage: `url(${url})`}}
                    /> :
                    type === MediaCardRepresentationType.VIDEO ?
                        <video autoPlay loop muted>
                            <source
                                src={url}
                                type={contentType}
                            />
                        </video> :
                        type === MediaCardRepresentationType.TEXT ?
                            <div className={
                                [CSS_CLASS_NAMES.fileInputIframeWrapper]
                                    .concat(
                                        ['text/html', 'text/plain']
                                            .includes(contentType) ?
                                            CSS_CLASS_NAMES[
                                                'fileInputIframeWrapper' +
                                                'Padding'
                                            ] :
                                            []
                                    )
                                    .join(' ')
                            }>
                                <iframe
                                    ref={iFrameReference}
                                    style={{border: 0, overflow: 'hidden'}}
                                    src={url}
                                />
                            </div> :
                            type === MediaCardRepresentationType.TEXT ?
                                <pre
                                    className={
                                        CSS_CLASS_NAMES
                                            .fileInputTextRepresentation
                                    }
                                >
                                    {content}
                                </pre> :
                                ''
            }
            <div className={CSS_CLASS_NAMES.fileInputInfo}>
                <Typography tag="h2" use="headline6">
                    {invalid ?
                        <Theme use="error">{
                            properties.description ?
                                properties.description :
                                properties.name
                        }</Theme> :
                        properties.description ?
                            properties.description :
                            properties.name
                    }
                </Typography>
                <GenericAnimate
                    in={invalid || Boolean(properties.declaration)}
                >
                    <div className={CSS_CLASS_NAMES.fileInputInfoBody}>
                        {properties.declaration ?
                            <Typography
                                style={{marginTop: '-1rem'}}
                                tag="h3"
                                theme="textSecondaryOnBackground"
                                use="subtitle2"
                            >
                                {invalid ?
                                    <Theme use="error">
                                        {properties.declaration}
                                    </Theme> :
                                    properties.declaration
                                }
                            </Typography> :
                            ''
                        }
                        <Theme use="error" wrap={true}>
                            <span id={`${id}-error-message`}>
                                {renderMessage<Properties<Type>>(
                                    properties.invalidContentTypePattern &&
                                    properties.contentTypePatternText ||

                                    properties[
                                        'invalidInvertedContentTypePattern'
                                        ] &&
                                    properties
                                        .invertedContentTypePatternText ||

                                    properties.invalidMaximumSize &&
                                    properties.maximumSizeText ||

                                    properties.invalidMinimumSize &&
                                    properties.minimumSizeText ||

                                    properties.invalidRequired &&
                                    properties.requiredText,

                                    properties
                                )}
                            </span>
                        </Theme>
                    </div>
                </GenericAnimate>
                {properties.value ?
                    <TextInput
                        ref={nameInputReference}

                        {...properties.generateFileNameInputProperties(
                            {
                                disabled: properties.disabled,
                                value: (
                                    properties.value as Value | null
                                )?.name,

                                ...mask(
                                    defaultFileNameInputProperties,
                                    {
                                        exclude: Object.keys(
                                            properties.model.fileName
                                        )
                                    }
                                ) as TextInputProps<string>,

                                default: properties.value.name,
                                model: properties.model.fileName,
                                onChangeValue: onChangeValue,
                                triggerInitialPropertiesConsolidation
                            },
                            properties as
                                Omit<Properties<Type>, 'value'> &
                                {value: Type & {name: string}}
                        )}
                    /> :
                    ''
                }
                {properties.children ?
                    properties.children({
                        declaration: properties.declaration,
                        invalid,
                        properties,
                        value: properties.value
                    }) :
                    ''
                }
            </div>
            {/* TODO use "accept" attribute for better validation. */}
            <input
                disabled={properties.disabled}

                className={CSS_CLASS_NAMES.fileInputNative}
                id={id}

                name={properties.name}

                onChange={onChangeValue}

                ref={fileInputReference}

                type="file"
            />
        </CardPrimaryAction>
        {(
            (
                !properties.disabled &&
                (
                    properties.value ?
                        properties.editButton :
                        properties.newButton
                )
            ) ||
            (
                properties.value &&
                (
                    (!properties.disabled && properties.deleteButton) ||
                    (properties.value.url && properties.downloadButton)
                )
            )
        ) ?
            <CardActions>
                <CardActionButtons>
                    {(
                        !properties.disabled &&
                        (
                            properties.value ?
                                properties.editButton :
                                properties.newButton
                        )
                    ) ?
                        <CardActionButton
                            onClick={() => {
                                fileInputReference.current?.click()
                            }}
                            ref={uploadButtonReference}
                        >
                            {properties.value ?
                                properties.editButton :
                                properties.newButton
                            }
                        </CardActionButton> :
                        ''
                    }
                    {properties.value ?
                        <>
                            {(
                                !properties.disabled &&
                                properties.deleteButton
                            ) ?
                                <CardActionButton
                                    onClick={() => {
                                        onChangeValue()
                                    }}
                                    ref={deleteButtonReference}
                                >
                                    {properties.deleteButton}
                                </CardActionButton> :
                                ''
                            }
                            {(
                                properties.value.url &&
                                properties.downloadButton
                            ) ?
                                <CardActionButton
                                    onClick={() => {
                                        downloadLinkReference
                                            .current?.click()
                                    }}
                                >
                                    <a
                                        className={
                                            CSS_CLASS_NAMES
                                                .fileInputDownload
                                        }
                                        download={properties.value.name}
                                        href={properties.value.url}
                                        ref={downloadLinkReference}
                                        target="_blank"
                                        {...(contentType ?
                                                {type: contentType} :
                                                {}
                                        )}
                                    >{properties.downloadButton}</a>
                                </CardActionButton> :
                                ''
                            }
                        </> :
                        ''
                    }
                </CardActionButtons>
            </CardActions> :
            ''
        }
    </Card>
}
export const MediaCard = memorize(forwardRef(MediaCardInner)) as typeof MediaCardInner

export default MediaCard
