import sx from './sx'

import {AppBar, IconButton} from '@mui/material'
import React, {ReactNode} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {useMediaView} from "@client/hooks/ui/useMediaView";
import {BurgerIconSvg} from "@client/icons/BurgerIconSvg";
import {UserSidebar} from "@client/user/userSidebar/UserSidebar";
import {SelectClientLocale} from "@client/locales/SelectClientLocale";


export const ClientHeader = ({
								 children
							 }: {
	children?: ReactNode
}) => {
	
	const {setOpenMobileSidebar} = useClientAppContext()
	const {isDesktop} = useMediaView()
	
	return (
		<AppBar
			sx={sx.root}
		>
			{children && children}
			
			{isDesktop && <SelectClientLocale
                desktopWidth={'70px'}
                mobileWidth={'70px'}
            />}
			
			
			 <UserSidebar/>
			
			{!isDesktop && <IconButton
                onClick={() => setOpenMobileSidebar(true)}
            >
                <BurgerIconSvg color={'black'} />
            </IconButton>}
		</AppBar>
	)
}

