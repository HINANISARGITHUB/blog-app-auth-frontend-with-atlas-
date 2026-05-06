import { createContext, useContext, useState } from "react";
import api from "../api/axios";

const AuthCtx = createContext();

export const useAuth = () => useContext(AuthCtx);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 1. Register logic with corrected path
  const register = async (data) => {
    // '/api' ka izafa kiya gaya hai taake backend route se match kare
    const res = await api.post("/api/auth/register", data);
    setUser(res.data);
    return res.data;
  };

  // 2. Login logic with corrected path
  const login = async (data) => {
    const res = await api.post("/api/auth/login", data);
    setUser(res.data);
    return res.data;
  };

  // 3. Logout logic with corrected path
  const logout = async () => {
    await api.post("/api/auth/logout");
    setUser(null);
  };

  return (
    <AuthCtx.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthCtx.Provider>
  );
}
