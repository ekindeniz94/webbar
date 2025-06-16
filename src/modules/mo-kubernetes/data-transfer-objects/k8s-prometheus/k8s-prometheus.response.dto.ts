import { Expose } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class K8sPrometheusResponseDto {
  @IsString()
  @Expose()
  query: string;

  @IsNumber()
  @Expose()
  step: number;
}
