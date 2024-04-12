import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { IsNotEmpty, IsString } from 'class-validator';

export class XtermServiceBuildConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE_BUILD)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE_BUILD;

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
