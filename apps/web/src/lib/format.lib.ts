export function formatVND(value: number | string): string {
  const number = Number(value);

  if (Number.isNaN(number)) {
    return "0 ₫";
  }

  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(number);
}
