import { cn } from "#/lib";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui";

export type SelectOption = {
  label: string | number;
  value: string;
};

export type CustomSelectProps = {
  defaultValue?: string;
  items: SelectOption[];
  placeholder?: string;
  className?: string;
};

export function CustomSelect({ items, ...props }: CustomSelectProps) {
  return (
    <Select defaultValue={props.defaultValue}>
      <SelectTrigger className={cn(props.className)}>
        <SelectValue placeholder={props.placeholder} />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          {items.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
