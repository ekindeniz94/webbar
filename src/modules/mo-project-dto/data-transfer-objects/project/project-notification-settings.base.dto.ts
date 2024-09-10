import { Expose } from 'class-transformer';
import { IsBoolean } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class ProjectNotificationSettingsBaseDto {
  @IsBoolean()
  @Expose()
  enabled: boolean;

  @Expose()
  type: ProjectNotificationSettingsTypeEnum;
}
