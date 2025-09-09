import {ReactNode} from 'react'

export type ClientNavigateItem = {
	path: string | null
	icon?: ReactNode
	title: string
	children: ClientNavigateItem[]
}

