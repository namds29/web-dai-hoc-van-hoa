// import { USER_LOGIN, AUTH_TOKEN, USER_KEY, TOKEN_KEY } from '../../../../node-app/src/services/constants';
// import { axiosPostRequest } from "../../../../node-app/src/services/axiosServices";
// import { UserData } from '../../../../node-app/src/models/interfaces';
// import { TokenProps, UserProps } from '../../../../node-app/src/contexts/interfaces';

const isWindow: any = typeof window !== "undefined";

const register = async (params: UserData): Promise<UserData | string> => {
    const request: string = USER_LOGIN!;
    return await axiosPostRequest(request, params);
};

const login = async (params: UserData): Promise<TokenProps | string> => {
    const request: string = AUTH_TOKEN!;
    return await axiosPostRequest(request, params);
};

const removeToken = (): void => {
    isWindow && window.localStorage.removeItem(TOKEN_KEY!);
};

const setToken = (token: string): void => {
    isWindow && window.localStorage.setItem(TOKEN_KEY!, token);
};

const getToken = (): any => {
    return isWindow && window.localStorage.getItem(TOKEN_KEY!) || null;
};

const removeUser = (): void => {
    isWindow && window.localStorage.removeItem(USER_KEY!);
};

const setUser = (user: UserProps): void => {
    isWindow && window.localStorage.setItem(USER_KEY!, JSON.stringify(user));
};

const getUser = (): string => {
    const userKey: any = isWindow && window.localStorage.getItem(USER_KEY!);
    return JSON.parse(userKey!) || null;
};

const AuthService = {
    register,
    login,
    removeToken,
    setToken,
    getToken,
    removeUser,
    setUser,
    getUser
};

export default AuthService;
