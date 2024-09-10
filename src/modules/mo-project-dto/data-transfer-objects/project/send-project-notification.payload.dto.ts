import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class SendProjectNotificationPayloadDto {
  @IsString()
  @Expose()
  id: string;

  @Expose()
  type: ProjectNotificationSettingsTypeEnum;

  @Expose()
  data: Record<string, any>;
}
