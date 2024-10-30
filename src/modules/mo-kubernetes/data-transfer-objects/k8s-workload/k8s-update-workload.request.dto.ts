import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sUpdateWorkloadRequestDto {
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

  @IsNotEmpty()
  @IsString()
  @Expose()
  yamlData: string;

  @IsOptional()
  @IsString()
  @Expose()
  group?: string;

  @IsOptional()
  @IsString()
  @Expose()
  version?: string;
}
