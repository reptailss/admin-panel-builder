import {SxStyles} from '@sx'

export default {
    item:{
        transition:'all .3s',
        '&:hover':{
            cursor:'pointer'
        }
    },
    home:{
        fontWeight:700,
        transition:'all .3s',
        '&:hover':{
            cursor:'pointer'
        }
    },
} as const satisfies SxStyles