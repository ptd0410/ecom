import { createProfileQuery } from "#/modules";
import { useQuery } from "@tanstack/react-query";

export function useProfile() {
  return useQuery(createProfileQuery());
}
