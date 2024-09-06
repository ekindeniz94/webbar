import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';
import { HelmGetFormatEnum } from '../../enums';

export class ClusterHelmReleaseGetRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsNotEmpty()
  @IsEnum(HelmGetFormatEnum)
  @Expose()
  getFormat: HelmGetFormatEnum;
}
