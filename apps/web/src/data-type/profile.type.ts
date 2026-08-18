export interface IProfile {
  name: string;
  avatar: any;
  birthday: any;
  bio: any;
  user: IProfileUser;
}

export interface IProfileUser {
  uid: string;
  roles: string[];
  email: any;
  phone: any;
}
