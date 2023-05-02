import { Expose } from 'class-transformer/types/decorators';
import { IsNumber, IsOptional, IsString } from 'class-validator/types/decorator/decorators';

export class VolumeBackupResponseDto {
  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  @IsString()
  downloadUrl: string;

  @Expose()
  @IsNumber()
  bytes: number;

  @Expose()
  @IsOptional()
  @IsString()
  error?: string;
}
