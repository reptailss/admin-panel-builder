import React, {ReactElement} from 'react';
import {Breadcrumbs as BreadcrumbsLib, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import sx from './sx'
import {BreadcrumbItem} from "@client/ui/breadcrumb/types";


const Home = ({
				  title,
				  type = 'url',
				  path,
				  onClick,
			  }: BreadcrumbItem) => {
	
	
	if (type !== 'url' || !path) {
		return (
			<Typography
				sx={sx.home}
				variant={'body2'}
				color="text.primary"
				onClick={onClick}
			>
				{title ?? 'Головна'}
			</Typography>
		)
	}
	
	return (
		<NavLink
			to={path ?? '/'}
		>
			<Typography
				sx={sx.home}
				variant={'body2'}
				color="text.primary"
			>
				{title ?? 'Головна'}
			</Typography>
		</NavLink>
	);
};


export const Breadcrumbs = ({
								   breadcrumbs,
								   className,
								   separator,
								   homeProps
							   }: {
	breadcrumbs?: BreadcrumbItem[]
	className?: string
	separator?: string | ReactElement
	homeProps?: BreadcrumbItem
}) => {
	
	const list = breadcrumbs && breadcrumbs?.map((item, index, array) => {
		const {
			path,
			title,
			onClick,
			type = 'url'
		} = item;
		
		if (index === array.length - 1 || type !== 'url' || !path) {
			return (
				<Typography
					onClick={onClick}
					key={index}
					variant={'body2'}
					color="text.primary"
					sx={index !== array.length - 1 ? sx.item : {}}
				>
					{title}
				</Typography>
			)
		}
		
		return (
			<NavLink
				onClick={onClick}
				key={index}
				to={path}
			>
				<Typography
					variant={'body2'}
					color="text.primary">
					{title}
				</Typography>
			</NavLink>
		)
		
	});
	
	
	return (
		<BreadcrumbsLib
			separator={separator}
			className={className}
		>
			<Home
				{...homeProps}
			/>
			
			{list}
		</BreadcrumbsLib>
	);
};
