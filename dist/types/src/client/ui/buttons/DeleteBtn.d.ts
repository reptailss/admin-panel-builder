import { ReactNode } from 'react';
import { SxStyle } from "../../system/sx";
export declare const DeleteBtn: ({ children, type, onClick, sx, disabled, }: {
    children: ReactNode;
    type?: "submit" | undefined;
    sx?: SxStyle | undefined;
    onClick?: (() => void) | undefined;
    disabled?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
