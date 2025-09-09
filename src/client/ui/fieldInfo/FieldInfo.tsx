import React, {ReactNode} from 'react';
import {Box, Typography} from "@mui/material";
import sx from './sx'
import {Icon} from "@iconify/react";

export const FieldInfo = ({title, icon, children}: {
	title?: ReactNode
	icon?: string | null
	children?: ReactNode
}) => {
	if (!title && !icon) {
		return children
	}
	return (
		<Box
			sx={sx.root}
		>
			{icon && <Icon
                icon={icon}
                style={{
					fontSize: '28px'
				}}
            />}
			{title && <Typography
                sx={sx.title}
            >
				{title}
            </Typography>}
			
			{children && children}
		</Box>
	);
};

