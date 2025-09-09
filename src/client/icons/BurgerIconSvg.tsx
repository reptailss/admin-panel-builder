import React from 'react';

export const BurgerIconSvg = ({
								  color
							  }: {
	color?: string
}) => {
	return (
		<svg stroke={color} xmlns="http://www.w3.org/2000/svg" width="20px" height="24px" viewBox="0 0 24 24" fill="none">
			<path d="M4 18L20 18" strokeWidth="2" strokeLinecap="round"/>
			<path d="M4 12L20 12" strokeWidth="2" strokeLinecap="round"/>
			<path d="M4 6L20 6" strokeWidth="2" strokeLinecap="round"/>
		</svg>
	);
};

