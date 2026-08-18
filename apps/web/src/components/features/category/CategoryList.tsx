import { Card, CardTitle } from "#/components/ui";
import { useCategories } from "#/modules";
import { Link } from "@tanstack/react-router";
import { CategoryItem } from "./CategoryItem";

export type CategoryListProps = {};

export function CategoryList({}: CategoryListProps) {
  const { data } = useCategories();
  return (
    <Card className="p-4">
      <CardTitle>Danh mục</CardTitle>
      <div className="flex">
        {data?.map((item) => (
          <Link
            key={item.id}
            to="/category/$id"
            params={{ id: String(item.id) }}
          >
            <CategoryItem data={item} />
          </Link>
        ))}
      </div>
    </Card>
  );
}
