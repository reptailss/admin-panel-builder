import {SxStyles} from '@sx'

export default {
	root: {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px',
		padding: '10px 0',
	},
	paper: {
		padding: '15px 10px',
		maxWidth: '900px',
		overflowY: 'auto',
		maxHeight: '96vh'
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		padding:{
			xs:'5px 0 10px 5px'
		},
	
	}
} as const satisfies SxStyles