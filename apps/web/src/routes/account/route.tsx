import { authService } from "#/modules";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  component: RouteComponent,
  loader: authService.ensureAuthToken,
});

function RouteComponent() {
  return <Outlet />;
}
