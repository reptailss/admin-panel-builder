import React from 'react';
import {Avatar, IconButton, Typography,} from '@mui/material';
import {LogOutIconSvg} from "@client/icons/LogOutIconSvg";
import Stack from "@mui/material/Stack";

export const UserSidebarView = ({
									userInfo,
									onLogout
								}: {
	onLogout: () => void
	userInfo: {
		userName: string
		picture: string | null
	}
}) => {
	
	return (
		<Stack
			display="flex"
			flexDirection="row"
			alignItems="center"
			sx={{
				gap: {
					xs: '5px',
					lg: '16px'
				}
			}}
		>
			<Avatar
				src={userInfo.picture || ''}
				sx={{width: 30, height: 30}}
			/>
			<Typography
				variant="body2"
				sx={{
					color: 'black'
				}}
			>
				{userInfo?.userName}
			</Typography>
			
			<IconButton
				onClick={onLogout}
				size={'small'}
				title={'Вийти'}
			>
				<LogOutIconSvg/>
			</IconButton>
		</Stack>
	);
};

