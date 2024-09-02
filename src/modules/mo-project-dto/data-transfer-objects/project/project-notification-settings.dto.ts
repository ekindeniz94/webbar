import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { ProjectNotificationSettingsCategoryDto } from './project-notification-settings-category.dto';
import { ProjectNotificationSettingsBaseDto } from './project-notification-settings.base.dto';

export class ProjectNotificationSettingsDto extends ProjectNotificationSettingsBaseDto {
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
