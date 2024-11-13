export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  confirmed: boolean;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user?: User | null;
  isLoading: boolean;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
}
