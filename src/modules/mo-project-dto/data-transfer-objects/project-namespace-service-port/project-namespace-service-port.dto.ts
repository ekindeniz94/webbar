import { Expose, Type } from 'class-transformer';
import { Max, Min } from 'class-validator';
import { ProjectNamespaceServicePortBindingEnum } from '../../enums';
import { BaseEntityDto } from '@mo/database-dto';

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
