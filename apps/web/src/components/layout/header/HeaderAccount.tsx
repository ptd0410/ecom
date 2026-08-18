import { Button, ModalTrigger, Separator } from "#/components/ui";
import { useIsAuth } from "#/hooks";
import { Link } from "@tanstack/react-router";
import { ProfileDropdown } from "./ProfileDropdown";
import { ShoppingCart } from "lucide-react";
import { UserRole } from "./UserRole";

export type HeaderAccountProps = {};

export function HeaderAccount({}: HeaderAccountProps) {
  const { isAuth } = useIsAuth();

  return (
    <div className="flex items-center gap-2">
      {isAuth ? (
        <>
          <UserRole />
          <Link to="/cart">
            <Button size={"icon"} variant={"ghost"}>
              <ShoppingCart />
            </Button>
          </Link>
          <ProfileDropdown />
        </>
      ) : (
        <>
          <ModalTrigger type="register">Đăng ký</ModalTrigger>
          <Separator orientation="vertical" />
          <ModalTrigger type="login">Đăng nhập</ModalTrigger>
        </>
      )}
    </div>
  );
}
