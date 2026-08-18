import { images } from "#/assets";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "#/components/ui";
import { Link } from "@tanstack/react-router";
import { navItems } from "./nav-items.const";
import { GroupItem } from "#/components/custom";

export const AppSidebar = () => {
  return (
    <Sidebar collapsible="icon" variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="gap-2.5 bg-transparent! [&>svg]:size-8"
            >
              <img
                alt="logo"
                src={images.logo || undefined}
                className="
                  h-10 w-15
                  [&_rect]:fill-sidebar
                  [&_rect:first-child]:fill-primary
                "
              />

              <Link to="/">
                <div className="flex flex-col items-start">
                  <span className="text-lg font-semibold text-nowrap">
                    Admin
                  </span>

                  <span className="text-xs font-light text-nowrap">
                    Dashboard Template
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="group-data-[collapsible=icon]:overflow-y-auto">
        {navItems.map((navItem, index) => (
          <GroupItem key={navItem.label || index} data={navItem} />
        ))}
      </SidebarContent>
    </Sidebar>
  );
};
