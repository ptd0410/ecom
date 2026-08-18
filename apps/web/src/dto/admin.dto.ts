export type CreateAdminDTO = {
  name: string;
  uid: string;
  password: string;
};

export type RemoveAdminDTO = {
  uid: number;
};
