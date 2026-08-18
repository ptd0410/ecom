import { formatVND } from "#/lib";
import { CardTitle } from "../ui";
import { format } from "date-fns";

// money item
export type MoneyItemProps = {
  children?: string | number;
};

export function MoneyItem({ children }: MoneyItemProps) {
  return <CardTitle>{formatVND(children || 0)}</CardTitle>;
}

// date time item
export type DateTimeProps = { children: string | number };
export function DateTimeItem({ children }: DateTimeProps) {
  if (!children) return "Invalid time";
  return <>{format(children, "hh:mm dd/MM/yyyy")}</>;
}
