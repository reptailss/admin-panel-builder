import { ReactNode } from 'react';
import { SxStyle } from "../../system/sx";
export declare const PrimaryBtn: ({ children, type, onClick, sx, disabled, startIcon, }: {
    children: ReactNode;
    type?: "button" | "submit" | undefined;
    sx?: SxStyle | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    startIcon?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
