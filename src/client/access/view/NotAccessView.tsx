import React from 'react';
import {Box, Typography} from "@mui/material";

import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import sx from './sx'


export const NotAccessView = ({onLogout}: {
	onLogout: () => void
}) => {
	return (
		<Box
			sx={sx.inner}
		>
			<Box
				sx={sx.overlay}
			/>
			<Box
				sx={sx.root}
			>
				<Typography
					variant="h5"
					gutterBottom
					sx={sx.title}
				>
					Sign in
				</Typography>
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

