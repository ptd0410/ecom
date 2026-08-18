export interface ICartItem {
  id: number;
  cartId: number;
  productId: number;
  quantity: number;
  createdAt: string;
  updatedAt: string;
  product: CartProduct;
}

export interface CartProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
}

export interface ICart {
  id: number;
  userId: number;
  createdAt: string;
  updatedAt: string;
  items: ICartItem[];
}
