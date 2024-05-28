import { Expose, Transform, Type } from 'class-transformer';
import { Max, Min } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';
import {MoUtils, TransformToBoolean} from '@mo/js-utils';

export class ProjectNamespaceServiceContainerPortDto extends BaseEntityDto {
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
