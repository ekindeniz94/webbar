import { Expose, Transform, Type } from 'class-transformer';
import { isArray, Max, Min, ValidateNested } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';
import { TransformToBoolean } from '@mo/js-utils';
import { ProjectNamespaceServicePortCnameDto } from './project-namespace-service-port-cname.dto';
import _ from 'lodash';

export class ProjectNamespaceServicePortDto extends BaseEntityDto {
  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Type(() => Number)
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @Min(0)
  @Max(65535)
  @Expose()
  externalPort: number;

  @TransformToBoolean(false)
  @Expose()
  expose: boolean;

  @Transform(
    ({
      value,
      obj
    }: {
      value: ProjectNamespaceServicePortCnameDto;
      obj: ProjectNamespaceServicePortDto;
    }): ProjectNamespaceServicePortCnameDto[] => {
      if (obj.expose && obj.portType === ProjectNamespaceServicePortBindingEnum.HTTPS) {
        return value && isArray(value) ? _.uniqBy(value, 'cName') : [];
      }
      return [];
    }
  )
  @Type(() => ProjectNamespaceServicePortCnameDto)
  @ValidateNested({ each: true })
  @Expose()
  cNames: ProjectNamespaceServicePortCnameDto[];

  // @Type(() => Boolean)
  // @Expose()
  // spectrumEnableTls: boolean;
  //
  // @Expose()
  // spectrumAppId: string;
  //
  // @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  // @Expose()
  // deletedAt?: Date;
}
