import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';
import { XtermOptionsDto } from './xterm-options.dto';

export abstract class XtermBaseConfigDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  abstract type: XtermRequestTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  authorization: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  organizationId: string;

  // workload
  @Expose()
  clusterId: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;

  @Type(() => XtermOptionsDto)
  @Expose()
  xtermOptions: XtermOptionsDto;
}
