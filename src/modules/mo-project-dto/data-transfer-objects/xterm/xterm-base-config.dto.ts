import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermCmdEnum, XtermRequestTypeEnum } from '../../enums';

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
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controller: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: XtermCmdEnum;
}
