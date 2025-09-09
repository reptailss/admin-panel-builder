declare const _default: {
    readonly root: {
        readonly padding: "32px";
        readonly maxWidth: "400px";
        readonly zIndex: 5;
        readonly position: "relative";
        readonly backgroundColor: "rgb(249, 250, 251)";
        readonly borderRadius: "16px";
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly gap: "12px";
        readonly minWidth: {
            readonly lg: "420px";
        };
    };
    readonly inner: {
        readonly position: "relative";
        readonly width: "100dvw";
        readonly height: "100dvh";
        readonly display: "flex";
        readonly alignItems: "center";
        readonly justifyContent: "center";
    };
    readonly form: {
        readonly width: "100%";
    };
    readonly title: {
        readonly color: "rgb(28, 37, 46)";
        readonly fontSize: "19px";
        readonly fontWeight: 700;
        readonly paddingBottom: "10px";
    };
    readonly message: {
        readonly color: "rgb(28, 37, 46)";
        readonly fontSize: "15px";
        readonly fontWeight: 600;
        readonly textAlign: "center";
    };
    readonly overlay: {
        readonly background: "radial-gradient(circle at 30% 30%, #c2f0ff 0%, transparent 40%),\n              radial-gradient(circle at 70% 40%, #ffc1b6 0%, transparent 50%),\n              radial-gradient(circle at 50% 70%, #b3e5fc 0%, transparent 60%)";
        readonly backgroundColor: "#f3f4f6";
        readonly filter: "blur(60px)";
        readonly zIndex: -1;
        readonly width: "100%";
        readonly height: "100%";
        readonly left: 0;
        readonly top: 0;
        readonly right: 0;
        readonly bottom: 0;
        readonly position: "absolute";
    };
    readonly wrapper: {
        readonly display: "flex";
        readonly alignItems: "center";
        readonly justifyContent: "center";
        readonly flex: 1;
        readonly width: "100%";
        readonly height: "100%";
        readonly minHeight: "50vh";
    };
};
export default _default;
