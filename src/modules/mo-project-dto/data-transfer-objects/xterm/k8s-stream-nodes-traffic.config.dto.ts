import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsEnum } from 'class-validator';

export class K8sStreamNodesTrafficConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_TRAFFIC)
  @IsEnum(XtermRequestTypeEnum)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_TRAFFIC;

  @Transform(() => XtermCmdEnum.STREAM)
  @IsEnum(XtermCmdEnum)
  @Expose()
  cmd: XtermCmdEnum;
}
