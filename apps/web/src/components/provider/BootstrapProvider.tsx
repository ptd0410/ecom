import type { PropsWithChildren } from "react";
import { LoadingScreen } from "../layout";
import { useAutoToken } from "#/hooks";

export type BootstrapProviderProps = PropsWithChildren;

export function BootstrapProvider({ children }: BootstrapProviderProps) {
  const { isFetched } = useAutoToken();

  if (!isFetched) return <LoadingScreen />;
  return children;
}
