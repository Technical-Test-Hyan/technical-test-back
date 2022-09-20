export interface IContact {
  full_name: string;
  email: string;
  phone: string;
  description?: string;
}
export interface IContactCreated extends IContact {
  id: string;
}
export interface IContactUpdate {
  full_name?: string;
  email?: string;
  phone?: string;
}
