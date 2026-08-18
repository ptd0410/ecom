import { Section } from "#/components/custom";
import { useAddress } from "#/modules";
import { AddressItem } from "./AddressItem";

export type AddressProps = {};

export function Address({}: AddressProps) {
  const { data } = useAddress();

  return (
    <Section label="Địa chỉ của tôi" btnLabel="Thêm địa chỉ">
      {data.map((item) => (
        <AddressItem key={item.id} data={item} />
      ))}
    </Section>
  );
}
