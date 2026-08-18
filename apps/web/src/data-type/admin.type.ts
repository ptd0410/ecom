export interface IAdmin {
  id: number;
  uid: string;
  email: any;
  phone: any;
  roles: string[];
  profile: IAdminProfile;
  createdAt: string;
}

export interface IAdminProfile {
  name: string;
  avatar: any;
}
