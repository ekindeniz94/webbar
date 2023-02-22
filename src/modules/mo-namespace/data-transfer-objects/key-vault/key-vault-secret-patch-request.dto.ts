import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { KeyVaultSecretCreateRequestDto } from './key-vault-secret-create-request.dto';
import { StripTags } from '@mo/js-utils';

export class KeyVaultSecretPatchRequestDto extends KeyVaultSecretCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @StripTags()
  @Expose()
  id: string;
}
