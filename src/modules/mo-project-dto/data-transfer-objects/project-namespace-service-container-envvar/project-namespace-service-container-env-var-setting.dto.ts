import { Expose } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ProjectNamespaceServiceContainerEnvVarSettingDto {
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean(false)
  @Expose()
  deactivateName: boolean;

  @IsOptional()
  @IsBoolean()
  @TransformToBoolean(false)
  @Expose()
  deactivateValue: boolean;

  @IsOptional()
  @IsBoolean()
  @TransformToBoolean(false)
  @Expose()
  deactivateType: boolean;

  @IsOptional()
  @IsBoolean()
  @TransformToBoolean(false)
  @Expose()
  deactivateDelete: boolean;
}
