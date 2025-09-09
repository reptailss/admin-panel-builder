import {SxStyles} from '@sx'

export default {
	modal: {
		width: '95vw',
		maxWidth: '95vw',
		height: '95vh',
		maxHeight: '95vh',
		overflow: 'hidden',
		display: 'flex',
		flex:1,
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius:'4px',
		boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px'
	},
	modalInner:{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	}
} as const satisfies SxStyles