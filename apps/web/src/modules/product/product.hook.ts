import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { productApi } from "./product.api";
import { productMapper } from "./product.mapper";
import { productQueryKey } from "./product.config";

export const useProducts = (categoryId?: number) => {
  return useInfiniteQuery({
    queryKey: productQueryKey.productsByCategory(categoryId),

    queryFn: ({ pageParam }) =>
      productApi.get({
        page: pageParam,
        limit: 50,
        categoryId,
      }),

    initialPageParam: 1,

    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.totalPages) {
        return undefined;
      }

      return lastPage.page + 1;
    },
    select: (s) =>
      s.pages.flatMap((item) => item.items.map(productMapper.toProduct)),
  });
};

export function useProduct(productId: number) {
  return useQuery({
    queryKey: productQueryKey.detail(productId),
    queryFn: async () =>
      productMapper.toProduct(await productApi.getDetail(productId)),
  });
}
