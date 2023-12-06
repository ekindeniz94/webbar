import { Expose, Type } from 'class-transformer';
import { K8sBuildScanResultInfoDto } from './k8s-build-scan-result-info.dto';

export class K8sBuildScanResultDto {
  @Type(() => K8sBuildScanResultInfoDto)
  @Expose()
  result: K8sBuildScanResultInfoDto;

  @Expose()
  error: string;
}
