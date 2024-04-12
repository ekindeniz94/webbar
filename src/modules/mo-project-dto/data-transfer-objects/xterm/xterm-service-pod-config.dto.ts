import { Expose, Transform } from 'class-transformer';
import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermRequestTypeEnum } from '../../enums';

export class XtermServicePodConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE_POD)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE_POD;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
