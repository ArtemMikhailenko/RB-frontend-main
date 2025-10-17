import { apiClient, setAuthToken } from "@/libs/apiClient";

export const api = {
  signup: async (formData) => {
    const { data } = await apiClient.post("/auth/signup", formData);
    if (data?.token) {
      localStorage.setItem("access_token", data.token);
      setAuthToken(data.token);
    }
    return data;
  },

  login: async (email, password) => {
    const { data } = await apiClient.post("/auth/login", { email, password });
    if (data?.token) {
      localStorage.setItem("access_token", data.token);
      setAuthToken(data.token);
    }
    return data;
  },

  get: async (path) => {
    const { data } = await apiClient.get(path);
    return data;
  },

  logout: () => {
    localStorage.removeItem("access_token");
    setAuthToken(undefined);
  },
};

export function authHeader() {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("access_token");
    if (token) {
      return { Authorization: `Bearer ${token}` };
    }
  }
  return {};
}
