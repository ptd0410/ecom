import { Card, CardDescription, CardTitle } from "#/components/ui";
import type { Product } from "#/modules";
import { Link } from "@tanstack/react-router";

export type ProductItemProps = WithData<Product>;

export function ProductItem({ data }: ProductItemProps) {
  return (
    <Link to="/product/$id" params={{ id: String(data.id) }}>
      <Card className="w-40 flex flex-col items-center">
        <img className="w-full aspect-square bg-black/20" />
        <div className="flex flex-col px-3">
          <CardTitle>{data.name}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
          <CardTitle>{data.displayPrice} </CardTitle>
        </div>
      </Card>
    </Link>
  );
}
