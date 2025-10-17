import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

export const apiClient = axios.create({
  baseURL,
  withCredentials: false,
});

export function setAuthToken(token) {
  if (token) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
}

if (typeof window !== 'undefined') {
  const token = localStorage.getItem('access_token');
  if (token) setAuthToken(token);
}

apiClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const payload = error?.response?.data || { message: error.message };
    return Promise.reject(payload);
  }
);

apiClient.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export default apiClient;
