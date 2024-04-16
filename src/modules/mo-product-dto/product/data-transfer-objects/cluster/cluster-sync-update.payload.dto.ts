import {
  isArray,
  IsBoolean,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateIf
} from 'class-validator';
import { Expose, Transform, Type } from 'class-transformer';
import { MoUtils } from '@mo/js-utils';

export class ClusterSyncUpdatePayloadDto {
  @IsOptional()
  @IsString()
  @Expose()
  repo: string;

  @IsNotEmpty()
  @IsString()
  @ValidateIf((obj: ClusterSyncUpdatePayloadDto) => isNotEmpty(obj.repo))
  @IsString()
  @Expose()
  branch: string;

  @IsOptional()
  @IsString()
  @Expose()
  pat: string;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  allowPull: boolean;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  allowPush: boolean;

  @Transform(({ value }) => MoUtils.parseBoolean(value))
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  allowManualClusterChanges: boolean;

  @Type(() => Number)
  @Transform(({ value }) => value ?? 10)
  @IsNotEmpty()
  @IsNumber()
  @Expose()
  syncFrequencyInSec: number;

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  syncWorkloads: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  availableSyncWorkloads: string[];
}
