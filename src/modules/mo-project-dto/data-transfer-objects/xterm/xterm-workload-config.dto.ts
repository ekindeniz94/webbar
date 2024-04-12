import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { XtermRequestTypeEnum } from '../../enums';

export class XtermWorkloadConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.WORKLOAD)
  @Expose()
  type: XtermRequestTypeEnum.WORKLOAD;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
