import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateExternalSecretStoreRequestDto {
  @IsOptional()
  @Transform(({ value }) => value ?? 'external-secret-store')
  @IsString()
  @Expose()
  displayName: string;

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
