import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Expose } from 'class-transformer';

export class ClusterHelmReleaseUninstallRequestDto {
  @IsNotEmpty()
  @IsString()
  @Expose()
  namespace: string;

  @IsNotEmpty()
  @IsString()
  @Expose()
  release: string;

  @IsOptional()
  @IsBoolean()
  @Expose()
  dryRun: boolean;
}
