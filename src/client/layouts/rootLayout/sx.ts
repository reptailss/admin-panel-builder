import {SxStyles} from "@sx";

export default {
	container: {
		display: 'grid',
		gridTemplateAreas: {
			xs: '"header" "content"',
			lg: '"sidebar header" "sidebar content"',
		},
		gridTemplateRows: {
			xs: 'auto 1fr',
			lg: 'auto 1fr',
		},
		gridTemplateColumns: {
			xs: '1fr',
			lg: '300px 1fr',
		},
		height: '100dvh',
		backgroundColor: '#F9FAFB',
	},
	header: {
		gridArea: 'header',
		height: '50px',
		alignSelf: 'start',
	},
	sidebar: {
		gridArea: 'sidebar',
		overflowY: 'auto',
		backgroundColor: '#F9FAFB',
		borderRight: '1px solid rgba(145 158 171 / 0.12)',
	},
	content: {
		gridArea: 'content',
		overflowY: 'auto',
	},
} as const satisfies SxStyles
