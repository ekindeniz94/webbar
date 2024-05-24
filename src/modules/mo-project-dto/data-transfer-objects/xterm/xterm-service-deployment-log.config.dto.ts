import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Exclude, Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {XtermBaseNamespaceContainerConfigDto} from "./xterm-base-namespace-container-config.dto";

export class XtermServiceDeploymentLogConfigDto extends XtermBaseNamespaceContainerConfigDto {
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
