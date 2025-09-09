import React from 'react';

export const DeleteIconSvg = ({color}:{
	color?:string
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={25}
			height={25}
			className="icon glyph"
			viewBox="0 0 24 24"
			fill={color}
		>
			<path
				d="M17 4v1h-2V4H9v1H7V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2ZM20 6H4a1 1 0 0 0 0 2h1v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h1a1 1 0 0 0 0-2Zm-9 11a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0v-6a1 1 0 0 1 2 0Z"/>
		</svg>
	);
};

