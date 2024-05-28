import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { XtermBaseNamespaceContainerConfigDto } from './xterm-base-namespace-container-config.dto';

export class XtermServicePodLogConfigDto extends XtermBaseNamespaceContainerConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__POD_LOG)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__POD_LOG;

  @Transform(() => XtermCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
