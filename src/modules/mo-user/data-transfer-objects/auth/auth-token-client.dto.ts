import { Expose } from 'class-transformer';
import { AuthTokenGrants } from '../../types';

export class AuthTokenClientDto {
  @Expose()
  clientId: string; // 'myfreakingclient';

  @Expose()
  redirectUris: string[];

  @Expose()
  grants: AuthTokenGrants[];
}
