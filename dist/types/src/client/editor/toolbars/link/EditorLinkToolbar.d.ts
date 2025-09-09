export declare const EditorLinkToolbar: ({ currentState, onChange, onSave, }: {
    onChange: (type: 'link' | 'unlink', linkTitle?: string, linkTarget?: string, linkTargetOption?: '_blank' | '_self') => void;
    currentState: {
        link: {
            target: string;
            targetOption: '_blank' | '_self';
            title: string;
        };
        selectionText: string;
    };
    onSave?: (() => void) | undefined;
}) => import("react/jsx-runtime").JSX.Element;
