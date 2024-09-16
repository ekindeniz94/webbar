import { Expose, Transform, Type } from 'class-transformer';
import {
  isArray,
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  Max,
  Min,
  ValidateNested
} from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';
import { TransformToBoolean } from '@mogenius/js-utils';
import { ProjectNamespaceServicePortCnameDto } from './project-namespace-service-port-cname.dto';
import _ from 'lodash';

export class ProjectNamespaceServicePortCreateRequestDto {
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

  @Transform(
    ({
      value,
      obj
    }: {
      value: ProjectNamespaceServicePortCnameDto;
      obj: ProjectNamespaceServicePortCreateRequestDto;
    }): ProjectNamespaceServicePortCnameDto[] => {
      if (obj.expose && obj.portType === ProjectNamespaceServicePortBindingEnum.HTTPS) {
        return value && isArray(value) ? _.uniqBy(value, 'cName') : [];
      }
      return [];
    }
  )
  @ValidateNested({ each: true })
  @Type(() => ProjectNamespaceServicePortCnameDto)
  @Expose()
  cNames: ProjectNamespaceServicePortCnameDto[];
}
