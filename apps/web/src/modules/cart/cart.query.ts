import { queryOptions } from "@tanstack/react-query";
import { cartQueryKeys } from "./cart.config";
import { cartApi } from "./cart.api";
import type { ICart } from "#/data-type";

export function createCartQuery() {
  return queryOptions<ICart>({
    queryKey: cartQueryKeys.cart,
    queryFn: cartApi.get,
  });
}
