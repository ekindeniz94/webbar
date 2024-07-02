import { Expose, Type } from 'class-transformer';
import { IsArray, IsNumber, IsOptional } from 'class-validator';
import { CrossVersionObjectReference } from './cross-version-object-reference.dto';
import { MetricSpec } from './metric-spec.dto';

export class HpaSettingsDto {
  @Type(() => CrossVersionObjectReference)
  @Expose()
  @IsOptional()
  scaleTargetRef: CrossVersionObjectReference;

  @Expose()
  @IsNumber()
  minReplicas: number;

  @Expose()
  @IsNumber()
  maxReplicas: number;

  @Type(() => MetricSpec)
  @Expose()
  @IsArray()
  metrics: MetricSpec[];
}
