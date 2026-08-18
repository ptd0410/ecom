import { queryOptions } from "@tanstack/react-query";
import { adminQueryKeys } from "./admin.config";
import { adminApi } from "./admin.api";

export function createAdminQuery() {
  return queryOptions({
    queryKey: adminQueryKeys.admin,
    queryFn: adminApi.get,
  });
}
