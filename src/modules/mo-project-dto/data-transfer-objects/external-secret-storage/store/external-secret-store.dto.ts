import { Expose, Transform } from 'class-transformer';

export class ExternalSecretStoreDto {
  @Expose()
  name: string;

  @Expose()
  prefix: string;

  @Transform(({ value, obj }) => value ?? obj['project-id'], { toClassOnly: true })
  @Expose()
  projectId: string;

  @Transform(({ value, obj }) => value ?? obj['shared-path'], { toClassOnly: true })
  @Expose()
  sharedPath: string;

  @Expose()
  role: string;

  @Transform(({ value, obj }) => value ?? obj['vault-url'], { toClassOnly: true })
  @Expose()
  vaultURL: string;
}
