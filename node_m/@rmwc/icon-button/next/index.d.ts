import * as RMWC from '@rmwc/types';
import React from 'react';
import { MDCIconButtonToggleFoundation } from '@material/icon-button';
/*********************************************************************
 * Events
 *********************************************************************/
export declare type IconButtonOnChangeEventT = RMWC.CustomEventT<{
    isOn: boolean;
}>;
/*********************************************************************
 * Icon Button
 *********************************************************************/
/** An IconButton component that can also be used as a toggle. */
export interface IconButtonProps extends RMWC.WithRippleProps {
    /** Controls the on / off state of the a toggleable button. */
    checked?: boolean;
    /** Apply an aria label. */
    label?: string;
    /** An onChange callback that receives a custom event. evt.detail = { isOn: boolean } */
    onChange?: (evt: IconButtonOnChangeEventT) => void;
    /** Makes the button disabled */
    disabled?: boolean;
    /** Icon for the button */
    icon?: RMWC.IconPropT;
    /** If specified, renders a toggle with this icon as the on state. */
    onIcon?: RMWC.IconPropT;
    /** Advanced: A reference to the MDCFoundation. Only for Toggleable buttons. */
    foundationRef?: React.Ref<MDCIconButtonToggleFoundation>;
}
export declare type IconButtonHTMLProps = RMWC.HTMLProps<HTMLInputElement, Omit<React.AllHTMLAttributes<HTMLButtonElement>, 'onChange'>>;
/** An IconButton component that can also be used as a toggle. */
export declare const IconButton: RMWC.ComponentType<IconButtonProps, IconButtonHTMLProps, 'button'>;
