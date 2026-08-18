import { Section } from "#/components/custom";

export type BankProps = {};

export function Bank({}: BankProps) {
  return (
    <Section
      label="Tài khoản ngân hàng của tôi"
      btnLabel="Thêm ngân hàng liên kết"
    />
  );
}
