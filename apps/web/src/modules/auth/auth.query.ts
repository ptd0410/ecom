import { getAuthStore, useAuthStore } from "#/store";
import { queryOptions } from "@tanstack/react-query";
import { authApi } from "./auth.api";
import { authQueryKey } from "./auth.config";

export function createAutoTokenQuery() {
  return queryOptions({
    queryKey: authQueryKey.token,
    queryFn: async () => {
      try {
        const token = getAuthStore().accessToken;

        if (!token) return "";
        const rs = await authApi.refresh(token);
        useAuthStore.setState(rs);

        return rs;
      } catch (error) {
        getAuthStore().clear();
        throw error;
      }
    },
  });
}
