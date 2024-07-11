import { Expose } from 'class-transformer';

export class BitbucketTokenDto {
  @Expose()
  access_token: string;

  @Expose()
  token_type: string;

  @Expose()
  expires_in: number;

  @Expose()
  state: number;

  @Expose()
  refresh_token: string;

  @Expose()
  scopes: string;
}
