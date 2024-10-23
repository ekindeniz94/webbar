import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { XtermClusterOperatorLogComponentTypeEnum, XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';

export class XtermClusterOperatorLogConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__OPERATOR_LOG)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__OPERATOR_LOG;

  @Transform(() => XtermCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum.LOG;

  @IsNotEmpty()
  @IsEnum(XtermClusterOperatorLogComponentTypeEnum)
  @Expose()
  component: XtermClusterOperatorLogComponentTypeEnum;

  @IsOptional()
  @IsString()
  @Expose()
  namespace?: string;

  @IsOptional()
  @IsString()
  @Expose()
  controller?: string;

  @IsOptional()
  @IsString()
  @Expose()
  release?: string;
}
