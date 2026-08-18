import { CardTitle } from "#/components/ui";
import type { Product } from "#/modules";
import { ProductItem } from "./ProductItem";

export type ProductSectionProps = WithData<Product[]> & {
  label?: string;
};

export function ProductSection({ data, label }: ProductSectionProps) {
  return (
    <div>
      <CardTitle>{label}</CardTitle>
      <div className="flex flex-wrap gap-2">
        {data.map((item) => (
          <ProductItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
