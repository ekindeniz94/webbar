import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { ProjectNotificationSettingsBaseDto } from './project-notification-settings.base.dto';

export class ProjectNotificationPatchRequestDto {
  @IsString()
  @Expose()
  id: string;

  @Type(() => ProjectNotificationSettingsBaseDto)
  @Expose()
  notificationSettings: ProjectNotificationSettingsBaseDto[];
}
