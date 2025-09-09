import { ReactElement } from "react";
export interface BreadcrumbItem {
    path?: string;
    title?: string;
    onClick?: () => void;
    type?: 'url' | 'text';
    icon?: ReactElement;
}
