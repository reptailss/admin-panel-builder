import {SxStyles} from '@sx'

export default {
    inner:{
        display:'flex',
        flexDirection:'column',
        flex:1,
    },
    root: {
        height: '100%',
        flex: '1',
    },
} as const satisfies SxStyles