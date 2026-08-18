import { Plus } from "lucide-react";
import { Button, CardTitle, Separator } from "../ui";
import type { ReactNode } from "react";

export type SectionProps = {
  label?: string;
  btnLabel?: string;
  onClick?: () => void;
  children?: ReactNode;
};

export function Section(props: SectionProps) {
  return (
    <div className="flex flex-col gap-3 p-3 min-h-40">
      <div className="flex justify-between items-center">
        <CardTitle>{props.label}</CardTitle>
        <Button onClick={props.onClick}>
          <Plus />
          {props.btnLabel}
        </Button>
      </div>
      <Separator />
      {props.children}
    </div>
  );
}
