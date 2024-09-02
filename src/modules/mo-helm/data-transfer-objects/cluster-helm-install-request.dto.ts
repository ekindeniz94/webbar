import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmInstallRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  chart: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  version: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  values: string;

  @IsNotEmpty()
  @IsBoolean()
  @Expose()
  dryRun: boolean;
}
