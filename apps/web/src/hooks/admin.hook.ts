import { adminApi, createAdminQuery, invalidateAdmin } from "#/modules";
import { getUIStore } from "#/store";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useAdmin() {
  return useQuery(createAdminQuery());
}

export function useCreateAdmin() {
  return useMutation({
    mutationFn: adminApi.create,
    onSuccess: () => {
      getUIStore().closeModal();
      invalidateAdmin();
    },
  });
}

export function useRemoveAdmin() {
  return useMutation({
    mutationFn: adminApi.remove,
    onSuccess: invalidateAdmin,
  });
}
