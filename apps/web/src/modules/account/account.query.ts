import { queryOptions } from "@tanstack/react-query";
import { accountQueryKeys } from "./account.config";
import { accountApi } from "./account.api";

export function createProfileQuery() {
  return queryOptions({
    queryKey: accountQueryKeys.profile,
    queryFn: accountApi.getProfile,
  });
}
