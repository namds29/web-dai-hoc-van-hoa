import { API_ADMIN } from "../constant";
import { apiPost } from "../utils-service";
import { TOKEN_KEY } from "src/utils/constant";

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
const removeToken = (): void => {
  isWindow && sessionStorage.removeItem(TOKEN_KEY!);
};

const setToken = (token: string): void => {
  isWindow && sessionStorage.setItem(TOKEN_KEY!, token);
};

const getToken = (): any => {
  return (isWindow && sessionStorage.getItem(TOKEN_KEY!)) || null;
};
function isLoggedIn() {
  const token = sessionStorage.getItem(TOKEN_KEY);
  return !!token;
}

const AuthService = {
  login,
  removeToken,
  setToken,
  getToken,
  isLoggedIn
};

export default AuthService;
