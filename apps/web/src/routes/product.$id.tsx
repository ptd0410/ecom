import { ProductDetail } from "#/components";
import { useProduct } from "#/modules";
import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = useParams({ from: "/product/$id" });
  const { data } = useProduct(+id);

  return <div>{data && <ProductDetail data={data} />}</div>;
}
