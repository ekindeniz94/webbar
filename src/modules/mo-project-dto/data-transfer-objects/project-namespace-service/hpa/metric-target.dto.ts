import { Expose } from 'class-transformer';
import { IsOptional, IsString } from 'class-validator';
import { MetricTargetTypeEnum } from '../../../enums';

export class MetricTarget {
  @Expose()
  type: MetricTargetTypeEnum;

  @Expose()
  @IsString()
  @IsOptional()
  value: string;

  @Expose()
  @IsString()
  @IsOptional()
  averageValue: string;

  @Expose()
  @IsString()
  @IsOptional()
  averageUtilization: number;
}
