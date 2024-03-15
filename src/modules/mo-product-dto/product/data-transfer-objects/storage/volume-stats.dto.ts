import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export enum VolumeStatusEnum {
  PENDING = 'PENDING',
  BOUND = 'BOUND',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export enum VolumeStatusMessageTypeEnum {
  SUCCESS = 'SUCCESS',
  INFO = 'INFO',
  ERROR = 'ERROR',
  WARNING = 'WARNING'
}

export class VolumeStatusMessageDto {
  @Expose()
  @IsString()
  type: VolumeStatusMessageTypeEnum;

  @Expose()
  @IsString()
  message: string;
}

export class VolumeStatsDto {
  // @Expose()
  // @IsString()
  // volumeId: string;

  @Expose()
  @IsString()
  volumeName: string;

  @Expose()
  @IsNumber()
  totalBytes: number;

  @Expose()
  @IsNumber()
  freeBytes: number;

  @Expose()
  @IsNumber()
  usedBytes: number;

  @Expose()
  @IsOptional()
  status?: VolumeStatusEnum;

  @Expose()
  @IsOptional()
  messages?: VolumeStatusMessageDto[];

  @Expose()
  @IsOptional()
  usedByPods?: string[];
}
