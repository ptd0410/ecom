import { queryClient } from "#/clients";
import { adminQueryKeys } from "./admin.config";

export function invalidateAdmin() {
  queryClient.invalidateQueries({ queryKey: adminQueryKeys.admin });
}
