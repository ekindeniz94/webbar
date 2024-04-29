import { Expose, Transform } from 'class-transformer';
import { XtermCmdEnum, XtermRequestTypeEnum, XtermScanImageTypeEnum } from '../../enums';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermBaseNamespaceContainerConfigDto } from './xterm-base-namespace-container-config.dto';

export class XtermServiceScanImageConfigDto extends XtermBaseNamespaceContainerConfigDto {
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
