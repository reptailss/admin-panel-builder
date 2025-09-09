export type ClientAccessContext = {
    hasAccess: boolean;
    setHasAccess: (isAuth: boolean) => void;
    roles: string[];
    setRoles: (roles: string[]) => void;
};
