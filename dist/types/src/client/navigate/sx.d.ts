declare const _default: {
    readonly title: {
        readonly color: "#637381";
        readonly '.isActive &': {
            readonly color: "rgb(24, 119, 242)";
        };
    };
    readonly btn: {
        readonly '&:hover': {
            readonly backgroundColor: "rgba(145, 158, 171, 0.08)";
        };
        readonly '.isActive &': {
            readonly backgroundColor: "rgba(24, 119, 242, 0.08)";
            readonly color: "rgb(24, 119, 242)";
            readonly '&:hover': {
                readonly backgroundColor: "rgba(24, 119, 242, 0.16)";
            };
        };
        readonly borderRadius: "6px";
        readonly fontSize: "14px";
        readonly marginBottom: "4px";
    };
    readonly accordionTitle: {
        readonly color: "#637381";
    };
    readonly accordion: {
        readonly backgroundColor: "transparent";
        readonly minHeight: "auto";
        readonly paddingTop: "0";
        readonly boxShadow: "none";
    };
    readonly accordionBtn: {
        readonly '&:hover': {
            readonly backgroundColor: "transparent";
        };
    };
    readonly accordionDetails: {
        readonly margin: "0!important";
        readonly padding: "0!important";
        readonly paddingLeft: "40px!important";
    };
    readonly icon: {};
    readonly summary: {
        readonly margin: "0 0 4px 0!important";
        readonly padding: "0!important";
        readonly minHeight: "auto!important";
        readonly fontSize: "14px";
        readonly borderRadius: "6px!important";
        readonly '&:hover': {
            readonly backgroundColor: "rgba(145, 158, 171, 0.08)";
        };
        readonly '& .MuiAccordionSummary-content': {
            readonly margin: "0!important";
            readonly padding: "0!important";
        };
        readonly '& .MuiAccordionSummary-expandIconWrapper': {
            readonly paddingRight: "10px";
            readonly paddingLeft: "10px";
        };
    };
};
export default _default;
