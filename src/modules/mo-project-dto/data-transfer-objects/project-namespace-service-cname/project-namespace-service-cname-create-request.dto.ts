import { Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { IsBoolean, IsFQDN, IsString, Max, Min } from 'class-validator';
import { StripTags, TransformToBoolean } from '@mo/js-utils';
import { ProjectNamespaceServiceContainerDto } from '../project-namespace-service-container';

export class ProjectNamespaceServiceCnameCreateRequestDto {
  @IsString()
  @IsFQDN({})
  @StripTags()
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
