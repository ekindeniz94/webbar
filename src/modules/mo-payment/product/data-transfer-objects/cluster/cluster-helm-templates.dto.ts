import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

export class ClusterHelmTemplatesDto {
  @IsString()
  @Expose()
  defaultBackendHelmStr: string;

  @IsString()
  @Expose()
  certManagerHelmStr: string;

  @IsString()
  @Expose()
  updateHelmStr: string;

  @IsString()
  @Expose()
  deleteHelmStr: string;
}
