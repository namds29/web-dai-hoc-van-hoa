import { ResponeType } from "src/types";
import { API_ADMIN } from "../constant";
import { apiGet, apiPost } from "../utils-service";
import { AxiosResponse } from "axios";

type UserLogin = {
  userID: string;
  password: string;
};

const isWindow: any = typeof window !== "undefined";

const login = async (params: UserLogin): Promise<any> => {
  const res = await apiPost(
    import.meta.env.VITE_API_URL + API_ADMIN.AUTH_LOGIN,
    params
  );
  return res;
};
// const removeToken = (): void => {
//   isWindow && window.localStorage.removeItem(TOKEN_KEY!);
// };

// const setToken = (token: string): void => {
//   isWindow && window.localStorage.setItem(TOKEN_KEY!, token);
// };

// const getToken = (): any => {
//   return (isWindow && window.localStorage.getItem(TOKEN_KEY!)) || null;
// };

const AuthService = {
  login,
};

export default AuthService;
