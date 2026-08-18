import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full",
  {
    variants: {
      size: {
        xs: "size-5",
        sm: "size-6",
        default: "size-8",
        lg: "size-10",
        xl: "size-12",
        "2xl": "size-16",
        "6xl": "size-24",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const avatarImageVariants = cva("aspect-square size-full object-cover");

const avatarFallbackVariants = cva(
  "flex size-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
  {
    variants: {
      size: {
        xs: "text-[9px]",
        sm: "text-[10px]",
        default: "text-xs",
        lg: "text-sm",
        xl: "text-base",
        "2xl": "text-lg",
        "6xl": "text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

type CustomAvatarProps = React.ComponentProps<"div"> &
  VariantProps<typeof avatarVariants> & {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
  };

function CustomAvatar({
  className,
  size = "default",
  src,
  alt = "",
  fallback,
  ...props
}: CustomAvatarProps) {
  return (
    <div
      data-slot="avatar"
      data-size={size}
      className={cn(avatarVariants({ size, className }))}
      {...props}
    >
      {src ? (
        <img
          data-slot="avatar-image"
          src={src}
          alt={alt}
          className={avatarImageVariants()}
        />
      ) : (
        <div
          data-slot="avatar-fallback"
          className={avatarFallbackVariants({ size })}
        >
          {fallback}
        </div>
      )}
    </div>
  );
}

export { CustomAvatar, avatarVariants };
