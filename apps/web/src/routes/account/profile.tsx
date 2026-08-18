import { ProfileForm } from "#/components";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/account/profile")({
  component: RouteComponent,
  loader: async () => {
    // await accountService.ensureProfile();
  },
});

function RouteComponent() {
  return (
    <div className="size-full flex items-center justify-center">
      <ProfileForm />
    </div>
  );
}
