import { Bank, Debit } from "#/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/payment")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Debit />
      <Bank />
    </>
  );
}
