import React, { ReactElement, ReactNode, RefObject } from 'react';
import { PopoverViewFeatures } from "./types";
export declare const Popover: ({ children, button, onClose, onOpen, featuresRef }: {
    children: ReactNode;
    onClose?: (() => void) | undefined;
    onOpen?: (() => void) | undefined;
    button: ReactElement;
    featuresRef?: React.RefObject<PopoverViewFeatures> | undefined;
}) => import("react/jsx-runtime").JSX.Element;
