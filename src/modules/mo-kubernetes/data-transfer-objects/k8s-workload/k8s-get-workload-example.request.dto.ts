import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';
import { K8sResourceEntryDto } from './k8s-resource-entry.dto';

export class K8sGetWorkloadExampleRequestDto implements K8sResourceEntryDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  kind: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @TransformToBoolean(false)
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
