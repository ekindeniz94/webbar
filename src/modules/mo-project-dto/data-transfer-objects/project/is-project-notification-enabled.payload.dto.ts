import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class IsProjectNotificationEnabledPayloadDto {
  @IsString()
  @Expose()
  id: string;

  @Expose()
  type: ProjectNotificationSettingsTypeEnum;
}
