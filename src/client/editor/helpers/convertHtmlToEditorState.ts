import htmlToDraft from 'html-to-draftjs';
import {ContentState, EditorState} from 'draft-js';

export const convertHtmlToEditorState = (html?: string): EditorState => {
	const contentBlock = htmlToDraft(html || '', (nodeName, node) => {
		if (nodeName === 'img') {
			const styles = parseStyle(node.getAttribute('style') || '')
			return {
				type: 'IMAGE',
				mutability: 'IMMUTABLE',
				data: {
					src: node.getAttribute('src'),
					width: node.getAttribute('width') || node.style.width,
					height: node.getAttribute('height') || node.style.height,
					alignment: getAlignByStyles(styles),
				},
			};
		}
	});
	if (!contentBlock) {
		return EditorState.createEmpty()
	}
	
	const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks, contentBlock.entityMap);
	
	return EditorState.createWithContent(contentState);
}

const parseStyle = (style: string): Record<string, string> => {
	return style.split(';').reduce((acc: Record<string, string>, s) => {
		const [k, v] = s.split(':');
		if (k && v) acc[k.trim()] = v.trim();
		return acc;
	}, {});
}

const getAlignByStyles = (styles: Record<string, string>): string => {
	if (
		'margin-left' in styles &&
		styles['margin-left'] === 'auto'
	) {
		return 'right'
	}
	
	if (
		'margin-right' in styles &&
		styles['margin-right'] === 'auto'
	) {
		return 'left'
	}
	
	if (
		'margin' in styles &&
		styles['margin-right'] === '0 auto'
	) {
		return 'center'
	}
	return ''
}