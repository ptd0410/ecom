import { queryClient } from "#/clients";
import { QueryClientProvider } from "@tanstack/react-query";
import type { PropsWithChildren } from "react";

export type QueryProviderProps = PropsWithChildren;

export function QueryProvider({ children }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
