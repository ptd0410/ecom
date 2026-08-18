import { createCartQuery } from "#/modules";
import { useQuery } from "@tanstack/react-query";

export function useCart() {
  return useQuery(createCartQuery());
}
