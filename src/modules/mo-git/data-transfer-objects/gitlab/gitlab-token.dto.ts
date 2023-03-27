import { Expose } from 'class-transformer';

export class GitlabTokenDto {
  @Expose()
  access_token: string;
  @Expose()
  token_type: string;
  @Expose()
  expires_in: number;
  @Expose()
  refresh_token: string;
  @Expose()
  created_at: number;
  @Expose()
  scope: string;
}
