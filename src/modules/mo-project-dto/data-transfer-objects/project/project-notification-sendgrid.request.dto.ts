import { Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';
import { ProjectNamespaceServiceDisplayNameDto } from '../project-namespace-service';
import { ProjectNamespaceDisplayNameDto } from '../project-namespace';
import { ClusterDisplayNameDto, OrganizationNameDto } from '../../../../modules/mo-product-dto';
import { ProjectDisplayNameDto } from './project-display-name.dto';
import { UserPublicDto } from '@mogenius/user-dto';

export class ProjectNotificationSendgridRequestDto {
  @IsEnum(ProjectNotificationSettingsTypeEnum)
  @Expose()
  type: ProjectNotificationSettingsTypeEnum;

  @Expose()
  layer: 'User' | 'Project' | 'Organization' | 'Cluster' | 'Namespace' | 'Service' | 'Volume';

  @Type(() => UserPublicDto)
  @Expose()
  user: UserPublicDto;

  @Type(() => ProjectDisplayNameDto)
  @Expose()
  project: ProjectDisplayNameDto;

  @Type(() => OrganizationNameDto)
  @Expose()
  organization: OrganizationNameDto;

  @Type(() => ClusterDisplayNameDto)
  @Expose()
  cluster: ClusterDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNamespaceDisplayNameDto)
  @Expose()
  namespace?: ProjectNamespaceDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNamespaceServiceDisplayNameDto)
  @Expose()
  service?: ProjectNamespaceServiceDisplayNameDto;

  @IsString()
  @Expose()
  host: string;

  @IsString()
  @Expose()
  path?: string;

  @IsString()
  @Expose()
  pathDescription?: string;

  @IsString()
  @Expose()
  headline: string;

  @IsString()
  @Expose()
  body: string;

  @IsString()
  @Expose()
  subject: string;

  @IsString()
  @Expose()
  preHeader: string;
}
