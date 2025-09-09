import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';
import sx from './sx'
import {useClientAppContext} from "@client/app/context/useClientAppContext";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
	props,
	ref,
) {
	return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


export const SnackBar = () => {
	
	const {snackBar, setSnackBar} = useClientAppContext()
	
	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setSnackBar({
			open: false,
			variant: 'info',
			message: ''
		})
	};
	
	return (
		<Stack
			spacing={2}
			sx={sx.root}
		>
			<Snackbar
				open={snackBar.open}
				autoHideDuration={5000}
				onClose={handleClose}
			>
				<Alert
					onClose={handleClose}
					severity={snackBar.variant}
					sx={sx.alert}
				>
					{snackBar.message}
				</Alert>
			</Snackbar>
		</Stack>
	);
};
