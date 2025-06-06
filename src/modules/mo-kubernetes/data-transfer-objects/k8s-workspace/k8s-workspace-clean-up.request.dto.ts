import { Expose, Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class K8sWorkspaceCleanUpRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  name: string;

  @IsNotEmpty()
  @Transform(({ value }) => true)
  @IsBoolean()
  @Expose()
  dryRun: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  replicaSets: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  pods: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  services: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  secrets: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  configMaps: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  jobs: boolean;

  @IsNotEmpty()
  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  ingresses: boolean;
}
