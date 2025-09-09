import React, {ReactNode} from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import {NavLink} from 'react-router-dom'
import sx from './sx'
import {AccordionDetails, AccordionSummary} from '@mui/material'
import Accordion from '@mui/material/Accordion'
import {ClientNavigateItem} from "@client/navigate/types";
import {ExpandMoreIconSvg} from "@client/icons/ExpandMoreIconSvg";

const AccordionCustom = ({title, children}: {
	title: ReactNode
	children: ReactNode
}) => {
	return (
		<Accordion
			sx={sx.accordion}
		>
			<AccordionSummary
				expandIcon={<ExpandMoreIconSvg/>}
				aria-controls="panel1a-content"
				sx={sx.summary}
			>
				{title}
			</AccordionSummary>
			
			<AccordionDetails
				sx={sx.accordionDetails}
			>
				{children}
			</AccordionDetails>
		</Accordion>
	)
}

const NavigateItemView = ({
							  navigateItem,
							  onClick,
						  }: {
	navigateItem: ClientNavigateItem
	onClick?: () => void
}) => {
	
	if (navigateItem.children.length >= 1) {
		return (
			<AccordionCustom
				title={<ListItem
					disablePadding
				>
					<ListItemButton
						sx={sx.accordionBtn}
					>
						<ListItemIcon>
							{navigateItem.icon}
						</ListItemIcon>
						<ListItemText
							sx={sx.accordionTitle}
							primary={navigateItem.title}
						/>
					</ListItemButton>
				</ListItem>}
			>
				{
					navigateItem.children.map((item, index) => {
						return (
							<NavigateItemView
								navigateItem={item}
								key={item.path}
								onClick={onClick}
							/>
						)
					})
				}
			</AccordionCustom>
		)
	}
	
	if (!navigateItem.path) {
		
		return (
			<ListItem
				onClick={onClick}
				disablePadding
			>
				<ListItemButton
					sx={sx.btn}
				>
					<ListItemIcon>
						{navigateItem.icon}
					</ListItemIcon>
					
					<ListItemText
						sx={sx.title}
						primary={navigateItem.title}
					/>
				</ListItemButton>
			</ListItem>
		)
	}
	
	return (
		<NavLink
			end
			className={({isActive}) => {
				return `${isActive ? 'isActive ' : ''}`
			}}
			to={navigateItem.path}
		>
			<ListItem
				onClick={onClick}
				disablePadding
			>
				<ListItemButton
					sx={sx.btn}
				>
					<ListItemIcon>
						{navigateItem.icon}
					</ListItemIcon>
					
					<ListItemText
						sx={sx.title}
						primary={navigateItem.title}
					/>
				</ListItemButton>
			</ListItem>
		</NavLink>
	)
}

export default NavigateItemView