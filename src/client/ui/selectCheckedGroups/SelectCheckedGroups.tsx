import sx from './sx'
import React, {useMemo} from 'react'

import {Box, Checkbox, Chip, FormControl, FormControlLabel, InputLabel, Select, Stack, Typography} from '@mui/material'

function groupBy<T, K extends keyof T>(array: T[], key: K): Record<string, T[]> {
	return array.reduce((result, item) => {
		const groupKey = String(item[key])
		if (!result[groupKey]) {
			result[groupKey] = []
		}
		result[groupKey].push(item)
		return result
	}, {} as Record<string, T[]>)
}


const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 10 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
}

type Option<T> = {
	value: string
	label: string
	groupValue: string
	data: T
}

export function SelectCheckedGroups<T>({
										options,
										value,
										onChange,
										disabled,
										label,
										
									}: {
	value: string[]
	onChange: (value: string[], data:T[]) => void
	options: Option<T>[]
	disabled?: boolean
	label: string
}) {
	
	
	const dataMap: Record<string, Option<T>> = useMemo(() => {
		if (!options?.length) {
			return {}
		}
		const res: Record<string, Option<T>> = {}
		options.forEach((item) => {
			res[item.value] = item
		})
		return res
	}, [options])
	const dataGroups: Record<string, Option<T>[]> = useMemo(() => {
		if (!options?.length) {
			return {}
		}
		return groupBy(options, 'groupValue')
	}, [options])
	const handleChange = (id: string) => {
		const checked = value.includes(id)
		if (!checked) {
			const newValue = [...(value ?? []), id]
			const options = newValue.map((key) => dataMap[key]?.data)
			onChange(newValue, options)
			return
		}
		const newValue = value.filter((val) => val != id)
		const options = newValue.map((key) => dataMap[key]?.data)
		onChange(newValue, options)
	}
	
	
	return (
		<FormControl
			size={'small'}
		>
			{label && <InputLabel
                size={'small'}
            >
				{label}
            </InputLabel>}
			
			
			<Select
				label={label}
				size={'small'}
				multiple
				value={value}
				disabled={disabled}
				renderValue={(selected) => (
					<Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
						{selected.map((value) => (
							<Chip
								size={'small'}
								key={value}
								label={value in dataMap ? dataMap[value]?.label : value}
							/>
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{!options?.length &&
                    <Typography
                        sx={{padding: '1rem'}}
                        variant={'body2'}
                    >
                        Нічого не знайдено...
                    </Typography>}
				
				{Object.entries(dataGroups)?.map(([key, values]) => {
					const allIds = values?.map((item) => item.value?.toString())
					const onAllSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
						event.stopPropagation()
						const checked = event.target.checked
						
						if (checked) {
							const newValue = [...(value ?? []), ...(allIds ?? [])]
							const onlyString = newValue?.map((id) => id?.toString())
							const uniqValue = [...new Set(onlyString)]
							const options = uniqValue.map((key) => dataMap[key]?.data)
							onChange(uniqValue,options)
							return
						}
						const newValue = value.filter((id) => !allIds.includes(id))
						const options = newValue.map((key) => dataMap[key]?.data)
						onChange(newValue,options)
					}
					
					const allSelected = allIds.every((id) => value.includes(id))
					
					return (
						<Stack
							key={key}
							sx={sx.list}
						>
							<FormControlLabel
								sx={sx.accountLabel}
								control={<Checkbox
									checked={allSelected}
									size={'medium'}
									onChange={onAllSelected}
								/>}
								label={key}
							/>
							{values?.map((item) => (
								<FormControlLabel
									key={item.label}
									sx={sx.item}
									control={<Checkbox
										size={'small'}
										onChange={() => handleChange(item.value?.toString())}
										checked={value.includes(item.value?.toString())}
									/>}
									label={item.label}
								/>
							))}
						</Stack>
					)
				})}
			</Select>
		</FormControl>
	)
}
