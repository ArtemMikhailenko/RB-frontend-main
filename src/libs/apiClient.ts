import axios, { AxiosError } from 'axios';

// Base URL from env, fallback for local dev
const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL,
  withCredentials: false,
});

// Helper to update Authorization header explicitly (e.g., after login/logout)
export function setAuthToken(token?: string) {
  if (token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
}

// On first load, try to hydrate token from localStorage (client-side only)
if (typeof window !== 'undefined') {
  const token = localStorage.getItem('access_token');
  if (token) setAuthToken(token);
}

// Response interceptor: normalize errors
apiClient.interceptors.response.use(
  (res) => res,
  (error: AxiosError<any>) => {
    // Extract server-provided error payload when possible
    const payload = error.response?.data || { message: error.message };
    return Promise.reject(payload);
  }
);

// Request interceptor: ensure Authorization header stays in sync with localStorage (in case token changed elsewhere)
apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      // Axios v1 headers may be AxiosHeaders or plain object; support both
      const headers: any = config.headers || {};
      if (typeof headers.set === 'function') {
        headers.set('Authorization', `Bearer ${token}`);
      } else {
        headers.Authorization = `Bearer ${token}`;
      }
      config.headers = headers;
    }
  }
  return config;
});

export default apiClient;
