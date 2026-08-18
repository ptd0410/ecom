import type { Category } from "./category.type";

export interface ResProduct {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
  category: Category;
}
