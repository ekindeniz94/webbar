import { IUserApiKeyData } from './user-api-key.data';
import { IUserOneTimeKeyData } from './user-one-time-key.data';

export interface IProfileData {
  id: string;
  email: string;
  apiKeys: IUserApiKeyData[];
  oneTimeKeys: IUserOneTimeKeyData[];
}
