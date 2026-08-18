import { apiClient } from "#/clients";
import type { IAdmin } from "#/data-type";
import type { CreateAdminDTO, RemoveAdminDTO } from "#/dto";

export const adminApi = {
  get: (): Promise<IAdmin[]> => apiClient.get("/admin"),
  create: (params: CreateAdminDTO): Promise<IAdmin[]> =>
    apiClient.post("/admin/create", params),
  remove: (params: RemoveAdminDTO): Promise<IAdmin[]> =>
    apiClient.post("/admin/remove", params),
};
