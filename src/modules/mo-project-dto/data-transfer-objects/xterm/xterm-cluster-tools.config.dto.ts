import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { XtermClusterToolTypeEnum, XtermRequestTypeEnum } from '../../enums';

export class XtermClusterToolsConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__TOOLS)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__TOOLS;

  @IsNotEmpty()
  @IsEnum(XtermClusterToolTypeEnum)
  @Expose()
  tool: XtermClusterToolTypeEnum;
}
