import {SxStyles} from '@sx'

export default {
    root: {
        width: '75px',
        minWidth:'75px',
        maxWidth: '75px'
    },
    folder: {
        transition: 'all .3s',
        '&:hover': {
            cursor: "pointer",
        },
        maxWidth: '55px',
        width: '55px'
    },
    icon: {
        color: '#80abed',
    },
    name: {
        overflowWrap: 'break-word',
        width: '65px',
        transition: 'all .3s',
        '&:hover': {
            cursor: "pointer",
        },
    }
} as const satisfies SxStyles