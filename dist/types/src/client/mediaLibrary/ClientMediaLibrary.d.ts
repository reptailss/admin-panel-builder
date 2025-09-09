import React from 'react';
import { OnSelectMediaLibraryFile } from "./types/events";
import { IMediaValueProvider } from "../../fields/interfaces/mediaValueProvider";
export declare const ClientMediaLibrary: React.MemoExoticComponent<({ onSelectFile, initialSelectedFile, provider, mediaType, globalRoles, rolesByTypes, }: {
    onSelectFile: OnSelectMediaLibraryFile;
    initialSelectedFile: string | null;
    provider: IMediaValueProvider;
    mediaType: 'image' | 'video' | null;
    globalRoles: readonly string[];
    rolesByTypes: {
        createFolder?: readonly string[];
        updateFolder?: readonly string[];
        deleteFolder?: readonly string[];
        createFile?: readonly string[];
        deleteFile?: readonly string[];
    };
}) => import("react/jsx-runtime").JSX.Element>;
