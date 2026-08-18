import { cn } from "#/lib";
import { Link, type LinkProps } from "@tanstack/react-router";

export type NavProps = LinkProps & {
  className?: string;
};

export function Nav({ className, ...props }: NavProps) {
  return <Link className={cn("", className)} {...props} />;
}
