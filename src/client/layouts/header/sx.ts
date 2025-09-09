import {SxStyles} from '@client/system/sx'

export default {
	root: {
		width: '100%',
		backgroundColor: 'transparent',
		borderRadius: '0',
		display: 'flex',
		flexDirection: {
			lg:'row',
			xs:'row-reverse'
		},
		justifyContent: {
			lg:'flex-end',
			xs:'space-between',
		},
		height: {
			xs: '50px',
			xl: '50px',
		},
		gap: {
			lg:'15px',
			xs:'5px'
		},
		boxShadow: 'none',
		backgroundImage: 'none',
		paddingRight: {
			xs: '46px',
			lg: '0'
		},
		padding: {
			xs: '5px 16px',
			lg:'5px 10px'
		},
		position: 'relative',
	},
	burger: {
		position: 'absolute',
		zIndex: 5,
		right: '4px',
		top: '5px',
		color:'black'
	},
	wrapper: {
		padding: {
			lg: '5px 5px 5px 25px'
		}
	}
} as const satisfies SxStyles