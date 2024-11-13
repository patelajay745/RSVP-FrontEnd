import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, User } from "../types/auth";
import { useApi } from "@/services/api";

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  user: null,
  isLoading: true,
  checkAuth: async () => {},
  logout: async () => {},
  login: async () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const api = useApi();

  const checkAuth = async () => {
    try {
      setIsLoading(true);

      console.log("Checking auth");

      const result = await api.checkAuth();

      if (result.data.user) {
        setIsAuthenticated(true);
        setUser(result.data.user);
      }
    } catch (error) {
      console.log("Eroor while checking auth:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const login = async (userData: User) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        checkAuth,
        logout,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
