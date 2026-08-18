import { apiClient } from "#/clients";
import type { ResProduct } from "#/data-type";
import type { GetProductParams } from "./type/product.type";

export const productApi = {
  get: (params: GetProductParams) =>
    apiClient.get("/products", { params }) as Promise<{
      items: ResProduct[];
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>,

  getByCategory: (params: GetProductParams) =>
    apiClient.get("/products", { params }) as Promise<{
      items: ResProduct[];
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    }>,

  getDetail: (productId: number) =>
    apiClient.get(`/products/${productId}`) as Promise<ResProduct>,
};
