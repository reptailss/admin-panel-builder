import React, { ReactNode } from 'react';
import { SxStyle } from "../../system/sx";
export declare const AddBtn: ({ children, type, onClick, sx, disabled, endIcon, }: {
    children?: ReactNode;
    type?: "button" | "submit" | undefined;
    sx?: SxStyle | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    endIcon?: React.ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
