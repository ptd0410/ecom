import { authService } from "#/modules";
import { getAuthStore } from "#/store";
import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 15_000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    // Nếu cần token:
    const token = getAuthStore().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response?.data ?? response;
  },

  async (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          authService.invalidateToken();
          // Handle unauthorized
          // Ví dụ: refresh token / logout
          break;

        case 403:
          // Handle forbidden
          break;

        case 500:
          // Handle server error
          break;
      }
    }

    return Promise.reject(error);
  },
);
