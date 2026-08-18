export const productQueryKey = {
  productsByCategory: (categoryId: any) => ["products", categoryId],
  detail: (productId: any) => ["productDetail", productId],
};
