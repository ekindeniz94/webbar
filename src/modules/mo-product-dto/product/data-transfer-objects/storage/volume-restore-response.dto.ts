import { Expose } from 'class-transformer/types/decorators';
import { IsOptional, IsString } from 'class-validator/types/decorator/decorators';

export class VolumeRestoreResponseDto {
  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  @IsString()
  message: string;

  @Expose()
  @IsOptional()
  @IsString()
  error?: string;
}
