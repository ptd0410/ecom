import { authApi, createAutoTokenQuery } from "#/modules";
import { getAuthStore, getUIStore, useAuthStore } from "#/store";
import { useMutation, useQuery } from "@tanstack/react-query";

export function useIsAuth() {
  const isAuth = useAuthStore((s) => !!s.refreshToken);
  return { isAuth };
}

export function useLogin() {
  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (rs) => {
      useAuthStore.setState(rs);
      getUIStore().closeModal();
    },
  });
}

export function useAutoToken() {
  return useQuery(createAutoTokenQuery());
}

export function useLogout() {
  return useMutation({
    mutationFn: async () => {
      getAuthStore().clear();
    },
  });
}

export function useRegister() {
  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (rs) => {
      useAuthStore.setState(rs);
      getUIStore().closeModal();
    },
  });
}
