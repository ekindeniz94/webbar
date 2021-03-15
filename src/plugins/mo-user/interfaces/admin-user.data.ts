import { IAddress } from './address.data';
import { ICompany } from './company.data';

export interface IAdminUserData {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  company?: ICompany;
  address?: IAddress;
  billingAddress?: IAddress;
  billingAddressEqualsAddress?: boolean;
  phoneNumber?: string;
  phoneNumberValidatedAt?: string;
  emailValidatedAt?: string;
  createdAt: string;
}
