declare const _default: {
    readonly container: {
        readonly display: "grid";
        readonly gridTemplateAreas: {
            readonly xs: "\"header\" \"content\"";
            readonly lg: "\"sidebar header\" \"sidebar content\"";
        };
        readonly gridTemplateRows: {
            readonly xs: "auto 1fr";
            readonly lg: "auto 1fr";
        };
        readonly gridTemplateColumns: {
            readonly xs: "1fr";
            readonly lg: "300px 1fr";
        };
        readonly height: "100dvh";
        readonly backgroundColor: "#F9FAFB";
    };
    readonly header: {
        readonly gridArea: "header";
        readonly height: "50px";
        readonly alignSelf: "start";
    };
    readonly sidebar: {
        readonly gridArea: "sidebar";
        readonly overflowY: "auto";
        readonly backgroundColor: "#F9FAFB";
        readonly borderRight: "1px solid rgba(145 158 171 / 0.12)";
    };
    readonly content: {
        readonly gridArea: "content";
        readonly overflowY: "auto";
    };
};
export default _default;
