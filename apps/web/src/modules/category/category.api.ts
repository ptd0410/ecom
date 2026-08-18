import { apiClient } from "#/clients";
import type { Category } from "#/data-type";

export const categoryApi = {
  get: () => apiClient.get("/categories") as Promise<Category[]>,
  getDetail: (categoryId: number) =>
    apiClient.get(`/categories/${categoryId}`) as Promise<Category[]>,
};
