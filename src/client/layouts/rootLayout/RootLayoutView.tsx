import React, {ReactNode} from 'react'
import {Box} from "@mui/material";
import sx from "./sx";
import {useMediaView} from "@client/hooks/ui/useMediaView";
import {Drawer} from "@client/ui/drawer/Drawer";
import {useClientAppContext} from "@client/app/context/useClientAppContext";


export const RootLayoutView = ({
								   children,
								   sidebar,
								   header
							   }: {
	children: ReactNode
	sidebar: ReactNode
	header: ReactNode
}) => {
	const {isDesktop} = useMediaView()
	const {openMobileSidebar, setOpenMobileSidebar} = useClientAppContext()
	return (
		<>
			<Box
				sx={sx.container}
			>
				<Box
					sx={sx.header}
				>
					{header}
				</Box>
				
				{isDesktop && <Box
                    sx={sx.sidebar}
                >
					{sidebar}
                </Box>}
				
				<Box
					sx={sx.content}
				>
					{children}
				</Box>
			</Box>
			
			{!isDesktop && <Drawer
                open={openMobileSidebar}
                onClose={() => setOpenMobileSidebar(false)}
            >
				{sidebar}
            </Drawer>}
		
		</>
	)
}
