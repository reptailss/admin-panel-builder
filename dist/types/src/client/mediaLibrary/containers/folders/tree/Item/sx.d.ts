declare const _default: {
    readonly label: {
        readonly display: "flex";
        readonly alignItems: "center";
        readonly justifyContent: "space-between";
        readonly columnGap: "30px";
        readonly padding: "7px 0";
        readonly transition: "all .3s";
        readonly '&.active': {
            readonly color: "#0c569f";
            readonly fontWeight: "700";
        };
    };
    readonly root: {
        readonly "& :global(.Mui-selected )": {
            readonly backgroundColor: "transparent";
        };
    };
};
export default _default;
