import { Button, Card, CardDescription, CardTitle } from "#/components/ui";
import type { Product } from "#/modules";

export type ProductDetailProps = WithData<Product>;

export function ProductDetail({ data }: ProductDetailProps) {
  return (
    <Card className="flex flex-row p-5!">
      <img className="size-80 bg-black/20 rounded-xl" />
      <div className="flex flex-col justify-between py-5">
        <div>
          <CardTitle>{data.name}</CardTitle>
          <CardTitle>{data.displayPrice}</CardTitle>
          <CardDescription>{data.description}</CardDescription>
        </div>
        <div className="flex gap-3">
          <Button>Thêm vào giỏ hàng</Button>
          <Button>Mua ngay</Button>
        </div>
      </div>
    </Card>
  );
}
