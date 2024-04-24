import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Exclude, Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class XtermServiceDeploymentLogConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__DEPLOYMENT_LOG)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__DEPLOYMENT_LOG;

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
