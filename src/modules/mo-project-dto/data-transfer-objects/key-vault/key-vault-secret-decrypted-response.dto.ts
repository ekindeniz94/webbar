import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class KeyVaultSecretDecryptedResponseDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  value: string;
}
