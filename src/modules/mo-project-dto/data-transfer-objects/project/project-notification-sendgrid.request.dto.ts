import { Expose } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from 'dist/modules';

export class ProjectNotificationSendgridRequestDto<T> {
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

  @Expose()
  project: T;

  @IsOptional()
  @Expose()
  organization?: T;

  @IsOptional()
  @Expose()
  cluster?: T;

  @IsOptional()
  @Expose()
  namespace?: T;

  @IsOptional()
  @Expose()
  service?: T;

  @IsString()
  @Expose()
  host: string;

  @IsString()
  @Expose()
  path?: string;

  @IsString()
  @Expose()
  headline: string;

  @IsString()
  @Expose()
  body: string;
}
