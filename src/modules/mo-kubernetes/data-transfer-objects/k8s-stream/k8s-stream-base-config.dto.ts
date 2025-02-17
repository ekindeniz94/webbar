import { Expose, Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { XtermOptionsDto } from './xterm-options.dto';
import { K8sStreamCmdEnum } from '../../enums/k8s-stream/k8s-stream-cmd.enum';
import { K8sStreamRequestTypeEnum } from '../../enums/k8s-stream/k8s-stream-request-type.enum';

export abstract class K8sStreamBaseConfigDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  abstract type: K8sStreamRequestTypeEnum;

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
  cmd: K8sStreamCmdEnum;

  @Type(() => XtermOptionsDto)
  @Expose()
  xtermOptions: XtermOptionsDto;
}
