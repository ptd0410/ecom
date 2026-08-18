import { CardDescription } from "#/components/ui";
import { useProfile } from "#/hooks";

export type UserRoleProps = {};

export function UserRole({}: UserRoleProps) {
  const { data } = useProfile();

  return <CardDescription>{data?.user.roles.join("-")}</CardDescription>;
}
