import { createContext, useEffect, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import AuthService from "src/services/auth/authServices";

type Decode_Token = {
  id: number,
  fullName: string;
  role: number;
};

export const AuthContext = createContext({
  token: "",
  userID: 0
});

export const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string>("");
  const [userID, setUserID] = useState<number>(0)
  const navigate = useNavigate();
  const location = useLocation();

  const checkLogin = useCallback(() => {
    const storedToken = AuthService.getToken();
    if (location.pathname.includes("admin")) {
      if (AuthService.isLoggedIn()) {
        try {
          const decode_token = jwtDecode<Decode_Token>(storedToken)
          setUserID(decode_token.id);
          setToken(decode_token.fullName);
        } catch (error) {
          navigate("/login");
          AuthService.removeToken();
        }
      } else {
        navigate("/login");
      }
    }

  }, [navigate]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin, location.pathname]);

  return (
    <AuthContext.Provider value={{ token, userID }}>{children}</AuthContext.Provider>
  );
};
