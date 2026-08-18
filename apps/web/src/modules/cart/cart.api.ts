import { apiClient } from "#/clients";
import type { Cart } from "#/data-type";

export const cartApi = {
  get: (): Promise<Cart> => apiClient.get("/cart"),
  // get: (): Promise<Cart> => apiClient.get("/cart"),
};
