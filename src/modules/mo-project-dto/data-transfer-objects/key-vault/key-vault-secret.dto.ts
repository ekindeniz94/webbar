import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class KeyVaultSecretDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  encrypted: string;
}
