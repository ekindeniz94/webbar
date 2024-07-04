import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermBaseNamespaceContainerConfigDto } from './xterm-base-namespace-container-config.dto';

export class XtermServiceOperatorLogConfigDto extends XtermBaseNamespaceContainerConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__OPERATOR_LOG)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__OPERATOR_LOG;

  @Transform(() => XtermCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;
}
