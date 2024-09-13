import { Expose } from 'class-transformer';
import { IsEnum, IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class IsProjectNotificationEnabledPayloadDto {
  @IsString()
  @Expose()
  id: string;

  @IsEnum(ProjectNotificationSettingsTypeEnum)
  @Expose()
  type: ProjectNotificationSettingsTypeEnum;
}
