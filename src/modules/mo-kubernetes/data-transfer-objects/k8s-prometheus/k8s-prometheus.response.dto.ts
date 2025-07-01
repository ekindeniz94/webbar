import { Expose } from 'class-transformer';
import { IsDate, IsNumber, IsString } from 'class-validator';

export class K8sPrometheusResponseDto {
  @IsString()
  @Expose()
  query: string;

  @IsNumber()
  @Expose()
  step: number;

  @IsDate()
  @Expose()
  createdAt: Date;
}
