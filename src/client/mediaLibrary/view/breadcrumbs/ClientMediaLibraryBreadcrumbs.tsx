import React, {useMemo} from 'react';
import {Typography} from "@mui/material";
import {Breadcrumbs} from "@client/ui/breadcrumb/Breadcrumbs";
import {useDataMediaLibraryContext, useRootMediaLibraryContext} from "@client/mediaLibrary/context/hooks";
import {BreadcrumbItem} from "@client/ui/breadcrumb/types";

export const ClientMediaLibraryBreadcrumbs = () => {
	
	const {
		setFolderId,
		folderId,
	} = useRootMediaLibraryContext()
	
	const {breadcrumbs} = useDataMediaLibraryContext()
	
	const breadcrumbsWithSetTarget: BreadcrumbItem[] = useMemo(() => {
		if (!breadcrumbs?.length) {
			return []
		}
		return breadcrumbs.map((item) => {
			const {name, id} = item;
			
			const onClick = () => {
				setFolderId(id.toString())
			}
			return {
				title: name,
				type: 'text',
				onClick
			}
		})
	}, [breadcrumbs])
	
	
	if (Number(folderId) === 0) {
		return (
			<Typography
				variant={'body2'}
				color="text.primary"
			>
				Головна
			</Typography>
		)
	}
	
	if (!breadcrumbsWithSetTarget?.length) {
		return <></>
	}
	
	return (
		<Breadcrumbs
			homeProps={{
				type: 'text',
				onClick: () => {
					setFolderId('0')
				}
			}}
			separator="›"
			breadcrumbs={breadcrumbsWithSetTarget}
		/>
	);
};
