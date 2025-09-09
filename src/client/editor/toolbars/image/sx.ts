import {SxStyles} from '@sx'

export default {
    root:{
        width:'300px',
        padding:'1rem',
        minHeight:'70vh'
    },
    sxPreview:{
        maxHeight:'100px',
        objectFit:'contain',
        objectPosition:'center center'
    },
    inner:{
        flex:'1'
    }
} as const satisfies SxStyles