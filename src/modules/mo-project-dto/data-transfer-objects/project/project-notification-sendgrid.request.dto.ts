import { Expose, Type } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from 'dist/modules';

export class ProjectNotificationSendgridDisplayNameDto {
  @IsString()
  @Expose()
  id: string;

  @IsString()
  @Expose()
  displayName: string;
}

export class ProjectNotificationSendgridRequestDto {
  @IsEnum(ProjectNotificationSettingsTypeEnum)
  @Expose()
  type: ProjectNotificationSettingsTypeEnum;

  @Expose()
  layer: 'User' | 'Project' | 'Organization' | 'Cluster' | 'Namespace' | 'Service' | 'Volume';

  @Expose()
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };

  @Type(() => ProjectNotificationSendgridDisplayNameDto)
  @Expose()
  project: ProjectNotificationSendgridDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNotificationSendgridDisplayNameDto)
  @Expose()
  organization?: ProjectNotificationSendgridDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNotificationSendgridDisplayNameDto)
  @Expose()
  cluster?: ProjectNotificationSendgridDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNotificationSendgridDisplayNameDto)
  @Expose()
  namespace?: ProjectNotificationSendgridDisplayNameDto;

  @IsOptional()
  @Type(() => ProjectNotificationSendgridDisplayNameDto)
  @Expose()
  service?: ProjectNotificationSendgridDisplayNameDto;

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
  preheader: string;
}
