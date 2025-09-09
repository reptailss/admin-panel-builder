import {SxStyles} from '@sx'

export default {
	root: {
		fontSize: {
			xs: '20px',
			lg: '24px'
		},
		color:'rgb(28, 37, 46)',
		fontWeight:700,
		paddingBottom:'40px',
		display: 'flex',
		alignItems: 'center',
		gap:'10px'
	},
} as const satisfies SxStyles