import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsNotEmpty, IsString } from 'class-validator';
import {XtermBaseNamespaceContainerConfigDto} from "./xterm-base-namespace-container-config.dto";

export class XtermServiceBuildLogConfigDto extends XtermBaseNamespaceContainerConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__BUILD_LOG)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__BUILD_LOG;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @Transform(() => XtermCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  buildTask: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  buildId: string;
}
