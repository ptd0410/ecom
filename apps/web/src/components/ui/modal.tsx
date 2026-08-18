import { getUIStore, useUIStore } from "#/store";
import type { ModalType } from "#/types";
import { type PropsWithChildren, type ReactNode } from "react";
import { Button, type ButtonProps } from "./button";
import { Dialog, DialogContent, DialogTrigger } from "./dialog";

export type ModalProps = PropsWithChildren & {
  type: ModalType;
};

export function Modal({
  children,
  type,
  trigger,
}: ModalProps & {
  trigger?: ReactNode;
}) {
  const open = useUIStore((s) => s.modal === type);

  return (
    <Dialog open={open} onOpenChange={(v) => !v && getUIStore().closeModal()}>
      {trigger && (
        <DialogTrigger asChild onClick={() => getUIStore().openModal(type)}>
          {trigger}
        </DialogTrigger>
      )}
      <DialogContent paddingTop>{children}</DialogContent>
    </Dialog>
  );
}

export function ModalTrigger({
  children,
  type,
  variant = "ghost",
  ...props
}: ModalProps & Omit<ButtonProps, "children" | "type">) {
  return (
    <Button
      {...props}
      variant={variant}
      onClick={() => getUIStore().openModal(type)}
    >
      {children}
    </Button>
  );
}
