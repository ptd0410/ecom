import { AdminTable } from "#/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/owner/admin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <AdminTable />
    </>
  );
}
