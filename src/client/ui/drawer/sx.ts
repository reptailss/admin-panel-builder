import {SxStyles} from '@client/system/sx'

export default {
	root: {
		'& .MuiPaper-root': {
			backgroundColor: '#F9FAFB',
		},
	},
	menuButton: {
		display: {xs: 'inline-flex', md: 'none'},
		ml: 1,
	},
	drawerContainer: {
		width: 250,
		pt: 1,
		backgroundColor: '#F9FAFB',
		minHeight: '100%',
		flex: 1,
	},
	closeButton: {
		display: 'flex',
		justifyContent: 'flex-end',
		px: 1,
	},
} as const satisfies SxStyles