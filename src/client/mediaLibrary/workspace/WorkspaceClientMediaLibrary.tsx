import React from 'react';
import {
	ClientMediaLibraryTreeFolders
} from "@client/mediaLibrary/containers/folders/tree/ClientMediaLibraryTreeFolders";
import {Box, Divider, Grid} from "@mui/material";
import {useMediaView} from "@client/hooks/ui/useMediaView";
import {ClientMediaLibraryHeadSideBar} from "@client/mediaLibrary/headSidebar/ClientMediaLibraryHeadSideBar";
import sx from './sx'
import {ClientMediaLibraryFolders} from "@client/mediaLibrary/containers/folders/ClientMediaLibraryFolders";
import {ClientMediaLibrarySidebar} from "@client/mediaLibrary/view/sidebar/ClientMediaLibrarySidebar";
import {ClientMediaLibraryFiles} from "@client/mediaLibrary/containers/files/ClientMediaLibraryFiles";

export const WorkspaceClientMediaLibrary = () => {
	
	const {isDesktop} = useMediaView()
	
	return (
		<Box
			sx={sx.inner}
		>
			<ClientMediaLibraryHeadSideBar/>
			
			<Grid
				sx={sx.root}
				container
			>
				{isDesktop && <Grid
                    size={{
						xs: 3
					}}
                >
                    <ClientMediaLibraryTreeFolders/>
                </Grid>}
				<Grid
					size={{
						xs: 12,
						lg: 9
					}}
				>
					<ClientMediaLibrarySidebar/>
					
					<Divider/>
					
					<ClientMediaLibraryFolders>
						<ClientMediaLibraryFiles/>
					</ClientMediaLibraryFolders>
				</Grid>
			</Grid>
		</Box>
	);
};
