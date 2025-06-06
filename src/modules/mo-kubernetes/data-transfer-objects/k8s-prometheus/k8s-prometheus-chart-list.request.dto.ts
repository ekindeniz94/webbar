import { Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

/***
 * Data Transfer Object for K8s Prometheus Requests
 *  - list
 */
export class K8sPrometheusChartListRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controller: string;
}
