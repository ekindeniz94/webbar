import { Expose } from 'class-transformer';

export class GithubSecretsPublicKeyDto {
  @Expose()
  key_id: string;

  @Expose()
  key: string;
}
