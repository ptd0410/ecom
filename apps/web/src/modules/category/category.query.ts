import { queryOptions } from "@tanstack/react-query";
import { categoryQueryKey } from "./category.config";
import { categoryApi } from "./category.api";

export function createCategoriesQuery() {
  return queryOptions({
    queryKey: categoryQueryKey.all,
    queryFn: categoryApi.get,
  });
}

export function createCategoryQuery(categoryId: number) {
  return queryOptions({
    queryKey: categoryQueryKey.detail(categoryId),
    queryFn: () => categoryApi.getDetail(categoryId),
  });
}
