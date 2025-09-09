import {SxStyles} from '@sx'

export default {
    root: {
        width: '75px',
        minWidth:'75px',
        maxWidth: '75px'
    },
    file:{
        transition:'all .3s',
        '&:hover':{
            cursor:"pointer",
        },
        maxWidth:'75px',
        width: '75px',
        '&.disableHover':{
            cursor:'default!important',
        }
    },
    name:{
        overflowWrap: 'break-word',
        maxWidth:'65px',
        width: '65px',
        textTransform:'lowercase',
        fontSize:'10px',
        textAlign:'left',
        '&.disableHover':{
            cursor:'default!important',
        }
    }
} as const satisfies SxStyles