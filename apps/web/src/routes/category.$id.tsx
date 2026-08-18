import { ProductByCategory } from "#/components";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/category/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ from: "/category/$id" });

  return (
    <div className="size-full overflow-y-auto">
      <ProductByCategory categoryId={+id} />
    </div>
  );
}
