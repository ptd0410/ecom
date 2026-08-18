import { queryClient } from "#/clients";
import { createProfileQuery } from "./account.query";

export const accountService = {
  ensureProfile: () => queryClient.ensureQueryData(createProfileQuery()),
};
