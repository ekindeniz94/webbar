import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose, Transform } from 'class-transformer';

export class ClusterHelmChartSearchRequestDto {
  @IsOptional()
  @Transform(({ value }) => value ?? '')
  @IsString()
  @Expose()
  name: string;
}
