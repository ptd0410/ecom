import { apiClient } from "#/clients";
import type { Profile } from "./account.type";

export const accountApi = {
  getProfile: (): Promise<Profile> => apiClient.get("/profile"),
  patchProfile: (params: Partial<Profile>): Promise<Profile> => {
    console.log("ppp params", params);
    return apiClient.patch("/profile", params);
  },
};
