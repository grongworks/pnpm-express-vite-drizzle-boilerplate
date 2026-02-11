import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  // baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
