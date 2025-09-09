import {SxStyles} from '@client/system/sx'

export default {
    list:{
        padding:'0 10px'
    },
    item:{
        paddingLeft:'20px'
    },
    accountLabel:{
        '& span':{
            fontWeight:'700'
        }
    }
} as const satisfies SxStyles