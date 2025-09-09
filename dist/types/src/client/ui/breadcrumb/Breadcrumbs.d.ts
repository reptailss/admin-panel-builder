import React, { ReactElement } from 'react';
import { BreadcrumbItem } from "./types";
export declare const Breadcrumbs: ({ breadcrumbs, className, separator, homeProps }: {
    breadcrumbs?: BreadcrumbItem[] | undefined;
    className?: string | undefined;
    separator?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
    homeProps?: BreadcrumbItem | undefined;
}) => import("react/jsx-runtime").JSX.Element;
