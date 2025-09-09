import React from 'react'
import {Button} from '@mui/material'

export const RefetchBtn = ({
							  onRefetch,
							  disabled,
						  }: {
	onRefetch: () => void
	disabled: boolean
}) => {
	return (
		<Button
			variant={'text'}
			onClick={onRefetch}
			// startIcon={<RefreshIcon />}
			disabled={disabled}
		>
			Оновити
		</Button>
	)
}
