import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

/***
 * Data Transfer Object for K8s Prometheus Requests
 *  - query
 *  - is-reachable
 *  - values
 */
export class K8sPrometheusRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  query: string;

  @IsOptional()
  @IsNumber()
  @Expose()
  step: number;

  @IsOptional()
  @IsNumber()
  @Expose()
  timeOffsetSeconds: number;

  @IsOptional()
  @IsString()
  @Expose()
  prometheusUrl: string;

  @IsOptional()
  @IsString()
  @Expose()
  prometheusUser: string;

  @IsOptional()
  @IsString()
  @Expose()
  prometheusPass: string;

  @IsOptional()
  @IsString()
  @Expose()
  prometheusToken: string;
}
