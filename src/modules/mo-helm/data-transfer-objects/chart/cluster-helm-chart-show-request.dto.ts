import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { HelmShowFormatEnum } from '../../enums';

export class ClusterHelmChartShowRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  chart: string;

  @IsNotEmpty()
  @IsEnum(HelmShowFormatEnum)
  @Expose()
  format: HelmShowFormatEnum;
}
