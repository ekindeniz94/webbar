import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateExternalSecretStoreRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  role: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  vaultServerUrl: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  secretPath: string;
}
