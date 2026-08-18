import { useCart } from "#/hooks";
import { CartItem } from "./CartItem";

export type CartProps = {};

export function Cart({}: CartProps) {
  const { data } = useCart();
  const { items = [] } = data ?? {};

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <CartItem key={item.id} data={item} />
      ))}
    </div>
  );
}
