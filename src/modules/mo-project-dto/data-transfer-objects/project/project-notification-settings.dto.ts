import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
import { ProjectNotificationSettingsGroupDto } from './project-notification-settings-group.dto';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class ProjectNotificationSettingsDto {
  @IsBoolean()
  @Expose()
  enabled: boolean;

  @Expose()
  type: ProjectNotificationSettingsTypeEnum;

  @IsString()
  @Expose()
  templateId: string;

  @IsString()
  @Expose()
  title: string;

  @IsString()
  @Expose()
  description: string;

  @Expose()
  @Type(() => ProjectNotificationSettingsGroupDto)
  group: ProjectNotificationSettingsGroupDto;
}
