import {Popover} from '@client/ui/popover/Popover';
import IconButton from '@mui/material/IconButton';
import React, {useRef} from 'react';
import {EditorLinkToolbar} from "@client/editor/toolbars/link/EditorLinkToolbar";
import {Icon} from "@iconify/react";
import {PopoverViewFeatures} from "@client/ui/popover/types";

export const EditorLinkToolbarPopover = ({
											 onChange,
											 currentState,
										 }: {
											 onChange: (type: 'link' | 'unlink', linkTitle?: string, linkTarget?: string, linkTargetOption?: '_blank' | '_self') => void,
											 currentState: {
												 link: {
													 target: string
													 targetOption: '_blank' | '_self'
													 title: string,
												 },
												 selectionText: string,
											 }
										 }
) => {
	const featuresRef = useRef<PopoverViewFeatures>(null);
	
	return (
		<>
			<Popover
				featuresRef={featuresRef}
				button={<IconButton>
					<Icon icon={'ion:link-outline'}/>
				</IconButton>}
			>
				<EditorLinkToolbar
					currentState={currentState}
					onChange={onChange}
					onSave={featuresRef.current?.closePopover}
				/>
			</Popover>
			
			{currentState?.link?.target && <IconButton
                onClick={() => {
					onChange('unlink')
				}}
            >
                <Icon icon={'famicons:unlink-outline'}/>
            </IconButton>}
		</>
	)
	
};
