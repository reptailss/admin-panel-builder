export declare class ClientGuardActions {
    static checkGuard({ globalRoles, rolesByType, userRoles, }: {
        globalRoles: readonly string[];
        rolesByType?: readonly string[];
        userRoles: readonly string[];
    }): boolean;
}
