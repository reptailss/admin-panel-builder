import React, {useMemo} from 'react';
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {Select} from "@client/ui/select/Select";

export const SelectClientLocale = ({color, desktopWidth,mobileWidth}: {
	color?: string
	desktopWidth?: string
	mobileWidth?: string
}) => {
	const clientAppContext = useClientAppContext()
	
	const options = useMemo(() => {
		return clientAppContext.locales.map((locale) => {
			return {
				value: locale,
				label: locale,
			}
		})
	}, [clientAppContext.locales])
	
	if (!clientAppContext.locales.length) {
		return null
	}
	return (
		<Select
			value={clientAppContext.targetLocale || ''}
			onChange={clientAppContext.setTargetLocale}
			options={options}
			desktopWidth={desktopWidth}
			mobileWidth={mobileWidth}
			color={color}
		/>
	);
};

