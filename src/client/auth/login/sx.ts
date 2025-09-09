import {SxStyles} from "@client/system/sx";


export default {
	root: {
		padding: '32px',
		maxWidth: '400px',
		zIndex: 5,
		position: "relative",
		backgroundColor: 'rgb(249, 250, 251)',
		borderRadius: '16px',
		display:'flex',
		flexDirection: 'column',
		gap:'12px',
		minWidth:{
			lg:'420px'
		}
	},
	inner: {
		position: "relative",
		width: '100dvw',
		height: '100dvh',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	
		
	},
	form:{
		width:'100%'
	},
	title: {
		color: 'rgb(28, 37, 46)',
		fontSize: '19px',
		fontWeight: 700,
		paddingBottom:'10px'
	},
	overlay: {
		background:
			"radial-gradient(circle at 30% 30%, #c2f0ff 0%, transparent 40%),\n              radial-gradient(circle at 70% 40%, #ffc1b6 0%, transparent 50%),\n              radial-gradient(circle at 50% 70%, #b3e5fc 0%, transparent 60%)",
		backgroundColor: "#f3f4f6",
		filter: "blur(60px)",
		zIndex: -1,
		width: '100%',
		height: '100%',
		left: 0,
		top: 0,
		right: 0,
		bottom: 0,
		position: 'absolute',
	}
} as const satisfies SxStyles