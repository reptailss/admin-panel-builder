import { ReactNode } from 'react';
import { SxStyle } from "../../system/sx";
export declare const SecondaryBtn: ({ children, type, onClick, sx, disabled, endIcon, }: {
    children: ReactNode;
    type?: "submit" | undefined;
    sx?: SxStyle | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
    endIcon?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
