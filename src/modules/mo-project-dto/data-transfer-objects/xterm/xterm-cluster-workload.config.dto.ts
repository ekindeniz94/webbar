import { IsNotEmpty, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';
import { XtermRequestTypeEnum } from '../../enums';
import { XtermBaseNamespaceContainerConfigDto } from './xterm-base-namespace-container-config.dto';

export class XtermClusterWorkloadConfigDto extends XtermBaseNamespaceContainerConfigDto {
  @Transform(() => XtermRequestTypeEnum.CLUSTER__WORKLOAD)
  @Expose()
  type: XtermRequestTypeEnum.CLUSTER__WORKLOAD;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  podName: string;
}
