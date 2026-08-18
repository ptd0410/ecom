import type { ResProduct } from "#/data-type";
import { formatVND } from "#/lib";
import type { Product } from "./type";

export const productMapper = {
  toProduct: (input: ResProduct) =>
    ({
      ...input,
      displayPrice: formatVND(input.price),
    }) as Product,
};
