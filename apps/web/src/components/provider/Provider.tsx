import type { PropsWithChildren } from "react";
import { SidebarProvider } from "../ui";
import { TooltipProvider } from "../ui/tooltip";

export type ProviderProps = PropsWithChildren & {
  sidebarDefaultOpen?: boolean;
};

export function Provider(props: ProviderProps) {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={props.sidebarDefaultOpen}>
        {props.children}
      </SidebarProvider>
    </TooltipProvider>
  );
}
