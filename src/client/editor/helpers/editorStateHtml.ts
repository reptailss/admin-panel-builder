import {RawDraftContentState} from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";

export function editorStateToHtml(content: RawDraftContentState): string {
	return draftToHtml(content, undefined, undefined, (entity, text) => {
		if (entity.type === "IMAGE") {
			const {src, alignment, height, width, alt, objectFit} = entity.data;
			return `<img alt="${alt || 'img'}" src="${src}" style="${getAlignmentStyle(alignment)} ${getWidthStyle(width)} ${getHeightStyle(height)}${getObjectFitStyle(objectFit)}"/>`;
		}
		
		return undefined;
	});
}

const getObjectFitStyle = (objectFit: string) => {
	if (!objectFit || objectFit === 'none') {
		return ''
	}
	return `object-fit:${objectFit};`
}

const getWidthStyle = (width: string) => {
	if (!width) {
		return ''
	}
	return `width:${width};`
}

const getHeightStyle = (height: string) => {
	if (!height) {
		return ''
	}
	return `height:${height};`
}


const getAlignmentStyle = (alignment: string): string => {
	if (!alignment) {
		return ''
	}
	
	switch (alignment) {
		case 'left':
			return 'margin-right:auto; display:block;';
		case 'right':
			return 'margin-left:auto; display:block;';
		case 'center':
			return 'display:block; margin:0 auto;';
		case 'none':
			return 'display:block; margin:0 auto;';
		default:
			return ''
	}
}