import axios, { AxiosError } from "axios";
import { LoginDataType } from "../types/api";

console.log(import.meta.env.VITE_API_URL);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.log("Error(Code) in Response:", error.response?.status);
    console.log("Error in Response:", error);
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
  };
};
