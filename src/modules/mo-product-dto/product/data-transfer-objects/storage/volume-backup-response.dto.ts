import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

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
