import {SxStyles} from '@sx'

export default {
	root: {
		display: 'flex',
		alignItems: 'center',
		gap: '10px',
		flexWrap: 'wrap'
	},
	title: {
		fontSize: {
			xs: '14px',
			lg: '16px'
		},
		color: 'rgb(28, 37, 46)',
		fontWeight: 500,
	}
} as const satisfies SxStyles