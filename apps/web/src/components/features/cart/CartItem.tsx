import { MoneyItem, NumberInput } from "#/components/custom";
import { CardDescription, CardTitle } from "#/components/ui";
import type { ICartItem } from "#/data-type";
import { useState } from "react";

export type CartItemProps = WithData<ICartItem>;

export function CartItem({ data }: CartItemProps) {
  const { product } = data;
  const defaultValue = data.quantity;
  const [quantity, setQuantity] = useState(defaultValue);

  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <img className="size-20 aspect-square bg-black/20" />
        <div>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription>{product.description}</CardDescription>
        </div>
        <MoneyItem>{product.price}</MoneyItem>
      </div>
      <NumberInput onChange={setQuantity} defaultValue={defaultValue} />
      <MoneyItem>{+product.price * quantity}</MoneyItem>
      <CardTitle>Xoá</CardTitle>
    </div>
  );
}
