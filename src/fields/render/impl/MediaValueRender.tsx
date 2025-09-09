import React from "react";
import {ClientMediaLibraryInputModal} from "@client/mediaLibrary/ClientMediaLibraryInputModal";
import {
	MediaValueRenderPreviewRenderConfig
} from "@fields/render/previewRenderConfig/MediaValueRenderPreviewRenderConfig";
import {IMediaValueField} from "@fields/interfaces/media";
import {IMediaValuePreviewRenderConfig, IMediaValueRender} from "@fields/render/interfaces/media";
import {Typography} from "@mui/material";

export class MediaPreviewRender<Field extends IMediaValueField = IMediaValueField> implements IMediaValueRender {
	
	public previewRenderConfig = new MediaValueRenderPreviewRenderConfig()
	
	public FieldRender(props: {
		field: Field
		initialValue: string | null | undefined
		onChange: (value: string) => void
	}): React.ReactNode {
		return (
			<ClientMediaLibraryInputModal
				initialValue={props.initialValue || null}
				label={props.field.getName() || undefined}
				onChange={props.onChange}
				provider={props.field.provider}
				icon={props.field.getIcon()}
				mediaType={props.field.getMediaType()}
				rolesByTypes={props.field.provider.getActionsRolesByTypes()}
				globalRoles={props.field.provider.getGlobalActionRoles()}
			/>
		)
	}
	
	public PreviewRender(props: {
		field: Field
		value: string | null | undefined
		renderConfig: IMediaValuePreviewRenderConfig
	}): React.ReactNode {
		return (
			<Typography>
				{props.value}
			</Typography>
		)
	}
}