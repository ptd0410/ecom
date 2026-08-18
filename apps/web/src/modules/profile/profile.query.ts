import { queryOptions } from "@tanstack/react-query";
import { profileQueryKeys } from "./profile.config";
import { profileApi } from "./profile.api";

export function createProfileQuery() {
  return queryOptions({
    queryKey: profileQueryKeys.profile,
    queryFn: profileApi.get,
  });
}
