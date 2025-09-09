import {SxStyles} from '@sx'

export default {
	root: {
		backgroundColor: 'rgb(255, 255, 255)',
		borderRadius: '16px',
		height: '352px',
		overflow: 'hidden',
		position: 'relative',
		display:'flex',
		flexDirection: 'column',
	},
	img: {
		objectFit: 'cover',
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width:'100%',
		height:'100%'
	},
	overlay: {
		backgroundColor: 'rgba(20, 26, 33, 0.72)',
		position: 'absolute',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		width:'100%',
		height:'100%'
	},
	content: {
		position: 'relative',
		zIndex: 5,
		fontSize: '14px',
		padding: '24px',
		color:'white',
		marginTop:"auto",
		display:'flex',
		flexDirection:'column',
		gap:'8px',
	}
} as const satisfies SxStyles