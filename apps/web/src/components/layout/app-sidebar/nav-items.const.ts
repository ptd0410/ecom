import type { IGroupItem } from "#/components/custom";

export const navItems: IGroupItem[] = [
  {
    label: "Account",
    icon: "User",
    items: [
      {
        label: "Profile",
        path: "/account/profile",
      },
      {
        label: "Payment",
        path: "/account/payment",
      },
      {
        label: "Address",
        path: "/account/address",
      },
    ],
  },
  {
    label: "Products",
    icon: "ShoppingCart",
    items: [
      {
        label: "All",
        path: "/",
      },
    ],
  },
  {
    label: "Admin",
    icon: "UserShield",
    items: [
      {
        label: "All",
        path: "/owner/admin",
      },
    ],
  },
];
