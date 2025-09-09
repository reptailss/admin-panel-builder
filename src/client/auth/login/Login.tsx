import React, {useState} from 'react'
import {Box, Typography} from '@mui/material'
import sx from './sx'
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {Input} from "@client/ui/inputs/Input";


export const Login = ({onLogin}: {
	onLogin: (props: {
		username: string,
		password: string,
	}) => Promise<void>
}) => {
	
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		
		await onLogin({
			username,
			password,
		})
	}
	
	return (
		<Box
			sx={sx.inner}
		>
			<Box
				sx={sx.overlay}
			/>
			<Box
				sx={sx.root}
			>
				<Typography
					variant="h5"
					gutterBottom
					sx={sx.title}
				>
					Sign in
				</Typography>
				<Box
					component="form"
					onSubmit={handleSubmit}
					display="flex"
					flexDirection="column"
					gap={2}
					sx={sx.form}
				>
					<Input
						label="Ім'я користувача"
						variant="outlined"
						fullWidth
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						required
						size={'small'}
					/>
					
					<Input
						label="Пароль"
						type="password"
						variant="outlined"
						fullWidth
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
						size={'small'}
					/>
					
					<PrimaryBtn
						type="submit"
					>
						Sign in
					</PrimaryBtn>
				</Box>
			</Box>
		</Box>
	)
}
