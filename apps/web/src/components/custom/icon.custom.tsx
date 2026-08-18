import * as Icon from "lucide-react";

type IconName = keyof typeof Icon;

export { Icon, type IconName };

export function Tag({ name }: { name?: IconName }) {
  const Comp = name ? (Icon[name] as any) : null;
  return Comp ? <Comp /> : null;
}
