import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsEnum } from 'class-validator';

export class K8sStreamNodesMemoryConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_MEMORY)
  @IsEnum(XtermRequestTypeEnum)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__NODE_STREAM_NODES_MEMORY;

  @Transform(() => XtermCmdEnum.STREAM)
  @IsEnum(XtermCmdEnum)
  @Expose()
  cmd: XtermCmdEnum;
}
