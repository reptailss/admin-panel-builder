import {SxStyles} from '@sx'

export default {
    root: {
        width:'100%',
        border:'none',
        boxShadow:'none',
        height:'100%',
        position:'relative'
    },
    list:{
        padding:{
            xs:'1rem',
            lg:'1.5rem 1rem'
        },
        overflow:'auto',
        display:'flex',
        flexWrap:'wrap',
        position:'absolute',
        left:'0',
        right:'0',
        bottom:'0',
        top:'0',
        maxHeight:'calc(100% - 63px)',
        alignContent:'baseline'
    },
} as const satisfies SxStyles