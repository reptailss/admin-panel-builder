import {SxStyles} from '@sx'

export default {
	label: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		columnGap: "30px",
		padding: "7px 0",
		transition: "all .3s",
		'&.active': {
			color: "#0c569f",
			fontWeight: "700"
		}
	},
	root: {
		"& :global(.Mui-selected )": {
			backgroundColor: "transparent"
		}
	},
} as const satisfies SxStyles