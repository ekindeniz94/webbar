import { Expose } from 'class-transformer';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ProjectNotificationSettingsTypeEnum } from '../../enums';

export class SendProjectNotificationPayloadDto {
  @IsString()
  @Expose()
  id: string;

  @IsEnum(ProjectNotificationSettingsTypeEnum)
  @Expose()
  type: ProjectNotificationSettingsTypeEnum;

  @IsOptional()
  @Expose()
  data: Record<string, any>;
}
