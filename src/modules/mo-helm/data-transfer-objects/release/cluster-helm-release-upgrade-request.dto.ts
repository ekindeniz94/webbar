import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmReleaseUpgradeRequestDto {
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
  release: string;

  @IsOptional()
  @IsString()
  @Expose()
  version: string;

  @IsOptional()
  @IsString()
  @Expose()
  values: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  dryRun: boolean;
}
