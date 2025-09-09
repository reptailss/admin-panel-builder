import {useCallback} from 'react'
import {useClientAppContext} from "@client/app/context/useClientAppContext";
import {ClientErrorsHelper} from "@client/helpers/ClientErrorsHelper";

export function useShowErrors() {
	const appClientContext = useClientAppContext()
	
	return useCallback((error: unknown) => {
		appClientContext.setSnackBar({
			message: ClientErrorsHelper.buildErrorMessageFromError(error),
			variant: 'error',
			open: true
		})
	}, [])
}