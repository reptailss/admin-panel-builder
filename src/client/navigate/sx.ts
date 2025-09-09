import {SxStyles} from '@client/system/sx'

export default {
	title: {
		color: '#637381',
		'.isActive &': {
			color:'rgb(24, 119, 242)'
		},
	},
	btn: {
		'&:hover':{
			backgroundColor: 'rgba(145, 158, 171, 0.08)',
		},
		'.isActive &': {
			backgroundColor: 'rgba(24, 119, 242, 0.08)',
			color:'rgb(24, 119, 242)',
			'&:hover':{
				backgroundColor: 'rgba(24, 119, 242, 0.16)',
			}
		},
		borderRadius:'6px',
		fontSize:'14px',
		marginBottom:'4px'
		
	},
	accordionTitle:{
		color:'#637381'
	},
	accordion:{
		backgroundColor: 'transparent',
		minHeight:'auto',
		paddingTop:'0',
		boxShadow:'none'
	},
	accordionBtn:{
		'&:hover':{
			backgroundColor: 'transparent',
		}
	},
	accordionDetails:{
		margin:'0!important',
		padding:'0!important',
		paddingLeft:'40px!important',
	},
	icon:{
		// color:'white',
	},
	summary:{
		margin:'0 0 4px 0!important',
		padding:'0!important',
		minHeight:'auto!important',
		fontSize:'14px',
		borderRadius:'6px!important',
		'&:hover':{
			backgroundColor: 'rgba(145, 158, 171, 0.08)',
		},
		'& .MuiAccordionSummary-content':{
			margin:'0!important',
			padding:'0!important',
		},
		'& .MuiAccordionSummary-expandIconWrapper':{
			paddingRight:'10px',
			paddingLeft:'10px',
		}
	}
} as const satisfies SxStyles