import { useProducts } from "#/modules";
import { ProductSection } from "./ProductSection";

export type ProductByCategoryProps = {
  categoryId: number;
};

export function ProductByCategory({ categoryId }: ProductByCategoryProps) {
  const { data } = useProducts(categoryId);

  return <>{data && <ProductSection
    label=""
    data={data} />}</>;
}
