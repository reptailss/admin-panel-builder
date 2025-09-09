import React from 'react';

export const EditIconSvg = ({
								color = '#000'
							}: {
	color?: string
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={20}
			height={20}
			viewBox="0 -0.5 21 21"
		>
			<path
				fill={color}
				fillRule="evenodd"
				d="M0 20h21v-1.99H0V20Zm10.334-5.968H6.3V9.95L16.63 0 21 4.116l-10.666 9.916Z"
			/>
		</svg>
	);
};

