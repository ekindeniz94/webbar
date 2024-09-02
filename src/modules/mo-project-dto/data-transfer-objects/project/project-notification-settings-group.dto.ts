import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ProjectNotificationSettingsGroupDto {
  @IsString()
  @Expose()
  type: string;

  @IsString()
  @Expose()
  title: string;
}
