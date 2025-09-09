import {SxStyles} from '@sx'

export default {
    root: {
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'rgba(0, 0, 0, 0.12)',
        borderRightWidth: 'thin',
        borderRadius: '0',
        height:'100%',
        flex:1,
        '.darkMode &': {
            borderColor: 'rgba(255, 255, 255, 0.12)'
        },
        position:'relative'
    },
    list:{
        overflow:'auto',
        position:'absolute',
        left:'0',
        right:'0',
        bottom:'0',
        top:'0',
        maxHeight:'100%',
    }
} as const satisfies SxStyles