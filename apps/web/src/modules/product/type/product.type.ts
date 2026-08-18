import type { ResProduct } from "#/data-type";

export type GetProductParams = {
  page?: number;
  limit?: number;
  categoryId?: number;
};

export type Product = ResProduct & {
  displayPrice: string;
};
