import { Expose } from 'class-transformer';

export class GithubSecretDto {
  @Expose()
  name: string;

  @Expose()
  created_at: string;

  @Expose()
  updated_at: string;
}
