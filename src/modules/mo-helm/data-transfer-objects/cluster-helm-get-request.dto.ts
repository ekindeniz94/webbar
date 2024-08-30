import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { HelmGetFormatEnum } from '../enums';

export class ClusterHelmGetRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  chart: string;

  @IsNotEmpty()
  @IsEnum(HelmGetFormatEnum)
  @Expose()
  getFormat: HelmGetFormatEnum;
}
