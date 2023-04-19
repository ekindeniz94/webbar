import { Expose, Transform, Type } from 'class-transformer';
import { isBoolean } from 'class-validator';
import moment from 'moment';
import { ProjectNamespaceServicePortBindingEnum } from '../../../../mo-project-dto';

export class NamespaceServiceContainerImagePortDto {
  @Expose()
  id: string;

  @Type(() => Boolean)
  @Transform(({ value }) => (isBoolean(value) ? value : true))
  @Expose()
  expose: boolean;

  @Expose()
  portType: ProjectNamespaceServicePortBindingEnum;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: Date;

  @Type(() => Number)
  @Expose()
  internalPort: number;
}
