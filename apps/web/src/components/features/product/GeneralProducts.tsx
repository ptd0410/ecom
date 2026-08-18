import { useProducts } from "#/modules";

export type GeneralProductsProps = {};

export function GeneralProducts({}: GeneralProductsProps) {
  const { data } = useProducts();

  return <div></div>;
}
