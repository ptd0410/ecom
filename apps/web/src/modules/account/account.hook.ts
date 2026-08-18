import { useMutation, useQuery } from "@tanstack/react-query";
import { createProfileQuery } from "./account.query";
import { accountApi } from "./account.api";

export function useProfile() {
  return useQuery(createProfileQuery());
}

export function useEditProfile() {
  return useMutation({
    mutationFn: accountApi.patchProfile,
  });
}
