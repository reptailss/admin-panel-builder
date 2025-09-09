import React, {useEffect, useRef, useState} from 'react'
import {Box, Button, Typography} from '@mui/material'
import sx from './sx'

export const ImageUploader = ({
							   initialImage,
							   onChangeFile,
						   }: {
	initialImage?: string;
	onChangeFile: (file: File) => void
}) => {
	const fileInputRef = useRef<HTMLInputElement>(null)
	const [previewUrl, setPreviewUrl] = useState<string | undefined>(initialImage)
	
	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreviewUrl(reader.result as string)
			}
			reader.readAsDataURL(file)
			onChangeFile(file)
		}
	}
	
	useEffect(() => {
		setPreviewUrl(initialImage)
	}, [initialImage])
	
	
	return (
		<Box
			display="flex"
			flexDirection="column"
			gap={2}
		>
			{previewUrl ?
				<Box
					component="img"
					src={previewUrl}
					alt="Preview"
					sx={sx.previewImage}
				/> : <Typography
					variant="body2"
					color="text.secondary"
				>
					Зображення не вибрано
				</Typography>
			}
			
			<input
				ref={fileInputRef}
				type="file"
				accept="image/*"
				style={{display: 'none'}}
				onChange={handleFileChange}
			/>
			
			<Button
				variant="outlined"
				onClick={() => fileInputRef.current?.click()}
				size={'small'}
			>
				Обрати зображення
			</Button>
		</Box>
	)
}

