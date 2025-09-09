import React from "react";
import { IField } from "../../fields/interfaces/field";
import { OnAddToArrayValueBuilder, OnChangeUnionTypeValueBuilder, OnChangeValueBuilder, OnClosePopoverValueBuilder, OnDeleteFromArrayValueBuilder } from "./types/events";
export declare const ValueBuilderFieldView: React.MemoExoticComponent<(context: {
    initialValue: unknown | null;
    field: IField<unknown>;
    path: string | null;
    onChange: OnChangeValueBuilder<unknown>;
    onAddToArray: OnAddToArrayValueBuilder<unknown>;
    onDeleteFromArray: OnDeleteFromArrayValueBuilder<unknown>;
    onClosePopover: OnClosePopoverValueBuilder<unknown>;
    hideName?: boolean;
    onChangeUnionTypeValueBuilder: OnChangeUnionTypeValueBuilder<unknown>;
}) => import("react/jsx-runtime").JSX.Element>;
