import { IAddress } from './address.data';
import { ICompany } from './company.data';
import { IUserApiKeyData } from './user-api-key.data';
import { IUserOneTimeKeyData } from './user-one-time-key.data';
import { IPurchasedProductData } from '../../../mo-product';

export interface IPublicUserData {
  firstName: string;
  lastName: string;
}
