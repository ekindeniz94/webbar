import { Expose } from 'class-transformer';
import { BaseEntityDto } from '../../../mo-core';

export class KeyVaultDto extends BaseEntityDto {
  // @Exclude()
  // createdBy: string;

  @Expose()
  name: string;

  @Expose()
  encrypted: string;
}
