import React from 'react';
import {Box, Typography} from "@mui/material";

import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import sx from './sx'


export const NotAccessSimpleView = ({onLogout}: {
	onLogout: () => void
}) => {
	return (
		<Box
			sx={sx.wrapper}
		>
			<Box
				sx={sx.overlay}
			/>
			<Box
				sx={sx.root}
			>
				<Box
					component="form"
					onSubmit={onLogout}
					display="flex"
					flexDirection="column"
					gap={2}
					sx={sx.form}
				>
					<Typography
						variant={'body2'}
						sx={sx.message}
					>
						У вас немає доступу
					</Typography>
					
					<PrimaryBtn
						type="submit"
					>
						Вийти
					</PrimaryBtn>
				</Box>
			</Box>
		</Box>
	);
};

