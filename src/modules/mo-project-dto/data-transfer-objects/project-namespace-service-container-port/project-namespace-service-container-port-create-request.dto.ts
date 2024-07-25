import { Expose, Transform, Type } from 'class-transformer';
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, Max, Min } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';
import { TransformToBoolean } from '@mogenius/js-utils';

export class ProjectNamespaceServiceContainerPortCreateRequestDto {
  @IsNotEmpty()
  @IsEnum(ProjectNamespaceServicePortBindingEnum)
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @Type(() => Number)
  @Transform(({ value, obj }) => (obj?.portType === ProjectNamespaceServicePortBindingEnum.HTTPS ? 80 : value))
  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(65535)
  @Expose()
  externalPort: number;

  @TransformToBoolean(false)
  @IsBoolean()
  @Expose()
  expose: boolean;

  @TransformToBoolean(false)
  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  spectrumEnableTls: boolean;
}
