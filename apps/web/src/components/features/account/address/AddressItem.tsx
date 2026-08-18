import { Button, Separator } from "#/components/ui";
import type { IAddress } from "#/modules";

export type AddressItemProps = {
  data: IAddress;
};

export function AddressItem({ data }: AddressItemProps) {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <p>{data.name}</p>
          <p>{data.phone}</p>
        </div>
        <p>{data.address}</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Button size={"sm"} variant={"ghost"}>
            Cập nhật
          </Button>
          <Separator orientation="vertical" />
          <Button size={"sm"} variant={"ghost"}>
            Xoá
          </Button>
        </div>
        <Button variant={"outline"}>Thiết lập mặc định</Button>
      </div>
    </div>
  );
}
