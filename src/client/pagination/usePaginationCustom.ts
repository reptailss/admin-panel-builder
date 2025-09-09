import {useMemo} from "react";

function chunk<T>(array: T[], size: number = 1): T[][] {
	if (size <= 0) {
		return []
	}
	
	const result: T[][] = [];
	for (let i = 0; i < array.length; i += size) {
		result.push(array.slice(i, i + size));
	}
	
	return result;
}

interface IProps<T> {
	data: T[],
	page: number,
	perPage?: number,
}


export function usePaginationCustom<T>({
										   data,
										   page,
										   perPage = 20,
									   }: IProps<T>): {
	paginationData: T[],
	totalPage: number,
} {
	
	const currentData: {
		chunks: T[][],
		totalPage: number,
	} = useMemo(() => {
		if (!data?.length) {
			return {
				chunks: [[]],
				totalPage: 1
			}
		}
		const chunks = chunk(data, perPage)
		return {
			chunks,
			totalPage: chunks.length
		}
	}, [data, perPage])
	
	const paginationData = useMemo(() => {
		if (perPage?.toString() === '0' || page < 1) {
			return data
		}
		if (page - 1 >= currentData.chunks.length) {
			return currentData.chunks[currentData.chunks.length - 1]
		}
		return currentData.chunks[page - 1]
		
	}, [currentData, data, page, perPage])
	return {
		paginationData,
		totalPage: currentData.totalPage
	}
	
}
