import React, {ReactNode} from 'react';
import {Typography} from "@mui/material";
import sx from './sx'
import {Icon} from "@iconify/react";

export const PageInfo = ({title, icon}: {
	title: ReactNode
	icon?: string | null
}) => {
	return (
		<Typography
			sx={sx.root}
		>
			{icon && <Icon
                icon={icon}
                style={{
					fontSize: '32px'
				}}
            />}
			{title}
		</Typography>
	);
};

