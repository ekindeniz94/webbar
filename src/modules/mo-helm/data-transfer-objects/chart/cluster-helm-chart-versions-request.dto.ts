import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ClusterHelmChartVersionsRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  chart: string;
}
