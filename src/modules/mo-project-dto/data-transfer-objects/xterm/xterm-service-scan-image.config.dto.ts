import { XtermBaseConfigDto } from './xterm-base-config.dto';
import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum, XtermScanImageTypeEnum } from '../../enums';
import { IsNotEmpty, IsString } from 'class-validator';

export class XtermServiceScanImageConfigDto extends XtermBaseConfigDto {
  @Transform(() => XtermRequestTypeEnum.SERVICE__SCAN_IMAGE)
  @Expose()
  type: XtermRequestTypeEnum.SERVICE__SCAN_IMAGE;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @Transform(({ value }) => value ?? XtermCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;

  @Transform(({ value }) => value ?? XtermScanImageTypeEnum.GRYPE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  scanImageType: XtermScanImageTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;
}
