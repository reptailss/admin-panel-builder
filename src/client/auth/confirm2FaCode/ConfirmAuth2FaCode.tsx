import React, {useState} from 'react';
import {Box, IconButton, Typography} from "@mui/material";
import sx from "@client/auth/login/sx";
import {Input} from "@client/ui/inputs/Input";
import {PrimaryBtn} from "@client/ui/buttons/PrimaryBtn";
import {LeftArrowSvg} from "@client/images/LeftArrowSvg";
import Stack from "@mui/material/Stack";
import {RefreshSvg} from "@client/images/RefreshSvg";
import {IAuth2FaField} from "@auth/interfaces";

export const ConfirmAuth2FaCode = ({
									   onReset,
									   loginResponse,
									   onToFa,
									   fields,
								   }: {
	onReset: () => void
	onToFa: (codes: Record<string, string>) => Promise<void>
	loginResponse: any
	fields: IAuth2FaField<any>[]
}) => {
	
	const [codes, setCodes] = useState<Record<string, string>>({})
	
	const handleSubmit = async () => {
		await onToFa(codes)
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
				<Stack
					direction={'row'}
					justifyContent={'flex-end'}
				>
					<IconButton
						onClick={onReset}
						title={'Назад'}
					>
						<LeftArrowSvg/>
					</IconButton>
				</Stack>
				
				<Typography
					variant="h5"
					gutterBottom
					sx={sx.title}
				>
					Sign in
				</Typography>
				
				<Box
					component="form"
					onSubmit={async (e) => {
						e.preventDefault()
						await handleSubmit()
					}}
					display="flex"
					flexDirection="column"
					gap={2}
					sx={sx.form}
				>
					
					
					{fields.map((field, i) => {
						return (
							<Stack
								key={i}
								gap={1}
								direction={'row'}
								alignItems={'center'}
							>
								<Input
									label={field.name}
									variant="outlined"
									fullWidth
									defaultValue={codes[field.key] || ''}
									onChange={(e) => {
										setCodes((prev) => {
											return {
												...prev,
												[field.key]: e.target.value
											}
										})
									}}
									required={field.checkRequired(loginResponse)}
									size={'small'}
								/>
								<IconButton
									onClick={() => field.refresh(loginResponse)}
									title={'Відправити повторно'}
								>
									<RefreshSvg/>
								</IconButton>
							</Stack>
						)
					})}
					
					<PrimaryBtn
						type="submit"
					>
						Sign in
					</PrimaryBtn>
				</Box>
			</Box>
		</Box>
	)
};

