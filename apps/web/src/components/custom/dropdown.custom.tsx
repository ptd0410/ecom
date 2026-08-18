import type { ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  type DropdownMenuVariant,
} from "../ui";
import { Tag, type IconName } from "./icon.custom";
import React from "react";
import { Link } from "@tanstack/react-router";

export type CustomDropdownItem = {
  iconName?: IconName;
  label: string;
  path?: string;
  onClick?: () => void;
  variant?: DropdownMenuVariant;
};

export type CustomDropGroup = CustomDropdownItem[][];

export type CustomDropdownGroup = CustomDropdownItem[];

export type CustomDropdownProps = {
  open?: boolean;
  setOpen?: (input: boolean) => void;
  items: CustomDropdownGroup[];
  trigger?: ReactNode;
};

export function CustomDropdown({
  trigger,
  items,
  ...props
}: CustomDropdownProps) {
  return (
    <DropdownMenu open={props.open} onOpenChange={props.setOpen}>
      {trigger && <DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>}

      <DropdownMenuContent>
        {items.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            {groupIndex > 0 && <DropdownMenuSeparator />}

            <DropdownMenuGroup>
              {group.map(({ path, ...item }) => {
                const children = (
                  <DropdownMenuItem
                    key={item.label}
                    variant={item.variant}
                    onClick={() => item.onClick?.()}
                  >
                    <Tag name={item.iconName} />
                    {item.label}
                  </DropdownMenuItem>
                );
                return path ? <Link to={path}>{children}</Link> : children;
              })}
            </DropdownMenuGroup>
          </React.Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
