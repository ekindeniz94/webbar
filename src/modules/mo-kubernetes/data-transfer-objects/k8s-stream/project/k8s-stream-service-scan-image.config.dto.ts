import { Expose, Transform } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { K8sStreamBaseNamespaceContainerConfigDto } from '../k8s-stream-base-namespace-container-config.dto';
import { K8sStreamRequestTypeEnum } from '../../../enums/k8s-stream/k8s-stream-request-type.enum';
import { K8sStreamCmdEnum } from '../../../enums/k8s-stream/k8s-stream-cmd.enum';
import { K8sStreamScanImageTypeEnum } from '../../../enums/k8s-stream/k8s-stream-scan-image-type.enum';

/**
 * Deprecated
 */
export class K8sStreamServiceScanImageConfigDto extends K8sStreamBaseNamespaceContainerConfigDto {
  @Transform(() => K8sStreamRequestTypeEnum.SERVICE__SCAN_IMAGE)
  @Expose()
  type: K8sStreamRequestTypeEnum.SERVICE__SCAN_IMAGE;

  @IsNotEmpty()
  @IsString()
  @Expose()
  container: string;

  @Transform(({ value }) => value ?? K8sStreamCmdEnum.LOG)
  @IsNotEmpty()
  @IsString()
  @Expose()
  cmd: K8sStreamCmdEnum;

  @Transform(({ value }) => value ?? K8sStreamScanImageTypeEnum.GRYPE)
  @IsNotEmpty()
  @IsString()
  @Expose()
  scanImageType: K8sStreamScanImageTypeEnum;

  @IsNotEmpty()
  @IsString()
  @Expose()
  projectId: string;
}
