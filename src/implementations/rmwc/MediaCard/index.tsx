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

import {Mapping} from 'clientnode'

import {
    ForwardedRef,
    forwardRef,
    memo as memorize,
    ReactElement,
    ReactNode,
    useId,
    useImperativeHandle,
    useRef
} from 'react'
import GenericAnimate from 'react-generic-animate'

import {
    MediaCardProperties, MediaCardReference, MediaCardRepresentationType
} from '../../type'
import CircularProgress from '../CircularProgress'
import cssClassNames from './style.module'
// endregion
export const CSS_CLASS_NAMES = cssClassNames as Mapping

export const MediaCardInner = function(
    properties: MediaCardProperties,
    reference?: ForwardedRef<MediaCardReference | null>
): ReactElement {
    const defaultID = useId()
    const id = properties.id ?? defaultID
    // region references
    const cardReference = useRef<HTMLDivElement | null>(null)
    const iFrameReference = useRef<HTMLIFrameElement | null>(null)

    const deleteButtonReference = useRef<HTMLButtonElement>(null)
    const downloadLinkReference = useRef<HTMLAnchorElement>(null)
    const uploadButtonReference = useRef<HTMLDivElement>(null)

    useImperativeHandle(
        reference,
        () => ({
            card: cardReference,
            iFrame: iFrameReference,

            deleteButton: deleteButtonReference,
            downloadLink: downloadLinkReference,
            uploadButton: uploadButtonReference
        })
    )
    // endregion
    const determineMediaContent = (): ReactNode => {
        if (properties.type === MediaCardRepresentationType.PENDING)
            return <CircularProgress size="large" />

        if (
            properties.type === MediaCardRepresentationType.IMAGE &&
            properties.url
        )
            return <CardMedia
                sixteenByNine
                className={properties.imageClassNames?.join(' ')}
                style={{backgroundImage: `url(${properties.url})`}}
            />

        if (properties.type === MediaCardRepresentationType.VIDEO)
            return <video autoPlay loop muted>
                <source src={properties.url} type={properties.contentType}/>
            </video>

        if (properties.type === MediaCardRepresentationType.IFRAME)
            return <div className={
                [CSS_CLASS_NAMES.fileInputIframeWrapper]
                    .concat(
                        ['text/html', 'text/plain'].includes(
                            properties.contentType as string
                        ) ?
                            CSS_CLASS_NAMES.fileInputIframeWrapperPadding :
                            []
                    )
                    .concat(properties.iframeWrapperClassNames ?? [])
                    .join(' ')
            }>
                <iframe
                    ref={iFrameReference}
                    style={{border: 0, overflow: 'hidden'}}
                    src={properties.url}
                />
            </div>

        if (properties.type === MediaCardRepresentationType.TEXT)
            return <pre className={
                [CSS_CLASS_NAMES.fileInputTextRepresentation]
                    .concat(properties.textRepresentationClassNames ?? [])
                    .join(' ')
            }>{properties.content}</pre>

        return ''
    }

    const description = properties.description ?
        properties.description :
        properties.name

    return <Card
        ref={cardReference}

        className={properties.classNames?.join(' ')}
        style={properties.styles}

        onBlur={properties.onBlur}
        onClick={properties.onClick}
        onFocus={properties.onFocus}
    >
        <CardPrimaryAction>
            {determineMediaContent()}
            <div className={
                [CSS_CLASS_NAMES.fileInputInfo]
                    .concat(properties.infoClassNames ?? [])
                    .join(' ')
            }>
                <Typography tag="h2" use="headline6">
                    {properties.invalid ?
                        <Theme use="error">{description}</Theme> :
                        description
                    }
                </Typography>

                <GenericAnimate
                    in={properties.invalid || Boolean(properties.declaration)}
                >
                    <div className={
                        [CSS_CLASS_NAMES.fileInputInfoBody]
                            .concat(properties.infoBodyClassNames ?? [])
                            .join(' ')
                    }>
                        {properties.declaration ?
                            <Typography
                                style={{marginTop: '-1rem'}}
                                tag="h3"
                                theme="textSecondaryOnBackground"
                                use="subtitle2"
                            >
                                {properties.invalid ?
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
                                {properties.errorMessage}
                            </span>
                        </Theme>
                    </div>
                </GenericAnimate>

                {properties.children}
            </div>
        </CardPrimaryAction>
        {(
            (
                !properties.disabled &&
                (
                    properties.empty ?
                        properties.newButton :
                        properties.editButton
                )
            ) ||
            (
                !properties.empty &&
                (
                    (!properties.disabled && properties.deleteButton) ||
                    (properties.url && properties.downloadButton)
                )
            )
        ) ?
            <CardActions>
                <CardActionButtons>
                    {(
                        !properties.disabled &&
                        (
                            properties.empty ?
                                properties.newButton :
                                properties.editButton
                        )
                    ) ?
                        <CardActionButton
                            onClick={properties.onClickAddOrEdit}
                            ref={uploadButtonReference}
                        >
                            {properties.empty ?
                                properties.newButton :
                                properties.editButton
                            }
                        </CardActionButton> :
                        ''
                    }
                    {properties.empty ?
                        '' :
                        <>
                            {(
                                !properties.disabled &&
                                properties.deleteButton
                            ) ?
                                <CardActionButton
                                    onClick={() => {
                                        if (properties.onChange)
                                            properties.onChange()
                                    }}
                                    ref={deleteButtonReference}
                                >
                                    {properties.deleteButton}
                                </CardActionButton> :
                                ''
                            }
                            {(
                                properties.url &&
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
                                            [CSS_CLASS_NAMES.fileInputDownload]
                                                .concat(properties
                                                    .downloadLinkClassNames ??
                                                    []
                                                ).join(' ')
                                        }
                                        download={properties.fileName}

                                        href={properties.url}
                                        ref={downloadLinkReference}

                                        target="_blank"

                                        {...(properties.contentType ?
                                            {type: properties.contentType} :
                                            {}
                                        )}
                                    >{properties.downloadButton}</a>
                                </CardActionButton> :
                                ''
                            }
                        </>
                    }
                </CardActionButtons>
            </CardActions> :
            ''
        }
    </Card>
}
export const MediaCard = memorize(forwardRef(MediaCardInner)) as
    typeof MediaCardInner

export default MediaCard
