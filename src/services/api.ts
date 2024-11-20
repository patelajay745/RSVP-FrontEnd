import axios, { AxiosError } from "axios";
import { LoginDataType, SignUpDataType } from "../types/api";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export const useApi = () => {
  return {
    checkAuth: async () => {
      return await api.get("/verify");
    },
    getLogin: async (data: LoginDataType) => {
      const formData = Object.fromEntries(
        Object.entries(data).map(([key, value]) => [key, String(value)])
      );
      return await api.post("/login", formData);
    },
    getLogout: async () => {
      return await api.post("/logout");
    },
    getSignup: async (data: SignUpDataType) => {
      return await api.post("user", data);
    },
  };
};
