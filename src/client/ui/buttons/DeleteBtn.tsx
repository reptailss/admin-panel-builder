import React, {ReactNode} from 'react';
import {Button} from '@mui/material';
import {SxStyle} from '@sx';

export const DeleteBtn = ({
							  children,
							  type,
							  onClick,
							  sx = {},
							  disabled,
						  }: {
	children: ReactNode;
	type?: 'submit';
	sx?: SxStyle;
	onClick?: () => void;
	disabled?: boolean;
}) => {
	return (
		<Button
			sx={{
				color: '#fff',
				backgroundColor: '#ef4444', // red-500
				boxShadow: '0 4px 10px rgba(239, 68, 68, 0.3)', // легка тінь
				transition: 'background-color 0.25s ease, transform 0.15s ease, box-shadow 0.2s ease',
				fontWeight: 700,
				fontSize: '15px',
				borderRadius: '10px',
				padding: '10px 24px',
				textTransform: 'none',
				'&:hover': {
					backgroundColor: '#dc2626', // red-600
					boxShadow: '0 6px 18px rgba(220, 38, 38, 0.4)',
					transform: 'translateY(-1px)',
				},
				'&:active': {
					transform: 'scale(0.97)',
					boxShadow: '0 2px 8px rgba(220, 38, 38, 0.3)',
				},
				'&:disabled': {
					backgroundColor: '#fecaca', // red-200
					color: '#7f1d1d',
					boxShadow: 'none',
				},
				...sx,
			}}
			variant="contained"
			type={type}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</Button>
	);
};
