import { Expose, Type } from 'class-transformer';
import { IsBoolean, IsString } from 'class-validator';
import { ProjectNotificationSettingsCategoryDto } from './project-notification-settings-category.dto';
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
  @Type(() => ProjectNotificationSettingsCategoryDto)
  group: ProjectNotificationSettingsCategoryDto;
}
