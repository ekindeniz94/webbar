import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class CreateExternalSecretsStoreResponseDto {
  @Expose()
  @IsString()
  status: 'ERROR' | 'SUCCESS';

  @Expose()
  @IsOptional()
  @IsString()
  errorMessage?: string;
}
