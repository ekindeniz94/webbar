import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { XtermRequestTypeEnum } from '../../enums';

export class XtermClusterWorkloadConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__WORKLOAD)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__WORKLOAD;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
