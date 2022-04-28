import { Expose, Type } from 'class-transformer';

export class GithubTokenDto {
  @Expose()
  access_token: string;

  @Type(() => Number)
  @Expose()
  expires_in: number;

  @Expose()
  refresh_token: string;

  @Type(() => Number)
  @Expose()
  refresh_token_expires_in: number;
}
