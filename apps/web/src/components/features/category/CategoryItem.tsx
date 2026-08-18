import type { Category } from "#/data-type";

export type CategoryItemProps = WithData<Category>;

export function CategoryItem({ data }: CategoryItemProps) {
  return (
    <div className="flex flex-col gap-3 w-24">
      <img alt="" className="size-14 bg-black" />
      <p>{data.name}</p>
    </div>
  );
}
