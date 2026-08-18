import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui";
import { ChevronRight } from "lucide-react";
import { Icon } from "#/components/custom";
import { Link } from "@tanstack/react-router";
import type { IconName } from "#/components/custom";

export type INavItem = {
  label: string;
  path: string;
};

export type IGroupItem = {
  icon?: IconName;
  label: string;
  items: INavItem[];
};

export function NavItem({ data }: WithData<INavItem>) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild>
        <Link to={data.path} className="pl-5">
          <div className="w-px h-full bg-border absolute left-3" />
          <span>{data.label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

export function GroupItem({ data }: WithData<IGroupItem>) {
  const Tag: any = data.icon ? Icon[data.icon] : null;

  return (
    <Collapsible defaultOpen className="group/collapsible">
      <SidebarGroup>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton className="flex justify-between">
            <div className="flex items-center gap-2">
              {Tag && <Tag />}
              <span>{data.label}</span>
            </div>
            <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
          </SidebarMenuButton>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <SidebarMenu>
            {data.items.map((item) => (
              <NavItem key={item.path} data={item} />
            ))}
          </SidebarMenu>
        </CollapsibleContent>
      </SidebarGroup>
    </Collapsible>
  );
}
