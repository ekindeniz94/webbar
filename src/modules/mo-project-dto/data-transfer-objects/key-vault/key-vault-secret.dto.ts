import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';

export class KeyVaultSecretDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  encrypted: string;
}
