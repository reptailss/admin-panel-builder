export declare const EditorLinkToolbarPopover: ({ onChange, currentState, }: {
    onChange: (type: 'link' | 'unlink', linkTitle?: string, linkTarget?: string, linkTargetOption?: '_blank' | '_self') => void;
    currentState: {
        link: {
            target: string;
            targetOption: '_blank' | '_self';
            title: string;
        };
        selectionText: string;
    };
}) => import("react/jsx-runtime").JSX.Element;
