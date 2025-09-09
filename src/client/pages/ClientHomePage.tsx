import React from 'react'
import {LogoSvg} from '@client/images/LogoSvg'
import {Box, Stack, Typography} from '@mui/material'

export const ClientHomePage = () => {
	return (
		<Box
			sx={{
				height: '100%',
				width: '100%',
				background: `radial-gradient(circle at 30% 30%, #c2f0ff 0%, transparent 40%),
							 radial-gradient(circle at 70% 40%, #ffc1b6 0%, transparent 50%),
							 radial-gradient(circle at 50% 70%, #b3e5fc 0%, transparent 60%)`,
				backgroundColor: '#f3f4f6',
				filter: 'blur(0)', // потрібен для ефекту
				position: 'relative',
				overflow: 'hidden',
			}}
		>
			<Box
				sx={{
					position: 'absolute',
					inset: 0,
					backdropFilter: 'blur(80px)',
					zIndex: 0,
				}}
			/>
			
			<Stack
				sx={{
					position: 'relative',
					zIndex: 1,
					height: '100%',
					width: '100%',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 1,
					textAlign: 'center',
					animation: 'fadeIn 1s ease-out',
				}}
			>
				<Box sx={{ transform: 'scale(1.1)', transition: 'all 0.4s ease' }}>
					<LogoSvg />
				</Box>
				
				<Typography
					variant="h5"
					sx={{
						color: '#111',
						fontWeight: 400,
						opacity: 0.8,
						mt: 1,
					}}
				>
					content manager
				</Typography>
			</Stack>
			
			<style>{`
				@keyframes fadeIn {
					from { opacity: 0; transform: translateY(20px); }
					to { opacity: 1; transform: translateY(0); }
				}
			`}</style>
		</Box>
	)
}
