import React from 'react';
import FormHelperText from "@mui/material/FormHelperText"


export const ErrorMessage = ({
								 errorMessage,
							 }: {
	errorMessage: string
}) => {
	return (
		<FormHelperText
			error
		>
			<span> {errorMessage}</span>
		</FormHelperText>
	);
};
