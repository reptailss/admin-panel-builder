import React from 'react'
import './editor.css';
import SunEditor from 'suneditor-react'


export const Editor = ({
						placeholder,
						initial,
						onChange,
					}: {
	placeholder: string
	initial: string
	onChange: (value: string) => void
}) => {
	return (
		<SunEditor
			placeholder={placeholder}
			lang="ua"
			width="100%"
			height={'250px'}
			onChange={onChange}
			defaultValue={initial}
		/>
	)
}
