import { Address } from "#/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/address")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Address />;
}
