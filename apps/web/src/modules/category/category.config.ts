export const categoryQueryKey = {
  all: ["allCategories"],
  detail: (categoryId: number) => ["categoryDetail", categoryId],
};
