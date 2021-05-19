import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class KeyVaultDecryptedResponseDto extends BaseEntityDto {
  // @Exclude()
  // createdBy: string;

  @Expose()
  name: string;

  @Expose()
  value: string;
}
