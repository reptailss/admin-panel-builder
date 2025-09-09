import {SxStyles} from "@client/system/sx";

export default {
    overlay: {
        position: 'absolute',
        left:0,
        right:0,
        bottom:0,
        top:0,
        zIndex:55,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg:{
        background:
            "radial-gradient(circle at 30% 30%, #c2f0ff 0%, transparent 40%),\n              radial-gradient(circle at 70% 40%, #ffc1b6 0%, transparent 50%),\n              radial-gradient(circle at 50% 70%, #b3e5fc 0%, transparent 60%)",
        backgroundColor: "#f3f4f6",
        filter: "blur(60px)",
        zIndex: -1,
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    }
} as const satisfies SxStyles