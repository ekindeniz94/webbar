import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { KeyVaultSecretCreateRequestDto } from './key-vault-secret-create-request.dto';

export class KeyVaultSecretPatchRequestDto extends KeyVaultSecretCreateRequestDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID()
  @Expose()
  id: string;
}
