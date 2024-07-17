import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import moment from 'moment';
import { TransformToBoolean } from '@mo/js-utils';
import { IsBoolean, Max, Min } from 'class-validator';
import { ProjectNamespaceServiceContainerDto } from '../project-namespace-service-container';

export class ProjectNamespaceServiceCnameDto {
  @Expose()
  id: string;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  createdAt: string | Date;

  @Transform(({ value }) => (value && value !== 'undefined' && value !== 'null' ? moment(value).toDate() : value))
  @Expose()
  updatedAt: string | Date;

  @Expose()
  cName: string;

  @Type(() => ProjectNamespaceServiceContainerDto)
  @Transform(({ value }) => plainToInstance(ProjectNamespaceServiceContainerDto, value))
  @Expose()
  container: ProjectNamespaceServiceContainerDto;

  @Type(() => Number)
  @Min(0)
  @Max(65535)
  @Expose()
  internalPort: number;

  @TransformToBoolean(true)
  @IsBoolean()
  @Expose()
  addToTlsHosts: boolean;
}
