export interface Category {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  _count: Count;
}

export interface Count {
  products: number;
}
