export class ClientGuardActions {
	static checkGuard({
						  globalRoles,
						  rolesByType,
						  userRoles,
					  }: {
		globalRoles: readonly string[]
		rolesByType?: readonly string[]
		userRoles: readonly string[]
	}) {
		return (
			!globalRoles?.length ||
			globalRoles?.length >= 1 && globalRoles.some((role) => userRoles.includes(role))
		) && (
			!rolesByType?.length ||
			rolesByType?.length >= 1 && rolesByType.some((role) => userRoles.includes(role))
		)
	}
}