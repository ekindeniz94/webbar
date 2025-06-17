import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

/***
 * Data Transfer Object for K8s Prometheus Requests
 *  - add
 *  - remove
 *  - get
 */
export class K8sPrometheusChartRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  query: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  queryName: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  controller: string;

  @IsNotEmpty()
  @IsNumber()
  @Expose()
  step: number;
}
