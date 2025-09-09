import { ReactElement } from 'react';
import { SxStyle } from "../../system/sx";
export declare const Modal: ({ open, onClose, children, sx }: {
    open: boolean;
    onClose: () => void;
    children: ReactElement;
    sx?: SxStyle | undefined;
}) => import("react/jsx-runtime").JSX.Element;
