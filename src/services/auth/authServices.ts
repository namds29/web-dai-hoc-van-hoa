import { ResponeType } from "src/types";
import { API_ADMIN } from "../constant";
import { apiGet, apiPost } from "../utils-service";
import { AxiosResponse } from "axios";

type UserLogin = {
    userID: string;
    password: string
}

const isWindow: any = typeof window !== "undefined";

const login = async (params: UserLogin): Promise<any> => {
    const res = await apiPost(import.meta.env.VITE_API_URL + API_ADMIN.AUTH_LOGIN, params)
    return res;
};


const AuthService = {
    login
};

export default AuthService;
