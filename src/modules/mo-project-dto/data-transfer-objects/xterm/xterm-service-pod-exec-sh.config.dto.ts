import { Expose, Transform } from 'class-transformer';
import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';

export class XtermServicePodExecShConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__POD_EXEC_SH)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__POD_EXEC_SH;

  @Transform(() => XtermCmdEnum.EXEC_SH)
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
