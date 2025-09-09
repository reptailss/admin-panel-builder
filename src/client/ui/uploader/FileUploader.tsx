import React, {useRef, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import sx from './sx'

export const FileUploader = ({
									 onChangeFile,
								 }: {
	onChangeFile: (file: File) => void
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [previewUrl, setPreviewUrl] = useState<string | undefined>()
	const [fileName, setFileName] = useState<string | undefined>()
	
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			setFileName(file.name)
			
			const isImage = file.type.startsWith('image/')
			if (isImage) {
				const reader = new FileReader()
				reader.onloadend = () => {
					setPreviewUrl(reader.result as string)
				}
				reader.readAsDataURL(file)
			} else {
				setPreviewUrl(undefined)
			}
			onChangeFile(file)
		}
	}
	
	return (
		<Box display="flex" flexDirection="column" gap={2}>
			{previewUrl && (
				<Box component="img" src={previewUrl} alt="Preview" sx={sx.previewImage}/>
			)}
			
			{fileName && (
				<Typography variant="body2" color="text.secondary">
					Файл вибрано: {fileName}
				</Typography>
			)}
			
			<input
				ref={fileInputRef}
				type="file"
				style={{display: 'none'}}
				onChange={handleFileChange}
			/>
			
			<Button variant="outlined" onClick={() => fileInputRef.current?.click()} size="small">
				{fileName ? 'Змінити файл' : 'Обрати файл'}
			</Button>
		</Box>
	)
}
