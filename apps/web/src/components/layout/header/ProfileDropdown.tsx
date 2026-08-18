"use client";

import { CustomAvatar, CustomDropdown } from "#/components/custom";
import { useLogout } from "#/hooks";

export function ProfileDropdown() {
  const { mutate } = useLogout();

  return (
    <CustomDropdown
      trigger={<CustomAvatar fallback="DH" />}
      items={[
        [
          {
            iconName: "PencilIcon",
            label: "Tài khoản",
            path: "/account/profile",
          },
          { iconName: "ShareIcon", label: "Cài đặt" },
        ],
        [
          {
            iconName: "TrashIcon",
            label: "Đăng xuất",
            variant: "destructive",
            onClick: mutate,
          },
        ],
      ]}
    />
  );
}
