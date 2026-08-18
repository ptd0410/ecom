import { apiClient } from "#/clients";
import type { LoginDTO } from "#/dto";
import type { AuthResponse } from "./auth.type";

export const authApi = {
  login: (params: LoginDTO): Promise<AuthResponse> =>
    apiClient.post("/auth/login", params),
  register: (params: LoginDTO): Promise<AuthResponse> =>
    apiClient.post("/auth/register", params),
  refresh: (token: string): Promise<AuthResponse> =>
    apiClient.post("/auth/refresh", { token }),
};
