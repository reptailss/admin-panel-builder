import React from 'react'
import {ClientNavigateItem} from "@client/navigate/types";
import NavigateListItem from "@client/navigate/NavigateListItem";
import Stack from "@mui/material/Stack";


export const NavigateList = ({
								 navigationList,
								 onClick,
							 }: {
	navigationList: ClientNavigateItem[]
	onClick?: () => void
}) => {
	return (
		<Stack
			sx={{
				padding: '20px',
				gap: '4px'
			}}
		>
			{navigationList.map((navigateItem, index) => {
				return (
					<NavigateListItem
						key={navigateItem.path || index}
						navigateItem={navigateItem}
						onClick={onClick}
					/>
				)
			})}
		</Stack>
	)
}
