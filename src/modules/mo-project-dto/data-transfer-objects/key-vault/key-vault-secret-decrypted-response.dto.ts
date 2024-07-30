import { Expose } from 'class-transformer';
import { BaseEntityDto } from '@mogenius/database-dto';

export class KeyVaultSecretDecryptedResponseDto extends BaseEntityDto {
  @Expose()
  name: string;

  @Expose()
  value: string;
}
