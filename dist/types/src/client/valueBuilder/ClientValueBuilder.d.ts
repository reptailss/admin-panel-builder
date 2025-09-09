import React, { ReactNode } from 'react';
import { IField } from "../../fields/interfaces/field";
export declare const ClientValueBuilder: React.NamedExoticComponent<{
    initialValue: any | null;
    field: IField;
    onSave?: (<Value>(value: Value) => void) | undefined;
    onDelete?: (() => void) | undefined;
    actionsChildren?: ReactNode;
}>;
