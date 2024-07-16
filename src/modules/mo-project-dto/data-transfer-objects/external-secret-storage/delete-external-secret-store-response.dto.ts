import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

export class DeleteExternalSecretsStoreResponseDto {
  @Expose()
  @IsString()
  status: 'ERROR' | 'SUCCESS';

  @Expose()
  @IsOptional()
  @IsString()
  errorMessage?: string;
}
