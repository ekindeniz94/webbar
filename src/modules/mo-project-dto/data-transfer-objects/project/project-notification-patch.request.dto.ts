import { Expose, Type } from 'class-transformer';
import { IsString } from 'class-validator';
import { ProjectNotificationSettingsDto } from './project-notification-settings.dto';

export class ProjectNotificationPatchRequestDto {
  @IsString()
  @Expose()
  id: string;

  @Type(() => ProjectNotificationSettingsDto)
  @Expose()
  notificationSettings: ProjectNotificationSettingsDto[];
}
