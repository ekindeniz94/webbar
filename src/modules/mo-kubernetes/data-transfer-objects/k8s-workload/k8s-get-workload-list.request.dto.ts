import { Expose } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { K8sResourceEntryDto } from './k8s-resource-entry.dto';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sGetWorkloadListRequestDto implements K8sResourceEntryDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  namespaced: boolean;

  @IsOptional()
  @IsString()
  @Expose()
  group?: string;

  @IsOptional()
  @IsString()
  @Expose()
  version?: string;
}
