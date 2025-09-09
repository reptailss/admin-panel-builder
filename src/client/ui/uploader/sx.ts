import {SxStyles} from '@client/system/sx'

export default {
	previewImage: {
		maxWidth: '100%',
		maxHeight: 300,
		borderRadius: 2,
		objectFit: 'contain',
		border: '1px solid #ccc',
	},
} as const satisfies SxStyles