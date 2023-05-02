import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';

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
