import React, {ReactNode} from 'react';
import {Box} from "@mui/material";
import sx from './sx'
import {Icon} from "@iconify/react";

export const FieldInfoPreview = ({icon, children}: {
	icon?: string | null
	children?: ReactNode
}) => {
	if (!icon) {
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
			
			
			{children && children}
		</Box>
	);
};

