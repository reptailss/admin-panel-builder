export type AuthClientUserInfo = {
    userName: string;
    picture: string | null;
};
export type ClientAuthContext = {
    isAuth: boolean;
    setIsAuth: (isAuth: boolean) => void;
    userInfo: AuthClientUserInfo | null;
    setUserInfo: (userInfo: AuthClientUserInfo | null) => void;
};
