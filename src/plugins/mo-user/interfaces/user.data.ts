import { IPurchasedProductData } from '../../mo-product';
import { IAddress } from './address.data';
import { ICompany } from './company.data';
import { IUserApiKeyData } from './user-api-key.data';
import { IUserOneTimeKeyData } from './user-one-time-key.data';

export interface IUserData {
  id: string;
  email: string;
  passwordHash: string;
  apiKeys: IUserApiKeyData[];
  oneTimeKeys: IUserOneTimeKeyData[];
  products: IPurchasedProductData[];
  phoneNumber?: string;
  firstName?: string;
  lastName?: string;
  company?: ICompany;
  address?: IAddress;
  billingAddress?: IAddress;
  billingAddressEqualsAddress?: boolean;
  phoneNumberValidatedAt?: string;
  emailValidatedAt?: string;
  isDeletedAt?: string;
}
