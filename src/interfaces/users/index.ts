import { Contacts } from "../../entities/contacts";

export interface IUser {
  email: string;
  password: string;
  full_name: string;
  phone: string;
}
export interface IUserCreated extends IUser {
  id: string;
  created_at: Date;
  updated_at: Date;
  contacts: Contacts[];
}

export interface ILogin {
  email: string;
  password: string;
}
export interface ILoginResponse {
  user_id: string;
  token: string;
}
export interface IUserUpdate {
  email?: string;
  full_name?: string;
  phone?: string;
}
