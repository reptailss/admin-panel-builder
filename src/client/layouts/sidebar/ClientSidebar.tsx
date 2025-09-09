import React from 'react';
import {ClientNavigate} from "@client/navigate/ClientNavigate";
import {LogoSvg} from "@client/images/LogoSvg";
import {Box} from "@mui/material";

export const ClientSidebar = () => {
	
	return (
		<>
			<Box
				sx={{
					padding: '20px'
				}}
			>
				<LogoSvg/>
			</Box>
			
			<ClientNavigate/>
		</>
	);
};

