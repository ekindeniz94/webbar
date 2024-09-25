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
import { TransformToBoolean } from '@mogenius/js-utils';

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

  @TransformToBoolean(false)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  allowPull: boolean;

  @TransformToBoolean(false)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  allowPush: boolean;

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

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  ignoredNamespaces: string[];

  @Transform(({ value }) => (value && isArray(value) ? value : []))
  @IsNotEmpty()
  @IsString({ each: true })
  @Expose()
  ignoredNames: string[];
}
