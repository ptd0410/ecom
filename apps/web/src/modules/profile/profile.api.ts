import { apiClient } from "#/clients";
import type { IProfile } from "#/data-type";

export const profileApi = {
  get: (): Promise<IProfile> => apiClient.get("/profile"),
};
