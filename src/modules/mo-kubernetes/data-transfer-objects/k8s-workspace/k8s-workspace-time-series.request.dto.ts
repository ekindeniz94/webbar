import { Expose, Transform } from 'class-transformer';
import { IsNumber, IsOptional } from 'class-validator';
import { K8sGetWorkloadRequestDto } from '../k8s-workload/k8s-get-workload.request.dto';

export class K8sWorkspaceTimeSeriesRequestDto extends K8sGetWorkloadRequestDto {
  @IsOptional()
  @IsNumber()
  @Transform(({ value, obj }) => (value ? +value : 5))
  @Expose()
  timeOffsetMinutes?: number;
}
